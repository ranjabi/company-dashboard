import React from 'react';

const Activity = () => {
  return (
    <div className="bg-white rounded-md shadow-lg p-4 lg:h-full">
      <p className="font-bold mb-4">Aktivitas</p>
      <div className="mb-5">
        <p>Yusron baru saja menambahkan lokasi baru Kantor Cabang Jagakarsa</p>
        <p className="text-sm text-gray-400">Hari ini, 08:00</p>
      </div>
      <div className="mb-5">
        <p>
          Bintang baru saja menghapus sublokasi KCP Tebet 4 dari induk Kantor
          Cabang Tebet
        </p>
        <p className="text-sm text-gray-400">Kemarin, 17:32</p>
      </div>
      <div className="mb-5">
        <p>Yusron melakukan perubahan profil pada Induk Kantor Cabang Bekasi</p>
        <p className="text-sm text-gray-400">Kemarin, 17:32</p>
      </div>
    </div>
  )
}

export default Activity;