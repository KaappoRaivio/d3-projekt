import React from 'react';

import BackgroundImage from "../assets/treebackground.png";

const Background = ({scrollPos}) => {
    return (
        <img style={{width: "100%", imageRendering: "crisp-edges", position: "absolute", left: `${scrollPos * 30}px`, overflow: "hidden"}} width={"auto"} height="auto" src={BackgroundImage} alt=""/>
    );
};

export default Background;