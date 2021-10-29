import { Utils } from 'src/app/utils';
import { AuthLogin, AuthPaylod, TokenRenewal } from '../../../features/dashboard/interfaces/auth.interface';

export class AuthenticateUser {
	static readonly type = Utils.Helpers.Type('[Auth: Login] Authenticate User');
	constructor(public readonly payload: AuthLogin) { }
}

export class AuthenticateUserSuccess {
	static readonly type = Utils.Helpers.Type('[Auth: Login] Authenticate User Success');
	constructor(public readonly payload: AuthPaylod) { }
}

export class AuthenticateUserFail {
	static readonly type = Utils.Helpers.Type('[Auth: Login] Authenticate User fail');
	constructor(public readonly payload: any) { }
}

export class FetchJWT {
	static readonly type = Utils.Helpers.Type('[Auth: Token] Token renewal');
	constructor(public readonly payload: TokenRenewal) {}
}

export class FetchJWTSuccess {
	static readonly type = Utils.Helpers.Type('[Auth: Token] Token renewal success');
	constructor(public readonly payload: TokenRenewal) {}
}

export class FetchJWTFail {
	static readonly type = Utils.Helpers.Type('[Auth: Token] Token renewal fail');
	constructor(public readonly payload: any) {}
}
