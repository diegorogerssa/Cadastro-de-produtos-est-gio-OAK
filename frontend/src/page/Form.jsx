import { useState } from 'react';
import registerProduct from '../api/registerProduct';
import { useNavigate } from "react-router-dom";

function Form (){

  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: 0,
    available: false,
  });
  
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };
  
  const handleRadioChange = (event) => {
    setForm({
      ...form,
      available: event.target.value === 'true' ? true : false
    });
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await registerProduct(form);
      console.log(response);
      if (response.message === 'price must be greater than zero') {
        return alert('O preço deve ser maior que zero');
      }
      if (response.message === 'all fields are required') {
        return alert('Todos os campos são obrigatórios');
      }
      if (response.message === 'invalid data type') {
        return alert('Tipo de dado inválido');
      }
      setForm({
        name: '',
        description: '',
        price: 0,
        available: false,
      });
      navigate('/produtos');
    } catch (error) {
      return alert('Erro ao cadastrar produto, teste novamente mais tarde');
    }
  }

  return (
    <main className="flex flex-col items-center">
      <div className='flex flex-col items-center max-w-80'>
        <h1 className="text-3xl my-6 underline">Cadastro de Produtos</h1>
        <div className='flex justify-end w-full'>
          <button
            className='bg-blue-500 text-white rounded my-2  min-w-28'
            type="button"
            onClick={() => navigate('/produtos')}
          >Ver Produtos
          </button>
        </div>
        <form className="flex flex-col items-center justify-around bg-slate-700 w-1/3 h-96 min-w-max">
          <input className="rounded-md bg-gray-200 p-2 m-2 w-80"
            type="text"
            name="name"
            placeholder="Nome do produto"
            onChange={handleChange}
          />
          <textarea
            className="rounded-md bg-gray-200 p-2 m-2 w-80 h-20 min-w-80"
            name="description"
            placeholder="Descrição do produto"
            onChange={handleChange}
          />
          <input
            className="rounded-md bg-gray-200 p-2 m-2 w-80"
            type="number"
            name="price"
            placeholder="Preço do produto"
            onChange={handleChange}
            />
          <div className='flex'>
          <h2 className='text-white text-lg mr-6'>Disponível:</h2>
            <label
              className='text-white text-lg'
              htmlFor="option1">sim
              <input
                className='m-2'
                type="radio"
                checked
                id="option1"
                name="available"
                value='true'
                onChange={handleRadioChange}
              />
            </label>
            <label
              className='text-white text-ls'
              htmlFor="option2">não
              <input
                className='m-2'
                type="radio"
                id="option2"
                name="available"
                value="false"
                onChange={handleRadioChange}
                />
            </label>
          </div>
          <button
            className='bg-green-500 text-white p-2 rounded mt-2 min-w-80'
            type="submit"
            onClick={handleSubmit}
            >CADASTRAR
          </button>
        </form>
      </div>
    </main>
  )
}

export default Form