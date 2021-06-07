const express = require('express') 
const path = require('path')
const app = new express()
app.use(express.static('public'))

app.listen(2020,()=> {
    console.log('App is listening')
})

app.get('/',(req,res) =>{
    res.sendFile(path.resolve(__dirname, 'C:/Users/Анель/Desktop/web/prjct/public/main.html'))
})

// app.get('/another',(req,res) =>{
//     res.sendFile(path.resolve(__dirname, 'C:/Users/Анель/Desktop/prjct/public/another.html'))
// })
// app.get('/contacts',(req,res) =>{
//     res.sendFile(path.resolve(__dirname, 'C:/Users/Анель/Desktop/tempblog/public/contact.html'))
// })
// app.get('/post',(req,res) =>{
//     res.sendFile(path.resolve(__dirname, 'C:/Users/Анель/Desktop/tempblog/public/post.html'))
// })