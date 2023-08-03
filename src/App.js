import React, { useState } from 'react';
import PrimaryButton from './components/Button.js';
import ModalTask from './components/Modal.js';



// import { Space, Layout, Typography } from 'antd';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () =>{
    setIsModalOpen(true);
  };
  const onClose = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
  <>
     {/* <Title level={2}>TodoList App</Title>  */}
    <PrimaryButton onClick={showModal}/>

    <ModalTask open={isModalOpen} onCancel={handleCancel} onClick={onClose}/>
  </>
  );
}

export default App;
