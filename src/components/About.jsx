import React from 'react'

const About = () => {
  return (
    <div
    name="about"
    className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
       <div className="max-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 boarder-gray-500">
                        About 
                    </p>
            </div>
            <p className="text-xl mt-20">
            Hello! I’m a dedicated UI/UX designer and IT student with a keen eye for creating impactful digital experiences. Currently in my 4th year of IT studies, I have honed my skills in both design and development. My expertise spans Adobe XD, Photoshop, After Effects, and Figma, allowing me to craft seamless, user-friendly interfaces and animations.
            </p>
           
            <br/>
            <p  className="text-xl">
            My proficiency in HTML, CSS, and Flutter enables me to build responsive and dynamic web and mobile applications. I’m passionate about leveraging these skills to solve real-world problems and deliver innovative solutions. With a strong desire to learn and grow, I am eager to contribute to exciting projects and make a positive impact in the tech industry.


            </p>
       </div>
    </div>
  )
}

export default About
