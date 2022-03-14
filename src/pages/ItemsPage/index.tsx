import { GlobalStyle } from "../../styles/global";
import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import { Items } from "../../components/Items";
import { useState } from "react";

export function ItemsPage() {
  interface ItemDTO {
    name: string
    brand: string
    type: string
    quantity: number
    price: number
  } 
  
  const items: ItemDTO[] = []

  const [item, setItem] = useState(items)
  return (
    <>
    <div>
      <Title /> 
      <Button title="Importar itens"/>
      <Button title="Criar"/>
      <Items />
      <GlobalStyle />
    </div>
    </>
  );
}
