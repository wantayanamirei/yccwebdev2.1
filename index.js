import { catalog } from './catalog.js';

const century = 19;
const search = 'Стругацкие';

// I. Вывод языков
function getLanguages(books) {
  const languages = books.map(book => book.language);
  const uniqueLanguages = [...new Set(languages)];
  console.log('📚 Языки книг в каталоге:');
  console.log(uniqueLanguages.join(' - ') + '\n');
}

// II. Фильтрация книг по веку
function filterByCentury(books, century) {
  const startYear = (century - 1) * 100 + 1;
  const endYear = century * 100;
  
  return books.filter(book => 
    book.year >= startYear && 
    book.year <= endYear
  );
}

// III. Поиск по автору и названию
function searchBooks(books, query) {
  const lowerQuery = query.toLowerCase();
  return books.filter(book => 
    book.author.toLowerCase().includes(lowerQuery) ||
    book.title.toLowerCase().includes(lowerQuery)
  );
}

// 1. Уникальные языки
getLanguages(catalog);

// 2. Книги указанного века
console.log(`📅 Книги ${century} века:`);
const centuryBooks = filterByCentury(catalog, century);
if (centuryBooks.length > 0) {
  centuryBooks.forEach(book => console.log(
    `- "${book.title}" ${book.author} (${book.year})`
  ));
} else {
  console.log('Книг не найдено ❌');
}

// 3. Поиск книг
console.log(`\n🔎 Результаты поиска "${search}":`);
const foundBooks = searchBooks(catalog, search);
if (foundBooks.length > 0) {
  foundBooks.forEach(book => console.log(
    `- ${book.author} - "${book.title}"`
  ));
} else {
  console.log('Книги и/или авторы не найдены ❌');
}
