import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'
import Productsadd from './components/Productsadd'
import Productremove from './components/Productremove'

import './App.css'

class App extends Component {
  state = {
    cartList: [],
  }
  removeCartItem = id => {
    const {cartList} = this.state
    const deleteitem = cartList.filter(each => each.id != id)
    this.setState({cartList: deleteitem})
  }
  removeAllCartItems = () => {
    this.setState({cartList: []})
  }

  addCartItem = product => {
    //console.log(product.id)
    const {cartList} = this.state
    const data = cartList.map(each => {
      if (each.id === product.id) {
        each.quantity = each.quantity + 1
        //console.log(each)
        return each
      }
      return each
    })
    const adding = cartList.filter(each => each.id === product.id)
    //console.log(adding)

    //console.log(data)
    if (data.length === 0 || adding.length === 0) {
      this.setState(prevState => ({cartList: [...prevState.cartList, product]}))
    } else {
      this.setState({cartList: data})
    }

    //console.log(product)

    //   TODO: Update the code here to implement addCartItem
  }
  incrementCartItemQuantity = iid => {
    //console.log(id)
    const {cartList} = this.state
    //const additem=cartList.filter(eachitem=>eachitem.id===id)
    //console.log(additem)
    const up = cartList.map(each => {
      if (each.id == iid) {
        //console.log(each)
        each.quantity = each.quantity + 1
        return each
      }
      return each
    })
    this.setState({cartList: up})
  }
  decrementCartItemQuantity = id => {
    const {cartList} = this.state
    const dc = cartList.map(each => {
      if (each.id === id) {
        each.quantity = each.quantity - 1
        return each
      }
      return each
    })
    this.setState({cartList: dc})
  }

  render() {
    const {cartList} = this.state

    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          removeAllCartItems: this.removeAllCartItems,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
          removeCartItem: this.removeCartItem,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/products" component={Products} />
          <ProtectedRoute exact path="/productsadd" component={Productsadd} />

          <ProtectedRoute
            exact
            path="/productremove"
            component={Productremove}
          />
          <ProtectedRoute
            exact
            path="/products/:id"
            component={ProductItemDetails}
          />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
