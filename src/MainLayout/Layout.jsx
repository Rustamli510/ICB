import React from "react";
import { Route, Routes } from "react-router-dom";

//Routes
import OurMission from "../pages/OurMission";
import Header from "../components/common/Header";
import Home from "../pages/Home";
import MeetOurTeam from "../pages/MeetOurTeam";
import Footer from "../components/common/Footer";
import AffiliationsRecognitions from "../pages/AffiliationsRecognitions";
import WorkWithUs from "../pages/WorkWithUs";
import SpanishCourse from "../pages/courses/SpanishCourse";
import StudentLife from "../pages/StudentLife";
import TermsAndConditions from "../pages/TermsAndConditions";
import ContactUs from "../pages/ContactUs";
import OurProgram from "../pages/OurProgram";
import ScrollToTop from "../components/function/ScrollToTop";
import FAQ from "../pages/FAQ";
import EnglishCourse from "../pages/courses/EnglishCourse";
import CatalanCourse from "../pages/courses/CatalanCourse";
import RussianCourse from "../pages/courses/RussianCourse";
import Visa from "../pages/Visa";
import Accommodation from "../pages/Accommodation";
import ContactButton from "../components/UI/ContactButton";

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
                <Route path='/accommodation' element={<Accommodation/>}/>
            </Routes>
            <Footer />
        </>
    );
}

export default Layout;
