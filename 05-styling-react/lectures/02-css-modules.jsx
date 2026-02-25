// ? CSS Modules
// Allows you to scope css classes to a specific component, so styles don’t accidentally affect other parts of your app. 
// This solves one of the biggest problems in normal CSS: global conflicts.

// Fot it to work: 
// You need to include .module in the file name and import that file into your React component
import styles from './Header.module.css';

export default function Header(){
    return (
        <p className={styles.paragraph}></p>
    )
}
