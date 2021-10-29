import { Seed } from 'src/app/features/dashboard/interfaces/seed.interface';
import { Utils } from 'src/app/utils';
import { NewSeed } from '../../interfaces/new-seed.interface';

export class FetchSeeds {
	static readonly type = Utils.Helpers.Type('[Seeds: fetch] Fetch seeds');
	constructor(public readonly payload?: string) { }
}

export class FetchSeedsSuccess {
	static readonly type = Utils.Helpers.Type('[Seeds: fetch] Fetch seed Success');
	constructor(public readonly payload: Seed[]) {}
}

export class FetchSeedsFail {
	static readonly type = Utils.Helpers.Type('[Seeds: fetch] Fetch seed Failed');
	constructor(public readonly payload: any) {}
}

export class AddNewSeed {
	static readonly type = Utils.Helpers.Type('[Seeds: Add] Add new seed');
	constructor(public readonly payload: NewSeed) { }
}

export class AddNewSeedsSuccess {
	static readonly type = Utils.Helpers.Type('[Seeds: Add] Add new Success');
	constructor(public readonly payload: Seed) {}
}

export class AddNewSeedsFail {
	static readonly type = Utils.Helpers.Type('[Seeds: Add] Add new Failed');
	constructor(public readonly payload: any) {}
}

export class SetSelectedSeed {
	static readonly type = Utils.Helpers.Type('[Seeds: selected] Set selected seed');
	constructor(public readonly payload: string) {
	}
}

