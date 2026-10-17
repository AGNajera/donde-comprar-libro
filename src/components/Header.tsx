import "./Header.css";

export function Header() {
  return (
    <header>
      <section className="logo">
        <a className="title" href="/">
          Donde comprar libro
        </a>
      </section>
      <section className="genres">
        <a href="/">Géneros</a>
      </section>
    </header>
  );
}
