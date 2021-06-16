export interface Message {
    messageId: string;
    authorUserId: string;
    content: string;
    timestamp: number;
}

export interface Thread {
    threadId: string;
    title: string;
    description: string;
}