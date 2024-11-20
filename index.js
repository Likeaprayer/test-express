const express = require("express")


const app = express()

function getDate(req, res){

    const date = new Date().toISOString()

    const response  = {
        currentDate: date,
        comment: "This is the current server date and time in YYYY-MM-DD and HH-MM-SS"
    }



    return res.status(200).json(response)
}

app.get("/datetime", getDate)


app.listen(3030, ()=>{
    console.log("app listening on port 3030")
})

