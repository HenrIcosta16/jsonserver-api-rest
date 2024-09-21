// Exporta e cria uma função chamada httpHelper do tipo arrow function que retorna os métodos de requisições http
export const httpHelper = () => {
 // Função customFetch criada com o objetivo de fazer uma requisição à API com as opções fornecidas
	const customFetch = async (url, options = {}) => {
  // Define o método padrão como "GET"
		const defaultMethod = "GET"
  // Define os headers padrão para o tipo de conteúdo e aceitação de JSON 
		const defaultHeaders = {
			"Content-Type": "application/json",
			Accept: "application/json",
		}
  // Cria um novo AbortController para permitir que a requisição seja abortada
		const controller = new AbortController()
  // Adicionar um sinal de abortamento às opções da requisição 
		options.signal = controller.signal

  // Define o método da requisição, ou usa "GET" como padrão 
		options.method = options.method || defaultMethod
  // Mescla os headers fornecidos com os headrs padrão 
		options.headers = options.headers
			? { ...defaultHeaders, ...options.headers }
			: defaultHeaders

  // Verifica se há um corpo para a requisição,transforma em JSON, ou remove o corpo se for falso
		options.body = JSON.stringify(options.body) || false
		if (!options.body) delete options.body

  // Configura um timeout de 3 segundos para abortar a requisição caso ela demore demais
		setTimeout(() => {
			controller.abort()
		}, 3000)

  // Tenta fazer a requisição com fetch e retorna a resposta em formato JSON 
		try {
			const response = await fetch(url, options)
			return await response.json()
		} catch (err) {
   // Se ocorrer um erro, retorna o erro
			return err
		}
	}

 // Cria o método GET que usa a função customFetch para fazer requisições GET 
	const get = (url, options = {}) => customFetch(url, options)

 // Cria o método POST, configurando o método como "POST" antes de usar o customFetch 
	const post = (url, options) => {
		options.method = "POST"
		return customFetch(url, options)
	}

 // Cria o método PUT, configurando o método como "PUT" antes de usar o customFetch
	const put = (url, options) => {
		options.method = "PUT"
		return customFetch(url, options)
	}

 // Cria o método DELETE, configurando o método como "DELETE" antes de usar o customFetch 
	const del = (url, options) => {
		options.method = "DELETE"
		return customFetch(url, options)
	}

 // Retorna os métodos get,post,put e del para serem usados externamente
	return {
		get,
		post,
		put,
		del,
	}
}
