import React from 'react'

interface Props {
	searchQuery: string
	setSearchQuery: (searchQuery: string) => void
	handleSearch: () => void
}
const SearchForm: React.FC<Props> = ({ searchQuery, setSearchQuery, handleSearch }) => (
	<form onSubmit={(e) => e.preventDefault()}>
		<input
			className="inputSearch"
			type="text"
			autoFocus
			onChange={(e) => setSearchQuery(e.target.value)}
			value={searchQuery}
			placeholder="Zadejte slug složky"
		/>
		<button className="button" type="submit" onClick={handleSearch}>
			Vyhledat
		</button>
	</form>
)

export default SearchForm
