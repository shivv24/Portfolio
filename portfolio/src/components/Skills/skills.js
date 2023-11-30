import React from 'react';
import './skills.css';
import Programming from '../../assets/programming.png';
import WebDesign from '../../assets/website-design.png';
import Aievolution from '../../assets/ai-evolution.png';


const Skills = () => {
    return (
      <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">
        I am a passionate student with a strong enthusiasm for coding. My focus lies in the dynamic fields of AI and ML, where I aspire to explore innovative solutions. Additionally, I am keenly interested in frontend development, aiming to create visually appealing and user-friendly interfaces. Eager to learn and contribute to the exciting intersection of technology and creativity.
        </span>
        <div className="skillBars">
          <div className="skillBar">
            <img src={Programming} alt="Programming" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Programming</h2>
                <p>Coding the future through the art and logic of programming.</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Web Design</h2>
                <p>Frontend developer creating visually stunning and user-friendly web interfaces to elevate online experiences.</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={Aievolution} alt="AiEvolution" className="skillBarImg" />
            <div className="skillBarText">
                <h2>AI Evolution</h2>
                <p>Driving AI evolution through innovation and advanced technologies for a smarter and more connected future.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;