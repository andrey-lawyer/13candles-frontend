'use client';

import { useState } from 'react';

import { ButtonOpenModal } from '@/components/ui/ButtonOpenModal';
import { Portal } from '@/components/ui/Portal';
import { ModalWindow } from '@/components/ui/ModalWindow';

import { IInfoProps } from './type';

import { arrayContent } from './arrayContent';

export const Information = ({ info_text, info }: IInfoProps) => {
  const [showModal, setShowModal] = useState(false);
  const [typeContent, setTypeContent] = useState('');
  const onModalClose = () => setShowModal(false);
  const onModalOpen = () => setShowModal(true);

  return (
    <div className="flex flex-col">
      <h2 className=" mb-3 text-center text-base font-bold md:text-start">
        {info_text}
      </h2>
      <ul className="flex flex-col gap-2 text-center text-base md:gap-3 md:text-start">
        {info.map((el, ind) => (
          <li key={ind}>
            <ButtonOpenModal
              className="link "
              setTypeContent={setTypeContent}
              onModalOpen={onModalOpen}
              typeContent={arrayContent[ind]}
            >
              {el}
            </ButtonOpenModal>
          </li>
        ))}
      </ul>
      <Portal onModalClose={onModalClose} showModal={showModal}>
        <ModalWindow
          className="text-black"
          onModalClose={onModalClose}
          showModal={showModal}
        >
          {typeContent === 'contract' && (
            <div className="h-[800px]">content of contract</div>
          )}
          {typeContent === 'guarantees' && (
            <div className="h-[600px]">content of guarantees</div>
          )}
          {typeContent === 'delivery' && (
            <div className="h-[400px]">content of delivery</div>
          )}
          {typeContent === 'rules' && (
            <div className="h-[500px]">content of rules</div>
          )}
        </ModalWindow>
      </Portal>
    </div>
  );
};