import React, { Fragment } from 'react';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { HashLink } from 'react-router-hash-link';
import { CiMenuFries } from 'react-icons/ci';
import Home from './components/Home';
import List from './components/List';
import ListItem from './components/ListItem';
import Disclamer from './components/Disclamer';
import './App.css';

function App() {
  const isNotMobile = window.screen.width > 600;
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        {
        isNotMobile && (
        <div className="p-4 bg-black">
          <Link to="/" className="mx-8 text- font-thin">Home</Link>
          <Link to="/list" className="mx-8 text-lg font-thin">Browse</Link>
          <HashLink to="/#map" className="mx-8 text-lg font-thin">Map</HashLink>
          <Link to="/disclamer" className="mx-8 text-lg font-thin">Disclamer</Link>
        </div>
        )
      }
        <Transition.Root show={showModal} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setShowModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-slate-900 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-slate-900 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="p-8 flex flex-col justify-center items-start">
                          <Link to="/" className="mx-2 pb-8 text-lg">Home</Link>
                          <Link to="/list" className="mx-2 pb-8 text-lg">Browse</Link>
                          <HashLink to="/#map" className="mx-2 pb-8 text-lg">Map</HashLink>
                          <Link to="/disclamer" className="mx-2 pb-8 text-lg">Disclamer</Link>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/person" element={<ListItem />} />
          <Route path="/disclamer" element={<Disclamer />} />
        </Routes>
        <button
          type="button"
          onClick={() => setShowModal(true)}
          title="Contact Sale"
          className="fixed visible md:invisible z-50 bottom-10 right-8 bg-blue-600 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300"
        >
          <CiMenuFries />
        </button>
      </BrowserRouter>
    </div>
  );
}

export default App;
