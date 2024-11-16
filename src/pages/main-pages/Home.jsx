import React from 'react'
import Banner from '../../components/Banner'
import ContactForm from '../../components/ContactForm'
import LearningLanguage from '../../components/LearningLanguage'
import ExploreSection from '../../components/repeated/ExploreSection'

function Home() {
    return (
        <div>
            <Banner />
            <LearningLanguage />
            <ExploreSection/>
            <ContactForm />
        </div>
    )
}

export default Home