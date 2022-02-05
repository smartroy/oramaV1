import React from 'react'

function TextOverPic(props) {
    const textContent = props.data.text;
    const titleContent = props.data.title;
    return (
        <div className="textOverPic-box">
            <div className="textOverPic">
                <div className="content">
                    <h1>{titleContent}</h1>
                    <h4>{textContent}</h4>
                </div>
            </div>
        </div>
    )
}

export default TextOverPic
