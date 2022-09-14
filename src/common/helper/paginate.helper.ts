import { success } from "./response.helper"

export const paginate = (data: { page: number; total: number; row: number; data: any[] }) => {
    return success('獲取成功', {
        current_page: data.page,
        row: data.row,
        total: data.total,
        total_page_num: Math.ceil(data.total / data.row),
        data: data.data,
    })
}