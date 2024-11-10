// components/AboutMe.js
import React from 'react';
import logo from '../../public/Logo.jpg'
import Image from 'next/image';


export default function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me-content">
        <div className="about-me-photo">
          <Image src={logo}  alt="Logo" />
        </div>
        <div className="about-me-text">
          <h2>About Me</h2>
          <p>
            Hello! Im Shaheer, a dedicated frontend developer with a passion for crafting beautiful, responsive, and highly interactive web applications. My journey into web development began with an interest in creating immersive user experiences, and since then, Ive developed a keen eye for design, functionality, and optimization.
          </p>
          <p>
            With a strong foundation in HTML, CSS, JavaScript, and TypeScript, Im well-versed in creating websites that are both visually stunning and functionally robust. Im continuously expanding my skill set, diving into frameworks like React and Next.js to push the boundaries of whats possible in frontend development.
          </p>
          <p>
            My goal is to create seamless digital experiences that are accessible, engaging, and tailored to meet users needs. Whether its a complex web app or a simple landing page, I approach each project with the same level of care and creativity, ensuring that every detail contributes to the overall user experience.
          </p>
          <p>
            Beyond development, Im an avid learner, constantly staying updated with the latest industry trends and best practices. I enjoy taking on new challenges and believe that each project is an opportunity to learn, grow, and refine my skills.
          </p>
          <p>
            Outside of coding, I have a love for travel, design, and exploring new places that inspire creativity. Im always on the lookout for inspiration, whether its from the latest tech innovations, emerging design trends, or the vibrant communities I encounter along the way.
          </p>
        </div>
      </div>
    </section>
  );
}
