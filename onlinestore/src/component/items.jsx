import './items.css';

import QuantityPicker from "./quantityPicker";
const Item = ()=> {

    return (
        <div className="item">
            <img src='https://picsum.photos/300/300'></img>
            <h3>Random Object 1</h3>
            <QuantityPicker className='picker'></QuantityPicker>
        </div>
    );
}

export default Item;