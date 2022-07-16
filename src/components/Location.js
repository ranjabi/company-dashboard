import React from 'react';
import {
  FaRegBuilding,
} from 'react-icons/fa'
import { AiOutlineTool, AiOutlineHome } from 'react-icons/ai'

const Location = () => {
  return (
    <div className="bg-white shadow-lg row-start-2 rounded-md p-4 pb-16 md:pb-0 md:h-full">
      <div className="flex justify-between mb-3">
        <p className="font-bold">Lokasi</p>
        <p className="text-sm">Lihat semua</p>
      </div>
      <div className="flex justify-between gap-x-2 -mb-10">
        <div className="loc-wrapper">
          <FaRegBuilding className="text-xl" />
          <div className="loc-info">
            <p className="font-bold -mb-1">20</p>
            <p className="text-xs text-gray-200">induk</p>
          </div>
        </div>
        <div className="loc-wrapper">
          <AiOutlineTool className="text-2xl" />
          <div className="loc-info">
            <p className="font-bold -mb-1">3</p>
            <p className="text-xs text-gray-200">lokasi 1</p>
          </div>
        </div>
        <div className="loc-wrapper">
          <AiOutlineHome className="text-2xl" />
          <div className="loc-info">
            <p className="font-bold -mb-1">1</p>
            <p className="text-xs text-gray-200">lokasi 2</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location;