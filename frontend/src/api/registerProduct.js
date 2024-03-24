// const registerProduct = async (product) => {
//   try {
//     const response = await fetch('http://localhost:3002/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(product),
//     });
//     return response.json();
//   } catch (error) {
//     console.log(error);
//   }
// }

async function registerProduct(form) {
  const response = await fetch('http://localhost:3002/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  });

  // if (!response.ok) {
  //   throw new Error(`HTTP error! status: ${response.status}`);
  // }

  return await response.json(); // Isso analisa a resposta como JSON
}

export default registerProduct;