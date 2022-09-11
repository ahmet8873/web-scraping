const express=require('express')
const cheerio=require('cheerio')
const axios=require('axios')

const PORT=3003
const app=express();

axios('https://www.milliyet.com.tr/')
.then(response=>{
    const html=response.data
    const $=cheerio.load(html)

    const articles=[];
    $('.main-card__head',html).each(function(){
      const title=  $(this).text()
       const url= $(this).attr('href')

       articles.push({
        title,
        url
       })
    })

    console.log(articles)
})
.catch(err=>console.log(err))


app.listen(PORT,()=>{
    console.log(`server running on port; ${PORT}`)
})