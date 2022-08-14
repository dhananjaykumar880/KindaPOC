import { INoTyppedValue } from "../interface/base";

export const STATUS = {
    START: {
        isLoading: true,
        error: undefined
    },
    COMPLETE:  {
        isLoading: false,
    }
}

export function evalError(error: INoTyppedValue): string {
    const msg = error?.message || error?.error || error;
    return String(Array.isArray(msg) ? msg.join('\n') : msg);
  }
  