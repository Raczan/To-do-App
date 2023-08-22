import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useContext } from "react";
import { TbEdit, TbTrash , TbSquareCheckFilled, TbXboxX} from "react-icons/tb";
import { AddTasks } from "./AddTask";
import { CardContext } from "./Contexts";
 
export function Tasks({isOpen, closeModal, id, categories, category, name, completedTasks, incompletedTasks}) {
  const {lists, setLists} = useContext(CardContext);
  const completed = completedTasks.length;
  const incompleted = incompletedTasks.length;
  const colorList = categories[category].color;
  const [isOpenAddTasks, setIsOpenAddTasks] = useState(false)
  const [taskValue, setTaskValue] = useState('')
  const [isCheckBoxSelected, setIsCheckBoxSelected] = useState('');

  function onCheckBoxChange(event) {
    const task = event.target.value
    setIsCheckBoxSelected(task);
    addToCompleted(task);
    quitFromIncomplete(task);
  }
  function quitFromIncomplete(task) {
    const nextLists = lists.slice();
    const removedTask = nextLists[id].incompletedTasks.filter(function (value) {
      return value !== task;
    });
    nextLists[id].incompletedTasks = removedTask;
    setLists(nextLists)
  }
  function addToCompleted(task) {
    const nextLists = lists.slice();
    nextLists[id].completedTasks.push(task)
    setLists(nextLists);
  }
  function closeAddTasks() {
      addTaskToList()
      setIsOpenAddTasks(false)
    }
  
  function openAddTasks() {
      setIsOpenAddTasks(true)
    }

  function addTaskToList() {
    if (taskValue === '') {
        return
    }
    const nextLists = lists.slice();
    nextLists[id].incompletedTasks.push(taskValue);
    setLists(nextLists);
    setTaskValue('');
  }
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      addTaskToList();
    }
  }
  function removeTask(task) {
    const nextLists = lists.slice();
    const removedTask = nextLists[id].incompletedTasks.filter(function (value) {
      return value !== task;
    });
    nextLists[id].incompletedTasks = removedTask;
    setLists(nextLists)
  }

  return (
    <>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all flex flex-col gap-y-6">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 flex flex-col gap-y-2"
                  >
                    <div className='flex justify-between'>
                      <div className='flex gap-x-4'>
                        <div className='text-4xl my-auto' style={{color:colorList}}>{categories[category].icon}</div>
                        <p className='text-3xl font-semibold'>{name}</p>
                      </div>
                      <button className='hover:text-red-400 text-2xl text-gray-700' onClick={closeModal}><TbXboxX></TbXboxX></button>
                    </div>
                    <p className='text-gray-500 ml-14 text-sm'>{incompleted} incomplete, {completed} complete</p>
                  </Dialog.Title>
                  <div>
                    <p className='text-gray-600 font-semibold'>Incomplete</p>
                    <div className="mt-4 flex flex-col gap-y-4">
                      {incompletedTasks.map((task)=>
                        <div className="flex justify-between border-b border-gray-100 pb-4" key={Math.random().toString(36).substring(2,7)}>
                          <div className='flex items-center'>
                            <input 
                            type="checkbox" 
                            className="form-checkbox rounded-md focus:ring-none focus:ring-transparent" 
                            value={task}
                            checked={isCheckBoxSelected === task} 
                            onChange={onCheckBoxChange}/>
                            <span className="ml-2">{task}</span>
                          </div>
                          <div className="flex items-center text-gray-600 text-xl gap-x-2">
                            <TbEdit className='hover:text-black'></TbEdit>
                            <TbTrash className='hover:text-red-700' onClick={()=> removeTask(task)}></TbTrash>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <p className='text-gray-600 font-semibold'>Complete</p>
                    <div className="mt-4 flex flex-col gap-y-4">
                      {completedTasks.map((task) =>
                      
                        <label className="flex items-center border-b border-gray-100 pb-4" key={Math.random().toString(36).substring(2,7)}>
                          <TbSquareCheckFilled className='text-gray-400 text-lg'></TbSquareCheckFilled>
                          <span className="ml-2 text-gray-400">{task}</span>
                        </label>
                      )}

                    </div>
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={openAddTasks}
                    >
                      {isOpenAddTasks? 
                        <AddTasks
                          isOpenAddTasks={isOpenAddTasks}
                          closeAddTasks={closeAddTasks}
                          taskValue={taskValue}
                          setTaskValue={setTaskValue}
                          handleKeyDown={handleKeyDown}
                        />
                      :''}
                      Add New Task
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
