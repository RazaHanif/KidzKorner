import nodemailer from 'nodemailer'

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end()
    }
    
    const data = req.body

    if (!data.type) {
        console.error('Error: Missing type field')
        return res.status(400).json({ error: 'Type field is required' })
    }

    const transporter = nodemailer.createTransport({
        service: 'Yahoo',
        host: 'smtp.mail.yahoo.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_DUMMY,
          pass: process.env.EMAIL_PASS
        }
    });
      

    let emailContent = ''
    let subject = ''

    if (data.type === 'about') {
        subject = `General Inquiry - ${data.name}`
        emailContent = `
            <html>
                <body style='font-family: Arial, sans-serif; color: #333;>
                    <h1>General Inquiry</h1>
                    <p><strong>Name:</strong> ${data.name}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Phone:</strong> ${data.phone}</p>
                    <p><strong>Message:</strong> ${data.message}</p>
                </body>
            </html>
        `
    }
    else if (data.type === 'childcare') {
        subject = `Childcare Inquiry - ${data.name}`
        emailContent = `
            <html>
                <body style='font-family: Arial, sans-serif; color: #333;>
                    <h1>Childcare Inquiry</h1>
                    <p><strong>Name:</strong> ${data.name}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Phone:</strong> ${data.phone}</p>
                    <p><strong>Date of Birth:</strong> ${data.dob}</p>
                    <p><strong>Enrollment Date:</strong> ${data.startDate}</p>
                    <p><strong>Program Type:</strong> ${data.programType}</p>
                    <p><strong>Availability for Tour:</strong> ${data.interviewTiming}</p>
                    <p><strong>Message:</strong> ${data.message}</p>
                </body>
            </html>
        `
    } 
    else if (data.type === 'parties') {
        subject = `Party Inquiry - ${data.name}`
        emailContent = `
            <html>
                <body style='font-family: Arial, sans-serif; color: #333;>
                    <h1>Party Inquiry</h1>
                    <p><strong>Name:</strong> ${data.name}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Phone:</strong> ${data.phone}</p>
                    <p><strong>Party Date:</strong> ${data.partyDate}</p>
                    <p><strong>Number of Guests:</strong> ${data.numOfGuests}</p>
                    <p><strong>Message:</strong> ${data.message}</p>
                </body>
            </html>
        `
    }
    else if (data.type === 'workshop') {
        subject = `Workshop Inquiry - ${data.name}`
        emailContent = `
            <html>
                <body style='font-family: Arial, sans-serif; color: #333;>
                    <h1>General Inquiry</h1>
                    <p><strong>Name:</strong> ${data.name}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Phone:</strong> ${data.phone}</p>
                    <p><strong>Workshop:</strong> ${data.workshop}</p>
                    <p><strong>Social Media Consent:</strong> ${data.socialMedia}</p>
                    <p><strong>Contact Again Consent:</strong> ${data.contactAgain}</p>
                    <p><strong>Allergies:</strong> ${data.allergies}</p>
                </body>
            </html>
        `
    }
    else {
        subject = "IDK"
        emailContent = "How did you get to this route?"
    }

    await transporter.sendMail({
        from: process.env.EMAIL_DUMMY,
        to: process.env.EMAIL_INFO,
        subject: subject,
        text: emailContent,
        replyTo: data.email
    })

    res.status(200).json({ success: true })
}
