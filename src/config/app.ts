import { registerAs } from '@nestjs/config'
export const app = registerAs('app', () => ({
  name: process.env.APP_NAME || '浩呆',
  token_access: process.env.TOKEN_SECRET || '',

  //每頁顯示數量
  user_page_row: 5,
}))
