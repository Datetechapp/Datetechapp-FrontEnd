import './modalrestrictedregistration.css';
import { Button } from '../../common/button';
import { ReactComponent as CloseIkon } from '../../../assets/ModalAuth/btn-close.svg';
import { useState, useEffect } from 'react';
import { FC } from 'react';

const title: string = `Sorry but you can't use our app until \n you are 18 years old. `


export const ModalRestrictedRegistration: FC = () => {

	const [stateModal, setModal] = useState<boolean>(false);

	useEffect(() => {
		setModal(true);
		document.body.style.overflow = "hidden";

	})

	const handleNotShowModal = () => {
		setModal(false)
		document.body.style.overflow = "unset";

	}

	return (
		<>
			{stateModal && (
				<div className='modalwindow2'>
					<div className='modalwindow2__close'>
						<div className='btn__icon2' onClick={handleNotShowModal}>
							<CloseIkon />
						</div>

					</div>
					<h2 className='modal-title'>{title}</h2>

					<Button className='btn-close' onClick={handleNotShowModal}>ОК</Button>
				</div >

			)}

		</>

	)
}