declare const LogoutSteps: {
    "logout": (params: IStepArgs<void, void>) => IParameterizedStep;
    "variable vars": (params: IStepArgs<{
        arg1: number;
        arg2: string;
    }, void>) => IParameterizedStep;
};
export default LogoutSteps;
