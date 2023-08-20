import React from "react";
import frontEndSvg from "./FrontEndSvg";
import { AnimateFromRight } from "./PageAnimations";

export default function FrontEndIcons() {
  const mySvg = new frontEndSvg();
  return (
    <AnimateFromRight>
      <div className="flex flex-wrap justify-center space-x-6 pb-5 space-y-2">
        <div
          className="animate-bounce tooltip tooltip-info"
          data-tip="HTML 5"
          style={{ animationDelay: "0s" }}
        >
          {mySvg.htmlIcon()}
        </div>
        <div
          className="animate-bounce tooltip tooltip-info"
          data-tip="CSS 3"
          style={{ animationDelay: "0.1s" }}
        >
          {mySvg.cssIcon()}
        </div>
        <div
          className="animate-bounce tooltip tooltip-info"
          data-tip="JavaScript"
          style={{ animationDelay: "0.2s" }}
        >
          {mySvg.jsIcon()}
        </div>
        <div
          className="animate-bounce tooltip tooltip-info"
          data-tip="React"
          style={{ animationDelay: "0.3s" }}
        >
          {mySvg.reactIcon()}
        </div>
        <div
          className="animate-bounce tooltip tooltip-info"
          data-tip="Tailwind"
          style={{ animationDelay: "0.4s" }}
        >
          {mySvg.tailwindIcon()}
        </div>
      </div>
    </AnimateFromRight>
  );
}
