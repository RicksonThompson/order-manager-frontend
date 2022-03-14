import { Container, Info, SeeMore, Actions } from "./styles";
import { FaChevronDown } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'

export function Items() {
  return (
    <>
      <Container>
        <Info>
          <p>1234</p>
          <p>Notebook Lenovo I3</p>
          <p>QTD: 50</p>
          <Actions>
            <button>
              <FiEdit color='#1c1c1c' />
            </button>
            <button>
              <AiOutlineDelete color='#1c1c1c'/>
            </button>
          </Actions>
        </Info>
        <SeeMore>
          <FaChevronDown color='#1c1c1c'/>
          <p>ver mais...</p>
        </SeeMore>
      </Container>
    </>
  )
} 