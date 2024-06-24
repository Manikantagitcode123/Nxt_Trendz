import {Component} from 'react'
import Cookies from 'js-cookie'
import Rproduct from '../rproduct'
import Header from '../Header'
class Productremove extends Component {
  state = {productsList: [], apiStatus: ''}
  componentDidMount() {
    this.getProducts()
  }
  renderpage = () => {
    this.getProducts()
  }
  getProducts = async () => {
    this.setState({
      apiStatus: '',
    })
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://ecomersebackend-7.onrender.com/products/'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl)
    if (response.ok) {
      const fetchedData = await response.json()
      //console.log(fetchedData)
      const updatedData = fetchedData.data.map(each => ({
        id: each.productid,
        name: each.productname,
        oimg: each.productimg,
        descrption: each.productdescription,
        price: each.productprice,
        brand: each.productbrand,
      }))
      this.setState({
        productsList: updatedData,
        apiStatus: '',
      })
    } else {
      this.setState({
        apiStatus: '',
      })
    }
  }
  render() {
    const {productsList} = this.state
    //console.log(productsList)
    return (
      <div>
        <Header />
        <h1>ManageProducts</h1>
        <ul>
          {productsList.map(each => (
            <Rproduct
              data={each}
              key={each.id}
              refreshpage={this.renderpage()}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Productremove
