import React ,{useRef} from 'react';
import './contact.css';
import Aws from '../../assets/aws.png';
import Smartknower from '../../assets/smartknower.png';
import Coursera from '../../assets/coursera.png';
import Ibm from '../../assets/ibm.png';
import LinkedinIcon from '../../assets/linkedin.png';
import GithubIcon from '../../assets/github.png';
import XIcon from '../../assets/x.png';
import InstagramIcon from '../../assets/instagram.jpg';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i6uw43x', 'template_uo7zhcr', form.current, '0On-aB2BcJN9U5tsQ')
        .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent!');
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <section id='contactPage'>
            <div id='clients'>
                <h1 className='contactPageTitle'>My Clients</h1>
                <p className='clientDesc'>
                I have completed courses with distinction from reputable companies, further enriching my skills and knowledge in relevant domains.
                </p>
                <div className='clientImgs'>
                    <img src={Aws} alt='Client' className='clientImg'/>
                    <img src={Smartknower} alt='Client' className='clientImg'/>
                    <img src={Coursera} alt='Client' className='clientImg'/>
                    <img src={Ibm} alt='Client' className='clientImg'/>
                </div>
            </div>
            <div id='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'> Please fill out the form below to discuss any work opportunities</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input className="name" type="text" placeholder='Your Name' name='your_name'/>
                    <input className="email" type="email" placeholder='Your Email' name='your_email'/>
                    <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                    <button type="submit" className="submitBtn" >Submit</button>
                    <div className='links'>
                        <a href="https://www.linkedin.com/in/ambati-shivani-860343247/" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedinIcon} alt='Linkedin' className='link'/>
                        </a>
                        <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer">
                            <img src={XIcon} alt='X' className='link'/>
                        </a>
                        <a href="https://www.instagram.com/ambati.shivani24/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" target="_blank" rel="noopener noreferrer" >
                            <img src={InstagramIcon} alt='Instagram' className='link'/>
                        </a>
                        <a href="https://github.com/shivv24" target="_blank" rel="noopener noreferrer">
                            <img src={GithubIcon} alt='Github' className='link'/>
                        </a>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact