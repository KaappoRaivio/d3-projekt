import React, {PureComponent} from 'react';
import './App.css';

import { GameEngine } from "react-game-engine";
import {MoveBackground} from "./systems";
import Background from "./components/Background";
import Sprite from "./components/Sprite";

class Box extends PureComponent {
    render() {
        const size = 200;
        const x = this.props.x - size / 2;
        const y = this.props.y - size / 2;
        return (
            <div style={{ position: "absolute", width: size, height: size, backgroundColor: "red", left: x, top: y }} />
        );
    }
}
const App = () => (
    <GameEngine style={{ width: "100%", height: "1000px", overflowX: "hidden" }}
        systems={[MoveBackground]}
        entities={{
            background: {scrollPos: 0, renderer: <Background />},
            sprite: {x: 0, y: 0, renderer: <Sprite />}
        }}>
    </GameEngine>
);

export default App;
