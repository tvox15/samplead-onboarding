import React, { useState } from 'react'
import { FileUploader } from "react-drag-drop-files";
import { DISABLE_ERRORS } from '../../utils/constants';
import NavButtons from '../../components/NavButtons/NavButtons';

const fileTypes = ["JPEG", "PNG", "GIF", "PDF", "DOCX"];

const MarketingMaterialsPage = ({ progressBarText, progressBarFill, handleNavClick }) => {
    const [errorMsg, setErrorMsg] = useState("");
    const [files, setFiles] = useState([]);

    const handleChange = (file) => {
        console.log('uploading', file)
        setFiles([...files, ...Array.from(file)]);
        console.log('files', files);
    };

    const next_clicked = (action) => {
        setErrorMsg(false);
        let hasError = false;
        // validate input
        if (action === "next") {
            if (files.length === 0) {
                setErrorMsg("Please upload a file");
                hasError = true;
            }
        }

        if (hasError && !DISABLE_ERRORS) return;
        let response_obj = [{
            key: "file",
            value: files
        }]
        handleNavClick(action, response_obj);
    }

    const file_upload_box_child = (
        <div className="file-upload-box-child">
            <div className="file-upload-box-child-text">
                <p>Click to browse or<br></br> drag and drop your files</p>
            </div>
        </div>
    )


    return (
        <>
            <div className="form-container">
                <div className="input-header">
                    <div className="input-header-text"><p>Marketing Materials</p></div>
                </div>
                <div className={`subheader centered`}>
                    <div className="subheader-text"><p>Specific marketing materials to the product you are promoting</p></div>
                </div>
                <FileUploader
                    multiple={true}
                    handleChange={handleChange}
                    name="file"
                    types={fileTypes}
                    label="Click to browse or drag and drop your files"
                    classes="file-uploader-box"
                // children={file_upload_box_child}           
                />


                <div>
                    {files ? <div className="uploaded-file-list-container">
                        {files.map((file, index) => {
                            return <p key={index} className="uploaded-files">{file.name}</p>
                        })}
                    </div>
                        : "no files uploaded yet"
                    }
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
