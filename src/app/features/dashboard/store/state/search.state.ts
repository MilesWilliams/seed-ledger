import { State, Selector, Store, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import * as searchActions from '../actions/search.actions';

export interface SearchStateModel {
	loading: boolean;
	loaded: boolean;
	query: string;
	search_results: any[]
}

@State<SearchStateModel>({
	name: 'search',
	defaults: {
		loading: false,
		loaded: false,
		query: null,
		search_results: null
	}
})
@Injectable()
export class SearchState {

	constructor(private store: Store) { }

	@Selector()
	static isLoading(state: SearchStateModel) { return state.loading; }

	@Selector()
	static hasLoaded(state: SearchStateModel) { return state.loaded; }

	@Selector()
	static results(state: SearchStateModel) { return state.search_results; }

	@Selector()
	static query(state: SearchStateModel) { return state.query; }

	@Action(searchActions.ClearSearchResults)
	clearSearchResults(ctx: StateContext<SearchStateModel>, action: searchActions.ClearSearchResults) {
		ctx.patchState({
			query: null,
			search_results: null
		});
	}

	// @Action(searchActions.StartSearch)
	// startSearch(ctx: StateContext<SearchStateModel>, action: searchActions.StartSearch) {
	// 	const query = action.payload;
	// 	ctx.patchState({
	// 		loading: true,
	// 		loaded: false,
	// 		query
	// 	});

	// 	return this._stockSVC.searchCompany(query).pipe(
	// 		tap(
	// 			res => ctx.dispatch(new searchActions.SearchSuccessful(res.values)),
	// 			err => ctx.dispatch(new searchActions.SearchFailed(err))
	// 		)
	// 	);
	// }

	@Action(searchActions.SearchSuccess)
	searchSuccessful(ctx: StateContext<SearchStateModel>, action: searchActions.SearchSuccess) {
		const payload = action.payload.bestMatches;
		ctx.patchState({
			loading: false,
			loaded: true,
			search_results: payload
		});
	}

	@Action(searchActions.SearchFail)
	searchFailed(ctx: StateContext<SearchStateModel>, action: searchActions.SearchFail) {
		ctx.patchState({
			loading: false,
			loaded: false,
			query: null
		});
	}

}
