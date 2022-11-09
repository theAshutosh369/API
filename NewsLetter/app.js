

const exp = require('express')
const bp = require('body-parser')
const request = require('request')

var app = exp()
// app.use(exp.static("public"))
app.use(bp.urlencoded({extended:true}))

app.listen(300 , function(){
    console.log("server running at port 300")
})

app.get("/" ,function(req, res){
    res.sendFile(__dirname+"/signup.html")
})

app.post("/" ,function(req, res)
{
    var obj = req.body

    var fname = obj.fname
    var lname = obj.lname
    var em = obj.em

    console.log( fname + lname + em )
})

app.get()





