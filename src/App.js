// Faz a importação do componente LogoIcon que está definida neste arquivo que se encontra localizada nas pastas assets/icons
import { LogoIcon } from "./assets/icons"
// Faz a importação do componente CrudUser
import CrudUser from "./components/CrudUser"
// Faz a importação do arquivo de estilo App.css
import "./styles/App.css"

function App() {
	return (
		<>
			<header>
				<div className='header__content'>
					<div className='logo'>
						<LogoIcon />
						<strong>JSON SERVER API</strong>
					</div>
				</div>
			</header>
			<main>
				<CrudUser />
			</main>
		</>
	)
}

//Faz a exportação de forma padrão na função/componente App
export default App