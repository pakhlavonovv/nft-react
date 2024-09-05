import './sass/style.scss'
import CardCollection from './img/card-collection.svg'

const index = () => {
  return (
    <>
    <div className="container collection">
    <div className="collection_title text-white">
        <h1>Trending Collection</h1>
        <p>Checkout our weekly Updated Trending Collection</p>
    </div>
    <div className="collection_cards">
        <div className="card"></div>
    </div>
    </div>
    </>
  )
}

export default index