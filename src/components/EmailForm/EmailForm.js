import React, {useState} from "react";
import {Button, EmailInput, FormField, FormFieldWrapper} from "../StyledComponents/GlobalStyles";

const EmailForm = () => {
	const [email, setEmail] = useState("");

	return (
		<FormFieldWrapper>
			<FormField>
				<EmailInput
					value={email}
					aria-label="email"
					placeholder="Your email address.."
					onChange={event => setEmail(event.target.value)}
				/>
			</FormField>
			<Button onChange={event => setEmail(event.target.vaule)}>Notify Me</Button>
		</FormFieldWrapper>
	)
}

export default EmailForm;
