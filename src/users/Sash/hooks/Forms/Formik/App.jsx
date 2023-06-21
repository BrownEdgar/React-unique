import { Field, Form, Formik, ErrorMessage } from 'formik'
import { string, object, } from "yup"

const validationSchema = object({
  firstName: string().min(4).max(8).required(),
  lastName: string().min(4).max(8).required()
})
const initialValues = {
  firstName: '',
  lastName: ''
}

export default function App() {
  const handleSubmit = (values) => {
    console.log(values);
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
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field type="text" id="firstName" name="firstName" placeholder="Jane"></Field>
            <ErrorMessage component="p" name="firstName" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field type="text" id="lastName" name="lastName" placeholder="Ostin"></Field>
            <ErrorMessage component="p" name="lastName" />
          </div>
          <Field type="submit" name="submit"></Field>
        </Form>
      </Formik>
    </div>
  )
}
