export interface IResponse {
    code: 20000 | 30000 | 40000 | 50000 // 20000:成功 , 30000~50000:失敗
    message?: any
    data?: any
}