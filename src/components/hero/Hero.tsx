import Image from "next/image";
import style from "./Hero.module.scss";
export default function Hero() {
  return (
    <div className={style.content}>
      <div className={style.word}>
        <h1>Fashion Men</h1>
        <p>
          Perfection online store gives you the privilege to shop online from
          your comfort zone. We also ensure all clothes display are of high
          quality, are pocket friendly and delivery to all allocations in
          Nigeria. <br/> Classy and confident, the epitome of fine taste.
        </p>
        <button href="/click">Click</button>
      </div>
      <div className={style.photo}>
        <img src="/ph.png"></img>
      </div>
    </div>
  );
}
