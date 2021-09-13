import styles from '../../styles/header.module.css';
import {useState} from 'react'
import { AiOutlineMenu } from 'react-icons/ai';


export default function Header({})  {
    // useState
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => { setIsOpen(!isOpen) }
    

    return (
        <>
        <header className={styles.header}>
            <h1>
               Dye Vibe
            </h1>
        </header>
        <AiOutlineMenu onClick={toggleMenu} className={styles.button} /> 
          <nav className={!isOpen ? styles.nav : styles.navshow}>
          <ul className={styles.lista}>
              <li className={styles.itens}>
               
              </li>
              <li className={styles.itens}>
                  
              </li>
              <li className={styles.itens}>
                 
              </li>
          </ul>
      </nav>
        </>
    );
}
