import { useState } from 'react';
import { Button, Modal } from 'sg-library';
import { customTheme } from '../utils/sg-library-theme';

const DemoModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prevIsOpen) => !prevIsOpen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='container'>
      <Button
        handleClick={toggleModal}
        classname='home__btn'
        content='Open modal'
        theme='light'
        customTheme={customTheme}
      />

      <Modal
        isOpen={isModalOpen}
        toggleModal={toggleModal}
        // title='Title'
        btnText='close'
        escapeClose={false}
        overlayClickClose={false}
        // showClose={false}
        fadeDuration={300}
        theme='light'
        customTheme={customTheme}
      >
        <p>Modal is open !</p>
      </Modal>
    </div>
  );
};

export default DemoModal;
