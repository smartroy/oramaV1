import React, { Component } from "react";
import Slider from "react-slick";


function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#ECF0F1" }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#ECF0F1" }}
            onClick={onClick}
        />
    );
}


export default class InfoCardTrans extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            arrows: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 3,
            arrows: true,
            nextArrow: <NextArrow />,

            className: 'react__slick__slider__parent',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        const cardNum = [1, 2, 3, 4, 5];
        const cards = cardNum.map((item) =>

            <div className="card" >
                <img className="card-img-top" src="/oramaWeb/imgs/cart.png" alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">Card {item}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        );
        return (
            <div className="oramaInfoCardTrans">
                <h2> Multiple items </h2>
                <Slider {...settings}>
                    {cards}
                </Slider>
            </div>
        );
    }
}