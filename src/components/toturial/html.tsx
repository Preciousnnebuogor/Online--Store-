import Link from "next/link";
import style from "./css.module.scss";
export default function HTML() {
  return (
    <>
    <div className={style.link}>
          <ul>
              <li>
                  <Link href={""}>Access</Link>
              </li>
              <li>
                  <Link href={""}>Project</Link>
              </li>
              <li>
                  <Link href={""}>Product</Link>
              </li>
              <li>
                  <Link href={""}>Register</Link>
              </li>
          </ul>
          <button>Click</button>
      </div>
      
      <div className={style.page}>
              <li><Link href={""}>Home</Link></li>
              <li><Link href={""}>Page</Link></li>
              <li><Link href={""}>About</Link></li>
              <li><Link href={""}>Log Out</Link></li>



          </div>
          
          </>
  );
  
   
}
