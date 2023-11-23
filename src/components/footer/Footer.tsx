import style from "./Footer.module.scss";
import Link from "next/link";
import {
  FaFacebook,
  FaGithubSquare,
  FaInstagram,
  FaWhatsappSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.social}>
        <Link href={"https://web.facebook.com/precious.osemeke"}>
          <FaFacebook />
        </Link>
        <Link href={"https://www.instagram.com/preciousperfection1/"}>
          <FaInstagram />
        </Link>
        <Link href={"https://github.com/Preciousnnebuogor"}>
          <FaGithubSquare />
        </Link>
        <Link href={""}>
          <FaWhatsappSquare />
        </Link>
        <Link href={""}>
          <FaSquareXTwitter />
        </Link>
        <FaFacebook />
      </div>
      <div className={style.link}>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact Us</Link>
        <Link href="/">Categories</Link>
      </div>
      <div className={style.copy}>
        <p>All right reserved | copyright</p>
      </div>
    </div>
  );
}
