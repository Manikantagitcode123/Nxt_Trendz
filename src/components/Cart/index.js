import Header from '../Header'
import CartListView from '../CartListView'
import CartSummery from '../CartSummary'
import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {removeAllCartItems, cartList} = value
      console.log(cartList)
      const showEmptyView = cartList.length === 0
      const removeall = () => {
        removeAllCartItems()
      }
      // TODO: Update the functionality to remove all the items in the cart

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button className="right btn1" onClick={removeall}>
                  Remove All
                </button>
                <CartListView />
                <div className="right">
                  <CartSummery />
                </div>
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
