import React from 'react';

import idle0 from "../assets/graphics/idle0.png"
import idle1 from "../assets/graphics/idle1.png"
import idle2 from "../assets/graphics/idle2.png"
import idle3 from "../assets/graphics/idle3.png"
import idle4 from "../assets/graphics/idle4.png"
import idle5 from "../assets/graphics/idle5.png"
import idle6 from "../assets/graphics/idle6.png"
import idle7 from "../assets/graphics/idle7.png"

const srcs = [
    idle0,
    idle1,
    idle2,
    idle3,
    idle4,
    idle5,
    idle6,
    idle7
]

const Sprite = ({x, y, animationFrameIndex}) => {
    return (
        <div style={{position: "absolute", left: `${x * 10}px`}}>
            <img src={srcs[animationFrameIndex]} />
        </div>
    );
};

export default Sprite;