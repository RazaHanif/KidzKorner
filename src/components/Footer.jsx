import './footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='contact-us'>
                    <h2>Contact Us</h2>
                    <p>150 Nipissing Rd. 10 & 11, Milton, ON, L9T 5B3</p>
                    <p>(905) 878-4697</p>
                    <p>
                        <a href="mailto:info@kidzkornermilton.com">
                            info@kidzkornermilton.com
                        </a>
                    </p>
                    <p>
                        <a href="https://www.instagram.com/kidz.kornermilton/">
                            Follow us on Instagram
                        </a>
                    </p>
                </div>
                <div className='preschool-hours'>
                    <h2>Preschool Hours</h2>
                    <p>Monday to Friday - 9:00am to 3:00pm</p>
                </div>
                <div className='indoor-hours'>
                    <h2>Indoor Playground Hours</h2>
                    <p>Monday to Friday - 9:00am to 3:00pm</p>
                    <p>Saturday to Sunday - Parties Only</p>
                </div>
            </div>
        </footer>
    )

}

export default Footer