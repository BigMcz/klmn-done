import React from 'react'
import { Outlet } from 'react-router-dom'
import { Wrapper } from './styled'

const Layout: React.FC = () => (
	<Wrapper>
		<h1>Nubium JS sandbox</h1>
		<Outlet />
	</Wrapper>
)

export default Layout
