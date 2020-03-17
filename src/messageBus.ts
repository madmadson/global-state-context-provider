


import { Subject } from 'rxjs';

const subject = new Subject();

interface IGenerateFlashwareMessage {
    type: typeof GenerateFlashwareMessage
    payload: any
}

interface IFooMessage {
    type: typeof FooMessage
    payload: any
}

interface ICleanupMessage {
    type: typeof CleanupMessage
    payload: any
}

export const GenerateFlashwareMessage = "GENERATE_FLASHWARE";
export const FooMessage = "FOO";
export const CleanupMessage = "CLEANUP";
export type GlobalAppMessage = IGenerateFlashwareMessage | IFooMessage | ICleanupMessage;

export const messageService = {
    sendMessage: (mesage: GlobalAppMessage) => {
        console.log(`hallo type: ${mesage.type}`)
        subject.next({ type: mesage.type, payload: 'foooooo' })
    },
    getMessage: () => subject.asObservable()
};