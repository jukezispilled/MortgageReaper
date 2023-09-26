import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const OfferForm = () => {
  const handleSubmit = async (values, actions) => {
    try {
      await axios.post('https://mortgage-reaper.vercel.app/api/email', values );

      console.log('Email sent successfully!');
      actions.setSubmitting(false);
    } catch (error) {
      console.error('Error sending email:', error);
      actions.setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City/State/Zipcode is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const offer = <div>Get me an Offer&nbsp;💰</div>

  return (
                <div>
                    <Formik
                        initialValues={{
                            name: '',
                            address: '',
                            city: '',
                            email: '',
                            message: '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting, errors, touched }) => (
                            <Form className="rounded-lg text-xl">
                                <div className="mb-4">
                                    <label className="block font-medium mb-2" htmlFor="name">
                                        Full Name
                                    </label>
                                    <Field
                                        className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tightbg-white"
                                        name="name"
                                        placeholder="John Doe" 
                                        />
                                        {errors.name && touched.name && <div className="text-red-500">{errors.name}</div>}
                                </div>
                                <div className="mb-4">
                                    <label className="block font-medium mb-2" htmlFor="address">
                                        Address
                                    </label>
                                    <Field
                                        className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight bg-white"
                                        name="address"
                                        placeholder="123 Apple Street"
                                        />
                                        {errors.address && touched.address && <div className="text-red-500">{errors.address}</div>}
                                    </div>
                                    <div className="mb-4">
                                    <label className="block font-medium mb-2" htmlFor="city">
                                        City/State/Zipcode
                                    </label>
                                    <Field
                                        className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight bg-white"
                                        name="city"
                                        placeholder="Syracuse, NY 13215"
                                        />
                                        {errors.city && touched.city && <div className="text-red-500">{errors.city}</div>}
                                    </div>
                                <div className="mb-4">
                                    <label className="block font-medium mb-2" htmlFor="email">
                                        Your Email
                                    </label>
                                    <Field
                                        className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight bg-white"
                                        name="email"
                                        placeholder="JohnDoe@gmail.com" 
                                        />
                                        {errors.email && touched.email && <div className="text-red-500">{errors.email}</div>}
                                </div>
                                    <div className="mb-4">
                                        <label className="block font-medium mb-2" htmlFor="message">
                                            Message
                                        </label>
                                        <Field
                                            className="appearance-none h-24 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight bg-white"
                                            name="message"
                                            placeholder="Message"
                                            component="textarea" 
                                        />
                                        {errors.message && touched.message && <div className="text-red-500">{errors.message}</div>}
                                    </div>
                                    <button
                                        className="bg-green-600 w-full text-white shadow text-xl font-semibold py-2 px-4 rounded-lg transition ease-in duration-200"
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Sending Details...' : offer}
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
    )
}

export default OfferForm;