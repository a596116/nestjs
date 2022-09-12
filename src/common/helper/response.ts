import { IResponse } from "../interface/response.interface"

export const success = (message: string, data?: any): IResponse => {
    return {
        code: 20000,
        message,
        data
    }
}

export const error = (message: string, code?: 40000) => {
    return {
        code,
        message
    }
}