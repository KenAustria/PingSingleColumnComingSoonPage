import styled, {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
	:root {
		--blue: hsl(223, 87%, 63%);
		--darkblue: hsl(209, 33%, 12%);
		--gray: hsl(0, 0%, 59%);
		--lightblue: hsl(223, 100%, 88%);
		--lightred: hsl(354, 100%, 66%);
	}

	*, *::before, *::after {
		box-sizing: border-box;
	}

	body {
		font-family: 'Libre Franklin', sans-serif;
		font-size: 20px;
		padding-top: 80px;
		color: var(--gray);
	}

	img {
		max-width: 100%;
	}

	.app__container {
		width: min(650px, 90%);
		margin: 0 auto;
		text-align: center;
	}
`;

export {GlobalStyles}