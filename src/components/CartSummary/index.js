// Write your code here
import "./index.css"
import CartContext from '../../context/CartContext'
const CartSummery = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      const p = cartList.map(each => {
        let totala = each.quantity * each.price
        total = total + totala
      })
      const items = cartList.length
      return (
        <div>
          <h3>Order Total: Rs {total}/-</h3>
          <p>{items} Items in cart</p>
          <button className="button">Checkout</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummery
