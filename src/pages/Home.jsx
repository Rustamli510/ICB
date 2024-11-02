import React from 'react'
import Banner from '../components/Banner'
import ContactForm from '../components/ContactForm'
import LearningLanguage from '../components/LearningLanguage'

function Home() {
    return (
        <div>
            <Banner />
            <LearningLanguage />
            <ContactForm />
        </div>
    )
}

export default Home