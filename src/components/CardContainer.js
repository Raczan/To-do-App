import { Card } from "./Card";
import { TbClipboardPlus } from "react-icons/tb";
import {CardContext} from "./Contexts"
import { useContext } from "react";

export function CardContainer() {
    const {lists, setLists} = useContext(CardContext);
    let counter = 0;
    return (
        <div className="w-full h-auto flex flex-wrap gap-x-4 gap-y-4">
            {lists.map(
               (list) => (
                <Card
                    key={list.id}
                    id={list.id}
                    category={list.category}
                    name={list.name}
                    completedTasks={list.completedTasks}
                    incompletedTasks={list.incompletedTasks}
                ></Card>  
               ) 
            )}
        </div>
    );
}