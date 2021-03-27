import React from 'react';
import {Formik,Form,Field,ErrorMessage} from 'formik';
import { useFormspark } from "@formspark/use-formspark";

function Contactme():JSX.Element {
  const FORM_ID = "aBx52fDC";
 const [submit,submitting]=useFormspark({formId:FORM_ID})


 

  return (
    <React.Fragment>
      <div className="flex justify-center bg-gray-100 py-10">
        <img className="" src="/images/contact.svg" alt=""/>
     
      <Formik
      initialValues={{name:'',email:'',message:""}}
      onSubmit={async (values,{setSubmitting})=>{
      await submit(values)
      alert('Form submitted')
      ;setSubmitting(false)
      }}>
        <Form className="flex flex-col justify-center ml-6 ">
         <label className="text-xl mb-2" htmlFor="name">NAME:</label>
          <Field className="focus:outline-none focus:ring-2 ring-green-600 px-3 py-2 w-96 mb-5 rounded-sm " placeholder="Your Name" type="text" name="name" />
   
          <label className="text-xl mb-2"  htmlFor="email">E-MAIL:</label>
          <Field className="focus:outline-none focus:ring-2 mb-5 ring-green-600 px-3 py-2 w-96 rounded-sm " placeholder="Your Email" type="email" name="email"  />
      
          <label className="text-xl mb-2"  htmlFor="message">MESSAGE:</label>
          <Field as='textarea' rows={5} className="focus:outline-none focus:ring-2 ring-green-600 px-3 py-2 w-96 rounded-sm " placeholder="Write message"  name="message"/>
          <button className="bg-green-600 font-semibold focus:outline-none text-white rounded-sm mt-10 px-3 py-2" type="submit" disabled={submitting}>MESSAGE</button>
        </Form>

      </Formik>
      </div>
    </React.Fragment>
    
  );

 }
export default Contactme
