import { IUser } from "src/entity/User";

declare module 'express' {
    export interface Request  {
        body: {
            user: IUser
        };
    }
}
