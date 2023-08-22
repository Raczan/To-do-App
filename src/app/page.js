'use client'
import '../css/home.css';
import { useState } from 'react';
import { HeaderContext, CardContext, AddListContext } from '@/components/Contexts';
import { Header } from '@/components/Header';
import { CardContainer } from '@/components/CardContainer';
import { AddList } from '../components/AddList'

export default function Home() {
  const [name, setName] = useState('Mike');
  const [selectedCategory, setSelectedCategory] = useState("school")
  const [listName, setListName] = useState('');

  const listStructure ={
    id: '0',
    category: "school",
    name: "Homework",
    completedTasks: ['Exercise 7', 'Exercise 40', 'Parcial Friday'],
    incompletedTasks: ['Parcial Monday', 'Exercise 15', 'Exercise 4']
  };
  let [lists, setLists] = useState(Array(1).fill(listStructure));

  function onCategoryChange(event){
    // Updating the state with the selected radio button's value
    setSelectedCategory(event.target.value);
  }
  function onListNameChange(event) {
    // Updating the state with the input's value
    setListName(event.target.value);
  }
  function addList(){
    const idList = lists.length;

    const newList ={
      id: `${idList}`,
      category: `${selectedCategory}`,
      name: `${listName}`,
      completedTasks: [],
      incompletedTasks: []
    };
    const nextLists = lists.slice();
    nextLists.push(newList);
    setLists(nextLists);
    setListName('');
  }

  return (
    <main className='flex p-10 w-4/5 h-auto flex-col bg-green-50 rounded-xl space-y-9'>
      <HeaderContext.Provider value={{name, setName}}>
        <Header/>
      </HeaderContext.Provider>
      <CardContext.Provider value={{lists, setLists}}>
        <CardContainer>
        </CardContainer>
      </CardContext.Provider>
      <div>
        <AddListContext.Provider value={{selectedCategory, onCategoryChange, listName, onListNameChange, addList}}>
          <AddList></AddList>
        </AddListContext.Provider>
      </div>
    </main>
  );
}
