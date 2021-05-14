import Modal from 'react-modal';
import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {
  
  const [ isNewTransactionOpen, setIsNewTransactionOpen ] = useState( false );

  function handleOpenNewTransactionModal(){
      setIsNewTransactionOpen(true);
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <Modal 
          isOpen={isNewTransactionOpen}
          onRequestClose={handleCloseNewTransactionModal}
      >
          <h1>Aeee uhuu, passei por aqui no modal, vamo que vamo</h1>
      </Modal>

      <GlobalStyle />
    </>
  );
}