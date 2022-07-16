import React from 'react';
import {
  FaPencilAlt,
} from 'react-icons/fa'
import { AiOutlineMail, AiOutlinePhone, AiOutlineGlobal } from 'react-icons/ai'

const Profile = () => {
  return (
    <div className="bg-white shadow-lg rounded-md pb-8">
      {/* banner */}
      <div className="relative rounded-md flex flex-col items-center h-52">
        <img
          className="w-full h-28 rounded-t-md"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE45xnObUAGBZnFzny7MAHgIcDG-obVgVxKtLUE9IVZ8qE_lm2NcrN9GPiwvLHx7QQEbc&usqp=CAU"
          alt=""
        />
        <img
          className="absolute rounded-full border top-10 h-32"
          src="https://media-exp2.licdn.com/dms/image/C510BAQGoqPOqFFYp0g/company-logo_200_200/0/1583912202955?e=2147483647&v=beta&t=GOBz8mAEorHJIcDqXVU1hYaBBu7HacN9ENSECo3TBWE"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="font-bold text-lg">Mitramas Infosys Global</p>
        <p>Layanan IT</p>
        <div className="flex items-center gap-x-2 mt-4 mb-6 text-green-700">
          <FaPencilAlt />
          <p className="font-semibold">Sunting profil</p>
        </div>
      </div>
      <div className="px-4">
        <p className="text-gray-400 mt-2">Status Perusahaan</p>
        <div>
          <p>Aktif</p>
        </div>
        <p className="text-gray-400 mt-2">Singkatan</p>
        <p>MIG</p>
        <p className="text-gray-400 mt-2">Alamat Perusahaan</p>
        <p>Jl. Tebet Raya No. 42, Jakarta Selatan</p>
        <p className='text-gray-400 mt-2'>Penanggung Jawab (PIC)</p>
        <p>John Doe</p>
        <p className="text-gray-400 mt-2">Tanggal PKP</p>
        <p>03 Maret 2021</p>
        <p className="text-gray-400 mt-2 ">E-mail</p>
        <div className='flex items-center gap-x-1'>
          <AiOutlineMail className='text-green-800'/>
          <p className="text-green-700 underline">mig@mitrasolusi.group</p>
        </div>
        <p className="text-gray-400 mt-2">No. Telp</p>
        <div className='flex items-center gap-x-1'>
          <AiOutlinePhone className='text-green-800'/>
          <p className="text-green-700">021-5678-1234</p>
        </div>
        <p className="text-gray-400 mt-2">Situs Web</p>
        <div className='flex items-center gap-x-1'>
          <AiOutlineGlobal className='text-green-800'/>
          <p className="text-green-700 underline">mitramas.com</p>
        </div>
      </div>
    </div>
  )
}

export default Profile;