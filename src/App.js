import React from 'react'
import axios from 'axios'
import './App.css'
import ApplicationForm from './ApplicationForm'

const App = (props) => {

  const formSubmission = (data) => {
    axios.post('http://dct-application-form.herokuapp.com/users/application-form',data)
      .then(response => {
        console.log(response.data)
      })
      .catch(err => alert(err.message))
  }

  return (
    <div>
      <h1>Apply for Job</h1>
      <ApplicationForm formSubmission={formSubmission}/>
    </div>
  )
}

export default App