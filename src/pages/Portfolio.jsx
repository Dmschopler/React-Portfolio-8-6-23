import React, { Component } from "react";
import Slider from "react-slick";
import Project from "../components/Project";
import { NextArrow, PrevArrow } from "../components/Arrows";
import { AnimatedPage } from "../components/PageAnimations";

const projects = [
    {
        title: "Fruit Preserves",
        description: "APIs/Tailwind/JQuery",
        imageUrl: "/assets/images/fruit-preserves.png",
        liveUrl: "",
        githubUrl: "https://github.com/ FINISH REST OF URL",
    },
    {
        title: "Dear Diary",
        description: "Node/MySQL/Bootstrap/Swiper/Handlebars.js",
        imageUrl: "/assets/images/dear-diary.jpg",
        liveUrl: "https://personal-journal-e23df6a117fd.herokuapp.com/",
        githubUrl: "https://github.com/ FINISH REST OF URL",
    },
    {
        title: "Behind the Scenes Shopping",
        description: "Express.js/Sequelize/MySQL",
        imageUrl: "/assets/images/behind-the-scenes.jpg",
        liveUrl: "https://drive.google.com/file/d/1cEDnnECYLlMzToPlqKBkgZ2dEn9sI7Tq/view",
        githubUrl: "https://github.com/Dmschopler/Behind-The-Scenes-Shopping-6-18-23",
    },
    {
        title: "Weather Dashboard",
        description: "Third-Party-API/Bootstrap/CSS/JQuery",
        imageUrl: "/assets/images/weather-dashboard.png",
        liveUrl: "https://dmschopler.github.io/Is-It-Sunny-4-27-23/",
        githubUrl: "https://github.com/Dmschopler/Is-It-Sunny-4-27-23",
    },
    {
        title: "New Password Generator",
        description: "JavaScript/HTML/CSS",
        imageUrl: "/assets/images/new-password-generator.png",
        liveUrl: "https://dmschopler.github.io/New-Password-Generator-4-6-23/",
        githubUrl: "https://github.com/Dmschopler/New-Password-Generator-4-6-23",
    },
    {
        title: "Final Project",
        description: "",
        imageUrl: "",
        liveUrl: "",
        githubUrl: "",
    },
];

export default class Portfolio extends Component {
    render() {
        const settings = {
            focusOnSelect: true,
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 1000,
            dots: true,
            autoplay: true,
            autoplaySpeed: 4000,
            cssEase: "linear",
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                    },
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                    },
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
      ],
    };

    return (
        <AnimatedPage>
            <div className="container mx-auto">
                <div className="p-3 px-5">
                    <h2 className="text-4xl text-center dark:text-white text-black pb-3">
                        Projects
                    </h2>
                    <Slider {...settings}>
                        {projects.map((project, index) => (
                            <Project
                                key={index}
                                title={project.title}
                                description={project.description}
                                imageUrl={project.imageUrl}
                                liveUrl={project.liveUrl}
                                githubUrl={project.githubUrl}
                               /> 
                        ))}
                    </Slider>
                </div>
            </div>
        </AnimatedPage>
    );
  }
}