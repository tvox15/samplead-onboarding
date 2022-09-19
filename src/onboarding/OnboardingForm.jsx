import { useState, useEffect } from 'react';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import "./onboarding.css";
import logo from "../assets/images/logo.png";
import LoadingBar from 'react-top-loading-bar'

import { pages } from './PageData';
import SingleInputTemplate from './templates/SingleInputTemplate';
import MultipleInputTemplate from './templates/MultipleInputTemplate';
import CheckboxInputTemplate from './templates/CheckboxInputTemplate';
import WelcomePage from './pages/WelcomePage';
import GeoLocationsPage from './pages/GeoLocationsPage';
import TargetTitlesPage from './pages/TargetTitlesPage';



const OnboardingForm = () => {

    const [currentPage, setCurrentPage] = useState(0);
    const [progress, setProgress] = useState(0);

    const [formAnswers, setFormAnswers] = useState({
        fullName: "",
        companyName: "",
        workEmail: "",
        companyWebsite: "",

    });

    useEffect(() => {
        setProgress((currentPage + 1) * 100 / pages.length);
    }, [currentPage])


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

    const handleNavClick = (action, response_obj_array) => {

        // This is where you send the HTTP request to the server
        console.log('action:', action, 'response', response_obj_array);
        if (action === "previous") {
            setCurrentPage(currentPage - 1);
            return;
        }

        if (currentPage === 0) return nextPage();
        if (action === "next") {
            response_obj_array.forEach((obj) => {
                updateFormAnswers(obj.key, obj.value);
            })
        }

        nextPage();
    }

    const get_current_page = (currentPage) => {
        let page = pages[currentPage];
        switch (page.template) {
            case "WelcomePage":
                return <WelcomePage
                    key={currentPage}
                    inputHeader={page.inputHeader}
                    subheaderText={page.subheaderText}
                    handleNavClick={handleNavClick}
                />
            case "SingleInputTemplate":
                return <SingleInputTemplate
                    key={currentPage}
                    inputHeader={page.inputHeader}
                    inputKey={page.inputKey}
                    subheaderText={page.subheaderText}
                    progressBarText={page.progressBarText}
                    progressBarFill={page.progressBarFill}
                    handleNavClick={handleNavClick}
                />
            case "MultipleInputTemplate":
                return <MultipleInputTemplate
                    key={currentPage}
                    inputHeader={page.inputHeader}
                    inputKey={page.inputKey}
                    subheaderText={page.subheaderText}
                    addText={page.addText}
                    input_limit={page.input_limit}
                    placeholder={page.placeholder}
                    progressBarText={page.progressBarText}
                    progressBarFill={page.progressBarFill}
                    handleNavClick={handleNavClick}
                />
            case "CheckboxInputTemplate":
                return <CheckboxInputTemplate
                    key={currentPage}
                    inputHeader={page.inputHeader}
                    inputKey={page.inputKey}
                    options={page.options}
                    custom_options={page.custom_options}
                    progressBarText={page.progressBarText}
                    progressBarFill={page.progressBarFill}
                    handleNavClick={handleNavClick}
                />
            case "GeolocationTemplate":
                return <GeoLocationsPage
                    key={currentPage}
                    options={page.options}
                    progressBarText={page.progressBarText}
                    progressBarFill={page.progressBarFill}
                    handleNavClick={handleNavClick}
                />
            case "TargetTitlesPage":
                return <TargetTitlesPage
                    key={currentPage}
                    progressBarText={page.progressBarText}
                    progressBarFill={page.progressBarFill}
                    handleNavClick={handleNavClick}
                />
        }
    }


    return (
        <div className="page-container">
            <LoadingBar
                color='#5F2A94'
                progress={progress}
                height={3}
                transitionTime={100}
                onLoaderFinished={() => setProgress(0)}
            />
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

            {get_current_page(currentPage)}


        </div>);

}
export default OnboardingForm;