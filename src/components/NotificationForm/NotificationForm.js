import React, {useState} from 'react'
import styled from 'styled-components'

const NotificationForm = () => {
	const [email, setEmail] = useState("");

	const Wrapper = styled.div`
		text-align: center;
	`

	const EmailInput = styled.input`
		height: 30px;
		width: 300px;
		max-width: 100%;
		border-radius: 15px;
		border: 1px solid hsl(0, 0%, 59%);
	`

	return (
		<Wrapper>
			<EmailInput placeholder="Your email address.." onChange={event => setEmail(event.target.value)} />
			<button>Notify Me</button>
		</Wrapper>
	)
}

export default NotificationForm;
