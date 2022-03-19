import React, {Component} from 'react';
import {Table, 
Button,
FormGroup,
FormLabel,
Input} from '@mui/material';
import Alert from '@mui/material/Alert';
import '../../styles.css';


class FormProduto extends Component {
 

  state = { 
    model: { 
        id: 0, 
        descricao: '',
        preco: 0, 
        quantity: 0 
    } 
};

setValues = (e, field) => {
    const { model } = this.state;
    model[field] = e.target.value;
    this.setState({ model });
}

create = () => {
    this.setState({ model: { id: '',  descricao: '', preco: ''} })
    this.props.produtoCreate(this.state.model);
}



  render () {
    return (
     
    <>
      <FormGroup>
        <FormLabel for="descricao"> Descrição: </FormLabel>
         <Input id="descricao" type="text" placeholder="Descrição do Produto..."></Input> 
        
      </FormGroup>
      <FormGroup>
        <div className="form-row">
          <div className="col-md-6">
          <FormLabel for="preco">Preço:</FormLabel>
            <Input id="preco" type="text"  value={this.state.model.preco} placeholder="R$ " 
              onChange={e => this.setValues(e, 'preco') } />

          </div>
        </div>
        <div className="col-md-6">
         <FormLabel for="quantity">Quantidade:</FormLabel>
            <Input id="quantity" type="text" value={this.state.model.quantity} placeholder="Qtd. de produtos disponíveis" 
               onChange={e => this.setValues(e, 'quantity') } />
          </div>
          <Button color="primary" block onClick={this.create}> Salvar </Button>
      </FormGroup>
    </>
      
    )
  }
  

}



class ListaProduto extends Component {

  delete = (id) => {
    
    
    this.props.deleteProduto(id);
}


  render () {
    const { produtos }= this.props;
    console.log(produtos);

    return (
      <Table>
        <thead>
          <tr>

            <th>Nome</th>
            <th>Descrição</th>
            <th>Marca</th>
            <th>Categoria</th>
          </tr>
        </thead>
        
        <tbody>
          {
            produtos.map(produto => (
              <tr key={produto.id}>
                 <td>{produto.name_produto}</td>
                <td>{produto.descricao_produto}</td>
                <td>{produto.marca_produto}</td>
                <td>{produto.categoria_produto}</td>
                <td> 
                  <Button>Salvar</Button>
                  <Button>Editar</Button>
                  <Button onClick={this.delete}>Excluir</Button>
                </td>
                
              </tr>
            ))
          }
        
      </tbody>
      </Table>
      
      
    )
  }

}


export class ProdutoBox extends Component {
 
  Url = "http://localhost:3001/Produtos";

  state= {
    produtos: [],
    message: {
      text: '',
      alert: '',
  }
  }

  componentDidMount() {
  fetch(this.Url)
    .then(response => response.json())
    .then(produtos => this.setState({ produtos }))
    .catch(e => console.log(e));
  }

  save = (produto) => {
    let data = {
        id: parseInt(produto.id),
        descricao: (produto.descricao),
        preco: parseFloat(produto.preco),
        quantity: parseInt(produto.quantity),
    };
    console.log(data);

    const requestInfo = {
        method: data.id !== 0? 'PUT': 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-type': 'application/json'
        })
    };

    if(data.id === 0) {
      // ADICIONAR NOVO PRODUTO
      fetch(this.Url, requestInfo)
      .then(response => response.json())
      .then(newProduto => {
          let { produtos } = this.state;
          produtos.push(newProduto);
          this.setState({ produtos, message: { text: 'Novo produto adicionado com sucesso!', alert: 'success' } });
          this.timerMessage(3001);
      })
      .catch(e => console.log(e)); 
  } else {
      // EDITAR PRODUTO
      fetch(`${this.Url}/${data.id}`, requestInfo)
      .then(response => response.json())
      .then(updatedProduto => {
          let { produtos } = this.state;
          let position = produtos.findIndex(produto => produto.id === data.id);
          produtos[position] = updatedProduto;
          this.setState({ produtos, message: { text: 'Produto atualizado com sucesso!', alert: 'info' } });
          this.timerMessage(3001);
      })
      .catch(e => console.log(e)); 
  }
}

//APAGAR PRODUTO
delete = (_id) => {
  fetch(`${this.Url}/${_id}`, {method: 'DELETE'})
      .then(response => response.json())
      .then(rows => {
          const produtos = this.state.produtos.filter(produto => produto.id !== {_id});
          this.setState({ produtos,  message: { text: 'Produto deletado com sucesso.', alert: 'danger' } });
          this.timerMessage(3001);
      })
      .catch(e => console.log(e));
}

timerMessage = (duration) => {
  setTimeout(() => {
      this.setState({ message: { text: '', alert: ''} });
  }, duration);
}


  render() {
    return(
      
      <div>
                {
           this.state.message.text !== ''? (
                        <Alert color={this.state.message.alert} className="text-center"> {this.state.message.text} </Alert>
                    ) : ''
           }
      <div>
      <h2>Cadastro de Produtos</h2>
      <FormProduto produtoCreate={this.save}/>
      </div>
      <div>
      <h2>Lista de Produtos</h2>
      <ListaProduto produtos={this.state.produtos} />
      </div>
      </div>

    
      
    );
  }

};
