import React from 'react';
import {
  FaSearch,
  FaRegBell,
} from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'
import Breadcrumb from './Breadcrumb';

const Header = ({ toggle, setToggle }) => {
  return (
    <div className="bg-green-50 flex justify-between items-center px-3 -mx-4 h-12 md:mb-4">
      <button className="md:hidden" onClick={() => setToggle(!toggle)}>
        <AiOutlineMenu className="text-xl" />
      </button>
      <div className="hidden md:block">
        <Breadcrumb />
      </div>
      <div className="flex items-center gap-x-2.5">
        <FaSearch />
        <FaRegBell />
        <div className="ml-3 flex items-center gap-x-2">
          <img src="https://decisionsystemsgroup.github.io/workshop-html/img/john-doe.jpg" className='h-6 w-6 rounded-full' alt="" />
          <p>John Doe</p>
        </div>
      </div>
    </div>
  )
}

export default Header;