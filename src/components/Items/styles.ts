import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 90%;
  border-radius: 10px;
  flex-direction: column;
  padding: 15px;
  background-color: #FFFFFF;
`

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-bottom: 10px;
  font-weight: 600;

  p {
    color: #1c1c1c;
  }
`

export const SeeMore = styled.div`
  display: flex;
  padding: 5px;
  align-items: center;

  p {
    margin-left: 5px;
    color: #1c1c1c;
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30px;

  button {
    border: none;
    overflow: hidden;
    background-color: transparent;
    cursor: pointer;
    background-repeat:no-repeat;
    width: auto;
    height: auto;
  }
`