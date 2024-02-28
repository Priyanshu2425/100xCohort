import './App.css'
import Card from './components/Card'
import Form from './components/Form'
import { RecoilRoot } from "recoil";

function App() {

  return (
		<>
			<div id="main">
				<RecoilRoot>
					<Form />
					<Card />
				</RecoilRoot>
			</div>
		</>
	);
}

export default App
