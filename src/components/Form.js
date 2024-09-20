/ Faz a importação do useState, hook do React para gerenciar o estado.
import React, { useState } from "react"
// Faz a importação do componente Dropcompanies
import DropComapies from "./DropCompanies"

// Cria a função definindo assim o componente Form que recebe os props userData,postUser e uptadeUser
const Form = ({ userData = {}, postUser, updateUser }) => { 
	const [user, setUser] = useState({
		name: userData.name ?? "",
		username: userData.username ?? "",
		email: userData.email ?? "",
		phone: userData.phone ?? "",
		companiesId: userData.companiesId ?? "0",
	})

 // Função criada para atualizar o estado do usuário com base na entrada do formulário
	const handleValue = e => {
		setUser({ ...user, [e.target.name]: e.target.value }) // Atualiza o estado com o valor do campo correspondente
	}

// Função criada para lidar com o envio do formulário
	const submitUser = e => {
		e.preventDefault() // Previne o comportamento padrão do formulário

  // Verifica se uma empresa foi selecionada
		if (user.companiesId === "0") return  // Se não, não faz nada

  // Se userData.id existe, atualiza o usuário, senão, adiciona um novo usuário
		if (userData.id) {
			updateUser(userData.id, user)
		} else {
			postUser(user)
		}
	}

	return (
		<form onSubmit={submitUser} className='row'>
			<input
				type='text'
				name='name'
				value={user.name}
				placeholder='Name'
				onChange={e => handleValue(e)}
			/>
			<input
				type='email'
				name='email'
				value={user.email}
				placeholder='Email'
				onChange={e => handleValue(e)}
			/>
			<input
				type='tel'
				name='phone'
				value={user.phone}
				placeholder='Phone (10)'
				pattern='[0-9]{10}'
				onChange={e => handleValue(e)}
			/>
			<DropComapies companiesId={user.companiesId} handleValue={handleValue} />
			<input
				className='btn-submit'
				type='submit'
				value={`${!userData.id ? "Add new user" : "Save user"}`}
			/>
		</form>
	)
}

export default Form
