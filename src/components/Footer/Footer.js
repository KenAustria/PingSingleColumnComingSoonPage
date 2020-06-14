import React from "react";
import {StyledFooter} from "../StyledComponents/GlobalStyles";
import {GrFacebookOption, GrTwitter, GrInstagram} from "react-icons/gr";

const Footer = () => {
	return (
		<>
			<StyledFooter>
				<button aria-label="facebook">
					<GrFacebookOption/>
				</button>
				<button aria-label="twitter">
					<GrTwitter/>
				</button>
				<button aria-label="instagram">
					<GrInstagram/>
				</button>
			</StyledFooter>
			<p>&copy; Copyright Ping. All rights reserved.</p>
		</>
	)
}

export default Footer;