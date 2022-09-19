import React from 'react'

const  MarketingMaterialsPage = ({ progressBarText, progressBarFill}) => {
    return (
        <>
            <div className="form-container">
                <div className="input-header">
                    <div className="input-header-text"><p>Marketing Materials</p></div>
                </div>
               <div className={`subheader centered`}>
                    <div className="subheader-text"><p>Specific marketing materials to the product you are promoting</p></div>
                </div>
               
                <div className="input-error-msg">
                    {errorMsg && <div className="error-msg">{errorMsg}</div>}
                </div>
            </div>
            <NavButtons handleNavClick={next_clicked} />
        </>
    )
}

export default MarketingMaterialsPage;
