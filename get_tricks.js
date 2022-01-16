const cheerio = require('cheerio')
const request = require('request')
const URL = "https://www.surfertoday.com/skateboarding/the-ultimate-list-of-skateboard-tricks"

const Model = require("./model.tricks")
const createPage = async (TRICKS) => {

  const data = Object.entries(TRICKS).map((arr, i) => {
    
    return arr.map((data, c) => {
      // console.log({data}, data[1])

      return data.map((trick) => console.log({trick}))
    })
    //   {
    //   type: arr[i][0],
    //   name: data,
    //   grades: []

    // })
    const o = {
      type: arr[0],
      name: arr[1],
      grades: []
    }

    return o
  })
  console.log(data)

  // const data = [0, 1, 2, 3, 4, 5, 6].map((n, i) => ({
  //   type: DATA_ARR[n][0],
  //   tricks: DATA_ARR[n][1].filter(s => !s.toString().startsWith("<"))
  // }))

  // console.log({data})

  // try {
  //   const result = await TrickTypes.create(data)
  
  //   console.log({result})
    
  // } catch (error) {
  //   console.error(error)
  // }

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