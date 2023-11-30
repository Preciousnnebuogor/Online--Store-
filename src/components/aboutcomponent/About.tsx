import style from "./About.module.scss";
export default function AboutUs() {
  return (
    <>
      <div className={style.page}>
        <div className={style.head}>
          <h1>About Us</h1>
          <p>Geting to know more about us is exciting</p>
        </div>

        <div className={style.text}>
          <h2>Our Vision</h2>
        </div>
        <div className={style.container}>
          <p>
            We believe that shoping cloths most specially for our classic men
            should be easy and fun It shoud leave you happy and good-looking,
            with money in your pocket. we also believe that every man have the
            right to look good.We believe that shoping cloths most specially for
            our classic men should be easy and fun It shoud leave you happy and
            good-looking, with money in your pocket. we also believe that every
            man have the right to look good.
          </p>
          <div className={style.img}><img src="px1.jpg" /></div>
        </div>

        <div className={style.text}>
        <h2>Our Approach</h2>
        </div>

        <div className={style.container}>
          <div className={style.img}><img src="px2.jpg" /></div>
          <p>
            Perfection is a male online shopping site founded by Miss Precious
            Nnebuogor, in the year 2023. We estimate the size of the global
            streetwear market at USD $185 billion in annual sales, making it by
            some estimates about 10% of the entire global apparel and footwear
            market. Streetwear’s impact – both on retail culture and the numbers
            involved – has caught the attention of some of the most iconic,
            established brands in the retail, luxury goods, and fashion industry
            in general
          </p>
        </div>

        <div className={style.text}>
          <h2>Our Process</h2>
        </div>
        <div className={style.container}>
          <p>
            As we have got an idea about the effectiveness of the eCommerce
            industry above. And especially in this Covid-19 pandemic situation,
            we have seen its most effects. Customers now feel comfortable, and
            also have their dependency on buying all the luxury to all the
            necessary things from online clothing stores. So it’s a well-timed
            decision to start your online clothing store.
          </p>
          <div className={style.img}><img src="px3.jpg" /></div>
        </div>
      </div>
    </>
  );
}