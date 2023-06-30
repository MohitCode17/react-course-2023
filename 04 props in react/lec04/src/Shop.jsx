import Book from "./Book"


const Shop = () => {
  return (        
    <div className="container">
      <Book 
        coverImg="https://m.media-amazon.com/images/I/71Yb9hJXocL._AC_UY218_.jpg"
        bookTitle="Think Straight: Change your thoughts, Change your life." 
        price={230}
        author="Darius Foroux"
      />
      <Book 
        coverImg="https://m.media-amazon.com/images/I/61ZPDQOjw-L._AC_UY218_.jpg"
        bookTitle="Do It Today: Overcome procrastination, improve productivity and achieve more meaningful things." 
        price={167}
        author="Darius Foroux"
      />
      <Book 
        coverImg="https://m.media-amazon.com/images/I/71B4h-dSVzL._AC_UY218_.jpg"
        bookTitle="Energize Your Mind: Learn the Art of Mastering Your Thoughts, Feelings and Emotions" 
        price={179}
        author="Gaur Gopal Das"
      />
    </div>
  )
}

export default Shop