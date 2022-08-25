import './admin.css';
import {useState} from 'react';
const Admin = () => {
    const [product, setProduct] = useState({})
    const saveProduct = () => {
        console.log(product);
    }

    const textChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        let copy = {...product};
        copy[name] = value;
        setProduct(copy);
    }
    const saveCoupons = () => {
        console.log(coupon);

    }
    const [coupon, setCoupon] = useState({})
    const couponChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        let copy = {...coupon};
        copy[name] = value;
        setCoupon(copy);

    };
    return (
    <div className='admin'>
        <h2>Store Administration</h2>
        <div className='parent'>
            <section className='products'>
                <h3>Register Product</h3>
                <div className='my-form'>
                      <label>Title:</label>
                      <input name='title' onChange={textChange} type='text' className='form-control'></input>
                </div>

                <div className='my-form'>
                      <label>Price:</label>
                      <input name='price' onChange={textChange} type='text' className='form-control'></input>
                </div>
                <div className='my-form'>
                      <label>Image:</label>
                      <input name='image' onChange={textChange} type='text' className='form-control'></input>
                </div>

                <div className='my-form'>
                      <label>Category:</label>
                      <input name='category' onChange={textChange}type='text' className='form-control'></input>
                </div>

                <div className='my-form'>
                      <button onClick={saveProduct}type='text' className='btn btn-primary btn-sn'>Save Prod</button>
                </div>
            </section>
            <section className='list'>
                <h3>Register Product</h3>

                <div className='my-form'>
                      <label>Code:</label>
                      <input name='category' onChange={couponChange}type='text' className='form-control'></input>
                </div>
                <div className='my-form'>
                      <label>Discount:</label>
                      <input name='Discount' type='text' className='form-control' onChange={couponChange}></input>
                </div>

                <div className='my-form'>
                      <button onClick={saveCoupons}type='text' className='btn btn-primary btn-sn'>Save Prod</button>
                </div>
            </section>
        </div>
    </div>
    );
}

export default Admin