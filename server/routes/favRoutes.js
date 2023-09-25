const express = require("express");

const router = express.Router();
const db = require("../db");

router.get('/:user_name', async (req, res) => {

    const username = req.params.user_name;
    console.log(username)
    const result = await db.query(`
        SELECT user_name, movie_title, movie_poster, movie_id
        FROM favorites
        WHERE user_name = $1`
        ,[username]);

        return res.json({res: result.rows})
})

router.post('/:user_name', async (req, res) => {

    try {
        const { user_name, movie_title, movie_poster, movie_id } = req.body;

        const result = await db.query(`
                INSERT INTO favorites (user_name, movie_title, movie_poster, movie_id)
                VALUES ($1, $2, $3, $4)
                RETURNING user_name, movie_title, movie_poster, movie_id`,
                [user_name, movie_title, movie_poster, movie_id]);
    
                console.log(result.rows)
                return res.json(result.rows[0])
        
    } catch (error) {
        console.log(error)
    }

   
})

router.delete("/:user_name/:movie_id", async(req,res) => {
   
    try {
        const {movie_id, user_name}  = req.params;
        const deleteResult = await db.query(`DELETE FROM favorites WHERE movie_id = 
        $1 AND user_name = $2 RETURNING movie_id, user_name`,
        [movie_id, user_name])
    } catch (error) {
        console.log(error)
    }
})



module.exports = router;
