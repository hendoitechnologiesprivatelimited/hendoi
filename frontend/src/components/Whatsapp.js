import React from 'react';

const Whatsapp = () => {
  const phoneNumber = '+919677261485';
  const message = encodeURIComponent("We visited your website today and we would like to know more details about your services..");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <>
      <style jsx>{`
        @keyframes gradualBlink {
          0% { opacity: 1; box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
          50% { opacity: 0.6; box-shadow: 0 0 0 10px rgba(37, 211, 102, 0); }
          100% { opacity: 1; box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }

        .whatsapp-button {
          position: fixed;
          bottom: 15%;
          left: 5%;
          background-color: #25d366;
          color: #ffffff;
          border-radius: 50%;
          width: 70px;
          height: 70px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
          z-index: 10000;
          animation: gradualBlink 2s infinite ease-in-out;
          transition: all 0.3s ease;
        }

        .whatsapp-button:hover {
          background-color: #128c7e;
          animation: none;
          transform: scale(1.1);
        }

        .whatsapp-button svg {
          width: 36px;
          height: 36px;
          transition: all 0.3s ease;
        }

        @media (max-width: 768px) {
          .whatsapp-button {
            bottom: 20%;
            left: 10%;
            width: 60px;
            height: 60px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
          }

          .whatsapp-button svg {
            width: 32px;
            height: 32px;
          }

          .whatsapp-button:active {
            transform: scale(0.95);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.08);
          }
        }

        @media (max-width: 480px) {
          .whatsapp-button {
            width: 50px;
            height: 50px;
          }

          .whatsapp-button svg {
            width: 28px;
            height: 28px;
          }
        }
      `}</style>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#ffffff"
        >
          <path d="M12 0a12 12 0 1 1 0 24 12 12 0 0 1 0-24zm.14 4.5a7.34 7.34 0 0 0-6.46 10.82l.15.26L4.5 19.5l4.08-1.3a7.38 7.38 0 0 0 10.92-6.4c0-4.03-3.26-7.3-7.36-7.3zm0 1.16c3.41 0 6.19 2.78 6.19 6.15a6.17 6.17 0 0 1-9.37 5.27l-.23-.15-2.38.76.77-2.28a6.18 6.18 0 0 1-1.17-3.6 6.17 6.17 0 0 1 6.19-6.15zM9.66 8.47a.67.67 0 0 0-.48.23l-.14.15c-.2.23-.5.65-.5 1.34 0 .72.43 1.41.64 1.71l.08.1c.08.1.5.68 1.22 1.42.1.1.18.18.25.24a5.58 5.58 0 0 0 2.58 1.54c.34.07.81.15 1.32.17.5.02.96-.06 1.32-.25.36-.2.7-.46.88-.84l.13-.26c.06-.13.07-.23.07-.3a.88.88 0 0 0-.05-.23l-.05-.07a7.27 7.27 0 0 0-.38-.45c-.15-.16-.34-.37-.58-.62-.23-.24-.4-.36-.55-.37a.5.5 0 0 0-.35.12l-.05.05c-.18.17-.34.35-.51.52l-.22.22a.27.27 0 0 1-.28.04 8.64 8.64 0 0 1-2.31-1.43.2.2 0 0 1-.03-.27l.22-.27c.18-.22.37-.44.51-.68.11-.2.14-.37.08-.53-.08-.23-.8-1.93-.94-2.22-.1-.21-.21-.3-.35-.34a1.1 1.1 0 0 0-.32-.03z"/>
        </svg>
      </a>
    </>
  );
};

export default Whatsapp;