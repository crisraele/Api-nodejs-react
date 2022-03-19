import  axios  from  "axios"; 
//import  {  create  }  from 'apisauce'



export const api = axios.create({

baseURL: "http://localhost:3001/",

});


export const findUsuario = async (email) => {
  return await api.get(`/Usuario/${email}` );

};

export const findProduto = async (_id) => {
  return await api.get(`/Produtos` );

};



