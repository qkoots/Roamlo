// @ts-nocheck
const nodemailer = require("nodemailer")
class Nodemailer {

  constructor(host, port, auth) {
    this.host = 'smtp.dreamhost.com'
    this.port = 465
    this.auth = {
      user: 'quincy@qoots.io',
      pass: 'Minsano#22'
    }
  
    this.transporter = nodemailer.createTransport({
      host: this.host,
      port: this.port,
      secure: true,
      auth: this.auth,
    })
  }

  sendEmail(data) {    
    return this.transporter.sendMail({
      from: 'roamlo@qoots.io',
      to: data.to,
      subject: data.subject,
      html: data.html
    })
  }
}

module.exports = {
  Nodemailer
} 
