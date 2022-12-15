import {useState} from 'react'
import './App.scss'
import IntroPage from "./IntroPage";
import FreeTrialForm from "./FreeTrialForm";

function App() {

    return (
        <div className="app" role="main">
            <IntroPage>
                <FreeTrialForm/>
            </IntroPage>

        </div>
    )
}

export default App
