import Link from "next/link";
import style from "./404.module.scss"
export default function NoteFound() {
  return (
    
    <div className={style.notfound}>
      <h1 className={style.text}>Ooooops...</h1>
      <h2 className={style.text2}>That page cannot be found.</h2>
      <p className={style.para}>
        Go back to the<Link href="/">Homepage</Link>
      </p>

      <h2 className={style.copy}>copyright 2023 Online-Store</h2>
    </div>
  );
}
