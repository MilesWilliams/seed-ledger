import { Utils } from 'src/app/utils';


export class StartSearch {
	static readonly type = Utils.Helpers.Type('[Search: Start] Start search');
	constructor(public readonly payload: string) { }
}

export class SearchSuccess {
	static readonly type = Utils.Helpers.Type('[Search: Successful] Search Success');
	constructor(public readonly payload: any) {}
}

export class SearchFail {
	static readonly type = Utils.Helpers.Type('[Search: Failed] Search Fail');
	constructor(public readonly payload: any) {}
}

export class ClearSearchResults {
	static readonly type = Utils.Helpers.Type('[Search: Clear] Clear Search Results');
}
