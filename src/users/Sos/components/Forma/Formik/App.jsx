import { ErrorMessage, Field,Form,Formik } from 'formik'
<<<<<<< HEAD
import {string,number,object} from 'yup';
import"./App.css"

const  schema = object({
=======
import {string,number, object} from 'yup';
import"./App.css"

const schema = object({
>>>>>>> a6844736faacfeb6e3f7ce7f5574221c9b1a0840
    firstName: string().min(3).max(10).required(),
    lastName:  string().min(4).max(12).required(),
    age:number().min(18).max(99).required(),
    email:string().email()
})

export default function App() {
const handleSubmit = (values) => {
  console.log(values);
 }
   
  return (
    <div className='header'>
        <Formik
        onSubmit={handleSubmit}
        validationSchema={schema}
        validateOnBlur={true}
        validateOnChange={false}
        initialValues={
            {
              firstName:'',
              lastName:'',
              age:'',
              email:'', 
            }
        }
        >
            <Form>
              <div className='firstName'>
                <label htmlFor='firstName'>First Name</label>
                <Field type='text' id='firstName' name='firstName' placeholder='firstName'/>
                <ErrorMessage component="p" name='firstName'/>
              </div>
              <div className='lastName'>
                <label htmlFor='lastName'>Last Name</label>
                <Field type='text' id='lastName' name='lastName' placeholder='lastName'/>
                <ErrorMessage component="p" name='lastName'/>
              </div>
              <div className='age'>
                <label htmlFor='age'>Age</label>
                <Field type='number' id='age' name='age' placeholder='age'/>
                <ErrorMessage component="p" name='age'/>
              </div>
              <div className='email'>
                <label htmlFor='email'>E-Mail</label>
                <Field type='text' id='email' name='email' placeholder='email'/>
                <ErrorMessage component="p" name='email'/>
              </div>
              <div className='submit'>
<<<<<<< HEAD
                <Field type='submit' value ='register'id='submit'/>
=======
                <Field type='submit' value ='register' id='submit'/>
>>>>>>> a6844736faacfeb6e3f7ce7f5574221c9b1a0840
              </div>
            </Form>
        </Formik>
    </div>
  )
}
