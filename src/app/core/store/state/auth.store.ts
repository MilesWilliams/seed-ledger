import { State, Selector, Store, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import * as authActions from '../actions/auth.actions';
import { SLUser } from '../../../features/dashboard/interfaces/user.interface';
import { AuthService } from '../../services/auth.service';
import { tap } from 'rxjs/operators';
import { Navigate } from '@ngxs/router-plugin';

export interface AuthStateModel {
	loading: boolean;
	loaded: boolean;
	isAuthenticated: boolean;
	user: SLUser,
    token: string;
}

@State<AuthStateModel>({
	name: 'auth',
	defaults: {
		loading: false,
		loaded: false,
        isAuthenticated: false,
		user: null,
		token: null
	}
})
@Injectable()
export class AuthState {

	constructor(private store: Store, private _svc: AuthService) { }

	@Selector()
	static isLoading(state: AuthStateModel) { return state.loading; }

	@Selector()
	static hasLoaded(state: AuthStateModel) { return state.loaded; }

	@Selector()
	static isAuthenticated(state: AuthStateModel) { return state.isAuthenticated; }

	@Selector()
	static token(state: AuthStateModel) { return state.token; }

	@Selector()
	static user(state: AuthStateModel) { return state.user; }

    @Action(authActions.AuthenticateUser)
	authenticateUser(ctx: StateContext<AuthStateModel>, action: authActions.AuthenticateUser) {
		ctx.patchState({
			loading: true,
			loaded: false
		});

        return this._svc.authenticateUser().pipe(
			tap(
				res => ctx.dispatch(new authActions.AuthenticateUserSuccess(res)),
				err => ctx.dispatch(new authActions.AuthenticateUserFail(err))
			)
		);
	}

    @Action(authActions.AuthenticateUserSuccess)
	authenticateUserSuccess(ctx: StateContext<AuthStateModel>, action: authActions.AuthenticateUserSuccess) {
		ctx.patchState({
			loading: false,
			loaded: true,
            user: action.payload.user,
            isAuthenticated: action.payload.isAuthenticated,
            token: action.payload.token
		});

		return ctx.dispatch(new  Navigate(['/dashboard']));
	}

    @Action(authActions.AuthenticateUserFail)
	authenticateUserFail(ctx: StateContext<AuthStateModel>, action: authActions.AuthenticateUserFail) {
		ctx.patchState({
			loading: false,
			loaded: false,
		});
	}

    @Action(authActions.FetchJWT)
	refreshToken(ctx: StateContext<AuthStateModel>, action: authActions.FetchJWT) {

        return this._svc.refreshToken().pipe(
			tap(
				res => ctx.dispatch(new authActions.FetchJWTSuccess(res)),
				err => ctx.dispatch(new authActions.FetchJWTFail(err))
			)
		);
	}

    @Action(authActions.FetchJWTSuccess)
	refreshTokenSuccess(ctx: StateContext<AuthStateModel>, action: authActions.FetchJWTSuccess) {
		ctx.patchState({
            token: action.payload.token
		});
	}
}