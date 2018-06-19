const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const port = 3003

app.use( bodyParser.json())


let task = [
    {
        id: 1,
        item: 'Mow Lawn',
        date: new Date()
    },
    {
        id: 2,
        item: 'Laundry',
        date: new Date()
    },
    {
        id: 3,
        item: 'Vacuum',
        date: new Date()
    } 

]
let id = 4
app.get('/api/task', (req, res) => {
    res.send(task)
})

app.put('/api/task/', (req,res) => {
    for( let i = 0; i < task.length; i++) {
        if(task[i].id == req.body.id) {
            task[i].item = req.body.item
        }
    }
    res.send(task)
})


app.post('/api/task', (req, res) => {
    task.push({
        id: id,
        item: req.body.task,
        date: new Date()
    })
    id++
    res.send(task)
  })


  app.delete('/api/task/:id', (req, res) => {
    task = task.filter(todo => {
        return todo.id !== Number(req.params.id)
    })
    
    res.send(task)

})


app.listen(port, () => { 
    console.log(`Server has started on ${port}`)
 })


 