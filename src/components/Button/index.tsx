import { ButtonStyled } from './styles'
interface IButton {
  title: string
}

export function Button(props: IButton) {
  return (
    <ButtonStyled>{props.title}</ButtonStyled>
  )
}