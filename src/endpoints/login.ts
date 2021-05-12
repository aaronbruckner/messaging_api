import { Express, Request, Response, NextFunction } from 'express';

interface LoginResponse {
    accessToken: string;
    refreshToken: string;
}

export function register(app: Express) {
    app.post('/login', login);
}

function login(req: Request, res: Response, next: NextFunction) {
    const body: LoginResponse = {
        accessToken: "FakeAccessToken",
        refreshToken: "FakeRefreshToken"
    }
    res.status(200).send(body);
}