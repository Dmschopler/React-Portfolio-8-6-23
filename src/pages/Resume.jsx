import {
    AnimatedPage,
    AnimateFromLeft,
} from "../components/PageAnimations";

import FrontEndIcons from "../components/FrontEndIcons";
import BackEndIcons from "../components/BackEndIcons";
import ToolIcons from "../components/ToolIcons";

export default function Resume() {
    return (
        <AnimatedPage>
            <div className="flex flex-col justify-center items-center space-y-4 mx-auto w-[80%] pt-6">
                <AnimateFromLeft>
                    <div className="text-5xl text-red-500">Front-end</div>
                </AnimateFromLeft>
                <FrontEndIcons />

                <AnimateFromLeft>
                    <div className="text-5xl text-red-500">Back-end</div>
                </AnimateFromLeft>
                <BackEndIcons />

                <AnimateFromLeft>
                    <div className="text-5xl text-red-500">Tools</div>
                </AnimateFromLeft>
                <ToolIcons />

                <a href="Put the resume link here" download="daniel-schopler-resume.pdf" target="_blank" className="link text-red-500 hover:scale-110"><h1>Download my full Resume here</h1></a>
                <p>Icons used with the courtesy of <a target="_blank" href="https://icons8.com" className="link text-red-600">Icons8</a></p>
            </div>
        </AnimatedPage>
    );
}