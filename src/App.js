import { Component } from 'react'
import './App.css'

const DUMMY_DATA = [
	{ id: 'm1', title: 'Junior' },
	{ id: 'm2', title: 'Middle' },
	{ id: 'm3', title: 'Senior' },
]

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			items: [],
		}
	}
	getInputValue = ({ target: { value } }) => {
		this.setState((prevState) => {
			return {
				...prevState,
				items:
					DUMMY_DATA.some(
						(item) =>
							item.title.toLowerCase() === value.toLowerCase(),
					) &&
					!prevState.items.some(
						(item) =>
							item.title.toLowerCase() === value.toLowerCase(),
					)
						? prevState.items.concat({
								title: value.toLowerCase(),
								id: Math.random().toString(),
						  })
						: prevState.items,
			}
		})
	}

	render() {
		return (
			<div className='container'>
				{this.state.items.map((item) => {
					return (
						<div key={item.id} className='uppdatevalue'>
							<h1>{item.title}</h1>
						</div>
					)
				})}

				<input
					className='input'
					type='text'
					onChange={this.getInputValue}
				/>
				<div>
					{DUMMY_DATA.map((item) => {
						return (
							<div className='static-items'>
								<h1 key={item.id}>{item.title}</h1>
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}

export default App
