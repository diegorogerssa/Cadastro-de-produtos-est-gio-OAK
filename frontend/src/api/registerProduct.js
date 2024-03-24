async function registerProduct(form) {
  const response = await fetch('http://localhost:3002/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  });

  return await response.json();
}

export default registerProduct;