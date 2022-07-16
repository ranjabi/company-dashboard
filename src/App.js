import './App.css'
import {
  FaHome,
  FaTicketAlt,
  FaRegAddressBook,
  FaWindowMaximize,
  FaBuilding,
  FaHeadphonesAlt,
  FaStackOverflow,
  FaBoxOpen,
  FaSearchLocation,
  FaFileAlt,
} from 'react-icons/fa'
import { useState } from 'react'

import Breadcrumb from './components/Breadcrumb'
import Header from './components/Header'
import Profile from './components/Profile'
import Location from './components/Location'
import Relation from './components/Relation'
import Activity from './components/Activity'
import Bank from './components/Bank'

function App() {
  const [toggle, setToggle] = useState(false)

  return (
    <div className="flex bg-green-50 min-h-screen">
      <div
        className={
          toggle
            ? 'relative bg-white w-20 flex flex-col items-center text-xl gap-y-8 pt-4 l-0 drop-shadow-2xl'
            : 'hidden md:relative md:bg-white md:w-20 md:flex md:flex-col md:items-center md:text-xl md:gap-y-8 md:pt-4 md:l-0 md:drop-shadow-2xl'
        }
      >
        <FaHome className="mb-4" />
        <FaTicketAlt />
        <FaRegAddressBook />
        <FaWindowMaximize />
        <div className="bg-green-50 py-4 w-full flex justify-center border-l-4 border-green-700">
          <FaBuilding />
        </div>
        <FaHeadphonesAlt className="mt-8" />
        <FaStackOverflow />
        <FaBoxOpen />
        <FaSearchLocation />
        <FaFileAlt className="mt-16" />
      </div>
      <div className="container max-w-screen-lg mx-auto bg-green-50 px-4 pb-12 flex">
        <div className="mx-auto">
          <Header toggle={toggle} setToggle={setToggle} />
          <div className="md:hidden">
            <Breadcrumb />
          </div>
          <div className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3 md:grid-flow-row-dense lg:grid-flow-col-dense ">
            <div className="md:row-span-3 lg:row-span-4 lg:pb-6">
              <Profile />
            </div>
            <div className="lg:col-span-2">
              <Location />
            </div>
            <div className="">
              <Bank />
            </div>
            <div className="lg:-mb-16">
              <Relation />
            </div>
            <div className="md:col-span-2 lg:col-span-1 lg:row-span-3 lg:pb-6">
              <Activity />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
