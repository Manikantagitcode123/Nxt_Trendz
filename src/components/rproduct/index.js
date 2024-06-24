const Rproduct = props => {
  const {data, refreshpage} = props
  const {brand, descrption, id, name, oimg, price} = data
  const removeitem = async () => {
    //console.log(id)
    const url = 'https://ecomersebackend-7.onrender.com/deleteproduct/'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id}), // Wrapping the name in an object before stringifying
    }
    const response = await fetch(url, options)
    console.log(response)
  }

  //console.log(data)
  return (
    <li>
      <div>
        <h1>{name}</h1>
        <p>{brand}</p>
        <p>{price}</p>
        <button onClick={removeitem}>Remove</button>
      </div>
    </li>
  )
}

export default Rproduct
