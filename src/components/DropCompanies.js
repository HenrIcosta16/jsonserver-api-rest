// Faz as importações do useState e useEffect, hooks do React para gerenciar estado e efeitos
import React, { useState, useEffect } from "react"
// faz a importação do httpHelper
import { httpHelper } from "../helpers/httpHelper"

// Cria a função definindo assim o componente DropCompanies que recebe os props companiesId e handleValue
const DropCompanies = ({ companiesId, handleValue }) => {
	// Cria o estado para armazenar a lista de empresas, inicialmente nulo
	const [companies, setCompanies] = useState(null)
	 // Cria o estado para armazenar o ID da empresa selecionada, inicializado com o valor de 'companiesId' recebido via props
	const [company, setCompany] = useState(companiesId)

	// Define a URL do endpoint da API para buscar as empresas
	const url = "http://localhost:5000/companies"
	//Inicia a instância da função httpHelper
	const api = httpHelper()

	// utiliza o useEffect e o getUrl como um gancho para buscar as empresas uma vez quando o componente é montado
	useEffect(() => {
		api
			.get(url)
			//Se a requisição for bem sucedida
			.then(res => {
				// Define o estado 'companies' com a lista de empresas, adicionando a opção inicial 'Select Company'
				setCompanies([{ id: 0, name: "Select Company" }, ...res])
			})
			.catch(err => console.log(err)) // Em caso de erro, exibe o erro no console
	}, []) // A matriz de dependências está vazia, então este efeito só roda uma vez quando é realizada a montagem do componente

	// Se as empresas não foram buscadas, retorne null
	if (!companies) return null

	return (
		// Cria um campo select que permite ao usuário escolher uma empresa
		<select
			name='companiesId'
			value={company}
			onChange={e => {
				// Atualiza o estado 'company' quando o valor do select é alterado
				setCompany(e.target.value)
				// Chama a função handleValue passada como props para lidar com a mudança do valor selecionado
				handleValue(e)
			}}
		>

			{/* o map itera sobre as empresas para gerar as opções no select */}
			{companies.map(c => (
				<option value={c.id} key={c.id}>
					{c.name}
				</option>
			))}
		</select>
	)
}
//Faz a exportação de forma padrão do componente funcional DropCompanies
export default DropCompanies
