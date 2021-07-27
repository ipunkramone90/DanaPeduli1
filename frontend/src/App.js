import React from 'react'
import { BrowserRouter as Router  , Route} from 'react-router-dom'
import Header from './components/Header'
import BerandaScreen from './screens/BerandaScreen'
import DetailProgramScreen from './screens/DetailProgramScreen'
import ProgramScreen from './screens/ProgramScreen'
import RegisterScreen from './screens/RegisterScreen'
import Share from './components/Share'
import Confirmation from './components/Confirmation'

function App() {
  return (
    <Router>
      <Header/>
      <Route exact path='/titipdonasi' component={BerandaScreen} />
      <Route path='/program' component={ProgramScreen} />
      <Route path='/daftaragenpeduli' component={RegisterScreen}/>
      <Route path='/detailprogram' component={DetailProgramScreen}/>
      <Route path='/share' component={Share}/>
      <Route path='/confirmation' component={Confirmation}/>
      
    </Router>
  )
}

export default App