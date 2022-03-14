import { GlobalStyle } from "../../styles/global";
import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import { Items } from "../../components/Items";
import React, { useReducer, useState } from "react";

export function CreateItemPage() {
  interface ItemDTO {
    name?: string
    brand?: string
    type?: string
    quantity?: number
    price?: number
  } 
  
  const [inputs, setInputs] = useState<ItemDTO>()

  function handleChange(event: React.FormEvent<HTMLInputElement>) {
    const name = event.currentTarget.name
    const value = event.currentTarget.value
    setInputs(values => ({...values, [name]: value}))
  }

  function handleSubmit(event: React.FormEvent) {
    alert('Um nome foi enviado: ' + inputs)
    event.preventDefault()
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={inputs?.name || ""} onChange={handleChange} />
        </label>
        <label>
          Marca:
          <input type="text" value={inputs?.brand || ""} onChange={handleChange} />
        </label>
        <label>
          Tipo:
          <input type="text" value={inputs?.type || ""} onChange={handleChange} />
        </label>
        <label>
          Quantidade:
          <input type="text" value={inputs?.quantity || ""} onChange={handleChange} />
        </label>
        <label>
          Preço:
          <input type="text" value={inputs?.price || ""} onChange={handleChange} />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
}
