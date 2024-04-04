import React, { useEffect } from 'react';
import { ModalBg } from './ModalBg';
import { createPortal } from 'react-dom';
import "./style.css";
import Image from 'next/image';
import ModalLogo from "@/assets/modal-logo.svg";
import LightShellLogo from "@/assets/shell-light-logo.svg";
import { PrimaryButton } from '../Button';
import Close from '../icons/close';
import Input from '../Input/Input';
import { emailRegex } from '@/constants/regex';
import { SuccessStamp } from '../SuccessStamp/SuccessStamp';
import { PalmOne } from '../Palms/PalmOne';
import { PalmTwo } from '../Palms/PlamTwo';
import { PalmThree } from '../Palms/PalmThree';
import { PalmFour } from '../Palms/PlamFour';

interface ModalProps {
    isOpen: boolean;
    closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
    const [email, setEmail] = React.useState('');
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const [isCollapsed, setIsCollapsed] = React.useState(false);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //TODO SEND EMAIL TO SERVER
        setIsSubmitted(true);
    };

    const isButtonDisabled = email === '' || !emailRegex.test(email);

    useEffect(() => {
        if (isSubmitted) {
            const timer = setTimeout(() => {
                setIsCollapsed(true);
            }, 500); // Czas oczekiwania na zakończenie animacji modalu
            return () => clearTimeout(timer);
        }
    }, [isSubmitted]);

    return isOpen ? createPortal(
        <div id="modal-bg" className={`modal-bg ${isOpen ? "open" : "close"}`}>
            <div id="modal" className={`modal ${isOpen ? "open" : "close"} ${isSubmitted ? "collapsed" : ""}`}>
                <div className={`bg-outer ${isSubmitted ? "collapsed" : ""}`}>
                    <ModalBg />
                </div>
                <div className={`modal-left-side ${isSubmitted ? "collapsed" : ""}`}>
                    <div className='flex items-start justify-start flex-col gap-8'>
                        <Image src={ModalLogo} alt="Shell Logo" width={22.83} height={56} />
                        <div className='modal-desc gap-5 flex flex-col justify-start items-start'>
                            <h3 className='heading3 px-0 mx-0'>The most fun ETH event and Hackathon.</h3>
                            <p className='body2 px-0 mx-0'>
                                Conference no one wants to miss. ETH event in paradise. Suits are forbidden. Necktie free event.
                            </p>
                        </div>
                    </div>
                    <div className='powered-desc flex gap-1 justify-start items-center'>
                        <p className='caption1 px-0 mx-0'>
                            Powered by
                        </p>
                        <Image src={LightShellLogo} alt="Shell Logo" width={113.86} height={24} />
                    </div>
                </div>
                <div className='right-outer'>
                    {isSubmitted ? (
                        <div className='modal-content success-wrapper relative flex flex-col items-center justify-between pt-[65%] md:pt-[55%] p-6'>
                            <div className={`absolute stamp`}>
                                <SuccessStamp />
                            </div>
                            <div className='palm palm1'>
                                <PalmOne />
                            </div>
                            <div className='palm palm2'>
                                <PalmTwo />
                            </div>
                            <div className='palm palm3'>
                                <PalmThree />
                            </div>
                            <div className='palm palm4'>
                                <PalmFour />
                            </div>
                            <div className='content flex flex-col justify-center items-center gap-4'>
                                <h3 className='heading3'>ALOHA!</h3>
                                <p className='text-center body2 content-text'>
                                    You are on our list, we will notify you immediately when tickets go on sale.
                                </p>
                            </div>
                            <div className='w-full justify-self-end flex'>
                                <PrimaryButton variant="secondary" onClick={closeModal} className='w-full'>
                                    Close
                                </PrimaryButton>
                            </div>

                        </div>
                    ) : (
                        <form onSubmit={onSubmit} className="modal-content flex flex-col justify-between items-stretch p-6">
                            <div className='heading flex flex-col gap-1 justify-start items-start w-full'>
                                <div className='head flex justify-between items-center w-full'>
                                    <h3 className='heading4 px-0 mx-0'>Sign up</h3>
                                    <PrimaryButton variant="secondary" onlyIcon onClick={closeModal} type='button' className='in-modal-button'>
                                        <Close />
                                    </PrimaryButton>
                                </div>
                                <div className='body flex flex-col w-full gap-8 justify-start items-start'>
                                    <p className='body2 max-w-[290px] px-0 mx-0'>
                                        Leave us your email now and we'll let you know when tickets go on sale.
                                    </p>
                                    <Input onChange={(e) => handleOnChange(e)} value={email} />
                                </div>
                            </div>
                            <PrimaryButton variant="primary" disabled={isButtonDisabled} type='submit'>
                                Sign up
                            </PrimaryButton>
                        </form>
                    )}
                </div>
            </div>
        </div>
        , document.body) : null
};


export default Modal;