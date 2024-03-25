import React, {useEffect, useState} from 'react'
import Header from '../Components/Header'
import { books } from '../Data/dataBooks';
import { borrowedBooks } from '../Data/dataBorrowedBooks';
import BookList from '../Components/BookDisplay/BookList';

function Home() {

    const [bookId, setBookId] = useState();
    const [bookName, setbookName] = useState("Book's information");
    const [bookCategory, setbookCategory] = useState();
    const [bookAuthor, setbookAuthor] = useState();
    const [bookDescription, setbookDescription] = useState();

    const [filteredBooks, setFilteredBooks] = useState(books)

    function searchBooks(searchString) {
        const filter = (books.filter(book=>book.name.toLowerCase().includes(searchString.toLowerCase())))
        setFilteredBooks(filter)
    }
    
    useEffect(()=> {console.log(filteredBooks)}) , [filteredBooks]

    function bookIdSearch(bookValue) {
        const indexBook = books.findIndex(book => book.id === bookId)
      if(indexBook !== -1) {
        setbookName(books[indexBook].name)
        setbookAuthor(books[indexBook].author)
        setbookCategory(books[indexBook].category)
        setbookDescription(books[indexBook].description)
         return bookId;
        }else {
          setbookName("Book not Found!")
          setbookAuthor("")
          setbookCategory("")
          setbookDescription("")
      }
    }

  return (
    <div>
      <Header/>
      <br /><br /><hr /><br />
      <br /><h1>Home page</h1><br /><hr /><br />
      <div className='searchBookContainer'>

        <h2>Search book:</h2> <br /> <br />
        <input type="text" value={bookId} placeholder='Book name or ID' onChange={(e) => setBookId(e.target.value)}/> <br /><br />
        <button onClick={()=>searchBooks(bookId)}>Search by name</button> <br /><br />
        <button onClick={()=>bookIdSearch(bookId)}>Search by ID</button>
      </div>
      <br /><br />
      <div className='bookResultDisplay'>

        <h1>ID search result:</h1>
         <h1 className='bookTitle'>{bookName}</h1><br />
         <h3>{bookAuthor}</h3><br />
         <h2>{bookCategory}</h2><br />
         <p>{bookDescription}</p>
      </div>
      <div className='searchedBooks'>
        <BookList
          arr={filteredBooks}
          ></BookList >
          <br /><hr /><br />
          <h1>Borrowed Books:</h1>
      </div>

      <br /><button onClick={()=>setFilteredBooks(books)}>Reset List</button><br />
      <BookList arr={borrowedBooks} >
        <h1></h1>
      </BookList>
    </div>
  )
}

export default Home
