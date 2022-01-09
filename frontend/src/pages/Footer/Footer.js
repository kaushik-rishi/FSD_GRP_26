import React from "react";
import {
	FiFacebook,
	AiOutlineHeart,
	AiOutlineInstagram,
	IoLogoYoutube,
} from "react-icons/all";
import { Input, Stack } from "@chakra-ui/react";
import "./footercss.css";
import { Link } from "react-router-dom";
const Footer = () => {
	return (
		<div className="footerCmp">
			<footer>
				<div className="footerCategorie">
					<h1>Categories</h1>
					<ul>
						<li>
							<Link to="/shop/?cg=Women">Women</Link>
						</li>
						<li>
							<Link to="/shop/?cg=Men">Men</Link>
						</li>
						<li>
							<Link to="/shop/?cg=Shoes">Shoes</Link>
						</li>
						<li>
							<Link to="/shop/?cg=Watches">Watches</Link>
						</li>
					</ul>
				</div>

				<div className="fooHelp">
					<h1>Help</h1>
					<ul>
						<li>Track Order</li>
						<li>Returns</li>
						<li>Shipping</li>
						<li>FAQs</li>
					</ul>
				</div>

				<div className="footerGetInTouch">
					<h1>Get in touch</h1>
					<ul>
						<p>
							Any questions? Let us know in store at Indian Institute of
							Information Technology, Sri City, Chittoor, 630, Gnan Marg,
							Sathyavedu, Andhra Pradesh 517646.
						</p>
						<li className="footerIcons">
							<FiFacebook size="25" />
						</li>
						<li className="footerIcons">
							<AiOutlineInstagram size="25" />
						</li>
						<li className="footerIcons">
							<IoLogoYoutube size="25" />
						</li>
					</ul>
				</div>

				<div className="footerNews">
					<h1>Project Description</h1>
					<ul>
						<li>
						<a href="https://docs.google.com/presentation/d/1Lp5-pM9uUpfPUTf5lPPL0-SQCqK5Pv3yR9dL-A6z-2A/edit#slide=id.g107e31f380f_1_4">
						<button className="footerBtn">Link</button>
  </a> 
						</li>
					</ul>
				</div>

				<div className="creditsIcons">
					<ul>
						<li>
							<img src="https://i.imgur.com/AHCoUZO.png" className="img1" />
						</li>
						<li>
							<img src="https://i.imgur.com/JZRipBg.png" className="img2" />
						</li>
						<li>
							<img src="https://i.imgur.com/l8OAGyo.png" className="img3" />
						</li>
						<li>
							<img src="https://i.imgur.com/IDHC2iv.png" className="img4" />
						</li>
					</ul>
				</div>

				<div className="paragraphFooter">
					<p>An initiative by Group-26 for FSD-2 Project</p>
					<p>Chetan | Bharghav | Varshith | Atharva</p>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
