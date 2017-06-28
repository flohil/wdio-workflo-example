import * as types from '../types';
declare const steps: {
    "login as %{username}": (params: IStepArgs<types.ICredentials, types.User>) => IParameterizedStep;
    "login and logout as %{username}": (params: IStepArgs<types.ICredentials, void>) => IParameterizedStep;
} & {
    "logout": (params: IStepArgs<void, void>) => IParameterizedStep;
    "variable vars": (params: IStepArgs<{
        arg1: number;
        arg2: string;
    }, void>) => IParameterizedStep;
};
export default steps;
