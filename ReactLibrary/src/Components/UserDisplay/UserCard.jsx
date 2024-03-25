import React, {useState}from 'react'
import Title from '../Title'
import Paragraph from '../Paragraph'
import Button from '../Button';
import { books } from '../../Data/dataBooks';
import { borrowedBooks } from '../../Data/dataBorrowedBooks';

function UserCard(props) {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [bookIdInput, setBookIdInput] = useState();
  const [userLib, setUserLib] = useState(props.user.borrowed)



  const handleBorrowClick =() => {
    setIsPopupOpen(true)
  }

  const handleClosePopup =()=> {
    setIsPopupOpen(false);
  }

  const handleInputChange = (e) => {
    setBookIdInput(e.target.value)
  }

  const handleBorrowConfirm =()=> {
    const indexBook = books.findIndex(book => book.id === bookIdInput)
    const newBook = books[indexBook];
    const newBook2 = {"Book": books[indexBook].name, "id":books[indexBook].id}
    console.log(indexBook)
    if(indexBook != -1 && books[indexBook].isBorrowed == false){
        newBook.isBorrowed = props.user.name
        borrowedBooks.push(newBook)
        setUserLib([...userLib,newBook2]);
        console.log(userLib)
        books.splice(indexBook,1)
    } else {
      window.alert("Book not found")
    }
  
    handleClosePopup();
  }
 

  return (
    <div className='userCard'>
    <Title text={props.user.name} /> <br />
    <Button text={"Borrow"} onClick={handleBorrowClick} /><br />
    <h3>Books in possession: </h3>
    {JSON.stringify(userLib)}
    
    {isPopupOpen && (
      <div className="popup">
        <h2>Borrow a Book</h2>
        <label htmlFor="bookIdInput">Enter Book ID:</label>
        <input type="text" id="bookIdInput" value={bookIdInput}  onChange={handleInputChange} />
        <br />
        <Button text="Confirm" onClick={handleBorrowConfirm} />
        <Button text="Cancel" onClick={handleClosePopup} />
      </div>
    )}
  </div>
);
}

export default UserCard;
