import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Image } from "@chakra-ui/react";
import HashLoader from "react-spinners/HashLoader";
import "./aboutcss.css";
const About = () => {
	const Line = useRef(null);
	const text = useRef(null);
	useEffect(() => {
		setTimeout(() => {
			Line.current.classList.add("lineon");
			text.current.classList.add("titleon");
		}, 5);

		return () => {};
	}, []);
	return (
		<>
			<Helmet>
				<title>About</title>
			</Helmet>

			<div className="headingA">
				<div className="line" ref={Line}></div>
				<h1 className="title" ref={text}>
					About Us
				</h1>
			</div>
			<div className="Content1">
				<div className="text">
					<h1>Why?</h1>
					<p>
					We are on a grand customer-oriented mission to build a never-seen-before universal fashion web app that can: Let you get fashion products based on personal choices with great User Experience. Help you donate your worn-out apparel for recycling as a green initiative. Help you find and buy wide range of categories of fashion apparel and authentic clothes based on your interest.We strive to serve the best product in fashion-knit and fashion outerwear by empowering innovation and design to provide total customer satisfaction. To innovate and provide best-value products and services to the customers. To make a difference through our product design and stay ahead of market changes with the latest technology.
					Nowadays good clothes are hard to find at the last moment. If they are available locally, the prices aren't in our control and so is the reliability. Many climate-concerned people know the importance of recycling clothes. The fashion industry is responsible for 10 % of annual global carbon emissions, more than all international flights and maritime shipping. Hence, it is essential to recycle fashion products rather than throwing them away. The indigenous fashion industry has high-quality products with desi-touch but due to small reach, they do not find a good number of customers sometimes even locally. Making it easy to find good fashion apparel from the ease of your place, recycling options, and proper market reach for indigenous clothing. Making the sellers get a marketplace to get a wider reach of customers, proper use of donated clothes which can be refurbished after cleaning to resell with a suitable price, getting grants/concessions from the government for the green initiative and supporting local industry thus empowering the local youth, preserving the cultural heritage and making it global
					</p>
				</div>

				<div className="imagecontainer">
					<div className="Imageabt">
						<Image
							className="mImage"
							boxSize="400px"
							objectFit="cover"
							src="https://images.unsplash.com/photo-1614771637369-ed94441a651a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
							alt="Segun Adebayo"
						/>
					</div>
				</div>
			</div>
			<div className="Content2">
				<div className="imagecontainer">
					<div className="Imageabt">
						<Image
							className="mImage"
							boxSize="400px"
							objectFit="cover"
							src="https://images.unsplash.com/photo-1614038276039-667c23bc32fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=389&q=80"
							alt="Segun Adebayo"
						/>
					</div>
				</div>
				<div className="text">
					<h1>How?</h1>
					<p>
					A web application with MERN Stack + Redux + Latest Libraries that can get the work easier. Local sellers can reach out to outsource their products with us. This can earn profits from the clothes that feature on our web application, empowering them with stable job opportunities and returning huge profits mutually.Customers who are concerned about climate change will donate their old or unused or unwearable clothes to us so as we can recycle them. The recycled clothes will be refurbished and our contracted tailors will make a good use of the recycled material to release fashionable clothes with valuable suggestions from our customer oriented fashion designers. We will reach out to various higher and local level governments taking our causes that will seek us huge benefits whether in terms of taxes or incentives for our noble initiatives of recycling and supporting local industries. It will definitely help us financially. Getting featured on climate-change concerned platforms will give us good reach initially. The local youth will get a recognition for the talent they possess and branding their products shall fetch us good amount of revenue.

					</p>
				</div>
			</div>
		</>
	);
};

export default About;
