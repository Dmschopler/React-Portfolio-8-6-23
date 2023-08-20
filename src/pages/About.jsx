import { AnimatedPage } from "../components/PageAnimations";

export default function About() {
    return (
        <AnimatedPage>
            <div className="flex flex-col justify-center items-center space-y-4 mx-auto w-[80%]">
                <h1 className="text-4xl dark:text-white text-black underline decoration-1 py-4">
                    About Me
                </h1>
                <div className="bg-img" role="img" aria-label="prof-pic">
                    <img src="/assets/images/prof-pic.png" alt="photo of webpage author"/>
                </div>
                <p className="pg-10 text-lg text-green dark:text-white">
                    I am a front end web developer looking to leverage my background in commercial sales to provide a personable experience on how to create real world solutions and the ability to think outside the box along the way. I earned a certificate in Full Stack Web Development from the University of North Carolina of Chapel Hill Coding Boot Camp. I have learned alot and gain knowledge in HTML, CSS, APIs, JQuery, Bootstrap, Tailwind, Git, React, Node.js and Github to name a few. I am an innovative problem-solver who is passionate about developing applications with a focus on mobile-first design and development. I have strengths in communication, creativity and building projects from the ground up. I am excited to learn more and continue to see what opportunities lie ahead!
                </p>
            </div>
        </AnimatedPage>
    );
}