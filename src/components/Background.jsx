import React from 'react';

import BackgroundImage from "../assets/graphics/treebackground.png";
import "./background.css"

const Background = ({scrollPos}) => {
    return <BackPlane src={BackgroundImage} scrollPos={scrollPos} />
};

const BackPlane = ({scrollPos, src}) => {
    const style = {
        left: `${scrollPos * 10}px`,
        position: "absolute",
        bottom: 0
    }
    return (
        <div className="background">
            <div className="background-viewport">
                <img style={style} width={"200%"} height={"auto"} src={src} alt=""/>
            </div>
        </div>
    );
}

export default Background;