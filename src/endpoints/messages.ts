import { Request, Response, Express} from 'express';
import {Message, Thread} from '../database/interfaces';

export function register(app: Express) {
    app.get('/v1/messages', messagesListThreads);
    app.post('/v1/messages', messagesCreateNewThread);
    app.get('/v1/messages/:threadId', messagesGetThread);
    app.post('/v1/messages/:threadId', messagesAppendToExistingThread);
}

interface MessagesListThreadsRequest {
    userId: string;
}

interface MessagesListThreadResponse {
    threads: Thread[]
}

function messagesListThreads(req: Request, res: Response): void {
    const body: MessagesListThreadResponse = {
        threads: [
            {
                threadId: "threadId1",
                title: "My Example Thread",
                description: "My Example description"
            }
        ]
    }
    res.send(body).status(200);
}

interface MessagesCreateNewThreadRequest {
    userId: string;
    title: string;
    description: string;
    content: string;
    recipientUserIds: string[];
    idempotencyKey: string;
}

interface MessagesCreateNewThreadResponse {
    threadId: string;
    messageId: string;
}

function messagesCreateNewThread(req: Request, res: Response): void {
    const body: MessagesCreateNewThreadResponse = {
        threadId: "threadId1",
        messageId: "messageId1",
    };

    res.send(body).status(200);
}

interface MessagesGetThreadRequest {
    threadId: string;
    nextToken?: string;
}

interface MessagesGetThreadResponse {
    messages: Message[];
}

function messagesGetThread(req: Request, res: Response): void {
    const body: MessagesGetThreadResponse = {
        messages: [
            {
                messageId: "messageId1",
                authorUserId: "userId1",
                content: "What's up?",
                timestamp: 100,
            },
            {
                messageId: "messageId1",
                authorUserId: "userId1",
                content: "What's up?",
                timestamp: 99,
            }
        ]
    }

    res.send(body).status(200);
}

interface MessagesAppendToExistingThreadRequest {
    idempotencyKey: string;
    message: Message;
}

interface MessagesAppendToExistingThreadResponse {
    messageId: string;
}

function messagesAppendToExistingThread(req: Request, res: Response): void {
    const body: MessagesAppendToExistingThreadResponse = {
        messageId: "messageId1",
    };

    res.send(body).status(200);
}