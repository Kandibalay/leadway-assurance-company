import React from 'react';
import { IoIosClose } from 'react-icons/io';
import LogoutLogo from '../../assets/icons/Logo.svg';

export default function LogoutModal({ onClose, onLogout }) {
  return (
    <div className="relative w-[90%] lg:w-[45%] xl:w-[35%] p-12 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center gap-4">
      <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
        <IoIosClose size={20} />
      </button>
      <img src={LogoutLogo} className="w-[80px]" alt="logout" />
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="font-bold text-xl text-black">Log Out</h2>
        <p className="text-center text-black">Do you wish to log out from your account?</p>
      </div>
      <div className="mt-4 flex justify-between gap-4 w-full">
        <button onClick={onClose} className="bg-[#ffffff] text-[#18A532] py-2 w-full border border-[#18A532] rounded-md">
          Cancel
        </button>
        <button onClick={() => { onLogout(); onClose(); }} className="bg-[#18A532] text-white py-2 w-full rounded-md">
          Log Out
        </button>
      </div>
    </div>
  );
}