import './quantityPicker.css';
import{useState} from 'react';

const QuantityPicker = () =>{
    const [quantity, setQuantity] = useState(1);

    const increase = () =>{
        console.log('Click increase');
        let number = quantity+1;
        setQuantity(number);
    }
    const decrease = () =>{
        console.log('Click decrease');
        let number = quantity-1;
        setQuantity(number);
    }
    return (
        <div className="qt-Picker">
            
            <button onClick={increase}>+</button>
            <label >{quantity}</label>
            <button onClick={decrease}>-</button>
        </div>
    );
}

export default  QuantityPicker;