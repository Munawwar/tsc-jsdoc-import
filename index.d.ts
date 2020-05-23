export type NexmoResponse = {
    messageId: string;
    status: string;
    messagePrice: number;
};
export const nexmoSendSms: typeof import("./nexmoSendSms");
/** @type nexmoSendSms.NexmoResponse[] */
export const payload: import("./nexmoSendSms").NexmoResponse[];
