import { Injectable } from '@nestjs/common'
import * as superagent from 'superagent'
import cheerio from "cheerio"
import { fashionJSON } from 'src/module/linebot/json/Fashion/fashion'

@Injectable()
export class FashionPostBack {
    async handleByPostBackType(events: any): Promise<any> {
        const { postback: { data } } = events
        switch (data.match(/[\u4e00-\u9fa5]+/ig)[0]) {
            case '時裝': {
                return this.getHtml('https://hypebeast.com/zh/fashion')
            }
            case '球鞋': {
                return this.getHtml('https://hypebeast.com/zh/footwear')
            }
        }
    }

    async getHtml(url: string) {
        const result = await superagent.get(url)
        const $ = cheerio.load(result.text)
        const data = Array.from($('.post-box'))
        data.forEach((v, i) => {
            fashionJSON.contents.contents[i].hero.url = $(v).find('img').attr('data-src') || 'null'//圖片
            fashionJSON.contents.contents[i].body.contents[0].text = $(v).find('a').attr()['title'] || 'null' //大標題
            fashionJSON.contents.contents[i].body.contents[1].text = $(v).find('.timeago').text() || 'null' //時間
            fashionJSON.contents.contents[i].body.contents[2].contents[0].text = $(v).find('.post-box-content-excerpt').text().replace(/^\s*|\s*$/g, "") || 'null' //小標題
            fashionJSON.contents.contents[i].body.contents[0].action.uri = $(v).find('a').attr('href') || 'null'  //大標連結
            fashionJSON.contents.contents[i].body.contents[2].contents[0].action.uri = $(v).find('a').attr('href') || 'null' //小標連結
            fashionJSON.contents.contents[i].hero.action.data = 'photo' + fashionJSON.contents.contents[i].hero.url || 'null'
        })
        return fashionJSON
    }
}
