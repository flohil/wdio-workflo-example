export interface ICredentials {
    username: string;
    password: string;
}
export interface IUser {
    credentials: ICredentials;
    age: number;
}
export declare class User implements IUser {
    credentials: ICredentials;
    age: number;
    constructor(credentials: ICredentials, age: number);
}
