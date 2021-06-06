const express = require("express");
const path = require("path");
const app = express();
const port = 80;

app.use('/static', express.static('static'))
app.use(express.urlencoded());



app.get('/',(req,res)=>{
    const params = {'title':'pug is best template', 'content':con}
    res.status(200).render('home.html', params);
})

app.get("/contact", (req, res)=>{ 
    res.status(200).send('contact.html', params);
});

app.post('/',(req,res)=>{
    res.send('Hello POST');

})

app.listen(port, () =>{
    console.log("The application started successfully on port " + port );

})