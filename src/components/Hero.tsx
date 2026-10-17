import "./Hero.css";

export function Hero() {
  return (
    <section className="hero">
      <h2>Busca tu libro favorito</h2>
      <p>Busca tu libro favorito y descubre en donde puedes comprarlo.</p>
      <form className="search-form" name="search-form" method="get">
        <input
          type="text"
          placeholder="Busca tu libro favorito"
          className="search-input"
        />
        <button type="submit" className="search-button">
          Buscar
        </button>
      </form>
    </section>
  );
}
