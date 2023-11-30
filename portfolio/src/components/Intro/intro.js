import React from 'react'
import './intro.css';
import bg from '../../assets/image.jpeg';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Ambati Shivani</span><br/>Tech Enthusiast</span>
            <p className='introPara'>Enthusiastic student with a passion for coding, AI/ML exploration,<br/> and creating user-centric frontend designs</p>
            <Link><button className='btn'><img src={btnImg} alt='Hire Me' className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt='Profile' className='bg'/>
    </section>
  );
}

export default Intro;