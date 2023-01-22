import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchForm from '../../components/SearchForm'

const Index: React.FC = () => {
	const [searchQuery, setSearchQuery] = useState('')
	const [searchedQuery, setSearchedQuery] = useState('')
	const [loading, setLoading] = useState(false)
	const [isErrVisible, setIsErrVisible] = useState(false)

	const apiUrl = 'https://apis.uloz.to/v5/folder/' + searchQuery + '/folder-list'
	const headers = { 'X-Auth-Token': ';HG%7jW6@6/8vx">R;f(' }
	const navigate = useNavigate()

	// search for folder from input
	const handleSearch = () => {
		if (searchQuery) {
			fetchDataFromApi()
			setLoading(true)
			setSearchedQuery(searchQuery)
		}
	}
	const fetchDataFromApi = () => {
		fetch(apiUrl, {
			headers: headers,
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(`Chyba ve spojení: status je ${response.status}`)
				}
				return response.json()
			})
			.then((actualData) => {
				navigate('/' + actualData.folder.slug)
			})
			.catch(() => {
				setIsErrVisible(true)
				setTimeout(() => {
					setIsErrVisible(false)
				}, 2000)
			})
			.finally(() => {
				setLoading(false)
			})
	}

	return (
		<div>
			<SearchForm {...{ searchQuery, setSearchQuery, handleSearch }} />
			{loading && <div>Moment prosím, hledám.......</div>}
			{isErrVisible && (
				<div>
					{'Hledaná složka '} <strong>{searchedQuery}</strong> {' neexistuje'}
				</div>
			)}
		</div>
	)
}

export default Index
