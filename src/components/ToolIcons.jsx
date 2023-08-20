import React from "react";
import toolSvg from "./ToolSvg";
import { AnimateFromRight } from "./PageAnimations";

export default function ToolIcons() {
  const mySvg = new toolSvg();
  return (
    <AnimateFromRight>
      <div className="flex flex-wrap justify-center space-x-6 pb-5 space-y-2">
        <div
          className="animate-bounce tooltip tooltip-info"
          data-tip="Visual Studio Code"
          style={{ animationDelay: "0s" }}
        >
          {mySvg.vscIcon()}
        </div>
        <div
          className="animate-bounce tooltip tooltip-info"
          data-tip="Heroku"
          style={{ animationDelay: "0.1s" }}
        >
          {mySvg.herokuIcon()}
        </div>
        <div
          className="animate-bounce tooltip tooltip-info"
          data-tip="Insomnia"
          style={{ animationDelay: "0.2s" }}
        >
          {mySvg.insomniaIcon()}
        </div>
        <div
          className="animate-bounce tooltip tooltip-info"
          data-tip="Git"
          style={{ animationDelay: "0.3s" }}
        >
          {mySvg.gitIcon()}
        </div>
        <div
          className="animate-bounce tooltip tooltip-info"
          data-tip="Webpack"
          style={{ animationDelay: "0.4s" }}
        >
          {mySvg.webpackIcon()}
        </div>
      </div>
    </AnimateFromRight>
  );
}
