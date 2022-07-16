import React from 'react';
import {
  FaShareAlt,
} from 'react-icons/fa'

const Relation = () => {
  return (
    <div className="bg-white shadow-lg rounded-md p-4 md:h-full">
      <div className="flex justify-between mb-4">
        <p className="font-bold">Relasi</p>
        <p className="text-green-600 text-sm">Lihat semua</p>
      </div>
      <div className="flex items-center gap-x-3 mb-2">
        <FaShareAlt className="text-2xl" />
        <div>
          <p className="text-xl font-bold">20</p>
          <p className="text-sm text-gray-600 -mt-1">Memiliki</p>
        </div>
      </div>
      <div className="flex items-center gap-x-3 mb-2">
        <FaShareAlt className="text-2xl" />
        <div>
          <p className="text-xl font-bold">108</p>
          <p className="text-sm text-gray-600 -mt-1">Menggunakan</p>
        </div>
      </div>
      <div className="flex items-center gap-x-3 mb-2">
        <FaShareAlt className="text-2xl" />
        <div>
          <p className="text-xl font-bold">67</p>
          <p className="text-sm text-gray-600 -mt-1">Meminjam</p>
        </div>
      </div>
    </div>
  )
}

export default Relation;