import {Express, Request, Response} from 'express'

export function register(app: Express) {
    app.post('/v1/user', userCreate);
    app.get('/v1/user/:userId', userGet);
}

interface UserCreateResponse {
    userId: string;
}

interface UserGetResponse {
    userId: string;
    firstName: string;
    lastName: string;
}

function userCreate(req: Request, res: Response): void {
    const body: UserCreateResponse = {
        userId: 'userId123',
    };

    res.send(body).status(200)
}

function userGet(req: Request, res: Response): void {
    const body: UserGetResponse = {
        userId: 'userId123',
        firstName: 'Aaron',
        lastName: 'Bruckner',
    };

    res.send(body).status(200);
}