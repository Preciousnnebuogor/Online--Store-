import Image from "next/image";
import style from "./Click.module.scss";
export default function ClickMe() {
  return (
    <>
      <div className={style.text}>
        <h1>
          Welcome to [Your Online Store Name] - Elevate Your Style with
          Trendsetting Men's Fashion!
        </h1>
        <p>
          At Perfection Online Store, we understand that fashion is an
          expression of individuality and personality. That's why we curate a
          diverse collection of men's wears that cater to every style, occasion,
          and preference. Explore our online store to discover the latest
          trends, timeless classics, and wardrobe essentials.
        </p>
        <h1>Trendsetting Styles for Every Occasion</h1>
        <p>
          Our extensive range of men's clothing covers a spectrum of styles,
          ensuring that you're always dressed to impress. Whether you're looking
          for casual wear for weekend outings, sophisticated formal attire for
          business meetings, or activewear for your fitness routine, we have you
          covered. From tailored suits to laid-back t-shirts, our collection is
          designed to elevate your wardrobe with versatile and stylish options.
        </p>
        <h1>Quality Craftsmanship and Materials</h1>
        <p>
          At Perfection Online Store, we prioritize quality and craftsmanship.
          Each garment is carefully selected for its durability, comfort, and
          attention to detail. From premium fabrics to precision stitching, our
          clothing reflects a commitment to excellence. Experience the luxury of
          fine materials and impeccable tailoring that sets our collection
          apart.
        </p>
        <h1>Stay on Top of Fashion Trends</h1>
        <p>
          Stay ahead of the fashion curve with our regularly updated inventory
          that reflects the latest trends and styles. Whether it's the must-have
          color of the season, cutting-edge designs, or classic pieces that
          stand the test of time, our selection ensures that you're always in
          vogue. Browse through our New Arrivals section to discover the
          freshest additions to our catalog.
        </p>
        <h1>Style Advice and Personalized Recommendations</h1>
        <p>
          Not sure where to start? Our style experts are here to help. Explore
          our Style Guides and fashion tips to stay informed about the latest
          trends and how to incorporate them into your wardrobe. Additionally,
          our personalized recommendations feature suggests items based on your
          preferences, making your shopping experience even more tailored to
          your style. Elevate your wardrobe with [Your Online Store Name].
          Discover the perfect blend of style, comfort, and quality in our men's
          wears collection. Shop now and redefine your fashion statement!
        </p>
      </div>
      <div className={style.img}>
        <img src="/cc1.png" />
      </div>
      <p>
        We have made fashioning for our classic men more easy,reliable and cost
        effective making your shopping online fast and reliable. As a result
        payment can be made on delivery to any location of your choice.
        Perfection your NO 1 Shopping App
      </p>
    </>
  );
}
