import "./Footer.css";

export function Footer() {
  return (
    <footer>
      <small className="footer-text">
        Esta página utiliza la API de
        <a
          className="link"
          href="https://developers.google.com/books?hl=es-419"
        >
          <span>Google Books</span>
        </a>
        para la búsqueda de libros.
      </small>
    </footer>
  );
}
