const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());


//add a todo
app.post("/todo", async(req,res)=>{
    try {
        const {description}  = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *",
        [description]);
        console.log(req.body);
        
        res.json(newTodo.rows[0]);
    } catch (error) {
        console.error(error.message); 
    }
})

//see all todo
app.get("/todo", async(req,res)=>{
    try {
        const allTodo = await pool.query("SELECT * FROM todo");
        res.json(allTodo.rows);
    } catch (error) {
        console.error(error.message);
    }
})

//see a specific todo
app.get("/todo/:id", async(req,res)=>{
    try {
        const {id} = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
        res.json(todo.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})




//update a todo
app.put("/todo/:id", async(req,res)=>{
    try {
        const {id} = req.params;
        const {description} = req.body;
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2",
        [description, id]);

        res.json("Todo was updated: ");
    } catch (error) {
       console.error(error.message) ;
    }
})

//delete a todo
app.delete("/todo/:id", async(req,res)=>{
    try {
       const {id} = req.params;
       const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);

       res.json({message: `todo ${id} was deleted`});

    } catch (error) {
        console.error(error.message);
    }
})







app.listen(5000, ()=>{
    console.log("server is listening to port 5000...");
})
