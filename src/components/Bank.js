import React from 'react';
import {
  FaPlus,
  FaTrashAlt,
  FaPencilAlt
} from 'react-icons/fa'

const Bank = () => {
  return (
    <div className="bg-white shadow-lg p-4 rounded-md md:h-full">
      <div className="flex justify-between items-center md:pb-4">
        <p className="font-bold">Akun Bank</p>
        <div className="flex items-center gap-x-2 bg-green-700 rounded-md text-white px-2.5 py-1">
          <FaPlus />
          <button className="md:text-xs">Tambahkan Akun Bank</button>
        </div>
      </div>
      <div className="card-wrapper">
        <img
          className="w-16"
          src="https://mandacaru.design/wp-content/themes/shoptimizer/assets/images/credit-cards/visa.svg"
          alt=""
        />
        <div className="card-info">
          <div className="card-title">
            <p className="font-semibold">Bank KB Bukopin</p>
            <div className="flex items-center gap-x-2">
              <FaPencilAlt className="h-3 text-green-700" />
              <FaTrashAlt className="h-3 text-red-700" />
            </div>
          </div>
          <p className="text-gray-500">**** 0876 - Yusron Taufiq</p>
          <p className="text-gray-500">IDR</p>
        </div>
      </div>
      <div className="card-wrapper">
        <img
          className="w-16"
          src="https://mandacaru.design/wp-content/themes/shoptimizer/assets/images/credit-cards/visa.svg"
          alt=""
        />
        <div className="card-info">
          <div className="card-title">
            <p className="font-semibold">Bank KB Bukopin</p>
            <div className="flex items-center gap-x-2">
              <FaPencilAlt className="h-3 text-green-700" />
              <FaTrashAlt className="h-3 text-red-700" />
            </div>
          </div>
          <p className="text-gray-500">**** 0876 - Yusron Taufiq</p>
          <p className="text-gray-500">IDR</p>
        </div>
      </div>
    </div>
  )
}

export default Bank;