import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, setProducts } from '../store/CartSlice';
import './Products.css'

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart.items);

    const fetchProducts = async () => {
        try{
            const response = await fetch('https://dummyjson.com/products?limit=20');
            if(response.ok){
                const data =  await response.json();
                const updatedData = data.products.map(item => ({ ...item, quantity: 0 }));
                dispatch(setProducts(updatedData));
                
            }else{
                console.log('Error fetching products');
            }
        }catch(error){
            console.log(error.message);
        }
    };

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
    };

    const handleRemoveFromCart = (product) => {
        dispatch(removeItem(product));
    }

    useEffect(() => {
        fetchProducts();
    },[]);

  return (
    <div className='products'>
        {products.map((product,index) => (
            <div className='card' key={index}>
                <img src={product.images} alt={product.description} />
                <div className='card-info'>
                    <h3>{product.title}</h3>
                    <p>${product.price}</p>
                    <div className='stars'>
                    {Array(5).fill(0).map((_, index) => {
                        return (
                            <span key={index} style={{
                                color: index < product.rating ? 'gold' : 'gray'
                            }}>
                                {index < product.rating ? '⭐' : '☆'}
                            </span>
                        );
                    })}
                    </div>
                        {product.quantity == 0 ?
                        <button className="addtocart" onClick={()=>{handleAddToCart(product)}}>Add to Cart</button>
                        :
                        (
                            <div className='addremovecart'>
                                <button onClick={()=>{handleRemoveFromCart(product)}}>-</button>
                                <span>{product.quantity}</span>
                                <button onClick={()=>{handleAddToCart(product)}}>+</button>
                            </div>
                        )
                        }
                </div>
            </div>
        ))
    }
    </div>
  )
}

export default Products