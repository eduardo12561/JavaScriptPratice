/* 

    Buscando e contando dados em arrays

    Baseado no Array de livros por categoria abaixo, faça os seguintes desafios

    - Contar o número de categorias e o número de livros em cada categoria
    - Contar o número de autores
    - Mostrar livros do autor Augusto Cury

 */

    const booksByCategory = [
        {
            category: "Riqueza",
            books: [
                {
                    title: "Os segredos da mente milionária",
                    Author: "T. Harv Eker",
                },
                {
                    title: "O homem mais rico da Babilônia",
                    Author: "George S. Clason",
                },
                {
                    title: "Pai rico, Pai pobre",
                    Author: "Robert T. Kiyosaki e Sharon L. Lechter",
                },
            ],
        },
        {
            category: "Inteligencia Emocional",
            books: [
                {
                    title: "Você é Insubstituível",
                    Author: "Augusto Cury",
                },
                {
                    title: "Ansiedade - Como enfrentar o mal do século",
                    Author: "Augusto Cury",
                },
                {
                    title: "Os 7 hábitos das pessoas altamente eficazes",
                    Author: "Stephen R. Covey",
                },

            ],
        },
    ];

    const totalCategories = booksByCategory.length
    console.log('O total de categorias são:', totalCategories);
    for(let category of booksByCategory) {
        console.log('Total de livros da categoria:', category.category);
        console.log(category.books.length);
    }

   
function countAuthors() {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }

    console.log("Total de autores:", authors.length);
}

countAuthors();

function booksOfAugustoCury() {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === 'Augusto Cury') {
                books.push(book.title)
            }
        }
    }

    console.log("Livros do autor:", books.length);
}

booksOfAugustoCury();