import React from 'react';
import Button from '../../components/Button/Button';

import './ConfirmationBox.css';
import Modal from "../Modal";

const ConfirmationBox = props => {
	const { title, message, buttons, visible, onClose } = props;
	return (
		<Modal isModalOpen={visible} closeModal={onClose}>
			<div className='confirmationBox'>
				<div className='confirmationBox__title'>
					<h2>{title}</h2>
					{/*<Icon type='close' onClick={onCancel} />*/}
				</div>
				<div className='confirmationBox__content'>
					{
						message.split("\n").map((part, i) => {
							return <div key={i}>{part}</div>
						})
					}
				</div>
				<div className='confirmationBox__buttons'>
					{
						buttons.map((button, i) => {
							return (
								<div key={i} style={{marginLeft: '10px'}}>
									<Button variant={button.type} onClick={button.action}>
										{ button.title }
									</Button>
								</div>
							)
						})
					}
				</div>
			</div>
		</Modal>
	);
};

export default ConfirmationBox;
