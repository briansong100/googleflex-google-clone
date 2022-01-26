import React,{ useContext, createContext, useState} from 'react'

const ResultContext = createContext()
const baseUrl = `https://${process.env.REACT_APP_API_HOST}/api/v1`

export const ResultContextProvider =({children})=>{
	const [results, setResults] =useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [searchTerm , setSearchTerm ] = useState('')
	const [typeSave, setTypeSave] = useState('/search')

	const getResults = async (type, query) =>{
		setIsLoading(true)

		let settingUrl = ''
		if ( type ==='/videos') {
			settingUrl = `${baseUrl}/search/${query}&num=20&lr=lang_en&hl=en&cr=US`
		} else {
			settingUrl = `${baseUrl}${type}/${query}&num=100&lr=lang_en&hl=en&cr=US`
		}
		// "desktop" or "mobile". Defaults to "desktop"
		// 'US', 'CA', 'IE', 'GB', 'FR', 'DE', 'SE', 'IN', 'JP', 'KR', 'SG', 'AU', 'BR'
		const responce = await fetch( settingUrl, {
			method: 'GET',
			headers: { 
				'x-user-agent': 'desktop',
				'x-proxy-location': 'SG',
				'x-rapidapi-host': process.env.REACT_APP_API_HOST,
				'x-rapidapi-key': process.env.REACT_APP_API_KEY
			}
		})
		const data = await responce.json()
		console.log(data);
		if (type ==='/images' ) {
			setResults(data.image_results)
		} else if ( type ==='/news') {
			setResults( data.entries)
		} else{
			setResults(data.results)
		}
		setTypeSave(type)
		setIsLoading(false)
	}
	return (
		<ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading, typeSave}}> 
			{children}
		</ResultContext.Provider>
	)
}

export const useResultContext =()=> useContext(ResultContext)
