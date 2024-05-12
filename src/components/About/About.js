import React from 'react'
import './About.css'
import about from '../../Assets/networker.jpeg'
import play_icon from '../../Assets/arrow.png'
const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about} className='about_image'/>
            <img src={play_icon} className='play_icon'/>
        </div>
         <div className='about-right'>
            <h5>Modelling Solutions to World Problems</h5>
            <h3>TECH BACKGROUNG</h3>
            <p>
                With a solid foundation in web development, cloud computing, and advanced web development, 
                this individual has carved out a niche for themselves in the tech industry.
                Over the past three years, they have honed their skills in creating responsive,
                user-friendly websites and applications, leveraging modern web stacks and frameworks. 
                Their proficiency extends to backend development, ensuring seamless integration with databases
                and server-side logic. They have also mastered cloud platforms, deploying scalable solutions 
                that enhance performance and reliability. This expertise, combined with a knack for problem-solving and a commitment to staying abreast of emerging technologies, positions them as a valuable asset in any tech-driven organization. Their journey reflects the dynamic nature of the tech industry,
                where continuous learning and adaptability are key to success.
            </p>
            <p>
               Showcasing exceptional skills in crafting interactive and visually appealing websites. 
               With three years of experience under their belt, they have become adept at using various 
               programming languages and frameworks, such as HTML, CSS, JavaScript, and React. 
               Their ability to design intuitive user interfaces and optimize site performance has led to 
               successful projects across different industries. They possess a deep understanding of responsive
               design principles, ensuring that websites function seamlessly on both desktop and mobile devices.
               Additionally, their proficiency in SEO strategies has helped clients achieve higher visibility on search engines. This web developer's dedication to continuous learning and staying updated with the latest web 
               technologies sets them apart, making them a sought-after professional in the field. 
            </p>
        </div>
    </div>
  )
}

export default About