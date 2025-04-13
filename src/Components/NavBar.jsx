import React, {useState} from 'react'
import './NavBar.css'
import { ShoppingCartOutlined,
         SearchOutlined,
         HeartTwoTone,
         UserOutlined
        } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart, addItem } from '../Store/CartSlice';


const NavBar = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const [isOpen, setIsOpen] = useState(false);
    const cartCount = cartItems.filter(item => item.quantity > 0).length;

    const handleCartModal = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div className='navBar'>
        <div className='title'>
            <span>Shop</span>
            <span>with</span>
            <span>Me</span>
        </div>
        <div className='menu'>
            <ul>
                <li><img src="./fire.png"/>Today's Deal</li>
                <li>Clearance<span>Save upto 70%</span></li>
                <li>Drawing a Blank?</li>
            </ul>
        </div>
        <div className='cart'>
            <div className='search'>
                <input type="text" placeholder='Search for products' />
                <a><SearchOutlined style={{color: 'white'}}/> </a> 
            </div>
            <HeartTwoTone twoToneColor="#eb2f96"/>
            <UserOutlined style={{color: 'cornflowerblue'}}/>
            <div className='cart-icon'>
                <ShoppingCartOutlined style={{fontsize: '2rem'}} onClick={handleCartModal}/>
                <span className='cart-count'>{cartCount}</span>
            </div>
        </div>
        <div className={`cart-slider ${isOpen ? "open" : ""}`}>
            <div className='cart-header'>
                <h2>Your Cart</h2>
                <button onClick={handleCartModal}>Close</button>
            </div>
            {
                cartCount == 0 ?
                <div className='empty-cart'>Your cart is empty...</div>
                :
                <div className='cart-items'>
                    {cartItems.filter(item => item.quantity > 0).map((item, index) => (
                        <div key={index} className='cart-item'>
                            <img src={item.images} alt={item.title} />
                            <div className='item-details'>
                                <h5>{item.title}</h5>
                                <p>Price: ${item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                            <div className='item-actions'>
                                <div className='quantity'>
                                    <button onClick={() => dispatch(removeItem(item))}>-</button>
                                    <button onClick={() => dispatch(addItem(item))}>+</button>
                                </div>
                                <button onClick={() => dispatch(clearCart(item))}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>    
            }
        </div>
    </div>
  )
}

export default NavBar