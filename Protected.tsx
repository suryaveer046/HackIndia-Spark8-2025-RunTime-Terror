import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginModal: React.FC = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState<boolean>(true); // modal is open by default

  return (
    <>
      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl text-center">
            <p className="text-xl font-bold mb-4">
              Please log in to access this section.
            </p>
            <button
              onClick={() => {
                setModalOpen(false);
                navigate("/home");
              }}
              className="bg-black text-white px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
