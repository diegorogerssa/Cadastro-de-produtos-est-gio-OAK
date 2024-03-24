import { useEffect, useState } from 'react';
import listProducts from '../api/listProducts';
import { useNavigate } from "react-router-dom";

function ListProduct() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    listProducts().then((response) => {
      setProducts(response);
    });
  }, []);
  
  return (
    <main className='flex flex-col items-center'>
      <h1 className='text-3xl my-6 underline'>Lista de Produtos</h1>
      <div className='flex justify-around w-2/4 bg-slate-800 p-2'>
        <h2 className='text-lg font-bold text-white'>Produtos</h2>
        <h2 className='text-lg font-bold text-white'>Preço</h2>
      </div>
      <ul className='flex flex-col w-2/4'>
        {products.map((product) => (
          <li className='flex justify-around   ' key={product.id}>
            <h2 className=' bg-gray-500 w-2/4 p-2 border border-gray-700'>{product.name}</h2>
            <p className=' bg-gray-500 w-2/4 p-2 border border-gray-700'>{product.price.replace('.',',')}</p>
          </li>
        ))}
      </ul>
      <button 
        className='bg-blue-500 text-white text-lg p-2 rounded mt-2 w-2/4 font-bold'
        type="submit"
        onClick={() => navigate('/')}
      >Cadastrar novo produto
      </button>
    </main>
    
  );
}

export default ListProduct;
