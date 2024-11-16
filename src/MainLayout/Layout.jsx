import React from "react";
import { Route, Routes } from "react-router-dom";

//Routes
import Header from "../components/common/Header";
import MeetOurTeam from "../pages/secondary-pages/MeetOurTeam";
import Footer from "../components/common/Footer";
import SpanishCourse from "../pages/courses/SpanishCourse";
import ScrollToTop from "../components/function/ScrollToTop";
import EnglishCourse from "../pages/courses/EnglishCourse";
import CatalanCourse from "../pages/courses/CatalanCourse";
import RussianCourse from "../pages/courses/RussianCourse";
import ContactButton from "../components/UI/ContactButton";
import Home from "../pages/main-pages/Home";
import StudentLife from "../pages/primary-pages/StudentLife";
import Visa from "../pages/primary-pages/Visa";
import ContactUs from "../pages/primary-pages/ContactUs";
import Accommodation from "../pages/primary-pages/Accommodation";
import OurMission from "../pages/secondary-pages/OurMission";
import AffiliationsRecognitions from "../pages/secondary-pages/AffiliationsRecognitions";
import OurProgram from "../pages/secondary-pages/OurProgram";
import WorkWithUs from "../pages/secondary-pages/WorkWithUs";
import TermsAndConditions from "../pages/secondary-pages/TermsAndConditions";
import FAQ from "../pages/secondary-pages/FAQ";
import Blog from "../pages/primary-pages/Blog";

function Layout() {
    return (
        <>
            <Header />
            {/* When page changes it will automatically start from the top */}
            <ScrollToTop />
            <ContactButton />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/our-mission" element={<OurMission />} />
                <Route path="/meet-our-team" element={<MeetOurTeam />} />
                <Route path="/affiliations-recognitions" element={<AffiliationsRecognitions />} />
                <Route path="/study-program-certification" element={<OurProgram />} />
                <Route path="/work-with-us" element={<WorkWithUs />} />
                <Route path="/terms-conditions" element={<TermsAndConditions />} />
                <Route path="/spanish-course" element={<SpanishCourse />} />
                <Route path="/english-course" element={<EnglishCourse />} />
                <Route path='/catalan-course' element={<CatalanCourse />} />
                <Route path="/russian-course" element={<RussianCourse />} />
                <Route path="/student-life" element={<StudentLife />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path='/faq' element={<FAQ />} />
                <Route path="/visa" element={<Visa />} />
                <Route path='/accommodation' element={<Accommodation />}/>
                <Route path='/blog' element={<Blog />}/>
            </Routes>
            <Footer />
        </>
    );
}

export default Layout;
