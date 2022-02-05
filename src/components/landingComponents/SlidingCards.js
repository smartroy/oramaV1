import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

function SlidingCards() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1080, min: 800 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    const cardNum = [1, 2, 3, 4, 5];
    const cards = cardNum.map((item) =>
        <div className="card-box">
            <div className="card" >
                <img className="card-img-top" src="/oramaWeb/imgs/cart.png" alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">Card {item}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                </div>
            </div>
        </div>
    );

    return (
        <div className=" slideCard-box">
            <div className="col-xs-12 col-md-10 slideCard">
                <Carousel
                    swipeable={true}
                    draggable={true}
                    // showDots={true}
                    renderDotsOutside={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    // infinite={true}
                    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    // autoPlaySpeed={1000}
                    keyBoardControl={true}
                    // customTransition="all .5"
                    // transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    // dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {cards}
                </Carousel>
            </div>
        </div>
    )
}

export default SlidingCards
