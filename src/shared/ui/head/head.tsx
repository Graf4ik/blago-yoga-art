'use client'

import Head from 'next/head';
import { FC } from 'react';

interface HeadingProps {
  text: string;
}

const HeadComponent:FC<HeadingProps> = ({ text }) => 
<Head>
    <title>{text}</title>
</Head>;

export default HeadComponent;