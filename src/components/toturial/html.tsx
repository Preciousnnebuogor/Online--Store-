import style from "./css.module.css";
export default function Html() {
  return (
    <div className={style.body}>
      <h1>i am a girl</h1>
      <h2>i love you</h2>
      <div className={style.block}>we are okay</div>
      <div className={style.block}>we are fine</div>
      <div className={style.block}>we are better</div>
      <h2>beginning of love</h2>
      <span className={style.inline}>inline good</span>
      <span className={style.inline}> inline good</span>
      <span className={style.inline}> inline good</span>
    </div>
  );
}
