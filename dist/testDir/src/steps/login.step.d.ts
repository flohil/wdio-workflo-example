import { ICredentials, User } from '../types';
declare const LoginSteps: {
    "login as %{username}": (params: IStepArgs<ICredentials, User>) => IParameterizedStep;
    "login and logout as %{username}": (params: IStepArgs<ICredentials, void>) => IParameterizedStep;
};
export default LoginSteps;
