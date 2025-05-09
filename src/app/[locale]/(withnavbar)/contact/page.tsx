import Footer from '@/component/Footer/Footer'
import '@/css/Contact/Contact.css'

const page = () => {
    
    
    return (
        <div className='contact-holder'>
            
            <div className='contact-content'>
                <div className="contact-container">
                    <div className="contact-info">
                        <h2>Let&apos;s get in touch</h2>
                        <p>We&apos;re open for any suggestion or just to have a chat</p>
                        <ul>
                        <li><strong>Address:</strong> hell yes hell yes hell yes</li>
                        <li><strong>Phone:</strong> +1235 2355 98</li>
                        <li><strong>Email:</strong> info@sppp.com</li>
                        <li><strong>Website:</strong> sppp.com</li>
                        </ul>
                    </div>

                    <div className="contact-form">
                        <h2>Get in touch</h2>
                        <form>
                        <div className="form-row">
                            <input type="text" placeholder="Full Name" required />
                            <input type="email" placeholder="Email Address" required />
                        </div>
                        <input type="text" placeholder="Subject" required />
                        <textarea placeholder="Message" required></textarea>
                        <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default page