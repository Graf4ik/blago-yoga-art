import Navbar from "@widgets/navbar/ui/navbar";
import { FC } from "react";
import styles from './header.module.scss';

const Header:FC = () => (
  <header className={styles.header}>
    <Navbar />
  </header>
);

export default Header;