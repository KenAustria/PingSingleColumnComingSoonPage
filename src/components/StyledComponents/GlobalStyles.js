import styled, {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
	:root {
		--blue: hsl(223, 87%, 63%);
		--darkblue: hsl(209, 33%, 12%);
		--gray: hsl(0, 0%, 59%);
		--paleblue: hsl(223, 100%, 88%);
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

const Button = styled.button`
	padding: 1.5em 1em;
	background: var(--blue);
	color: white;
	border-radius: 100px;
	width: 100%;
	outline: none;
	border: none;
	font-weight: bold;
	box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.3);
	margin-bottom: 20px;

	&:hover {
		cursor: pointer;
		background: var(--darkblue);
	}

	@media (min-width: 600px) {
		width: 30%;
		align-self: flex-start;
	}
`

const EmailInput = styled.input`
	padding: 1.5em 2em;
	border: 1px solid ${`var(--paleblue)`};
	border-radius: 100px;
	width: 100%;
	outline: none;
	color: var(--darkblue);
`

const FormField = styled.div`
	margin-bottom: 20px;
	@media (min-width: 600px) {
			margin-right: min(1%, 1em);
			width: 65%;
	}
`

const FormFieldWrapper = styled.div`
	padding: 0 1.5em;
	margin: 1.5em 0;

	@media (min-width: 600px) {
		display: flex;
		justify-content: space-between;
	}
`

const Heading = styled.h1`
	font-weight: 300;
	font-size: 2.83rem;
	margin: 0;
	margin-top: .9em;
	strong {
		color: var(--darkblue);
	}
`

const Paragraph = styled.p`
	font-size: inherit;
`

export {
	Button,
	FormField,
	FormFieldWrapper,
	GlobalStyles,
	Heading,
	EmailInput,
	Paragraph
}