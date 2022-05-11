import React from 'react'
import { ContactForm } from './ContactForm'

/* Components */
import { ContactTitle } from './ContactTitle'

export const ContentContact = () => {
    return (
        <div className="h-screen absolute w-full mx-auto justify-center  content-center     
                        sm:w-full sm:mx-auto sm:px-16                  
                        md:w-full md:mx-auto
                        lg:w-full lg:mx-auto lg:px-12 lg:-my-10
                        xl:px-40
                        ">

            <div className="grid grid-cols-1 w-full mx-auto px-8 mt-24
                            sm:mx-auto sm:pb-5 
                            md:mx-auto                                                      
                            lg:grid-cols-5 lg:mt-52 lg:gap-x-2">

                <ContactTitle />

                <ContactForm />

            </div>

        </div>
    )
}
