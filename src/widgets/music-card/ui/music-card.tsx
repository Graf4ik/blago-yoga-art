'use client'

import React, { FC } from 'react';
import Image from 'next/image'

interface MusicCardProps {
  title?: string;
  author?: string;
  year?: number;
  link?: string;
  img?: string;
}

const MusicCard:FC<MusicCardProps> = ({ title, author, img, link, year }) => {
  return (
    <a className='flex flex-wrap shadow-xl cursor-pointer w-4/12 p-9 my-10 mx-10 h-96 
      transition duration-450 ease-out hover:scale-110 ease-linear' href={link} target="_blank">
        <Image src={img as string} height={300} width={300} alt='musicLogo' className='flex-1'/>
        <div className='flex flex-col flex-1 mt-16 ml-5'>
            <div className='text-3xl font-bold'>{title}</div>
            <div className='text-xl my-5'>{author}</div>
            <div>{year}</div>
        </div>
    </a>
  );
};

export default MusicCard;
