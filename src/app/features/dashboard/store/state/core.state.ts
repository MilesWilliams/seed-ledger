import { State, Selector, Store, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { AppRoute } from '../../interfaces/app-route.interface';
import * as navActions from '../actions/navigation.actions';
import { Utils } from 'src/app/utils';

export interface CoreStateModel {
    nav_items: { [id: number]: AppRoute },
    loaded: boolean;
    loading: boolean;
    selected_nav: number,
    selected_nav_loading: boolean,
    selected_nav_loaded: boolean
}

@State<CoreStateModel>({
    name: 'core',
    defaults: {
        nav_items: null,
        loaded: false,
        loading: false,
        selected_nav: 1,
        selected_nav_loading: false,
        selected_nav_loaded: false

    }
})
@Injectable()
export class CoreState {

    constructor(private store: Store) { }

    @Selector()
    static loading(state: CoreStateModel) { return state.loading; }

    @Selector()
    static loaded(state: CoreStateModel) { return state.loaded; }

    @Selector()
    static getNavItems(state: CoreStateModel) { return Utils.Helpers.FromHashMap(state.nav_items) }

    @Selector()
    static getSelectedNavID(state: CoreStateModel) { return state.selected_nav }

    @Selector()
    static selectedNavItem(state: CoreStateModel) {
        return state.nav_items[state.selected_nav];
    }


    @Action(navActions.SetNavItems)
    setNavItems(ctx: StateContext<CoreStateModel>, action: navActions.SetNavItems) {
        const payload = action.payload;
        ctx.patchState({
            loading: true,
            loaded: false
        });

        ctx.dispatch(new navActions.SetNavItemsSuccess(payload));
    }

    @Action(navActions.SetNavItemsSuccess)
    setNavItemsSuccess(ctx: StateContext<CoreStateModel>, action: navActions.SetNavItemsSuccess) {
        const payload = action.payload;
        ctx.patchState({
            loading: false,
            loaded: true,
            nav_items: Utils.Helpers.ToHashMap(payload, ctx.getState(), 'id')
        });
    }

    @Action(navActions.SetNavItemsFail)
    setNavItemsFail(ctx: StateContext<CoreStateModel>, action: navActions.SetNavItemsFail) {
        ctx.patchState({
            loading: false,
            loaded: false,
        });
    }

    @Action(navActions.SetSelectedNavItem)
    setSelectedNavItem(ctx: StateContext<CoreStateModel>, action: navActions.SetSelectedNavItem) {
        const state = ctx.getState();
        if (state.nav_items) {
            const navItems = Utils.Helpers.FromHashMap<AppRoute>(state.nav_items);
            const navItem = navItems.find((r: AppRoute) => r.path === action.payload);

            if (navItem) {
                ctx.patchState({
                    selected_nav_loading: true,
                    selected_nav_loaded: false
                });
                const navId: number = navItems.find((n: AppRoute) => n.path === action.payload).id;
                ctx.dispatch(new navActions.SetSelectedNavItemSuccess(navId));
            }
        }
    }

    @Action(navActions.SetSelectedNavItemSuccess)
    setSelectedNavItemSuccess(ctx: StateContext<CoreStateModel>, action: navActions.SetSelectedNavItemSuccess) {
        const payload = action.payload;
        const state = ctx.getState();
        let navItems = Utils.Helpers.FromHashMap<AppRoute>(state.nav_items)

        navItems = navItems.map(
            (item) => {
                const newItem = Object.assign({}, item);
                newItem.isSelected = newItem.id === payload;

                return newItem;
            }
        )

        ctx.patchState({
            selected_nav_loading: false,
            selected_nav_loaded: true,
            selected_nav: payload,
            nav_items: Utils.Helpers.ToHashMap(navItems, state, 'id')
        });
    }

    @Action(navActions.SetSelectedNavItemFail)
    setSelectedNavItemFail(ctx: StateContext<CoreStateModel>, action: navActions.SetSelectedNavItemFail) {
        ctx.patchState({
            selected_nav_loading: false,
            selected_nav_loaded: false,
        });
    }
}
