import React, { useState } from 'react';
import axios from 'axios';



const  AddressForm = () => {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState({
    street: '',
    neighborhood: '',
    city: '',
    state: '',
  });

  const handleCepChange = (event) => {
    const newCep = event.target.value.replace(/\D/g, ''); // Remover caracteres não numéricos
    setCep(newCep);

    if (newCep.length === 8) {
      // Se o CEP tiver 8 dígitos, buscar informações de endereço
      axios.get(`https://viacep.com.br/ws/${newCep}/json/`)
        .then(response => {
          if (!response.data.erro) {
            setAddress({
              street: response.data.logradouro,
              neighborhood: response.data.bairro,
              city: response.data.localidade,
              state: response.data.uf,
            });
          }
        })
        .catch(error => {
          console.error('Erro na requisição:', error);
        });
    }
  };

  return (
    <div class="form-container">
      <h2 class="text-center mb-4">Preencha os dados:</h2>
      <form className='campo'>

      <label className='titulo' htmlFor="texto">Nome:</label>
      <br />
        <input class="text-center mb-5"
          type="text"
          id="street"
          name="street"
          value={address.text}
          
        />
        <br />
       

<label className='titulo' htmlFor="texto">Email:</label>
<br />
        <input class="text-center mb-5"
          type="text"
          id="street"
          name="street"
          value={address.text}
          
        />
<br />


        <label className='titulo' htmlFor="cep">CEP:</label>
        <br />
        <input class="text-center mb-5"
          type="text"
          id="cep"
          name="cep"
          maxLength="9"
          placeholder="Digite o CEP"
          value={cep}
          onChange={handleCepChange}
          required
        />
<br />

        <label className='titulo' htmlFor="street">Logradouro:</label>
        <br />
        <input class="text-center mb-5"
          type="text"
          id="street"
          name="street"
          value={address.street}
          readOnly
        />
<br />

<label htmlFor="numero">Número:</label>
<br />
        <input class="text-center mb-5"
          type="numero"
          id="street"
          name="street"
          value={address.numero}
          
        />
<br />

        <label className='titulo' htmlFor="neighborhood">Bairro:</label>
        <br />
        <input class="text-center mb-5"
          type="text"
          id="neighborhood"
          name="neighborhood"
          value={address.neighborhood}
          readOnly
        />
<br />

        <label className='titulo' htmlFor="city">Cidade:</label>
        <br />
        <input class="text-center mb-5"
          type="text"
          id="city"
          name="city"
          value={address.city}
          readOnly
        />
<br />

        <label className='titulo' htmlFor="state">Estado:</label>
        <br />
        <input class="text-center mb-5"
          type="text"
          id="state"
          name="state"
          value={address.state}
          readOnly
        />
<br />

<label className='titulo' htmlFor="state">Complemento:</label>
<br />
        <input class="text-center mb-5"
          type="text"
          id="state"
          name="state"
          value={address.text}
          
        />
        <br />
        
        <button className='btn' onSubmit={"enviar"}>Enviar</button>
      </form>
    </div>
  );
  };

export default AddressForm;
