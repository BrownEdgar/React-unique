import { ErrorMessage, Field, Form, Formik, } from 'formik'
import { string, object } from "yup";

const validationSchema = object({
	firstName: string().min(4, "more then 4").max(10).required(),
	lastName: string().min(4, "more then 4").max(10).required(),
})

const initialValues = {
	firstName: '',
	lastName: ''
}

export default function App() {

	const handleSubmit = (values) => {
		console.log(values)
	}
	return (
		<div>
			<Formik
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
				validateOnBlur={true}
				validateOnChange={false}
				initialValues={initialValues}
			>
				<Form>
					<ErrorMessage >
						{
							(err) => {
								return (
									<div>
										<p>
											<span>
												<em>{JSON.stringify(err)}</em>
											</span>
										</p>
									</div>
								)
							}
						}
					</ErrorMessage>
					<div>
						<label htmlFor="firstName">First Name</label>
						<Field type="text" id="firstName" name="firstName" placeholder="Jane" />
	
					</div>
					<div>
						<label htmlFor="lastName">Last Name</label>
						<Field type="text" id="lastName" name="lastName" placeholder="Ostin" />
					
					</div>
					<div>
						<Field type="submit" value="register"/>
					</div>
				</Form>



			</Formik>
		</div>
	)
}
