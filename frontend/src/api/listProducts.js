const listProducts = async () => {
  try {
    const response = await fetch('http://localhost:3002/list-product');
    return response.json();
  }
  catch (error) {
    console.log(error);
  }
}

export default listProducts;