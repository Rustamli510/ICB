import React from "react";
import { Route, Routes } from "react-router-dom";
import OurMission from "../pages/OurMission";
import Header from "../components/common/Header";
import Home from "../pages/Home";
import MeetOurTeam from "../pages/MeetOurTeam";
import Footer from "../components/common/Footer";
import AffiliationsRecognitions from "../pages/AffiliationsRecognitions";
import WorkWithUs from "../pages/WorkWithUs";
import SpanishCourse from "../pages/SpanishCourse";
import StudentLife from "../pages/StudentLife";
import TermsAndConditions from "../pages/TermsAndConditions";
import ContactUs from "../pages/ContactUs";
import OurProgram from "../pages/OurProgram";
import ScrollToTop from "../components/function/ScrollToTop";
import FAQ from "../pages/FAQ";

function Layout() {
    return (
        <>
            <Header />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/our-mission" element={<OurMission />} />
                <Route path="/meet-our-team" element={<MeetOurTeam />} />
                <Route path="/affiliations-recognitions" element={<AffiliationsRecognitions />} />
                <Route path="/study-program-certification" element={<OurProgram />} />
                <Route path="/work-with-us" element={<WorkWithUs />} />
                <Route path="/terms-conditions" element={<TermsAndConditions />} />
                <Route path="/spanish-course" element={<SpanishCourse />} />
                <Route path="/student-life" element={<StudentLife />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path='/faq' element={<FAQ />} />
            </Routes>
            <Footer />
        </>
    );
}

export default Layout;
