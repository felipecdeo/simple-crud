import React, {useState} from 'react'
import ReactDOM from 'react-dom';
import Elements from '../data/listSetup.js'
import { ListContainer, Input} from './ListContainer.styles'
import {Modal, ModalHeader, ModalForm, ModalInput, ModalFooter, ModalButton } from './Modal.styles'


const List = () => {
  const [toggle, setToggled] = useState(false)

    const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
    const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))

    const createClient = (client) => {
      const dbClient =  getLocalStorage()
      dbClient.push (client)
      setLocalStorage(dbClient)
    }

    const readClient = () => getLocalStorage()

    const updateClient = (index, client) => {
      const dbClient = readClient()
      dbClient[index] = client
      setLocalStorage(dbClient)
    }

    const deleteClient = (index) => {
      const dbClient = readClient()
      dbClient.splice(index, 1)
      setLocalStorage(dbClient)
      updateTable()
    }

    const isValidFields = () => {
      return document.getElementById('form').reportValidity()
    }


    const saveClient = (client) => {
      const dbClient = readClient()
      dbClient.forEach(createRow)

      if (isValidFields()){
        const client = {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          contact: document.getElementById('contact').value,
          city: document.getElementById('city').value,
        }

        const index = document.getElementById('name').dataset.index
        if (index == 'new'){
          createClient(client)
          clearFields()
          updateTable()
        } else {
          updateClient(index, client)
          updateTable()
        }
      }
    }

    const clearFields = () => {
      const fields = document.querySelectorAll('ModalInput')
      fields.forEach(field => field.value = "")
    }

    const createRow = (client, index) => {

      const newRow = document.createElement('tr')
      newRow.innerHTML = `
        <td>${client.name}</td>
        <td>${client.email}</td>
        <td>${client.contact}</td>
        <td>${client.city}</td>
        <td>
          <button type="button" id="edit-${index}"> Editar </button>
          <button type="button" id="delete-${index }"> Excluir </button>
        </td>
      `
      document.querySelector('#listContainer>tbody').appendChild(newRow)
    }

    const clearTable = () => {
      const rows = document.querySelectorAll('#listContainer>tbody tr')
      rows.forEach(row => row.parentNode.removeChild(row))
    }

    const updateTable = () => {
      const dbClient = readClient()
      clearTable()
      dbClient.forEach(createRow)
    }

    const fillFields = (client) => {
      document.getElementById('name').value = client.name
      document.getElementById('email').value = client.email
      document.getElementById('contact').value = client.contact
      document.getElementById('city').value = client.city
      document.getElementById('name').dataset.index = client.index
    }

    const editClient = (index) => {
      const client = readClient()[index]
      client.index = index
      fillFields(client)
    }

    const editDelete = (event) => {
      if (event.target.type === 'button') {
        const [action, index] = (event.target.id.split('-'))

        if (action === 'edit') {
          editClient(index)
        } else {
          deleteClient(index)
          updateTable()
        }
      }
    }

    document.querySelector('#listContainer>tbody').addEventListener('click', editDelete)

  return(
  <>
    <Input type="checkbox" onChange={(event) => setToggled(event.target.checked)}/>
    <table id="listContainer" style={{position:"absolute"}}>
      <thead>
        <tr style={{display:"flex", justifyContent:"space-between", width:"1440px", margin:'30px 100px', }}>
          <th> Nome </th>
          <th> E-mail </th>
          <th> Celular </th>
          <th> Cidade </th>
        </tr>
      </thead>
      <tbody style={{display:"flex", flexDirection:"column", justifyContent:"space-between", width:"1440px", margin:'0 100px'}}>
      </tbody>
    </table>
    <Modal style={{display:toggle ? "flex" : "none"}}>
      <ModalHeader>
        Novo Cliente:
      </ModalHeader>
      <ModalForm form="true" id="form">
        <ModalInput id="name" data-index='new' type="text" placeholder="Nome do(a) Cliente" required/>
        <ModalInput id="email" type="email" placeholder="E-mail do(a) Cliente" required/>
        <ModalInput id="contact" type="text" placeholder="Celular do(a) Cliente" required/>
        <ModalInput id="city" type="text" placeholder="Cidade do(a) Cliente" required/>
      </ModalForm>
      <ModalFooter>
        <ModalButton onClick={() => saveClient()}> Salvar </ModalButton>
        <ModalButton onClick=""> Cancelar </ModalButton>
      </ModalFooter>
    </Modal>
  </>
  )
}

export default List;
