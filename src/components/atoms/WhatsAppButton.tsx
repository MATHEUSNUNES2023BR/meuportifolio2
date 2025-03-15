import React from 'react';
import styled from 'styled-components';
import whatsappIcon from '../../assets/images/icons8-whatsapp-96.png';
interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

// Estilizando o botão com styled-components
const FloatingButton = styled.button`
  position: fixed;
  bottom: 4rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #25D366;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message = '' }) => {
  const handleWhatsAppRedirect = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <FloatingButton
      onClick={handleWhatsAppRedirect}
      aria-label="Contato via WhatsApp"
    >
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        width=  "30"
        height="30" />
    </FloatingButton>
  );
};

export default WhatsAppButton;