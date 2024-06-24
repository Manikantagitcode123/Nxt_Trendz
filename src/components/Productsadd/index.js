import {Component} from 'react'
import {v4} from 'uuid'
import Header from '../Header'
import './index.css'
class Productsadd extends Component {
  state = {
    productname: '',
    productimg: '',
    productprice: 0,
    productdescription: '',
    productbrand: '',
    error: '',
  }
  submitdata = async event => {
    event.preventDefault()
    const {
      productname,
      productimg,
      productprice,
      productdescription,
      productbrand,
    } = this.state
    const productid = v4()
    console.log(productid)
    const pdata = {
      productid,
      productname,
      productimg,
      productprice,
      productdescription,
      productbrand,
    }
    const url = 'https://ecomersebackend-7.onrender.com/createproduct/'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pdata),
    }
    const response = await fetch(url, options)
    if (response.ok == true) {
      console.log(response)
      this.setState({
        productbrand: '',
        productdescription: '',
        productimg: '',
        productname: '',
        productprice: 0,
      })
    } else {
      this.setState({error: 'product not created'})
    }

    //console.log(ddata)
  }
  changename = event => {
    this.setState({productname: event.target.value})
  }
  changeimg = event => {
    this.setState({productimg: event.target.value})
  }
  changeprige = event => {
    this.setState({productprice: event.target.value})
  }
  changeproductdes = event => {
    this.setState({productdescription: event.target.value})
  }
  changebrand = event => {
    this.setState({productbrand: event.target.value})
  }

  render() {
    const {
      productid,
      productname,
      productimg,
      productprice,
      productdescription,
      productbrand,
    } = this.state
    return (
      <div>
        <Header />
        <div className="productsaddcard">
          <h1 className="heading">Add Product</h1>
          <form onSubmit={this.submitdata} className="formdata">
            <label htmlFor="name">Product name </label>
            <br />
            <input
              id="name"
              placeholder="productname"
              onChange={this.changename}
              value={productname}
            />
            <br />
            <label htmlFor="img">Product image </label>
            <p className="para">
              For product image plase upload image
              <span>
                {' '}
                <a href="https://cloudinary.com/" target="_blank">
                  hear
                </a>{' '}
              </span>
              and paste the URL bellow
            </p>

            <input
              id="img"
              placeholder="product image"
              onChange={this.changeimg}
              value={productimg}
            />
            <br />
            <label htmlFor="price">Product Price </label>
            <br />
            <input
              id="price"
              placeholder="product price"
              onChange={this.changeprige}
              value={productprice}
            />
            <br />
            <label htmlFor="description">Product Description </label>
            <br />
            <input
              id="description"
              placeholder="product description"
              onChange={this.changeproductdes}
              value={productdescription}
            />
            <br />
            <label htmlFor="brand">Product Brand </label>
            <br />
            <input
              id="brand"
              placeholder="product brand"
              onChange={this.changebrand}
              value={productbrand}
            />
            <br />
            <button type="submit" className="btn12">
              {' '}
              submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}
export default Productsadd
