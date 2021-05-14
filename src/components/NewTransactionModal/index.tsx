import Modal from 'react-modal';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal( { isOpen, onRequestClose } : NewTransactionModalProps ){
    return(
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        >
            <h1>agora ta saindo direto do componente próprio </h1>
        </Modal>
    );
}