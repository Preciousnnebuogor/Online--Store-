import Link from "next/link"
import style from "./Nav.module.scss"
export default function Navbar() :JSX.Element {
    return (
         <nav className={style.nav}>
            <h1 className={style.logo}>Perfection</h1>

            <ul className={style.link}>
                <Link href="/">Home</Link>
                <Link href="">Categories</Link>
                <Link href="/contact">Contact</Link>
                <Link href="">AboutUs</Link>

            </ul>


         </nav>
    ) 
    
} 