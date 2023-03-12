const LocalStrategy =require("passport-local").Strategy;
const { pool } = require("./db");

function initialize(passport){
    const authenticateUser=(email,password,done) =>{
        pool.query("SELECT * FROM users WHERE username=$1 or email=$1 ", [email], (err, results) => {
            if (err){
                throw err;
            }
            if (results.row.length>0){
                const user=results.rows[0];

                if (password == user.password){
                    return done(null, user);
                }else{
                    return done(null, false,{message: "Password is not Correct"});
                }
            }else{
                return done(null, false, {message: "User is not Registered"});
            }
        });
    }

    passport.use(new LocalStrategy({
        usernameField:"email",
        passwordField:"password"
    }, authenticateUser
    ));
    passport.serializeUser((user, done) => done(null, user.id));

    passport.deserializeUser((id, done) => {
        pool.query("SELECT * FROM users WHERE id=$1 ", [id], (err, results) =>{
            if (err){
                throw err;
            }
            return done(null, results.row[0]);
        }
        );
    })
}

module.exports = initialize;