const express = require('express');
// Initialization
const app = express(); // or calling express server

//here we domt need to specify  { 'Content-Type': 'text/html' }

//Application will now use json format for data
app.use(express.json()); // Data always transfer in jso format.

const port = 8081;

const toDoList = ["Complete Node Byte", "Cricket", "Go to sleep"];


//http//localhost:8081/todos
app.get("/todos", (req, res) => {
    res.status(200).send(toDoList);


});

app.post("/todos", (req, res) => {
    let newToDoItem = req.body.item;
    toDoList.push(newToDoItem);
    console.log(toDoList)
    res.status(201).send({
        message: "Task added succefully"
    });


});

app.delete("/todos", (req, res) => {
    let itemToDelete = req.body.item;
    toDoList.find((element, index) => {
        if (element === itemToDelete) {
            toDoList.splice(index, 1);
        }
    });
    console.log(toDoList);
    res.status(202).send({
        message: `Deleted item --> ${req.body.item} .`
    })


});


// if u use remainng/other mthd(patch put) which not defined above it give error
app.all("/todos", (req, res) => {
    res.status(501).send();
})

//All the other route which not defined above
app.all('*', (req, res) => {
    res.status(404).send();
});


app.listen(port, () => {

    console.log(`Nodejs server started on port ${port}`)
})
