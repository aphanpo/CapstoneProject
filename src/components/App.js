import React from "react"
import { BrowserRouter as Router, Route} from "react-router-dom"
import Intake from "./Intake"
import HomePage from "./HomePage"
import ShareForm from "./ShareForm"
import LoginPage from "./LoginPage"
import Stories from "./Stories"

function App() {

  return (
    <Router>
      <div className="routes">
        <Route exact path="/" component={HomePage} />
        <Route path="/Intake" component={Intake} />
        <Route path="/ShareForm" component={ShareForm} />
        <Route path="/LoginPage" component={LoginPage} />
        <Route path="/Stories" component={Stories} />
      </div>
    </Router>
  )
}

export default App