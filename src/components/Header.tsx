import "./Header.css";

export function Header() {
  return (
    <header>
      <nav className="logo">
        <a className="title" href="/">
          Donde comprar libro
        </a>
      </nav>
      <nav className="genres">
        <a className="link" href="/">
          Géneros
        </a>
      </nav>
    </header>
  );
}
