const express = require("express");
const router = new express.Router();
const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//we want to require express error
const {BCRYPY_WORK_FACTOR, SECRET_KEY} = require("../config");

router.get('/', async (req, res, next) => {
    const result = await db.query(`SELECT * FROM users`)
    res.json(result.rows)
})

const genToken = (username) => {
    return jwt.sign({username}, SECRET_KEY, {expiresIn: '3d'});
}

router.post('/register' , async (req, res, next) => {
    try {
        const { username, password } = req.body;
        
        //hash pw
        const hpw = await bcrypt.hash(password, BCRYPY_WORK_FACTOR);
        //save to db
        const result = await db.query(`
            INSERT INTO users (username, password)
            VALUES ($1, $2)
            RETURNING username`,
            [username, hpw]);
            console.log(result.rows)

            const token = genToken(username);
            console.log(`Hey I am ====> ${token}!!!`)
            
           

            return res.json({res: result.rows[0], token})
    } catch (err) {
        console.log(err)
        return next(err)
    }

})

router.post('/login', async (req, res, next) => {
    try { 
        const {username, password} = req.body;

        const result = await db.query(`
            SELECT username, password
            FROM users
            WHERE username = $1`
            ,[username]);

            const user = result.rows[0];
            console.log(user)

            if(user){
                if (await bcrypt.compare(password, user.password)){
                    const token = jwt.sign({username}, SECRET_KEY);
                    return res.json({res: user, token})
                }
            }
            // throw new ExpressError("username not found", 400)
    } catch (err) {
        return next(err)
    }
})

module.exports = router;



//bcrypt.hash('morjello#1!', 12).then(d => console.log(d))

// const hpw = '$2b$12$5KJ8SrCCX.0qOwnVbXpYDegYhzsAXHzB2DJHTEJs9dmrgI.00H0EO'

// bcrypt.compare('codemankey', hpw).then(res => console.log(res))

// bcrypt.compare('morjello#1!', hpw).then(res => console.log(res))