import { Injectable } from '@nestjs/common'
import * as superagent from 'superagent'
import cheerio from "cheerio"
import { technologyJSON } from 'src/module/linebot/line-handler/postback/json/Technology/technology'

@Injectable()
export class TechnologyPostBack {
    async handleByPostBackType(events: any): Promise<any> {
        const { postback: { data } } = events
        switch (data.match(/[\u4e00-\u9fa5]+/ig)[0]) {
            case '癮科技': {
                return await this.getTechnology1('https://www.cool3c.com/')
            }
            case '資訊': {
                return await this.getTechnology2('https://www.eprice.com.tw/news/all/1/')
            }
            case '瘋先生': {
                return await this.getTechnology3('https://mrmad.com.tw/')
            }
            default: {
                return {
                    type: 'text',
                    text: '該功能目前無法使用'
                }
            }
        }
    }

    async getTechnology1(url: string) {
        const result = await superagent.get(url)
        const $ = cheerio.load(result.text)
        const data = Array.from($('.post-list').children('article'))
        for (let i = 0; i < 10; i++) {
            const u = $(data[i]).find('a').attr('href')
            const $2 = await superagent.get(u).then(s => {
                return cheerio.load(s.text)
            })
            technologyJSON.contents.contents[i].hero.url = $2('.deputation img').attr('src')
            technologyJSON.contents.contents[i].body.contents[0].text = $(data[i]).find('.title a').text() || 'null' //大標題
            technologyJSON.contents.contents[i].body.contents[1].text = $(data[i]).find('.created a').text().replace(/^\s*|\s*$/g, "") || 'null' //時間
            technologyJSON.contents.contents[i].body.contents[2].contents[0].text = $(data[i]).find('.content a').text().substring(0, 85) + ' ...' || 'null' //小標題
            technologyJSON.contents.contents[i].body.contents[0].action.uri = u  //大標連結
            technologyJSON.contents.contents[i].body.contents[2].contents[0].action.uri = u //小標連結
            technologyJSON.contents.contents[i].hero.action.data = 'photo' + technologyJSON.contents.contents[i].hero.url || 'null'
        }
        return technologyJSON
    }
    async getTechnology2(url: string) {
        const result = await superagent.get(url)
        const $ = cheerio.load(result.text)
        const data = Array.from($('.news-list .news'))
        data.forEach((v, i) => {
            if (i >= 10) return
            technologyJSON.contents.contents[i].hero.url = $(v).find('img').attr('src').match(/^(https)/ig) ? $(v).find('img').attr('src') : 'https:' + $(v).find('img').attr('src') || 'null' //圖片
            technologyJSON.contents.contents[i].body.contents[0].text = $(v).find('.title h1').text() || 'null' //大標題
            technologyJSON.contents.contents[i].body.contents[1].text = $(v).find('.vcard .publish span').text().replace(/^\s*|\s*$/g, "") || 'null' //時間
            technologyJSON.contents.contents[i].body.contents[2].contents[0].text = $(data[i]).find('.summary').text().substring(0, 85) + ' ...' || 'null' //小標題
            technologyJSON.contents.contents[i].body.contents[0].action.uri, technologyJSON.contents.contents[i].body.contents[2].contents[0].action.uri = $(data[i]).find('.title').attr('href').match(/^(http)/ig) ? $(data[i]).find('.title').attr('href') : 'https://www.eprice.com.tw' + $(data[i]).find('.title').attr('href')  //大標連結
            technologyJSON.contents.contents[i].hero.action.data = 'photo' + technologyJSON.contents.contents[i].hero.url || 'null'
        })
        return technologyJSON
    }
    async getTechnology3(url: string) {
        const result = await superagent.get(url)
        const $ = cheerio.load(result.text)
        const data = Array.from($('.jeg_posts').children('article'))
        for (let i = 0; i < 10; i++) {
            const u = $(data[i]).find('.jeg_post_title a').attr('href')
            const $2 = await superagent.get(u).then(s => {
                return cheerio.load(s.text)
            })
            technologyJSON.contents.contents[i].hero.url = 'https:' + $2('.content-inner img').attr('src')
            technologyJSON.contents.contents[i].body.contents[0].text = $2('.jeg_post_title').text() || 'null' //大標題
            technologyJSON.contents.contents[i].body.contents[1].text = $2('.jeg_meta_date a').text().replace(/^\s*|\s*$/g, "") || 'null' //時間
            technologyJSON.contents.contents[i].body.contents[2].contents[0].text = $2('.content-inner').children('p').text().substring(0, 85) + ' ...' || 'null' //小標題
            technologyJSON.contents.contents[i].body.contents[0].action.uri = u  //大標連結
            technologyJSON.contents.contents[i].body.contents[2].contents[0].action.uri = u //小標連結
            technologyJSON.contents.contents[i].hero.action.data = 'photo' + technologyJSON.contents.contents[i].hero.url || 'null'
        }
        return technologyJSON
    }
}
