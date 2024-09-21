// Faz as importações do useState e useEffect, hooks do React para gerenciar estado e efeitos
import React, { useState, useEffect } from "react"
// faz a importação do Form
import Form from "./Form"
// faz a importação da Table
import Table from "./Table"
// faz a importação do httpHelper
import { httpHelper } from "../helpers/httpHelper"

// Cria a função definindo assim o componente CrudUser
const CrudUser = () => {
	// Declara o estado 'users' para armazenar a lista de usuários, inicializado como null
	const [users, setUsers] = useState(null)
	 
	// Define a url do endpoint da API para fazer a busca e manipulação dos dados de usuários
	const url = "http://localhost:5000/users"
	
	// Inicializa a instância da função httpHelper
	const api = httpHelper()

	 // utiliza o useEffect e o getUsers como um gancho para buscar os usuarios uma vez quando o componente é montado
	useEffect(() => {
		getUsers()
	}, [])

	//Função criada com o objetivo de adicionar um novo usuário
	const postUser = user => {
		api
			.post(`${url}`, { body: user }) // Faz uma chamada POST para a API
			.then(res => getUsers()) // Atualiza a lista de usuários após a adição
			.catch(err => console.log(err)) // Imprime qualquer erro
	}

	//Função criada com o objetivo de atualizar um usuário existente
	const updateUser = (id, user) => {
		api
			.put(`${url}/${id}`, { body: user }) // Faz uma chamada PUT para a API
			.then(res => getUsers()) // Atualiza a lista de usuários após a atualização
			.catch(err => console.log(err)) // Imprime qualquer erro
	}

	//Função criada com o objetivo de deletar um usuario
	const deleteUser = id => {
		api
			.del(`${url}/${id}`, {}) // Faz uma chamada DELETE para a API
			.then(res => getUsers()) // Atualiza a lista de usuários após a deleção
			.catch(err => console.log(err))  // Imprime qualquer erro
	}

	// Função para buscar todos os usuários da API
	const getUsers = () => {
		api
			.get(`${url}?_expand=companies`) // Faz uma chamada GET para a API buscando todos os usuários com dados expandidos da empresa
			.then(res => {
				setUsers(res) // Atualiza o estado 'users' com a resposta da API
			})
			.catch(err => console.log(err))  // Imprime qualquer erro
	}

	// Se não houver usuários, retorna null
	if (!users) return null

	// Renderiza o componente
	return (
		<>
			{/* Título para a seção de novo usuário */} 
			<h3>New user</h3> 
			{/* Renderiza o componente Form e passa a função postUser como prop para adicionar um novo usuario */}
			<Form postUser={postUser} /> 
			<div className='all-users'>
				{/* Título para a seção de todos os usuários */}
				<h3>All users</h3>
				{/* Componente Table que exibe todos os usuários atraves das operações de crud */}
				<Table
					users={users}
					setUsers={setUsers}
					postUser={postUser}
					updateUser={updateUser}
					deleteUser={deleteUser}
				/>
			</div>
		</>
	)
}
//Faz a exportação de forma padrão do componente funcional CrudUser
export default CrudUser
