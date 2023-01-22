import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 960px;
	margin: 0 auto;
	text-align: center;
	font-family: Arial, Helvetica, sans-serif;

	body {
		margin: 0;
		padding: 0;
	}
	html {
		margin: 0;
		padding: 0;
	}
	.inputFilter,
	.inputSearch {
		width: 30%;
		border: 3px solid #990f6b;
		padding: 5px 10px;
		height: 20px;
		border-radius: 5px;
		outline: none;
		color: #2e2e2d;
		margin-bottom: 1.5rem;
	}
	.inputSearch {
		border-right: none;
		border-radius: 5px 0 0 5px;
	}

	.button {
		background-color: #990f6b;
		border: none;
		color: white;
		padding: 9px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		margin: 4px 0px;
		cursor: pointer;
	}
	.nameFolder {
		font-size: 1.2rem;
		margin: 10px 0;
	}
	.mainFolder {
		border-radius: 0.6rem;
		width: 300px;
		margin: 2rem auto;
		background-color: white;
		padding: 10px 5px;
		box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
	}
	.linkTo {
		text-decoration: none;
		background-color: #990f6b;
		border: none;
		color: white;
		padding: 9px 32px;
		text-align: center;
		display: inline;
		font-size: 16px;
		margin: 4px 5px;
		cursor: pointer;
		line-height: 2rem;
	}
	.link {
		color: white;
	}
`
