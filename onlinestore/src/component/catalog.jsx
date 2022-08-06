import './catalog.css';
import Item from './items';


const Catalog = () => {
    return(
    <div className="catalog">
        <h1>Our Catalog</h1>
        <div className="product-list">
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
        </div>
    </div>)
}

export default Catalog;