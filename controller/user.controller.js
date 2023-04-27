const db = require('../db')

class UserController {
    async createUser(req, res) {
        const { user_name, department, email, creating_date, user_password } = req.body
        const newPerson = await db.query('INSERT INTO users (user_name, department, email, creating_date, user_password) values ($1, $2, $3, $4, $5) RETURNING *', [user_name, department, email, creating_date, user_password])
        res.json(newPerson.rows[0])
    }

    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM users')
        res.json(users.rows)
    }

    async checkOneUser(req, res) {
        const id = req.params.id
        const users = await db.query('SELECT * FROM users where id = $1', [id])
        res.json(users.rows)
    }

    async updateUser(req, res) {
        const { id, name, surname } = req.body
        const user = await db.query(
            'UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *',
            [name, surname, id]
        )
        res.json(user.rows[0])
    }

    async deleteUser(req, res) {
        const id = req.params.id
        const users = await db.query('DELETE FROM users where id = $1', [id])
        res.status(200).json({ success: true });
        console.log('User with id = $1 deleted', [id])
    }
}

module.exports = new UserController()