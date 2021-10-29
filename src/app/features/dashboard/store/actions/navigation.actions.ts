import { Utils } from 'src/app/utils';
import { AppRoute } from '../../interfaces/app-route.interface';


export class SetNavItems  {
    static readonly type = Utils.Helpers.Type('[Nav: Set] Set nav items');
    constructor(public readonly payload: AppRoute[]) {}
}

export class SetNavItemsSuccess  {
    static readonly type = Utils.Helpers.Type('[Nav: Set] Set nav items success');
    constructor(public readonly payload: AppRoute[]) {}
}

export class SetNavItemsFail  {
    static readonly type = Utils.Helpers.Type('[Nav: Set] Set nav items fail');
    constructor(public readonly payload: any) {}
}

export class SetSelectedNavItem  {
    static readonly type = Utils.Helpers.Type('[Nav: Select] Set selected nav item');
    constructor(public readonly payload: string) {}
}

export class SetSelectedNavItemSuccess  {
    static readonly type = Utils.Helpers.Type('[Nav: Select] Set selected nav item success');
    constructor(public readonly payload: number) {}
}

export class SetSelectedNavItemFail  {
    static readonly type = Utils.Helpers.Type('[Nav: Select] Set selected nav item fail');
    constructor(public readonly payload: any) {}
}
