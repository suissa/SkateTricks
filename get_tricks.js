const cheerio = require('cheerio')
const request = require('request')
const URL = "https://www.surfertoday.com/skateboarding/the-ultimate-list-of-skateboard-tricks"
const TRICKS = {}

const getType = ($, i) => $('.page-article div h3').eq(i).html().replace(/\<\/?strong\>/gim, "")
const getTricks = ($, n) => $('.page-article div p').eq(n).html().split("<br>")

;(async () => {
  const tricks = 
})
request({
  method: 'GET',
  url: URL
}, (err, res, body) => {

  if (err) return console.error(err);

  const $ = cheerio.load(body);

  const tricks = [7, 9, 11, 13, 15, 16, 18].map((n, i) => [
    getType($, i),
    getTricks($, n)
  ])

  const TRICKS = Object.fromEntries(tricks)
  console.log(TRICKS)
});