const express = require('express');
const bodyParser = require('body-parser');
const MailService = require('./nodemailer');
const cors = require('cors');

const app = express()

app.use(bodyParser.json())
app.use(cors());

app.get('/', (req, res) => res.send(`Requested from ${req.hostname} : <h1>Hello World</h1>`))

app.post('/mail', async (req, res) => {
    const { name, email, phone } = req.body;
    console.log(name, email, phone)
    await MailService.sendMail(name, email, phone);
    return res.json('work');
})


app.listen(3000, () => {
    console.log('Server is running on port :3000')
})