import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { TbPlus , TbXboxX} from "react-icons/tb";
import { useContext } from "react";
import {AddListContext} from "./Contexts"

export function AddList() {
  let [isOpen, setIsOpen] = useState(false)
  const {selectedCategory, onCategoryChange, listName, onListNameChange, addList} = useContext(AddListContext);

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
        addCreatedList();
    }
  }

  function closeModal() {
    setIsOpen(false);
  }
  function addCreatedList() {
    addList();
    setIsOpen(false);
  }
  
  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
        <button
          type="button"
          onClick={openModal}
          className="bg-green-400 w-14 h-14 rounded-full flex justify-center items-center hover:bg-green-500"
        >
          <TbPlus className='text-white text-xl font-bold'></TbPlus>
        </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <div className='flex justify-between'>
                      <p className='text-3xl font-semibold'>New List</p>
                      <button className='hover:text-red-400 text-2xl text-gray-700' onClick={closeModal}><TbXboxX></TbXboxX></button>
                    </div>
                  </Dialog.Title>
                  <div className="mt-4 flex flex-col gap-y-6">
                    <div className='flex flex-col gap-y-1'>
                        <p className='text-sm font-semibold text-gray-700'>Name</p>
                        <input 
                        onKeyDown={handleKeyDown}
                        className='border-solid border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full text-md' 
                        type="text" 
                        value={listName}
                        onChange={onListNameChange}
                        />
                    </div>
                    <div className="flex flex-col gap-y-2 mb-6">
                        <p className='text-sm font-semibold text-gray-700'>Category</p>
                        <div className='flex flex-wrap gap-x-6'>
                          <div className='flex gap-x-2'>
                              <input
                              className='flex my-auto'
                              type='radio'
                              name="categoryList"
                              value="school"
                              checked={selectedCategory === "school"}
                              onChange={onCategoryChange}/>
                              school
                          </div>
                          <div className='flex gap-x-2'>
                              <input
                              className='form-radio text-yellow-500 focus:ring-yellow-500 my-auto'
                              type='radio'
                              name="categoryList"
                              value="work"
                              checked={selectedCategory === "work"}
                              onChange={onCategoryChange}/>
                              <p>work</p>
                          </div>
                          <div className='flex gap-x-2'>
                              <input
                              className='form-radio text-green-500 focus:ring-green-500 my-auto'
                              type='radio'
                              name="categoryList"
                              value="sport"
                              checked={selectedCategory === "sport"}
                              onChange={onCategoryChange}/>
                              sport
                          </div>
                          <div className='flex gap-x-2'>
                              <input
                              className='form-radio text-purple-500 focus:ring-purple-500 my-auto'
                              type='radio'
                              name="categoryList"
                              value="home"
                              checked={selectedCategory === "home"}
                              onChange={onCategoryChange}/>
                              home
                          </div>
                        </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={addCreatedList}
                    >
                      Create
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
