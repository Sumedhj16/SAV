import React, { Component } from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import './Carousel.css';

var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
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

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
    }

    play() {
        this.slider.slickPlay();
    }

    render() {

                return (
            <div className="Carousel">
                <div id="car">
                <Slider {...settings}>
                    <div className="card">
                        <p id="quote">‟</p>
                        <p>Savanna HR have always shown sincere interest in the deliverables for skills across levels. Their participation in requirement understanding commendable. I have always relied on for their round the clock availability.</p>
                        <span>Tanvi Jain</span><br />
                        <span>HR, Pearson Education</span><br />
                    </div>
                    <div className="card">
                        <p id="quote">‟</p>
                        <p>I have worked very closely with the Savanna HR team and they have helped us to close many niche hires. I find the team committed to quality service delivery and open to feedback.</p>
                        <span>Anustup Nayak</span><br />
                        <span>VP, XSEED Education</span>
                    </div>
                    <div className="card">
                        <p id="quote">‟</p>
                        <p>Savanna HR is an excellent Recruitment firm for EdTech Hiring. I was guided throughout and helped with an excellent opportunity in Education Industry. Team is very helpful with good network.</p>
                        <span>Monica Singh</span><br />
                        <span></span>
                    </div>
                    <div className="card">
                                <p id="quote">‟</p>
                        <p>Savanna HR have always shown sincere interest in the deliverables for skills across levels. Their participation in requirement understanding commendable. I have always relied on for their round the clock availability.</p>
                        <span>Tanvi Jain</span><br />
                        <span>HR, Pearson Education</span><br />
                    </div>
                    <div className="card">
                        <p id="quote">‟</p>
                        <p>I have worked very closely with the Savanna HR team and they have helped us to close many niche hires. I find the team committed to quality service delivery and open to feedback.</p>
                        <span>Anustup Nayak</span><br />
                        <span>VP, XSEED Education</span>
                    </div>
                    <div className="card">
                        <p id="quote">‟</p>
                        <p>Savanna HR is an excellent Recruitment firm for EdTech Hiring. I was guided throughout and helped with an excellent opportunity in Education Industry. Team is very helpful with good network.</p>
                        <span>Monica Singh</span><br />
                        <span></span>
                    </div>
                    <div className="card">
                        <p id="quote">‟</p>
                        <p>Savanna HR have always shown sincere interest in the deliverables for skills across levels. Their participation in requirement understanding commendable. I have always relied on for their round the clock availability.</p>
                        <span>Tanvi Jain</span><br />
                        <span>HR, Pearson Education</span><br />
                    </div>
                    <div className="card">
                        <p id="quote">‟</p>

                        <p>I have worked very closely with the Savanna HR team and they have helped us to close many niche hires. I find the team committed to quality service delivery and open to feedback.</p>
                        <span>Anustup Nayak</span><br />
                        <span>VP, XSEED Education</span>
                    </div>
                </Slider>
                        </div>
            </div>
        );
    }
}