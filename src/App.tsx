import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './routes/Index'
import { GlobalStyles } from './constants/GlobalStyle'
import Folder from './routes/Folder'
import Layout from './components/Layout'
import NotFound from './routes/NotFound'

const App: React.FC = () => (
	<>
		<GlobalStyles />
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<Index />} />
					<Route path=":folderSlug" element={<Folder />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</>
)

export default App
