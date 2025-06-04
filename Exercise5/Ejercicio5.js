const streamers = [
    { name: 'Rubius',    age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai',      age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven',     age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
  ];

  // 2) Seleccionamos el input usando el atributo data-function
  const input = document.querySelector('input[data-function="toFilterStreamers"]');

  // 3) Función que filtra e imprime por consola los streamers cuyo nombre incluye la cadena 'query'
  function filterStreamersByName(query) {
    // Si query está vacío, limpiamos la consola y no mostramos nada
    if (!query) {
      console.clear();
      return;
    }

    // Filtro usando .filter() y .includes() (sensible a mayúsculas/minúsculas)
    const filtered = streamers.filter(streamer =>
      streamer.name.includes(query)
    );

    console.clear();
    console.log(`Streamers que contienen "${query}":`);
    filtered.forEach(s => console.log(s.name));
  }

  // 4) Asignamos el listener al evento 'input'
  input.addEventListener('input', (event) => {
    const value = event.target.value;
    filterStreamersByName(value);
  });