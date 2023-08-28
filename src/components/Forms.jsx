import { useState } from 'react';
import { validateEmail } from "../utils/helpers";

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [fieldErrors, setFieldErrors] = useState({ name: "", email: "", message: "", });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFieldErrors((prevFieldErrors) => ({
            ...prevFieldErrors, [name]: "",
        }));

        if (name === "name") {
            setName(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "message") {
            setMessage(value);
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (!value.trim()) {
            setFieldErrors((prevFieldErrors) => ({
                ...prevFieldErrors, [name]: "This field is required.",
            }));
        } else {
            setFieldErrors((prevFieldErrors) => ({
                ...prevFieldErrors, [name]: "",
            }));
        }
    };

    const handleFormSubmit = (e) => {
        if (!validateEmail(email) || !name || !message) {
            e.preventDefault();
            setErrorMessage("Please fill out all the fields correctly.");
            return;
        }
    };

    return (
        <div className='container mx-auto max-w-lg p-4 mt-10 mb-10 border rounded-lg bg-white border-black'>
            <h1 className='text-3xl font-bold mb-4 text-black'>Contact Me</h1>
            <form
              onSubmit={handleFormSubmit}
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
                <input type="hidden" name="form-name" value="contact" />
                <div className='mb-4'>
                    <label htmlFor="Name" className='block text-sm font-medium text-gray-500'>Name:</label>
                    <input
                      value={name}
                      name="name"
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      type="text"
                      placeholder='Your Name'
                      className='mt-1 p-2 border border-black bg-gray-200 text-black placeholder-gray-500 rounded-md w-full'
                    />
                    {fieldErrors.name && (<p className='text-red-500 mt-1'>{fieldErrors.name}</p>)}
                </div>
                <div className='mb-4'>
                    <label htmlFor='email' className='block text-sm font-medium text-gray-600'>Email:</label>
                    <input
                      value={email}
                      name="email"
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      type="email"
                      placeholder='Your Email'
                      className='mt-1 p-2 border border-black bg-gray-200 text-black placeholder-gray-500 rounded-md w-full'
                    />
                    {fieldErrors.email && (<p className='text-red-500 mt-1'>{fieldErrors.email}</p>)}
                </div>
                <div className='mb-4'>
                    <label htmlFor='comment' className='block text-sm font-medium text-gray-600'>Comment:</label>
                    <input
                      value={message}
                      name="message"
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      rows="7"
                      placeholder='Leave comments here'
                      className='mt-1 p-2 border border-black bg-gray-200 text-black placeholder-gray-500 rounded-md w-full'
                    />
                    {fieldErrors.message && (<p className='text-red-500 mt-1'>{fieldErrors.message}</p>)}
                </div>
                <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Submit</button>
              </form>
              {errorMessage && <p className='text-red-500 mt-2'>{errorMessage}</p>}
        </div>
    );
}

export default Form;