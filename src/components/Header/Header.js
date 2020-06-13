import React from "react"
import {Heading, Paragraph} from "../StyledComponents/GlobalStyles";
import Logo from "../../images/logo.svg";

const Header = () => {
	return (
		<header>
			<img src={Logo} alt="Ping"/>
			<Heading>We are launching <strong>soon!</strong></Heading>
			<Paragraph>Subscribe and get notified</Paragraph>
		</header>
	)
}

export default Header