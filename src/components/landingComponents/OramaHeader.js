import React from 'react'
import useMousePosition from '../useMousePosition'
import { useRef, useEffect, useState } from 'react'

function OramaHeader(props) {
    // const mousePosition = useMousePosition();
    // const [position, setPosition] = useState({ x: 0, y: 0 });

    const iconRef = useRef(null);
    // const [posDiff, setPosDiff] = useState({ x: 0, y: 0 });
    // const moveHandler = (e) => {
    //     var posComb = iconRef.current.getBoundingClientRect();
    //     var centerX = posComb['x'] + posComb['width'] / 2;
    //     var centerY = posComb['y'] + posComb['height'] / 2;
    //     setPosition({ x: e.ClientX, y: e.ClientX });
    //     // setPosDiff({ x: e.ClientX - centerX, y: e.ClientY - centerY })
    // };
    // useEffect(() => {
    //     window.addEventListener("mousemove", moveHandler, true);
    //     return () => {
    //         window.removeEventListener("mousemove", moveHandler, true);
    //     };
    // }, []);
    const [position, setPosition] = useState({ x: 0, y: 0, angle: 0 });
    useEffect(() => {
        const setFromEvent = (e) => {
            const posComb = iconRef.current.getBoundingClientRect();
            const iconX = posComb.x + posComb.width / 2;
            const iconY = posComb.y + posComb.height / 2;
            const outRadius = posComb.width / 2;
            const diffX = iconX - e.clientX;
            const diffY = iconY - e.clientY;
            const diffXY = Math.sqrt(diffX * diffX + diffY * diffY);
            const rotateA = diffX < 0 ? Math.atan(diffY / diffX) : Math.atan(diffY / diffX) + 3.1416;
            const diffCos = -diffX / diffXY;
            const diffSin = -diffY / diffXY;
            const inCenterOffset = Math.max(8, Math.min(25, 25 * (diffXY / 500)))
            const innerCX = 75 + inCenterOffset * diffCos - 25;
            const innerCY = 75 + inCenterOffset * diffSin - 25;


            setPosition({ x: diffX, y: diffY, angle: rotateA, ix: innerCX, iy: innerCY, offset: inCenterOffset });

        };
        window.addEventListener("mousemove", setFromEvent);

        return () => {
            window.removeEventListener("mousemove", setFromEvent);
        };
    }, []);


    // const imgPosition = iconRef.current.getBoundingClientRect();
    return (
        <div className="top-box">

            <div className="mainTitle">
                <div className="mainLogo">
                    <img src="/oramaV1/imgs/orama-outer.png" id="logoOut" width="100" height="100" ref={iconRef}
                        style={{
                            transform: `rotate(${position.angle}rad)`,
                            backgroundColor: "blue"
                        }} />
                    <img src="/oramaV1/imgs/orama-inner.png"
                        style={{
                            left: `${position.ix}px`,
                            top: `${position.iy}px`
                        }}
                        id="logoIn" />
                </div>
                <div className="picAndText">

                    <img src="/oramaV1/imgs/oramadick.png" width="50" height="50" style={{ backgroundColor: "blue" }} />
                    <span style={{ fontSize: 50 }}>rama</span>
                </div>
                <h2>The future of NTF's</h2>
                {/* <p>x:{position.x}, y:{position.y}</p> */}
                {/* <p>diffX:{position.x}, diffY:{position.y}</p>
                <p>innerCX:{position.ix},  innerCY:{position.iy}, offset:{position.offset}</p> */}
            </div>
        </div>
    )
}

export default OramaHeader
