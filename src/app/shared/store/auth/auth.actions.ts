import { createAction, props } from '@ngrx/store';
import { LoggedInUserModel } from '../../models/LoggedInUserModel';

export const login = createAction('[Auth] Login', props<LoggedInUserModel>());

export const logout = createAction('[Auth] Logout');
