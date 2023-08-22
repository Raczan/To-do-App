import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useContext } from "react";
import { TbXboxX} from "react-icons/tb";

export function AddTasks({isOpenAddTasks, closeAddTasks, taskValue, setTaskValue, handleKeyDown}) {

  return (
    <>
      <Transition appear show={isOpenAddTasks} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeAddTasks}>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all flex flex-col gap-y-6">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 flex flex-col gap-y-2"
                  >
                    <div className='flex justify-between'>
                        <p className='text-2xl font-bold'>Create New Task</p>
                        <button className='hover:text-red-400 text-2xl text-gray-700' onClick={closeAddTasks}><TbXboxX></TbXboxX></button>
                    </div>
                  </Dialog.Title>
                  <div>
                    <input className='rounded-lg border-gray-400'
                     type="text"
                    name="AddTask" 
                    value={taskValue} 
                    onChange={e => setTaskValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    />
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeAddTasks}
                    >
                      Add
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
