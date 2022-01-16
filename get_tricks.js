const cheerio = require('cheerio')
const request = require('request')
const URL = "https://www.surfertoday.com/skateboarding/the-ultimate-list-of-skateboard-tricks"

const Model = require("./model.tricks")
const createPage = async (TRICKS) => {

  const data = Object.entries(TRICKS).map((arr, i) => {
    
    return arr
      .filter(a => typeof a === "object")
      .map((data, c) => {
        return data.map((trick) => {
        
          return {
            type: arr[0],
            name: trick,
            grades: []
          }
        })
      
    }).flat(4)
  }).flat()
  console.log("\n\n\n\n", data.length)
  
  try {
    const result = await TrickTypes.create(data)
  
    console.log({result})
    
  } catch (error) {
    console.error(error)
  }

  process.exit(0)
}

const getType = ($, i) => $('.page-article div h3').eq(i).html().replace(/\<\/?strong\>/gim, "")
const getTricks = ($, n) => $('.page-article div p')
                              .eq(n)
                              .html()
                              .split("<br>")
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