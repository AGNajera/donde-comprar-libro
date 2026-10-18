export function SearchBooks() {
  return (
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
  );
}
