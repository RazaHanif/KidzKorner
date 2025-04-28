import nodemailer from 'nodemailer'

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end()
    }
    
    const data = req.body
    console.log("API ROUTE HIT", data);

    if (!data.type) {
        console.error('Error: Missing type field')
        return res.status(400).json({ error: 'Type field is required' })
    }

    const transporter = nodemailer.createTransport({
        service: 'Yahoo',
        auth: {
            user: process.env.EMAIL_DUMMY,
            pass: process.env.EMAIL_PASS,
        }
    })

    let emailContent = ''
    let subject = ''

    // For now just output to terminal for now
    if (data.type === 'about') {
        subject = `General Inquiry - ${data.name}`
        emailContent = `You have a new general inquiry from kidzkornermilton.com\n
        Name:${data.name}\n
        Email:${data.email}\n
        Phone:${data.phone}\n
        Message:${data.message}\n
        \n
        Send from nodemailer
        `
    }
    else if (data.type === 'childcare') {
        subject = `Childcare Inquiry - ${data.name}`
        emailContent = `You have a new childcare inquiry from kidzkornermilton.com\n
        Name:${data.name}\n
        Email:${data.email}\n
        Phone:${data.phone}\n
        Date of Birth:${data.dob}\n
        Enrollment Date:${data.startDate}\n
        Program Type:${data.programType}\n
        Availability for Tour:${data.interviewTiming}\n
        Message:${data.message}\n
        \n
        Send from nodemailer
        `
    } 
    else if (data.type === 'parties') {
        subject = `Party Inquiry - ${data.name}`
        emailContent = `You have a new party inquiry from kidzkornermilton.com\n
        Name:${data.name}\n
        Email:${data.email}\n
        Phone:${data.phone}\n
        Party Date:${data.partyDate}\n
        Number of Guests:${data.numOfGuests}\n
        Message:${data.message}\n
        \n
        Send from nodemailer
        `
    }
    else if (data.type === 'workshop') {
        subject = `Workshop Inquiry - ${data.name}`
        emailContent = `You have a new workshop inquiry from kidzkornermilton.com\n
        Name:${data.name}\n
        Email:${data.email}\n
        Phone:${data.phone}\n
        Workshop:${data.workshop}\n
        Social Media Consent:${data.socialMedia}\n
        Contact Consent:${data.contactAgain}\n
        Allergies:${data.allergies}\n
        \n
        Send from nodemailer
        `
    }
    else {
        subject = "IDK"
        emailContent = "How did you get to this route?"
    }

    console.log(subject)
    console.log(emailContent)

    // await transporter.sendMail({
    //     from: process.env.EMAIL_DUMMY,
    //     to: process.env.EMAIL_INFO,
    //     subject: subject,
    //     text: emailContent
    // })

    res.status(200).json({ success: true })
}