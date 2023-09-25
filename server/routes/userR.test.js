process.env.NODE_ENV = "test";
const request = require ("supertest");
const app = require("../server");
const db = require ("../db");

let testUser;
let testFav;
beforeEach(async () => {

	const result = await db.query(`INSERT INTO users (username, password)
	VALUES ('testuser1',  'password')
	RETURNING user_id, username, password
	`);

	testUser = result.rows[0]

})

beforeEach(async () => {

	const result = await db.query(`INSERT INTO favorites (user_name, movie_title, movie_poster, movie_id)
	VALUES ('testuser1',  'Good Will Hunting', 
    'https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    'tt0119217')
	RETURNING user_name, movie_title, movie_poster, movie_id
	`);

	testFav = result.rows[0]

})


afterEach(async () => {
	await db.query(`DELETE FROM users`)
})

afterEach(async () => {
	await db.query(`DELETE FROM favorites`)
})

afterAll(async () => {
	await db.end();
})
// test users
describe("GET /api/users", () => {
    test("Get a list of a user", async () => {
        const result = await request(app).get('/api/users')
        expect(result.statusCode).toEqual(200)
        expect(result.body).toEqual([testUser])
    })
})

//test if post request goes through
describe("POST /api/users/register", () => {
    test("creates a user",  async () => {
        const result = await request(app).post('/api/users/register').send({username: 'testuser', password: 'pw'})
        expect(result.statusCode).toBe(200)
        
    });
});

// GET  test list of favorites for particular user
describe("GET /api/favorites/:user_name", () => {
    test("Gets a favorite of specific user", async() => {
        const result = await request(app).get(`/api/favorites/${testUser.username}`)
        expect(result.statusCode).toBe(200);
        console.log(testFav.movie_id, result.body)
        expect(result.body).toEqual({"res" : [testFav]})
    })
})

//POST test adding to favorites
describe("POST /api/favorites/:user_name", () => {
    test("adds a favorite for specific user",  async () => {
        const result = await request(app).post('/api/favorites/:user_name').send({user_name: 'testuser1', 
        movie_title: 'Heat', 
        movie_poster: 'https://m.media-amazon.com/images/M/MV5BYjZjNTJlZGUtZTE1Ny00ZDc4LTgwYjUtMzk0NDgwYzZjYTk1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
        movie_id: 'tt0113277'
    
    })
        expect(result.statusCode).toBe(200)
        
    });
});

//DELETE delete a single favorite
describe("DELETE /api/favorites/:user_name/:movie_id", () => {
    test("deletes a single favorite",  async () => {
        const result = await request(app).delete(`/api/favorites/${testUser.username}/${testFav.movie_id}`)
        expect(result.statusCode).toBe(200)
        // route matches delete values interpolated seem correct, just times out and fails. Will keep to 
        // display my thinking but to save time will move on. One stretch goal is to fix this.
    });
});


