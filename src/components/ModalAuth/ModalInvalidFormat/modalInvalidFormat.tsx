import './modalinvalidformat.css';
import { Button } from '../../common/button';
import { ReactComponent as CloseIkon } from '../../../assets/ModalAuth/btn-close.svg';
import { useState, useEffect } from 'react';
import { FC } from 'react';


const title: string = 'Invalid file format or exceeded the allowed size(1GB)'
const text: string = 'Please upload files only in MP4, MOV, AVI, WMV formats.'

export const ModalInvalidFormat: FC = () => {
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
				<div className='modalwindow' >
					<div className='modalwindow__close'>
						<div className='btn__icon' onClick={handleNotShowModal}>
							<CloseIkon />
						</div>

					</div>
					<h2 className='modal-title'>{title}</h2>
					<p className='modal-text'>{text}</p>
					<Button className='btn-close' onClick={handleNotShowModal}>ОК</Button>
				</div >
			)}

		</>


	)
}
