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
      
      <form>
        Name <input type="text"/>
      </form>
          
          </>
  );
  
   
}
