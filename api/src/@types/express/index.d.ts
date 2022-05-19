import { IUser } from "src/entities/User";

declare module 'express' {
    export interface Request  {
        body: {
            user: IUser
        };
    }
}
