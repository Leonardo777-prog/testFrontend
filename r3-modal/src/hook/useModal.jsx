import React, { useState } from "react";

export const useModal = () => {
  const [visible, setVisible] = useState(false);
  const Modal = ({ children }) => {
    return (
      <>
        <div className="modal">
          <div className="contenido-modal">
            <div className="close-modal" onClick={handleChangeModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-x"
                width="76"
                height="76"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <>{children}</>
          </div>
        </div>
      </>
    );
  };

  const handleChangeModal = () => {
    setVisible(!visible);
  };

  return {
    visible,
    Modal,
    handleChangeModal,
  };
};
