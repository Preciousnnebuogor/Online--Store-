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
      
      <form className={style.form}>
        
        <label>Name</label>
        <input type="text" name="name"/>

        <label>Phone</label>
        <input type="tel" name="phone"/>

        <label>Email</label>
        <input type="email" name="email"/>
      </form>
          <p className={style.me}>i am precious</p>
          </>

           var youLike = true;
  if (youLike) {
   console.log("i love you") 
  }
  );
  
 
   
}
