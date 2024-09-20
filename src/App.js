// Faz a importação do componente LogoIcon que está definida neste arquivo que se encontra localizada nas pastas assets/icons
import { LogoIcon } from "./assets/icons"
// Faz a importação do componente CrudUser
import CrudUser from "./components/CrudUser"
// Faz a importação do arquivo de estilo App.css
import "./styles/App.css"

// Cria a função definindo assim o componente App
function App() {
 //Retorna o jsx a ser renderizado
	return (
		<>
          {/* Header é o cabeçalho da página */}
			<header>
				<div className='header__content'>
					<div className='logo'>
						<LogoIcon />
						<strong>JSON SERVER API</strong>
					</div>
				</div>
			</header>
      {*/ Main é o cara que armazena o conteúdo principal da página */}
			<main>
    {*/ Componente principal da aplicação onde será feita as operações de crud dos usuários */}
				<CrudUser />
			</main>
		</>
	)
}

//Faz a exportação de forma padrão na função/componente App
export default App