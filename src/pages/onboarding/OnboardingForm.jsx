import react, { useState } from 'react';

import WelcomePage from './pages/WelcomePage';
import FullNamePage from './pages/FullNamePage';
import CompanyNamePage from './pages/CompanyNamePage';
import WorkEmailPage from './pages/WorkEmailPage';
import CompanyWebsitePage from './pages/CompanyWebsitePage';

import ProgressBar from '../../components/ProgressBar/ProgressBar';
import "./onboarding.css";

import logo from "../../assets/images/logo.png";
import WhatToTrackPage from './pages/WhatToTrackPage';
import CompanyHeadcountPage from './pages/CompanyHeadcountPage';
import TargetIndustriesPage from './pages/TargetIndustriesPage';
// import TargetTitlesPage from './pages/TargetTitlesPage';
import SeniorityLevelPage from './pages/SeniorityLevelPage';
import FunctionOfTargetRolePage from './pages/FunctionOfTargetRolePage';

 

/*
    formAnswers = {
        fullName, - single input
        companyName, - single input
        workEmail, - single input
        companyWebsite, - single input

        whatToTrack, - multiple choice
        geoLocations: - multiple choice, radio with input,
        companyHeadcount, - multiple choice
        targetIndustries - multiple choice
        targetTitles - multiple text input, radio with input
        seniorityLevel - multiple choice
        functionOfTargetRole - multiple choice
        targetPersonaDescription - single input
        competitors: Up to 3 URL inputs
        linkedinProfiles: multiple text input 
        linkedinGroups: multiple text input  
        perfectCustomers: multiple text input  
        keyWords: multiple text input (group of 2)
        influencers: multiple text input (group of 2)
        hashtags: multiple text input (group of 2)
        marketingMaterials: file upload
        
    }
*/

const OnboardingForm = () => {

    const [currentPage, setCurrentPage] = useState(0);

    const [formAnswers, setFormAnswers] = useState({
        fullName: "",
        companyName: "",
        workEmail: "",
        companyWebsite: "",
    });

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const previousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const updateFormAnswers = (key, value) => {
        setFormAnswers({ ...formAnswers, [key]: value });
        console.log(formAnswers);
    }

    const handleNavClick = (action, key, value) => {
        console.log('action:', action, 'key:', key, 'value:', value);
        if (action === "next") {
            updateFormAnswers(key, value);
        }
        console.log(formAnswers);
        nextPage();
    }

    const pages = [
        <WelcomePage handleNavClick={handleNavClick} />,
        <FullNamePage handleNavClick={handleNavClick} />,
        <CompanyNamePage handleNavClick={handleNavClick} />,
        <WorkEmailPage handleNavClick={handleNavClick} />,
        <CompanyWebsitePage handleNavClick={handleNavClick} />,
        <WhatToTrackPage handleNavClick={handleNavClick} />,
        // <GeoLocationsPage  handleNavClick={handleNavClick} />
        <CompanyHeadcountPage handleNavClick={handleNavClick} />,
        <TargetIndustriesPage handleNavClick={handleNavClick} />,
        // <TargetTitlesPage handleNavClick={handleNavClick} />,
       <SeniorityLevelPage handleNavClick={handleNavClick} />,
        // <FunctionOfTargetRolePage handleNavClick={handleNavClick} />,
        // <TargetPersonaDescriptionPage handleNavClick={handleNavClick} />,
        // <CompetitorsPage handleNavClick={handleNavClick} />,
        // <LinkedinProfilesPage handleNavClick={handleNavClick} />,
        // <LinkedinGroupsPage handleNavClick={handleNavClick} />,
        // <PerfectCustomersPage handleNavClick={handleNavClick} />,
        // <KeyWordsPage handleNavClick={handleNavClick} />,
        // <InfluencersPage handleNavClick={handleNavClick} />,
        // <HashtagsPage handleNavClick={handleNavClick} />,
        // <MarketingMaterialsPage handleNavClick={handleNavClick} />,

    ];

    return (
        <div className="page-container">
            <div className="page-header">
                <div className="page-header-title">
                    <img src={logo} alt="logo" />
                </div>
                {/*   <div className="page-header-progress">
                    <div className="page-header-progress-bar">
                        <ProgressBar label="test" progress="25" />
                    </div>
                </div> */}
            </div>

            {pages[currentPage]}
            {/*  <button onClick={()=> {nextPage()}}>Next</button> */}


        </div>);

}
export default OnboardingForm;