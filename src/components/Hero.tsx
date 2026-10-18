import "./Hero.css";
import { SearchBooks } from "./SearchBooks.tsx";

export function Hero() {
  return (
    <section className="hero">
      <h1>Busca tu libro favorito</h1>
      <p>Busca tu libro favorito y descubre en donde puedes comprarlo.</p>
      <SearchBooks />
    </section>
  );
}
