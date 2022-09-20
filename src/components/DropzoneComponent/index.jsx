import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './DropzoneComponent.css';
import { CSV_FILE_TYPE } from '../../utils/constants';

function DropzoneComponent({
    dragText,
    boxText,
    acceptedFileType,
    handleFileDrop,
}) {
    const onDrop = useCallback((acceptedFiles) => {
        if (handleFileDrop) {
            handleFileDrop(acceptedFiles);
        }
        // logger(acceptedFiles);
    }, [handleFileDrop]);

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
    } = useDropzone({
        onDrop,
        accept: acceptedFileType || CSV_FILE_TYPE,
    });

    return (
        <div className='dropzone-wrapper'>
            <div
                {...getRootProps({
                    className: `dropzone 
          ${isDragAccept && 'dropzoneAccept'} 
          ${isDragReject && 'dropzoneReject'}`,
                })}
            >
                <input {...getInputProps()} />
                {isDragActive ? (
                    // <p className={'samplead-body'}>Drop the files here ...</p>
                    <p className={'samplead-body'}>{dragText}</p>
                ) : (
                    <p className={'samplead-body'}>{boxText}</p>
                )}
            </div>
        </div>
    );
}

export default DropzoneComponent;
