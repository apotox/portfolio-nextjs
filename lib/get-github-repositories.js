import Cheerio  from "cheerio";
import axios from 'axios'
let data = null;

// get public github repositories by username
export default async (username)=>{

  if(data) return data

  const resp = await axios.get('https://github.com/' + username)
  const html = resp.data
  
  const $ = Cheerio.load(html)

  const listElems = $('.js-pinned-items-reorder-list li')

  const names = listElems.map((_, el)=>{
    return {
        language: $(el).find('[itemprop=programmingLanguage]')?.text(),
        name: $(el).find('.repo').text(),
        url: $(el).find('a').first().attr('href'),
        desc: $(el).find('.pinned-item-desc').text(),
    }
  }).toArray()

  return names
}