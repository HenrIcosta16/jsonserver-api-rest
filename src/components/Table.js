// Faz a importação do React
import React from "react"
// Faz a importação do Form
import Form from "./Form"

// Cria a função definindo assim o componente Table que recebe os props users,postUser,updateUser e deleteUser
const Table = ({ users, postUser, updateUser, deleteUser }) => {
 // Função para mostrar a atualização do usuário que recebe um parâmetro id
	const showUpdateUser = id => {
  //pega os elementos do formulário com a classe show-form-id
		const form = document.getElementsByClassName(`show-form-${id}`)
		form[0].classList.toggle("hide-form") // alterna a classe hide-form no primeiro elemento
	}

// Cria um componente funcional chamado Row que representa uma linha da tabela,que recebe o prop user
	const Row = ({ user }) => {
  // Retorna o jsx que o componente Row irá renderizar
		return (
			<>
    {/* div que exibe as informações dos usuários */}
				<div className='row'>
					<div>{user.name}</div>
					<div>{user.email}</div>
					<div>{user.phone}</div>
					<div>{user.companies.name}</div>
     {/* div que agrupa os botões */}
					<div className='buttons'>
						<button onClick={() => showUpdateUser(user.id)}>Update</button> {/* botão para acionar a exibição da atualização de usuário no formulário */}
						<button onClick={() => deleteUser(user.id)}>Delete</button> {/* botão para acionar a exibição de deleção de usuário */}
					</div>
				</div>
				<div className={`hide-form show-form-${user.id}`}>
					<Form userData={user} postUser={postUser} updateUser={updateUser} /> {/* Formulário para editar o usuário */} 
				</div>
			</>
		)
	}

	return (
		<div className='table'>
			<div className='titles'>
				<div>Name</div>
				<div>Email</div>
				<div>Phone</div>
				<div>Company</div>
				<div>Actions</div>
			</div>
			<div className='rows'>
				{users && users.map(u => <Row user={u}  key={u.id} />)} {/* mapeia os usuários para criar uma linha para cada um */}
			</div>
		</div>
	)
}
// Faz a exportação de forma padrão do componente funcional Table
export default Table
