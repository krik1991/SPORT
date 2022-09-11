const nodemailer = require('nodemailer');

class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'rjournaloffical@gmail.com',
                pass: 'qwwszelmtzytfjhm'
            }
        })
    }

    async sendMail(name, email, phone) {
        await this.transporter.sendMail({
            from: name,
            to: 'qwqzx1485@gmail.com',
            subject: 'test send email',
            text: 'test',
            html:
                `
                    <div style="width: 100%; height: 100px;">
                        <h3><b>ИМЯ:${name}</b></h3><br>
                        <h3><b>E-mail: ${email}</b></h3><br>
                        <h3><b>PHONE: ${phone}</b></h3><br>
                    </div>
                `
        })
    }
}

module.exports = new MailService();