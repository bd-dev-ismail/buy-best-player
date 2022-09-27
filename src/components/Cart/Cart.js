
import { current } from 'daisyui/src/colors';
import './Cart.css';
const Cart = ({item}) => {
    const {price, name} = item;
    return (
      <div className="order-info text-lg text-white p-4 flex justify-between">
        <p>Name: {name}</p>
        <p>Price: {price}</p>
        
      </div>
    );
};

export default Cart;