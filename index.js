const express = require('express')
const cors = require("cors")
//const userRouter = require('./routes/user.routes')
const router = require('./routes/routes.js')
const PORT = process.env.PORT || 8888
const app = express()

app.use(
    cors({
        origin: "*"
    })
)
app.use(express.json())
app.use('/api', router)

app.listen(PORT, () => console.log('Server has been started on port', [PORT]))

// var nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//     host: 'smtp.yandex.ru',
//     port: 465,
//     secure: true,
//     auth: {
//         user: 'sergeyopypeys',
//         pass: 'dajjvdbxhfqklpgq'
//     }
// });

// // send email
// var mailOptions = {
//     from: 'sergeyopypeys@yandex.ru',
//     to: '19.02.02@mail.ru',
//     subject: 'Sending Email using Node',
//     text: 'That was easy!'
// };
// transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//         console.log(error);
//         res.json(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//         res.json('Email sent: ' + info.response);
//     }
// });