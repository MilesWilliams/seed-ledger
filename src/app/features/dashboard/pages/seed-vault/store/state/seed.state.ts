import { State, Selector, Store, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import * as seedActions from '../actions/seed.actions';
import { Seed } from 'src/app/features/dashboard/interfaces/seed.interface';
import { Utils } from 'src/app/utils';
import { SeedsService } from 'src/app/core/services/seeds.service';
import { tap } from 'rxjs/operators';

export interface SeedStateModel {
	loading: boolean;
	loaded: boolean;
	seeds: { [id: string]: Seed },
	selected_seed: string
}

@State<SeedStateModel>({
	name: 'seeds',
	defaults: {
		loading: false,
		loaded: false,
		seeds: {},
		selected_seed: null
	}
})
@Injectable()
export class SeedState {

	constructor(private store: Store, private _svc: SeedsService) { }

	@Selector()
	static isLoading(state: SeedStateModel) { return state.loading; }

	@Selector()
	static hasLoaded(state: SeedStateModel) { return state.loaded; }

	@Selector()
	static all(state: SeedStateModel) { return Utils.Helpers.FromHashMap<Seed>(state.seeds) }

	@Selector()
	static selectedSeed(state: SeedStateModel) { return state.seeds[state.selected_seed] }

	@Action(seedActions.FetchSeeds)
	fetchSeeds(ctx: StateContext<SeedStateModel>, action: seedActions.FetchSeeds) {
		ctx.patchState({
			loading: true,
			loaded: false
		});

		return this._svc.fetchSeeds().pipe(
			tap(
				res => ctx.dispatch(new seedActions.FetchSeedsSuccess(res)),
				err => ctx.dispatch(new seedActions.FetchSeedsFail(err))
			)
		);
	}

	@Action(seedActions.FetchSeedsSuccess)
	fetchSeedsSuccessful(ctx: StateContext<SeedStateModel>, action: seedActions.FetchSeedsSuccess) {
		const payload = action.payload;
		const state = ctx.getState();
		ctx.patchState({
			loading: false,
			loaded: true,
			seeds: Utils.Helpers.ToHashMap(payload, state, 'id')
		});
	}

	@Action(seedActions.FetchSeedsFail)
	fetchSeedsfailed(ctx: StateContext<SeedStateModel>, action: seedActions.FetchSeedsFail) {
		ctx.patchState({
			loading: false,
			loaded: false,
		});
	}

	@Action(seedActions.SetSelectedSeed)
	setSelectedSeed(ctx: StateContext<SeedStateModel>, action: seedActions.SetSelectedSeed) {
		ctx.patchState({
			loading: false,
			loaded: false,
			selected_seed:action.payload
		});
	}

	@Action(seedActions.AddNewSeed)
	addNewSeeds(ctx: StateContext<SeedStateModel>, action: seedActions.AddNewSeed) {
		ctx.patchState({
			loading: true,
			loaded: false
		});

		return this._svc.add(action.payload).pipe(
			tap(
				res => ctx.dispatch(new seedActions.AddNewSeedsSuccess(res)),
				err => ctx.dispatch(new seedActions.AddNewSeedsFail(err))
			)
		);
	}

	@Action(seedActions.AddNewSeedsSuccess)
	addNewSeedsSuccess(ctx: StateContext<SeedStateModel>, action: seedActions.AddNewSeedsSuccess) {
		const payload = action.payload;
		const state = ctx.getState();
		const seeds = Utils.Helpers.FromHashMap(state.seeds);
		seeds.push(action.payload);
		ctx.patchState({
			loading: false,
			loaded: true,
			seeds: Utils.Helpers.ToHashMap(seeds, state, 'id')
		});
	}

	@Action(seedActions.AddNewSeedsFail)
	addNewSeedsfail(ctx: StateContext<SeedStateModel>, action: seedActions.AddNewSeedsFail) {
		ctx.patchState({
			loading: false,
			loaded: false,
		});
	}


}
