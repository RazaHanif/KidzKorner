import nodemailer from 'nodemailer'

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }
    
    const data = req.body

    if (!data?.type) {
        console.error('Error: Missing type field')
        return res.status(400).json({ error: 'Type field is required' })
    }

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_INFO,
          pass: process.env.EMAIL_PASS
        },
    });
      

    let emailContent = ''
    let subject = ''

    switch (data.type) {
        case 'about':            
            subject = `General Inquiry - ${data.name}`
            emailContent = `
                General Inquiry\n
                Name: ${data.name}\n
                Email: ${data.email}\n
                Phone: ${data.phone}\n
                Message: ${data.message}
            `
            break;
        case 'childcare':
            subject = `Childcare Inquiry - ${data.name}`
            emailContent = `
                Childcare Inquiry\n
                Name: ${data.name}\n
                Email: ${data.email}\n
                Phone: ${data.phone}\n
                Date of Birth: ${data.dob}\n
                Enrollment Date: ${data.startDate}\n
                Age Group: ${data.ageGroup}\n
                Program Type: ${data.programType}\n
                Availability for Tour: ${data.interviewTiming}\n
                Message: ${data.message}
            `
            break
        case 'parties':
            subject = `Party Inquiry - ${data.name}`
            emailContent = `
                Party Inquiry\n
                Name: ${data.name}\n
                Email: ${data.email}\n
                Phone: ${data.phone}\n
                Party Date: ${data.partyDate}\n
                Number of Guests: ${data.numOfGuests}\n
                Message: ${data.message}
                `
            break
        case 'workshop':
            subject = `Workshop Inquiry - ${data.name}`
            emailContent = `
                General Inquiry\n
                Name: ${data.name}\n
                Email: ${data.email}\n
                Phone: ${data.phone}\n
                Workshop: ${data.workshop}\n
                Social Media Consent: ${data.socialMedia}\n
                Contact Again Consent: ${data.contactAgain}\n
                Allergies: ${data.allergies}
            `
            break
        case 'summercamp':
            subject = `Summer Camp Inquiry - ${data.name}`
            emailContent = `
                Summer Camp Inquiry\n
                Name: ${data.name}\n
                Email: ${data.email}\n
                Phone: ${data.phone}\n
                Date of Birth: ${data.dob}\n
                Enrollment Date: ${data.startDate}\n
                Message: ${data.message}
            `
            break
    
        default:
            res.status(500).json({ 
                success: false, 
                error: '...Huh!', 
            })
            break;
    }

    try {
        await transporter.sendMail({
            from: `"Kidz Korner Website" <${process.env.EMAIL_INFO}>`,
            to: process.env.EMAIL_INFO,
            subject: subject,
            text: emailContent,
            replyTo: data.email
        })
        res.status(200).json({ success: true })
    } catch (err) {
        console.log('Failed to send email')
        console.log(err)

        res.status(500).json({ 
            success: false, 
            error: 'Failed to send email', 
        })
    }
}
