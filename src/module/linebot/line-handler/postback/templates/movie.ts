import { Injectable } from '@nestjs/common'
import * as superagent from 'superagent'
import cheerio from "cheerio"
import { movieJSON } from 'src/module/linebot/line-handler/postback/json/Movie/movie'

@Injectable()
export class MoviePostBack {
    async handleByPostBackType(events: any): Promise<any> {
        const { postback: { data } } = events
        switch (data.match(/[\u4e00-\u9fa5]+/ig)[0]) {
            case '電影排行榜': {
                return await this.getMovie('https://movies.yahoo.com.tw/movie_intheaters.html')
            }
            case '本周新片': {
                return await this.getMovie('https://movies.yahoo.com.tw/movie_thisweek.html')
            }
            case '即將上映': {
                return await this.getMovie('https://movies.yahoo.com.tw/movie_comingsoon.html')
            }
            default: {
                return {
                    type: 'text',
                    text: '該功能目前無法使用'
                }
            }
        }
    }

    async getMovie(url: string) {
        const result = await superagent.get(url)
        let $ = cheerio.load(result.text)
        const data = Array.from($('.btn_s_introduction'))
        for (let i = 0; i < data.length; i++) {
            const u = $(data[i]).attr('href')
            const $2 = await superagent.get(u).then(s => {
                return cheerio.load(s.text)
            })
            movieJSON.contents.contents[i].hero.url = $2('.movie_intro_foto img').attr('src') || 'null' //圖片
            movieJSON.contents.contents[i].body.contents[0].text = $2('.movie_intro_info_r h1').text() //大標題
            movieJSON.contents.contents[i].body.contents[1].contents[0].contents[0].text = $2('.movie_intro_info_r').children('span').eq(0).text() || 'null'
            movieJSON.contents.contents[i].body.contents[1].contents[1].contents[0].contents[0].text = $2('.movie_intro_info_r').children('span').eq(1).text() || 'null'
            movieJSON.contents.contents[i].body.contents[1].contents[2].contents[0].contents[0].text = $2('.movie_intro_info_r').children('span').eq(2).text() || 'null'
            movieJSON.contents.contents[i].body.contents[1].contents[3].contents[0].contents[0].text = ' 導　　演：' + $2('.movie_intro_info_r').children('.movie_intro_list').eq(0).find('a').text().replace(/^\s*|\s*$/g, "") || 'null'
            movieJSON.contents.contents[i].body.contents[2].contents[0].action.uri = 'https://www.youtube.com/results?search_query=' + encodeURI(movieJSON.contents.contents[i].body.contents[0].text)
            movieJSON.contents.contents[i].hero.action.data = 'photo' + movieJSON.contents.contents[i].hero.url || 'null'
        }
        return movieJSON
    }
}
