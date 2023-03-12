const express=require("express");
const app=express();
const cors= require("cors");
const pool=require("./db");
const { Ppool } =require("./dbconfig");
const session = require("express-session");
const flash = require("express-flash");


//middleware
app.use(cors());
app.use(express.json()); //req.body
app.use(express.urlencoded({extended:false}));
app.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized: false
}));



//routes
//register user

app.post("/users/register", async(req,res)=> {
    //takes your form data from "localhost:5000/users/register" and save to postgreSQL database "postgres" which is under user "postgres" in table "user"
    try{
        const {username, email, name, bio, phoneno, password, passowrd2} = req.body; //It contains key-value pairs of data submitted in the request body by the FormData object in the 2nd parameter of fetch api which compiles the name of input and entered value as key-value pair(or we can set the JSON format using enctype="multipart/form-data" attribute of the form element) and should have match names with input name attribute of forms 
        const newUser =await pool.query(
            "INSERT INTO users (username, email, name, bio, phoneno, password) VALUES($1,$2,$3,$4, $5, $6) RETURNING *", [username,email, name,bio, phoneno, password]
        );
        res.redirect('http://localhost:3006/login'); //after request redirect to this page as a response
    }catch(err){
        console.log(err.message);
    }

})

app.post("/rooms", async(req,res)=> {
    try{
        const {name} = req.body;
        const newUser =await pool.query(
            "INSERT INTO rooms (name) VALUES($1) RETURNING *", [name]
        );
        res.redirect('http://localhost:3006/home');
    }catch(err){
        console.log(err.message);
    }

})

//get all todo
app.get("/todos", async(req, res) =>{
    try{
        const allUsers= await pool.query("SELECT * FROM users");
        res.json(allUsers.rows);
    }catch(err){
        console.log(err.message);
    }
});
//get a todo
app.get("/todos/:id", async(req, res) => {
    try{
        const{id} = req.params;
        const user=await pool.query("SELECT * FROM users WHERE username=$1 or name=$1 ", [id]);
        res.json(user.rows);
    }catch(err){
        console.log(err.message);
    }
});

//update a todo
app.put("/todos/:id", async(req, res) => {
    try{
        const{id} = req.params;
        const {bio}=req.body;
        const updateUser= await pool.query("UPDATE users SET bio=$1 WHERE id=$2", [bio, id])
        res.json("UPDATED SUCCESSFULLY!");
    }catch(err){
        console.log(err.message);
    }
})

//delete a todo
app.put("/todos/:id", async(req, res) => {
    try{
        const{username} = req.params;
        const deleteUser= await pool.query("DELETE FROM users WHERE username=$1", [username]);
        res.json("UPDATED SUCCESSFULLY!");
    }catch(err){
        console.log(err.message);
    }
})


app.listen(5000, () => {
    console.log("server has started");// starts the server at localhost:5000 and always start your server using nodemon index.js to keep your server running or you have to run node index.js everytime you make and save changes in index.js file
});