import { FC } from 'react';

interface HeadingProps {
  text: string;
}

const Heading:FC<HeadingProps> = ({ text }) => 
<div className="
    text-black font-bold leading-10 text-3xl my-5 
    uppercase flex items-center justify-between 
    whitespace-nowrap tracking-wide after:content-[' '] after:h-px after:w-2/5 after:bg-black after:block after:mx-30px
    before:content-[' '] before:h-px before:w-2/5 before:bg-black before:block before:mx-30px">
    {text}
</div>;

export default Heading;
