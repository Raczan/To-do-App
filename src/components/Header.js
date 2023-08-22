import { HeaderContext } from "./Contexts";
import { useContext } from "react";

export function Header() {
    const {name, setName} = useContext(HeaderContext);
    return (
        <div className='flex flex-col justify-center'>
            <h1 className='text-4xl font-semibold'>Hey {name},</h1>
            <h1 className='text-xl font-semibold'>this is your to-do list</h1>
        </div>
    );
}