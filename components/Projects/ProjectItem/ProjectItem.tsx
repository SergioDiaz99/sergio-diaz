import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router';
import { showMessage } from "../../../hooks/Toast"
interface Props {
    title?: string;
    backgroundImg?: string | any;
    projectUrl?: string | any;
    tech?: string;
  }

const ProjectItem: React.FC<Props>  = ({title, backgroundImg, projectUrl, tech}) => {
  const router = useRouter();

  const handleClick = () => {
    if(title === "Netflix App" || title === "Property Finder"){
      showMessage(`I'm currently working in this project! For now the code will not be available.`)
    }
    else {
      router.push(`${projectUrl}`)
    }
  }

  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:scale-105 ease-in duration-300 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
    <Image className='rounded-xl group-hover:opacity-10 h-full' src={backgroundImg} alt='/' /> 
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
        <div className='cursor-pointer' onClick={handleClick}>
            <p className='text-center py-3 px-[60px] rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
        </div>
    </div>
 </div>
  )
} 

export default ProjectItem