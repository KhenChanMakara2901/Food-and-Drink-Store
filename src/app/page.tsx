import Category from "../Components/CategoryCard/Category";
import Hero from "../Components/Hero-Sections/Hero";
import Headline from "../Components/ListCard/Headline";
import Logo from "../Components/LogoCloud/Logo";
import ListOrder from "../Components/OrderCard/ListOrder";
import State from "../Components/State-sections/State";
import Team from "../Components/Team-sections/Team";
import Testimonials from "../Components/Testimonials-sections/Testimonials";
import Book from "../Components/Booking/Book";

export default function Home() {
  return (
    <>
      <Hero />
      <Headline />
      <ListOrder />
      <Category />
      <State />
      <Team />
      <Testimonials />
      <Logo />
      <Book />
    </>
  );
}
