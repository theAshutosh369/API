const exp = require('express')
const bp = require('body-parser')
const re = require('request')
const request = require('request')

const app = exp()

app.use(bp.urlencoded({extended:true}))

app.listen(3000 , function(){
    console.log("server is runing on port 3000")
})

app.get("/", function(req , res){
    res.sendFile(__dirname+"/index.html")
}) 

app.post("/" , function(req , res)
{

    var obj = req.body
    var cry = obj.crypto
    var fi = obj.fiat
    console.log( cry )
    console.log( fi )
    console.log(cry+fi)

    var price

    request("https://apiv2.bitcoinaverage.com/indices/global/ticker/"+cry+fi , function( error , res , body){

    // JSON.stringify() will flatten the total data which is in the format of objects

    // JSON.parse() will work as reverse of stringify means it unflattens the object type data

    var data = JSON.parse(body)
    price = data.last 
    console.log(price)

    })

    res.send("the last value of "+cry+" is "+ price +" "+ fi )


})
