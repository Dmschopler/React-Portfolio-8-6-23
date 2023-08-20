import React from "react";
import backEndSvg from "./BackEndSvg";
import { AnimateFromRight } from "./PageAnimations"

export default function BackEndIcons () {
    const mySvg = new backEndSvg();
    return (
        <AnimateFromRight>
            <div className="flex flex-wrap justify-center space-x-6 pb-5 space-y-2">
                <div className="animate-bounce tooltip tooltip-info" data-tip="NodeJs" style={{ animationDelay: '0s' }}>
                    {mySvg.nodejsIcon()}
                </div>
                <div className="animate-bounce tooltip tooltip-info" data-tip="MySQL" style={{ animationDelay: '0.1s' }}>
                    {mySvg.mysqlIcon()}
                </div>
                <div className="animate-bounce tooltip tooltip-info" data-tip="MongoDB" style={{ animationDelay: '0.2s' }}>
                    {mySvg.mongodbIcon()}
                </div>
                <div className="animate-bounce tooltip tooltip-info" data-tip="JWT" style={{ animationDelay: '0.3s' }}>
                    {mySvg.jwtIcon()}
                </div>
                <div className="animate-bounce tooltip tooltip-info" data-tip="GraphQL" style={{ animationDelay: '0.4s' }}>
                    {mySvg.graphqlIcon()}
                </div>
            </div>
        </AnimateFromRight>
    )
}