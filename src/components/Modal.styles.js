import styled, {css} from "styled-components"

export const Modal = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 500px;
  width: 700px;
  background: black;
  margin: auto;
  left: 0;
  right: 0;
  border-radius: 15px;
  z-index: 2;

  ${props =>
    props.isHidden &&
    css `
      display: none;
    `
  }
`
export const ModalHeader = styled.h1`
  color: white;
  font-size: 30px;
  text-align: center;
`

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
`

export const ModalInput = styled.input`
  margin: 15px 0;
  height: 30px;
  border-radius: 20px;
  border: none;
  padding: 2px 10px;
`

export const ModalFooter = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: row;
`

export const ModalButton= styled.button`
  margin: 0 30px;
  width: 100px;
  height: 30px;
`
