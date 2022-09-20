import React from 'react';
 // import './Modal.scss';
import './Modal.css';


export const MODAL_TYPE = {
    MANUAL_DISCOVERY: 'manual-discovery',
    EXPORT: 'export',
    SUGGESTIONS: 'suggestions',
    SUGGESTIONS_DENIED: 'suggestions-denied',
};

const Modal = ({ isModalOpen, closeModal, children }) => {
    return (
        <div
            className={
                isModalOpen
                    ? 'modal-container'
                    : 'modal-container modal--closed'
            }
        >
            <div className='modal-overlay' onClick={closeModal} />
            <div onClick={closeModal} />
            <div className={'modal-content'}>{children}</div>
        </div>
    );
};

export default Modal;
