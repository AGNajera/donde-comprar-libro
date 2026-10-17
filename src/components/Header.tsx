import "./Header.css";

export function Header() {
  return (
    <header>
      <h1 className="logo">
        <a className="title" href="/">
          Donde comprar libro
        </a>
      </h1>
      <nav className="genres">
        <a className="link" href="/">
          Géneros
        </a>
      </nav>
    </header>
  );
}
