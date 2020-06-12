import React from 'react'
import styled from 'styled-components'
// import './Header.css';

const Hero = styled.div`
	text-align: center;
`
const HeaderText = styled.h1`
	color: hsl(209, 33%, 12%);
	font-weight: 700;
	margin: 15px;
`
const SubHeader = styled.h1`
	color: hsl(0, 0%, 59%);
	font-weight: 300;
	display: inline;
`
const Subscribe = styled.p`
	color: hsl(209, 33%, 12%);
	font-weight: 300;
`

const Header = () => {
	return (
		<Hero>
			<HeaderText>Ping</HeaderText>
			<SubHeader>We are launching <strong>soon!</strong></SubHeader>
			<Subscribe>Subscribe and get notified</Subscribe>
		</Hero>
	)
}

export default Header