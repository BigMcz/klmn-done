import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

//data types
export interface Data {
	name: string
	public_url: string
	slug: string
}

const Folder: React.FC = () => {
	const { folderSlug } = useParams()
	const [data, setData] = useState<Data>({ name: '', public_url: '', slug: '' })
	const [sub, setSub] = useState<Data[]>([])
	const [filterValue, setFilterValue] = useState('')
	const [error, setError] = useState(null)
	const preUrl = 'https://uloz.to'
	const apiUrl = 'https://apis.uloz.to/v5/folder/' + folderSlug + '/folder-list'
	const headers = { headers: { 'X-Auth-Token': ';HG%7jW6@6/8vx">R;f(' } }

	useEffect(() => {
		const fetchFolderSluGFromAPI = async () => {
			await axios
				.get(apiUrl, headers)
				.then((res) => {
					const apiDataFolder = res.data.folder
					const apiDataSubfolders = res.data.subfolders

					setData(apiDataFolder)
					setSub(apiDataSubfolders)
				})
				.catch((err) => setError(err.message))
		}
		fetchFolderSluGFromAPI()
	}, [folderSlug])

	const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const textInput = e.target.value.toLowerCase()
		setFilterValue(textInput)
	}

	return (
		<div>
			{error && (
				<div>
					{'Hledaná složka '} <strong>{folderSlug}</strong> {' neexistuje'}
				</div>
			)}
			{data && (
				<div>
					<div className="mainFolder">
						<h3>Jméno složky:</h3>
						<p className="nameFolder">{data.name}</p>
						<p>
							<a href={preUrl + data.public_url}>Odkaz na ulož.to</a>
						</p>
					</div>
				</div>
			)}
			<div>
				<div>
					<h4>Podsložky:</h4>
					<input type="text" className="inputFilter" autoFocus onChange={inputHandler} placeholder="Filtruj podsložky" />
				</div>
				{sub
					.filter((inner) => inner.name.toLowerCase().includes(filterValue))
					.map((sub) => (
						<div key={sub.slug} className="linkTo">
							<Link to={`/${sub.slug}`} className="link">
								{sub.name}
							</Link>
						</div>
					))}
			</div>
		</div>
	)
}

export default Folder
