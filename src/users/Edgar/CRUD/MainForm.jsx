import { Field, Formik,  Form, ErrorMessage } from 'formik'
import { keys } from 'underscore';
import { string, object } from "yup";
const initialValues = {
	firstname: "",
	lastname: "",
	age: "",
	email: '',
	gender: ""
}


const validationSchema = object({
	firstname: string().min(3).max(15),
	lastname: string().min(3).max(22),
	age: string().matches(/^[0-9]+$/),
	email: string().email(),
	gender: string().oneOf(['male', 'female'])
})



// eslint-disable-next-line react/prop-types
export default function MainForm({ addUser }) {
	console.log('MainForm')
	const handleSubmit = (values, { resetForm }) => {
		console.log(values)
		const user = {
			id: Date.now(),
			...values,
		}
		resetForm()
		addUser(user);
	}

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			validateOnBlur={true}
			validateOnChange={true}
			validationSchema={validationSchema}
		>
			{
				(formik) => {
					console.log(formik)
					return (
						<Form>
							<div className='form__group'>
								<ErrorMessage>
									{err => {
										return (
											<>
												{
													Object.entries(err).map(([filed, mesage], index) => {
														return <div className="alert" key={index}>
															<p key={index}>{mesage}</p>
														</div>
													})
												}
											</>
										)
										
									}}
								</ErrorMessage>
							</div>
							<div className='form__group'>
								<label htmlFor="firstname">firstname</label>
								<Field type="text" name="firstname" id="firstname" />
							</div>
							<div className='form__group'>
								<label htmlFor="lastname">lastname</label>
								<Field type="text" name="lastname" id="lastname"  />
							</div>
							<div className='form__group'>
								<label htmlFor="age">Age</label>
								<Field type="text" name="age" id="age" />
							</div>
							<div className='form__group'>
								<label htmlFor="email">email</label>
								<Field type="email" name="email" id="email" />
							</div>
							<div className='form__group form__group-radio'>
								<Field type="radio" name="gender" id="male" value="male" />
								<label htmlFor="male">male</label>
							</div>
							<div className='form__group form__group-radio'>
								<Field type="radio" name="gender" id="female" value="female" />
								<label htmlFor="female">female</label>
							</div>
							<div className='form__group'>
								<input type="submit" value="register" />
							</div>
						</Form>
					)
				}
			}
		</Formik>
	)
}
