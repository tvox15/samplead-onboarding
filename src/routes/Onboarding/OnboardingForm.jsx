import { useState, useEffect } from 'react';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import "./onboarding.css";
import logo from "../../assets/images/logo.png";
import LoadingBar from 'react-top-loading-bar'
import Header from '../../components/Header';

import { pages } from './PageData';
import SingleInputTemplate from './templates/SingleInputTemplate';
import MultipleInputTemplate from './templates/MultipleInputTemplate';
import CheckboxInputTemplate from './templates/CheckboxInputTemplate';
import WelcomePage from './pages/WelcomePage';
import GeoLocationsPage from './pages/GeoLocationsPage';
import TargetTitlesPage from './pages/TargetTitlesPage';
import MarketingMaterialsPage from './pages/MarketingMaterialsPage';



const OnboardingForm = () => {

    const [currentPage, setCurrentPage] = useState(0);
    const [progress, setProgress] = useState(0);
    const [previousPageClass, setPreviousPageClass] = useState("previous-page");
    const [currentPageClass, setCurrentPageClass] = useState("current-page");
    const [nextPageClass, setNextPageClass] = useState("next-page");
    const [visiblePages, setVisiblePages] = useState([]);

    const [formAnswers, setFormAnswers] = useState({
        fullName: "",
        companyName: "",
        workEmail: "",
        companyWebsite: "",

    });

    useEffect(() => {
        setProgress(((currentPage + 1) * 100 / pages.length) - 1);
    }, [currentPage])


    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const previousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const updateFormAnswers = (key, value) => {
        // This should change to an HTTP request
        setFormAnswers({ ...formAnswers, [key]: value });
        console.log(formAnswers);
    }

    const handleNavClick = (action, response_obj_array) => {

        // This is where you send the HTTP request to the server
        console.log('action:', action, 'response', response_obj_array);
        if (action === "previous") { // remove later for live server
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
                    handleNavClick={handleNavClick}
                />
            case "CheckboxInputTemplate":
                return <CheckboxInputTemplate
                    key={currentPage}
                    inputHeader={page.inputHeader}
                    inputKey={page.inputKey}
                    options={page.options}
                    customOptions={page.custom_options}
                    customInputLimit={page.customInputLimit}
                    placeholder={page.placeholder}
                    checkboxWidth={page.checkboxWidth}
                    columns={page.columns}

                    handleNavClick={handleNavClick}
                />
            case "GeolocationTemplate":
                return <GeoLocationsPage
                    key={currentPage}
                    options={page.options}
                    checkboxWidth={page.checkboxWidth}
                    columns={page.columns}
                    handleNavClick={handleNavClick}
                />
            case "TargetTitlesPage":
                return <TargetTitlesPage
                    key={currentPage}
                    input_limit={page.input_limit}
                    handleNavClick={handleNavClick}
                />
            case "MarketingMaterialsPage":
                return <MarketingMaterialsPage
                    key={currentPage}
                    handleNavClick={handleNavClick}
                />
        }
    }

    useEffect(() => {

        let visible_pages = pages.map((page, index) => {
            if (index <= currentPage - 2) return;     // return if page is 2 before current page
            if (index >= currentPage + 2) return;     // return if page is 2 past current page
            return (
                <div className={`form-container ${currentPage === index ? ` ${currentPageClass}` : currentPage > index ? previousPageClass : nextPageClass}`} key={index}>
                    {get_current_page(currentPage)}
                </div>
            )
        });
        setVisiblePages(visible_pages);


    }, [currentPage])


    if (currentPage === pages.length) {
        return (<>
            <Header logoOnly={true} />
            <div className="page-container">
                Congratulations on completing onboarding!
            </div>
        </>)
    }



    return (
        <>
            <LoadingBar
                color='#5F2A94'
                progress={progress}
                height={3}
                transitionTime={100}
                onLoaderFinished={() => setProgress(0)}
            />
            <Header logoOnly={true} />
            <div className="page-container">
                <div className="page-header">
                    <div className="progress-bar-container">
                        <div className="page-header-progress">
                            {currentPage !== 0 && <div className="page-header-progress-bar">
                                <ProgressBar label={pages[currentPage].progressBarText} progress={pages[currentPage].progressBarFill} />
                            </div>}
                        </div>
                    </div>
                </div>

               {/*  {visiblePages} */}


          {get_current_page(currentPage)} 
               
            </div>
        </>);

}
export default OnboardingForm;