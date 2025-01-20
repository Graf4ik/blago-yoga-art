import Header from '@widgets/header/ui/header';
import { FC, ReactNode } from 'react';
import "@/app/styles/globals.scss";
import Footer from '@widgets/footer';
import styles from './layout.module.scss';

type LayoutProps = {
  children: ReactNode
};

const Layout:FC<LayoutProps> = ({ children }) => (
  // <div className='flex flex-col min-h-screen'>
  <div className={styles.layout}>
    <Header />
        <div className='p-10 flex-1'>{children}</div>
    <Footer />
  </div>
);

export default Layout;