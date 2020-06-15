import React, {useContext} from "react";
import AppContext from "../../store/store";
import {Button, EmailInput, FormField, FormFieldWrapper} from "../StyledComponents/GlobalStyles";

const EmailForm = () => {
	const [{email, submitted}, dispatch] = useContext(AppContext);

	function onChange({target: {value}}) {
		dispatch({
			type: "change",
			payload: {name: "email", value}
		})
	}

	return (
		<FormFieldWrapper>
			<FormField>
				<EmailInput
					value={email}
					aria-label="email"
					placeholder="Your email address.."
					onChange={onChange}
				/>
			</FormField>
			<Button>Notify Me</Button>
		</FormFieldWrapper>
	)
}

export default EmailForm;
