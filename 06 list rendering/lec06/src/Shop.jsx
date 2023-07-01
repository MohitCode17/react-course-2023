import Book from "./Book"
import data from "./data"

const Shop = () => {
  return (        
    <div className="container">
      {data.map(ele => (
        <Book 
          key={ele.id}
          coverImg={ele.coverImg}
          bookTitle={ele.bookTitle}
          price={ele.price}
          author={ele.author}
          totalQty={ele.totalQty}
        />
      ))}
    </div>
  )
}

export default Shop