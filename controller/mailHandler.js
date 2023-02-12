var nodemailer = require('nodemailer');

class mailHandler {
    async sendMail(req, res) {
        const address = req.body.address
        const days = req.body.days
        const user = req.body.user
        const license = req.body.license
        const transporter = nodemailer.createTransport({
            host: 'smtp.yandex.ru',
            port: 465,
            secure: true,
            auth: {
                user: 'sergeyopypeys',
                pass: 'dajjvdbxhfqklpgq'
            }
        });

        // send email
        var mailOptions = {
            from: 'sergeyopypeys@yandex.ru',
            to: address,
            subject: `САП ГИ: ${license}`,
            text: `
            Здравствуйте, уважаемый ${user}

            Внимание! По лицензии ${license} истекает срок!
            До истечения осталось ${days} дней
            `
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.json('Error' + error)
            } else {
                console.log('Email sent: ' + info.response);
                res.json('Email sent: ' + info.response)
            }
        });
    }
}

module.exports = new mailHandler()