import { ChangeEvent, FormEvent, useState } from "react";
import style from "./Contact.module.scss";

import {
  FaFacebook,
  FaGithubSquare,
  FaInstagram,
  FaWhatsappSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import Link from "next/link";



export default function ContactItem() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
  };

  return (

  
    <div className={style.container}>
      <form onSubmit={(e) => handleSubmit(e)} className={style.centerform}>
        <div className={style.content}>
          <h2>Contact Us</h2>
          <p>for more information or complain contact us below</p>

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
        <Link href={""}><CiLinkedin /></Link>
      </div>

        </div>
        <div className={style.field}>
          
          <label>Fullname</label>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={data.name}
            onChange={(e) => handleChange(e)}
          />
          
          <label>Phone Number</label>
          <input
            type="phone"
            placeholder="number"
            name="phone"
            value={data.phone}
            onChange={(e) => handleChange(e)}
          />
          
          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={data.email}
            onChange={(e) => handleChange(e)}
          />

          <label>Type</label>
          <textarea
            placeholder="type here"
            name="message"
            value={data.message}
            onChange={(e) => handleChange(e)}
          />
          
             <div className={style.button}>
          <button type="submit">Submit</button>
            </div>
        
          
        </div>
      </form>
    </div>
  );
}
