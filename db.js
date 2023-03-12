const Pool=require("pg").Pool;

const pool= new Pool({
    user:"postgres",
    password:"Akshat@9425abab",
    host:"localhost",
    port:5432,
    database:"postgres"
});

module.exports=pool;