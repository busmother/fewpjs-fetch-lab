function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then(resp => resp.json())
    .then(json => renderBooks(json))
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})

function fetchCharacters() {
  return fetch("https://anapioficeandfire.com/api/characters")
  .then(resp => resp.json())
  .then(json => renderBooks(json))
}

function renderCharacters(characters) {
  const main = document.querySelector('main');
  character = characters[1030];
  const h3 = document.createElement('h3');
  h3.innerHTML = character.name;
  main.appendChild(h3);
}