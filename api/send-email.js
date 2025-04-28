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
        },
        logger: true,
        debug: true
    });
      

    let emailContent = ''
    let subject = ''


    if (data.type === 'about') {
        subject = `General Inquiry - ${data.name}`
        emailContent = `
            General Inquiry
            Name: ${data.name}
            Email: ${data.email}
            Phone: ${data.phone}
            Message: ${data.message}
        `
    }
    else if (data.type === 'childcare') {
        subject = `Childcare Inquiry - ${data.name}`
        emailContent = `
            Childcare Inquiry
            Name: ${data.name}
            Email: ${data.email}
            Phone: ${data.phone}
            Date of Birth: ${data.dob}
            Enrollment Date: ${data.startDate}
            Program Type: ${data.programType}
            Availability for Tour: ${data.interviewTiming}
            Message: ${data.message}
        `
    } 
    else if (data.type === 'parties') {
        subject = `Party Inquiry - ${data.name}`
        emailContent = `
            Party Inquiry
            Name: ${data.name}
            Email: ${data.email}
            Phone: ${data.phone}
            Party Date: ${data.partyDate}
            Number of Guests: ${data.numOfGuests}
            Message: ${data.message}
        `
    }
    else if (data.type === 'workshop') {
        subject = `Workshop Inquiry - ${data.name}`
        emailContent = `
            General Inquiry
            Name: ${data.name}
            Email: ${data.email}
            Phone: ${data.phone}
            Workshop: ${data.workshop}
            Social Media Consent: ${data.socialMedia}
            Contact Again Consent: ${data.contactAgain}
            Allergies: ${data.allergies}
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
