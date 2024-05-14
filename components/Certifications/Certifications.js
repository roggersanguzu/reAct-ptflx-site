import React, {useRef ,useState} from 'react'
import next from '../../Assets/arrow.png'
import back from '../../Assets/arrow back.png'
import os from '../../Assets/os.jpeg'
import security from '../../Assets/support.jpeg'
import hacker from '../../Assets/hacker.jpeg'
import script from '../../Assets/linux.jpeg'
import './Certifications.css'

const Certifications = () => {
   
  return (
    <div className='certificates' id="1">
        <div className='slider'>
            <ul>
                <li>
                    <div className='slide'>
                        <div className='info'>
                            <img src={security}/>
                        </div>
                        <div className='head'>
                            <h3>Yiga Ahamed</h3>
                            <span>Kampala, Uganda</span>
                        </div>
                    </div>
                    <p>
                        Mr. Yiga Ahamed's Network Support and Security class provides comprehensive knowledge
                        on network infrastructure, security protocols, and troubleshooting techniques. 
                        Students learn about various network devices, secure network design principles, and 
                        how to protect networks from cyber threats. Practical exercises and projects enhance understanding, 
                        preparing students for real-world challenges in IT security.
                    </p>
                </li>
                <li>
                    <div className='slide'>
                        <div className='info'>
                            <img src={script}/>
                        </div>
                        <div>
                            <h3>Ayush Kumar</h3>
                            <span>Nairobi,Kenya</span>
                        </div>
                    </div>
                    <p>
                        The Linux class fled by Prof Ayush Kumar ocused on scripting introduces students to the power of automating tasks 
                        within the Linux environment using shell scripts. It covers the basics of the Linux shell, 
                        including command line and graphical shells like BASH, and delves into shell scripting to 
                        automate repetitive tasks. Students learn to write scripts for system administration, such 
                        as routine backups and system monitoring, enhancing their ability to manage Linux systems 
                        efficiently. The course emphasizes the importance of shell scripting for automation, portability 
                        across different platforms, and integration with other tools and applications. Through practical 
                        exercises, students gain hands-on experience in creating and executing shell scripts, improving 
                        their skills in Linux system management and automation.
                    </p>
                </li>
                <li>
                    <div className='slide'>
                        <div className='info'>
                            <img src={hacker}/>
                        </div>
                        <div>
                            <h3>Dr Paula Musuva</h3>
                            <span>Nairobi, Kenya</span>
                        </div>
                    </div>
                    <p>
                        The Penetration Testing class offers a comprehensive exploration into the world of identifying and 
                        exploiting vulnerabilities in computer systems, networks, and applications. It covers essential aspects 
                        such as planning and scoping penetration tests, reconnaissance, scanning, initial access, payload delivery, 
                        and post-exploitation activities. Students learn to use a variety of tools and techniques for scanning, 
                        exploiting vulnerabilities, and conducting effective penetration tests. The course emphasizes the importance 
                        of a professional mindset, building a robust penetration testing infrastructure, and understanding the latest 
                        attack tactics and principles. Through hands-on exercises and real-world scenarios, students gain practical 
                        experience in assessing and mitigating security risks, preparing them for careers in cybersecurity and IT security analysis.
                    </p>
                </li>
                   <li>
                    <div className='slide'>
                        <div className='info'>
                            <img src={os}/>
                        </div>
                        <div>
                            <h3>CISCO PACED</h3>
                            <span>Nairobi, Kenya</span>
                        </div>
                    </div>
                    <p>
                        The Operating Systems class covers the inner workings of Linux, covering its kernel, file systems, and 
                        permissions. It emphasizes mastering the command line and terminal, essential for navigating and managing Linux environments. 
                        Students learn about shell scripting, a powerful tool for automating tasks, enhancing productivity, and solving complex problems. 
                        The course also introduces system administration, maintenance, and networking within Linux, preparing students for real-world applications
                         and challenges in IT and software development.
                    </p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Certifications