import React, {useState} from 'react'
import ReactDOM from 'react-dom';
import Elements from '../data/listSetup.js'
import { ListContainer, Button} from './ListContainer.styles'
import {Modal, ModalHeader, ModalForm, ModalInput, ModalFooter, ModalButton } from './Modal.styles'
import {tr, td, button} from '../theme/assist.css'



const List = () => {


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

    const clearFields = () => {
      const fields = document.querySelectorAll('ModalInput')
      fields.forEach(field => field.value = "")
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
        if (index === 'new'){
          createClient(client)
          clearFields()
          updateTable()
          hiddenShow()
        } else {
          updateClient(index, client)
          updateTable()
          hiddenShow()
        }
      }
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

    const hiddenShowNew = () => {
      const modal = document.getElementById('modal');
      if(modal.style.display === 'none') {
        modal.style.display='flex'
        document.getElementById('name').removeAttribute('data-index')
        document.getElementById('name').setAttribute('data-index', 'new')
      }else {
       modal.style.display="none"
       document.getElementById('name').removeAttribute('data-index')

      }
    }

    const hiddenShow = () => {
      const modal = document.getElementById('modal');
      if(modal.style.display === 'none') {
        modal.style.display='flex'
      }else {
       modal.style.display="none"
      }
    }

    const editDelete = (event) => {
      if (event.target.type === 'button') {
        const [action, index] = (event.target.id.split('-'))
        if (action === 'edit') {
          editClient(index)
          hiddenShow()
        } else {
          deleteClient(index)
        }
      }
    }
    if(document.querySelector('#listContainer>tbody') === null){
    } else {
      document.querySelector('#listContainer>tbody').addEventListener('click', editDelete)
    }

    const [toggle, setToggled] = useState(true)
    const [noToggle, unToggle] = useState(false)

  return(
  <>
    <Button type="checkbox" onClick={() => hiddenShowNew()}> Novo Cliente </Button>
    <table id="listContainer" style={{position:"absolute"}}>
      <thead>
        <tr style={{margin:'0 100px', fontSize:'24px', color:'orange'}}>
          <td> Nome </td>
          <td> E-mail </td>
          <td> Celular </td>
          <td> Cidade </td>
          <td> Ações </td>
        </tr>
      </thead>
      <tbody style={{display:"flex", flexDirection:"column", justifyContent:"space-between", width:"1440px", margin:'0 100px'}}>
      </tbody>
    </table>
    <Modal id="modal" style={{display: "none"}}>
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
        <ModalButton onClick={() => hiddenShow()}> Cancelar </ModalButton>
      </ModalFooter>
    </Modal>
  </>
  )
}

export default List;
