import { success } from "./response.helper"

export const paginate = (data: { total: number; data: any[] }) => {
    return success('獲取成功', {
        count: data.total,
        rows: data.data
    })
}