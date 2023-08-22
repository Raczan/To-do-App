import { TbPlus } from "react-icons/tb";
export function AddButton() {
    return(
        <button className='bg-green-400 w-14 h-14 rounded-full flex justify-center items-center'>
            <TbPlus className='text-white text-xl font-bold'></TbPlus>
        </button>
    );
}