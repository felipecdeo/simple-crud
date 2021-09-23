import React, {useState, Component} from 'react'
import ReactDOM from 'react-dom';
import Elements from '../data/listSetup.js'
import { ListContainer, Button } from './ListContainer.styles'
import Modal from './Modal'
import { show, hide } from '../helper/helper.css'

 class List extends React.Component {

  state= {
    divContainer:false,
  }

  render(){

    var HandleChange = e => {
      this.setState({divContainer:!this.state.divContainer})
    }

    const x = this.state.divContainer

    return(
    <>
      <Button onClick={HandleChange} type="button">
      {x?'Fechar Modal':'Novo Cliente'}
      </Button>
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
      {
        x &&(<Modal></Modal> )
      }
    </>
    )
  }
}

export default List;
