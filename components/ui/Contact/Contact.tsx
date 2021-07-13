import React from 'react';
import {Formik,Form,Field,ErrorMessage} from 'formik';
import styles from './Contact.module.css'
import * as Yup from 'yup';
import { getFirestore,collection,addDoc } from "firebase/firestore";

function Contactme():JSX.Element {
  //getting the firestore
  const db=getFirestore();

interface FormData{
  name:string,
  email:string,
  message:string,

}
 const [message,setMessage]=React.useState("")
 const handleSubmit=(data:FormData)=>{
  addDoc(collection(db,"contacts"),data)
  .then(()=>setMessage("Your message Submitted"))
  .catch((err)=>{err && setMessage("Something went wrong")})
}
   

  return (
    <React.Fragment>
      <div className={styles.container}>
        <img className="" src="/images/contact.svg" alt=""/>
      <Formik
      initialValues={{name:'',email:'',message:""}}
      onSubmit={async (values,{setSubmitting})=>{
      await handleSubmit(values)
      alert(message)
      ;setSubmitting(false)
      }}
      validationSchema={ Yup.object({
        name:Yup.string()
        .max(20,'Must be 20 charecter or less')
        .required('Required'),
        email:Yup.string()
        .email('Invalid Email address')
        .required("Required"),
        message:Yup.string()
        .required('Please write some message')
      })
      }
      >
        <Form className="flex flex-col justify-center ml-6 ">
         <label className="text-xl mb-2" htmlFor="name">NAME:</label>
          <Field className="focus:outline-none focus:ring-2 ring-green-600 px-3 py-2 xl:w-96 rounded-sm " placeholder="Your Name" type="text" name="name" />
        <div className="text-red-500 "><ErrorMessage name="name"/></div>  
          <label className="text-xl mt-5 mb-2"  htmlFor="email">E-MAIL:</label>
          <Field className="focus:outline-none focus:ring-2 ring-green-600 px-3 py-2 xl:w-96 rounded-sm " placeholder="Your Email" type="email" name="email"  />
          <div className="text-red-500 "><ErrorMessage  name="email"/></div>
          <label className="text-xl mt-5 mb-2"  htmlFor="message">MESSAGE:</label>
          <Field as='textarea' rows={5} className="focus:outline-none focus:ring-2 ring-green-600 px-3 py-2 xl:w-96 rounded-sm " placeholder="Write message"  name="message"/>
          <div className="text-red-500"><ErrorMessage name="message"/></div>
          <button className="bg-green-500 hover:bg-green-700 font-semibold focus:outline-none text-white rounded-sm mt-10 px-3 py-2" type="submit" >MESSAGE</button>
        </Form>

      </Formik>
      </div>
    </React.Fragment>
    
  );

 }
export default Contactme
