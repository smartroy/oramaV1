import React from 'react';

function InfoWithPic(props) {

    const imgField = props.infoContent.pic ?
        <div className="col-xs-12 col-md-6 imgBox">
            <img src={props.infoContent.pic.url} alt="pic"></img>
        </div>
        : null;
    const titleField = props.infoContent.title ? <h1 style={{ fontFamily: 'Roboto' }}>{props.infoContent.title}</h1> : null;
    const introField = props.infoContent.intro ? <h4 style={{ fontFamily: 'Roboto' }}>{props.infoContent.intro}</h4> : null;
    const listPart = props.infoContent.list ? props.infoContent.list.map((item, index) =>
        <li key={index}>
            <h5 style={{ fontFamily: 'Roboto' }}>{item}</h5>
        </li>)
        : null;
    const listField = <ul>{listPart}</ul>;

    const displayContent = props.infoContent.pic.position == "left" ?
        <div className="infoWithPic">
            <div className="row">
                {imgField}
                <div className="col-xs-12 col-md-6 content-box">
                    <div className="content">
                        {titleField}
                        {introField}
                        {listField}
                    </div>
                </div>
            </div>
        </div>
        :
        <div className="infoWithPic">

            <div className="content-box">
                <div className="content">
                    {titleField}
                    {introField}
                    {listField}
                </div>
            </div>
            {imgField}
        </div>
    return (
        <div className="oramaInfoPic-box" style={{ backgroundColor: props.infoContent.backgroundColor }} id={props.infoContent.id}>
            <div className="oramaInfoPicContainer" >

                {displayContent}

            </div>
        </div>


    )
}

export default InfoWithPic
