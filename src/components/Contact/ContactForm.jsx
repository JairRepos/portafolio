import React, { useContext, useState } from "react";

/* Custom Hook */
import { useForm } from "../../hooks/useForm";

/* React Animations */
import { motion } from "framer-motion";

/* Sweet Alert */
import swal from "sweetalert";

/* useContext */
import { LanguageContext } from "../../useContext/LanguageContext";

/* EmailJS */
import emailjs from "emailjs-com";

export const ContactForm = () => {
  const [error, setError] = useState(false);

  const {language} = useContext(LanguageContext);

  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [contactForm, handleInputChange, reset] = useForm(formulario);

  const { nombre, email, asunto, mensaje } = contactForm;

  const title_result = language ? 'Email enviado con éxito' : 'Email sent successfully';
  const text_result = language ? '¡Ahora estamos en contacto! :)' : 'We are now in contact! :)';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      nombre.trim() === "" ||
      email.trim() === "" ||
      asunto.trim() === "" ||
      mensaje.trim() === ""
    ) {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 3000);

      return;
    }

    setFormulario(contactForm);

    function sendEmail() {
      emailjs
        .sendForm(
          "gmailMessage",
          "template_ehwcfhi",
          e.target,
          "user_gdK7kB73M42t6K9bsEfFP"
        )
        .then(
          (result) => {
            swal({
              title: title_result,
              text: text_result,
              icon: "success",
              button: [],
              timer: "3000",
            });
            reset();
          },
          (error) => {
            console.log(error);
          }
        );
    }

    sendEmail();
  };

  return (
    <div
      className="col-span-1 mt-16 lg:w-3/4
                        lg:col-span-4 lg:ml-5 lg:mt-0 lg:ml-16
                        xl:ml-32"
      style={{ fontFamily: "Poppins" }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="text-white text-2xl font-medium mb-20 text-center"
      >
        {language ? 'Formulario de contacto' : 'Contact Form'}
      </motion.h2>

      {error && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white -mt-7 mb-5 p-2 w-full text-sm bg-pink-800"
        >
          {language ? 'Todos los campos son obligatorios.' : 'All fields are required.'}
        </motion.p>
      )}    

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-5 xl:gap-x-10">
          <motion.input
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            type="text"
            name="nombre"
            value={nombre}
            placeholder={language ? 'Nombre' : 'Name'}
            autoComplete="off"
            onChange={handleInputChange}
            className="bg-transparent text-white text-sm outline-none border-b border-gray-700 focus:border-pink-600 duration-700 p-2 mb-10"
          ></motion.input>
          <motion.input
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            type="email"
            name="email"
            value={email}
            placeholder={language ? 'Email' : 'Email'}
            autoComplete="off"
            onChange={handleInputChange}
            className="bg-transparent text-white text-sm outline-none border-b border-gray-700 focus:border-pink-600 duration-700 p-2 mb-10"
          ></motion.input>
        </div>
        <div className="grid grid-cols-1">
          <motion.input
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 1 }}
            type="text"
            name="asunto"
            value={asunto}
            placeholder={language ? 'Asunto' : 'Subject'}
            autoComplete="off"
            onChange={handleInputChange}
            className="bg-transparent text-white text-sm outline-none border-b border-gray-700 focus:border-pink-600 duration-700 p-2 mb-10"
          ></motion.input>
        </div>
        <div className="grid grid-cols-1">
          <motion.textarea
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 1 }}
            type="text"
            name="mensaje"
            value={mensaje}
            placeholder={language ? 'Escribe un mensaje...' : 'Write a message...'}
            autoComplete="off"
            onChange={handleInputChange}
            className="bg-transparent text-white text-sm outline-none border-b border-gray-700 focus:border-pink-600 duration-700 p-2 mb-10 h-16 xl:h-24 resize-none"
          ></motion.textarea>
        </div>
        <div className="grid grid-cols-1">
          <div className="w-full text-center">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9, duration: 1 }}
              type="submit"
              className="bg-pink-800 outline-none focus:outline-none hover:bg-pink-600 w-full md:w-64 uppercase text-white text-sm p-3 mb-10 transform duration-700 hover:-translate-y-1"
            >
              {language ? 'Contactar' : 'Contact'}
            </motion.button>
          </div>
        </div>
      </form>
    </div>
  );
};
