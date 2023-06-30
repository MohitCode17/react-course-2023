const Book = ({ coverImg, author, price, bookTitle }) => {
    return (
        <div className="content">
            <div className="left">
                <img src={coverImg} alt="book" />
            </div>
            <div className="right">
                <h2 className="title">{bookTitle}</h2>
                <p id="author">by <a href="" className="author">{author}</a></p>
                <p id="price"><sup>₹</sup><span className="price"> {price}</span></p>
            </div>
        </div>
    )
}

export default Book;