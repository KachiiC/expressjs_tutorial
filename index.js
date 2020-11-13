const { parse } = require('path')
const express = require('express')
const app = express()

app.use(express.json())

const courses = [
    {   id: 1, name: "english" },
    {   id: 2, name: "maths"   },
    {   id: 3, name: "science" }
]

app.get('/', (req, res) => {
    res.send("ello There!")
})

app.get('/api/courses', (req, res) => {
    res.send(courses)
})

app.post('/api/courses', (req, res) => {

    const course = {
        id: courses.length +1,
        name: req.body.name
    };

    courses.push(course);
    res.send(course)
})

app.get('/api/courses/:id/:name', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send("Nope sorry mate try again....")
    res.send(course)
})


// PORT
const port  = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listenning on port ${port}...`))