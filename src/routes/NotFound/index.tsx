import React, { useEffect } from 'react'

const NotFound: React.FC = () => {
	useEffect(() => {
		document.title = 'Stránka nenalezena'
	})

	return <>Stránka nenalezena</>
}

export default NotFound
