/* eslint-disable jsx-a11y/anchor-is-valid */

export default function Form() {
	return (
		<form
			method="POST"
			action="https://getform.io/f/19869f0a-6c2a-40a4-a1db-657b3a828de7"
			className="Form-main"
		>
			<label>
				Name:
				<input type="text" name="name" className="Container-form-name"/>
			</label>
			<label>
				Email Address:
				<input type="email" name="email" className="Container-form-email"/>
			</label>
			<button type="submit" className="Container-submit">Submit</button>
		</form>
	);
}
