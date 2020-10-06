import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
//import { NavBar } from '../components/Header/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
//import { LogIn, TeamsList, TeamInsert, TeamsUpdate } from '../pages'
import { LayoutComponent, Routes } from '../components'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'



//NavBar can be remove and add login here directly and then opens up new page with navbar

function App() {
    

    return (
        <Router>
            <Header disabled/>
            <div>

            </div>
            <LayoutComponent>
                <style>{'body { background-color: rgba(245, 245, 245, 1); }'}</style>
            </LayoutComponent>
            <Footer />
            <Routes />
        </Router>
        
    )
}

export default App