import Link from "next/link"
import style from "./css.module.css"
export default function HTML(){
    return <div className={style.link}>
        <ul>
           <li><Link href={""}>Access</Link></li>
           <li><Link href={""}>Project</Link></li>
           <li><Link href={""}>Product</Link></li>
           <li><Link href={""}>Register</Link></li> 
        </ul>
    </div>
}