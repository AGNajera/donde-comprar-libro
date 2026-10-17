# Donde comprar libro

La finalidad de esta pagina web es para ver las diferentes tiempas para comprar dicho libro.
En lugar de abrir la tienda (su app o pagina), esperar a que carge la pagina o app, escribir el nombre del libro, esperar, y ahí ya te da la lista de las diferentes ediciones del mismo libro.
Lo que trato de hacer es que una vez busques el libro, ya tienes las diferentes tiendas a la mano para que en lugar de hacer todo lo anterior mencionado, solo tengas que hacer una vez la busqueda y puedas ver las diferentes tiendas para realizar la comprar del libro que es lo que al final quieres y no estar buscando en cada tienda.
Ya sé que debe de haber muchas páginas que hagan esto, pero **quiero hacer mi versión de como a mí me gustaría que fuera**

## React con TS, React Ruoter

Esta pagina web está diseñada con estas tecnologías. No hay una explicación detallada del porqué escogí estas tecnologías mas que son las bibliotecas con las cuales tengo un poco de experiencia escribiendo código. Aunque ya se que en esta era de IA algunas personas ya no les importa el código, yo soy un desarrollador que **apenas** está empezando a escribir código, he realizado algunos proyectos, sin embargo, aún no tengo la experiencia para hacer que la IA haga todo y solo tenga que escribir prompts y hacer que el sistema sea escalable, matenible, etc.
De momento no veo que NextJS sea de mucha ayuda en esta pagina sencilla, las rutas se harán con **React Router**.

## ¿Cómo va a funcionar la página?

Buscas un libro y la pagina de devolvera el libro con su información, te aparecerán botones de las diferentes opciones para la compra del libro que seleccionaste. Listaré las tiendas más populares:
- Amazon 
- Gandhi 
- Penguin
- Mercado Libre
- Sanborns
- Liverpool
- Porrúa

Después veré si añado más.

Habrá diferentes categorías de libros.

### ¿Qué usaré?

API de Google Books ya que ésta a diferencia de OpenLibrary, tiene mejor soporte en español y es generosa con las solicitudes que le haré. Aunque después de testear la pagina, veré si es necesario integrar OpenLibrary para tenerla de respaldo.