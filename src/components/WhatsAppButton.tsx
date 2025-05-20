import React from 'react';
const phoneNumber = '9711813396'; // Replace with your number
const message = 'Hello! I have a query regarding your astrology services. Can you please help me?';
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
import { useAppSelector } from "../store/hooks"

const WhatsAppButton: React.FC = () => {
  const { contacts, loading } = useAppSelector((state) => state.contact)

  const primaryPhoneContact = contacts.find((contact) => contact.isPrimaryPhone)
  const message = `Hello! ${primaryPhoneContact?.firstName}, I have a query regarding your astrology services. Can you please help me?`;
  const whatsappUrl = `https://wa.me/${primaryPhoneContact?.phone}?text=${encodeURIComponent(message)}`;


  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.button}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={styles.icon}
      />
    </a>
  );
};

const styles: { button: React.CSSProperties; icon: React.CSSProperties } = {
  button: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#25D366',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    zIndex: 1000,
    cursor: 'pointer',
  },
  icon: {
    width: '28px',
    height: '28px',
  },
};

export default WhatsAppButton;
