import { Tasks } from "./Tasks";
import { useState } from 'react';
import React from 'react';
import { SchoolIcon, WorkIcon, SportIcon, HomeIcon } from "./Icons";

export function Card({id, category, name, completedTasks, incompletedTasks}) {
    const [isOpen, setIsOpen] = useState(false)
    const numberTasks = completedTasks.length + incompletedTasks.length;
    let progressBar;

    if (numberTasks === 0) {
        progressBar = 0;
    } else {
        progressBar = (completedTasks.length * 100) / numberTasks;  
    }

    const categories ={
        school: {
          color: 'rgba(59, 130, 246, 1)',
          icon: <SchoolIcon/>
        },
        work: {
          color: 'rgba(245, 158, 11, 1)',
          icon: <WorkIcon/>
        }, 
        sport: {
          color: 'rgba(16, 185, 129, 1)',
          icon: <SportIcon/>
        },
        home: {
          color: 'rgba(139, 92, 246, 1)',
          icon: <HomeIcon/>
        }
      }

    const colorList = categories[category].color;
    
    function closeModal() {
        setIsOpen(false)
      }
    
    function openModal() {
        setIsOpen(true)
      }

    return(
        <div className="bg-white w-44 h-48 rounded-lg drop-shadow-lg flex flex-col p-5 justify-between hover:bg-gray-100 focus" onClick={openModal}>
            {isOpen? <Tasks 
                        isOpen={isOpen} 
                        closeModal={closeModal}
                        id={id}
                        categories={categories}
                        category={category}
                        name={name}
                        completedTasks={completedTasks}
                        incompletedTasks={incompletedTasks}>
                    </Tasks>
            : ''}
            <div className="text-4xl flex justify-center" style={{color: colorList}}>
                {categories[category].icon}
            </div>
            <div>
                <p className="flex justify-center font-bold text-gray-800 text-lg">{name}</p>
                <p className="text-gray-400 flex justify-center text-sm">{numberTasks} tasks</p>
            </div>
            <div className="bg-gray-200 h-1 rounded-lg">
                <div className="h-1 rounded-lg" style={{backgroundColor: colorList, width: `${progressBar}`+"%"}}></div>
            </div>
        </div>
    );
}