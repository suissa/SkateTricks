const cheerio = require('cheerio')
const request = require('request')
const URL = "https://www.surfertoday.com/skateboarding/the-ultimate-list-of-skateboard-tricks"

const MODEL = require("./db")
const createPage = async (TRICKS) => {

  const DATA_ARR = Object.entries(TRICKS)
  // console.log(DATA_ARR)

  const data = {
    type: DATA_ARR[0][0],
    tricks: DATA_ARR[0][1]
  }
  console.log({data})

  try {
    const result = await MODEL.create(data)
  
    console.log({result})
    
  } catch (error) {
    console.error(error)
  }
}

const getType = ($, i) => $('.page-article div h3').eq(i).html().replace(/\<\/?strong\>/gim, "")
const getTricks = ($, n) => $('.page-article div p')
                              .eq(n)
                              .html()
                              .split("<br>")
                              // .filter(console.log)
const cb = (err, res, body) => {
  
  if (err) return console.error(err);

  const $ = cheerio.load(body);

  const tricks = [7, 9, 11, 13, 15, 16, 18].map((n, i) => [
    getType($, i),
    getTricks($, n)
  ])

  const TRICKS = Object.fromEntries(tricks)
  createPage(TRICKS)
}

request({
  method: 'GET',
  url: URL
}, cb);