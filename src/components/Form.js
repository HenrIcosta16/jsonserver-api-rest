// Faz a importação do useState, hook do React para gerenciar o estado.
import React, { useState } from "react"
// Faz a importação do componente DropCompanies
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
		<form onSubmit={submitUser} className='row'> {/* Formulário com submit definido */}
			<input
				type='text'
				name='name'
				value={user.name}
				placeholder='Name'// Placeholder para o campo nome
				onChange={e => handleValue(e)} // Atualiza o estado ao mudar o valor
			/>
			<input
				type='email'
				name='email'
				value={user.email}
				placeholder='Email' // Placeholder para o campo email
				onChange={e => handleValue(e)}
			/>
			<input
				type='tel'
				name='phone'
				value={user.phone}
				placeholder='Phone (10)'// Placeholder para o campo telefone
				pattern='[0-9]{10}'// garante que o telefone tenha 10 dígitos
				onChange={e => handleValue(e)}
			/>
			<DropComapies companiesId={user.companiesId} handleValue={handleValue} /> {/* Componente para selecionar empresas */}
			<input
				className='btn-submit'
				type='submit'
				value={`${!userData.id ? "Add new user" : "Save user"}`} // Texto do botão baseado na presença de userData.id
			/>
		</form>
	)
}
// Faz a exportação de forma padrão do componente funcional Form
export default Form
