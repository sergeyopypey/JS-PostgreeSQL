const db = require('../db')

class LicenseController {
    async createLicense(req, res) {
        const {title, lic_number, author, lic_owner, expiration_date, recieved_date, creating_date, user_id} = req.body
        const newPerson = await db.query('INSERT INTO license (title, lic_number, author, lic_owner, expiration_date, recieved_date, creating_date, user_id) values ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', [title, lic_number, author, lic_owner, expiration_date, recieved_date, creating_date, user_id])
        res.json(newPerson.rows[0]) 
    } 
    
    async getLicenses(req, res) {
        const users = await db.query('SELECT * FROM license')
        res.json(users.rows)
    }

    // async getOneLicense(req, res) {
    //     const id = req.params.id
    //     const users = await db.query('SELECT * FROM license where id = $1', [id])
    //     res.json(users.rows[0])
    // }

    async updateLicense(req, res) {    
        const {id, name, surname} = req.body
        const user = await db.query(
            'UPDATE license set name = $1, surname = $2 where id = $3 RETURNING *',
            [name, surname, id]
        )
        res.json(user.rows[0])
    }

    async deleteLicense(req, res) {
        const id = req.params.id
        const users = await db.query('DELETE FROM license where id = $1', [id])
        res.status(200).json({ success: true});
        console.log('License with id = $1 deleted', [id])
    }

    async postLicenseFile() {

    }

    async getLicenseFile(req, res) {
        const answer = {
            name: 'You don getLicenseFile'
        }
        res.json(answer)
    }
}

module.exports = new LicenseController()