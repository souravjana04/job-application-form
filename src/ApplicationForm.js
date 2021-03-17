import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import validator from 'validator'

const ApplicationForm = (props) => {

    const { formSubmission } = props
    const [ fullName, setFullName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ contact, setContact ] = useState('')
    const [ role, setRole ] = useState('')
    const [ experience, setExperience ] = useState('')
    const [ techSkill, setTechSkill ] = useState('')
    const [ formError, setFormError ] = useState([])
    const error = {}

    const handleNameChange = (e) => {
        setFullName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleContactChange = (e) => {
        setContact(e.target.value)
    }

    const handleRolechange = (e) => {
        setRole(e.target.value)
    }

    const handleExperienceChange = (e) => {
        setExperience(e.target.value)
    }

    const handleSkillChange = (e) => {
        setTechSkill(e.target.value)
    }

    const validateForm = () => {
        if(validator.isEmpty(fullName)) {
            error.name = 'Enter a valid name'
        }
        if(!validator.isEmail(email)) {
            error.email = 'Enter a valid email'
        }
        if(!validator.isNumeric(contact) || contact.length!=10) {
            error.contact = 'Enter a valid phone number'
        }
        if(role === '') {
            error.role = 'Select the role'
        }
        if(experience.length === 0) {
            error.experience = 'Enter your experience'
        }
        if(techSkill.length === 0) {
            error.techSkill = 'Enter your skills'
        }
        setFormError(error)
    }

    const resetForm = () => {
        setFullName('')
        setEmail('')
        setContact('')
        setRole('')
        setExperience('')
        setTechSkill('')
        setFormError({})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        validateForm()
        if(Object.keys(error).length === 0){
            const formData = {
                name: fullName,
                email: email,
                phone: contact,
                skills: techSkill,
                jobTitle: role,
                experience: experience
            }
            formSubmission(formData)
            resetForm()
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label><b>Full name</b></label>
                <input type='text' value={fullName} onChange={handleNameChange} /> <br/>
                { formError.name && <span>{formError.name}</span> }
            </div>

            <div>
                <label><b>Email address</b></label>
                <input type='text' value={email} placeholder='example@email.com' onChange={handleEmailChange} /> <br/>
                { formError.email && <span>{formError.email}</span> }
            </div>

            <div>
                <label><b>Contact number</b></label>
                <input type='text' value={contact} placeholder='+91 9876543210' onChange={handleContactChange} /> <br/>
                { formError.contact && <span>{formError.contact}</span> }
            </div>

            <div>
                <label><b>Applying for job</b></label>
                <select value={role} onChange={handleRolechange} >
                    <option value=''>--select--</option>
                    <option value='Front-End Developer'>Front End Developer</option>
                    <option value='Node js Developer'>Node js Developer</option>
                    <option value='MEAN Stack Developer'>MEAN Stack Developer</option>
                    <option value='FULL Stack Developer'>FULL Stack Developer</option>
                </select> <br/>
                { formError.role && <span>{formError.role}</span> }
            </div>

            <div>
                <label><b>Experience</b></label>
                <input type='text' value={experience} placeholder='Experience (2 years, 3 months)' onChange={handleExperienceChange} /> <br/>
                { formError.experience && <span>{formError.experience}</span> }
            </div>
            
            <div id='textarea-content'>
                <label><b>Technical skills</b></label>
                <textarea value={techSkill} placeholder='Technical Skills' onChange={handleSkillChange} /> <br/>
                { formError.techSkill && <span>{formError.techSkill}</span> }
            </div>

            <input id='submit-btn' type='submit' value='Send Application'/>
        </form>
    )
}

export default ApplicationForm