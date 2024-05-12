import QuestionOne from "./components/QuestionOne"
import QuestionTwo from "./components/QuestionTwo"
import QuestionThree from "./components/QuestionThree"
import QuestionFour from "./components/QuestionFour"
import QuestionFive from "./components/QuestionFive"
import QuestionSix from "./components/QuestionSix"

import { RecoilRoot } from "recoil"
import './App.css'

function App() {

  return (
    <>
      <RecoilRoot>
        {/* <QuestionOne/> */}
        {/* <QuestionTwo/> */}
        {/* <QuestionThree/> */}
        {/* <QuestionFour/> */}
        {/* <QuestionFive/> */}
        <QuestionSix/>
      </RecoilRoot>
    </>
  )
}

export default App
