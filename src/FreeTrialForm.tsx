import './IntroPage.scss'
import React, {useState} from "react";
import iconErrorSvg from './assets/icon-error.svg'

function FreeTrialForm() {

    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [errors, setErrors] = useState({
        firstNameError: '',
        lastNameError: '',
        emailError: '',
        passwordError: '',
    })

    interface FormDataType {
        firstName: string,
        lastName: string,
        email: string,
        password: string
    }

    const responseBody: FormDataType = {firstName: "", lastName: "", email: "", password: ""}

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        responseBody.firstName = firstName
        responseBody.lastName = lastName
        responseBody.email = email
        responseBody.password = password;

        if (validate()) {
            //form submission here
            /*fetch('url for post request here', {
                method: 'POST',
                body: JSON.stringify(responseBody)
            }).then(res => res.json()).then(data => {
            }).catch(err => console.error(err))*/
        }
    }

    const inputChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, errorName: string, event: React.ChangeEvent<HTMLInputElement>) => {
        setFunction(event.target.value)
        setErrors({...errors, ...{[errorName]: ''}})
    }

    const validate = (): boolean => {

        let firstNameError = "";
        let lastNameError = "";
        let emailError = "";
        let passwordError = "";

        if (!firstName) {
            firstNameError = "First Name cannot be empty";
        }

        if (!lastName) {
            lastNameError = "Last Name cannot be empty";
        }

        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!email || !reg.test(email)) {
            emailError = "Looks like this is not an email";
        }

        if (!password) {
            passwordError = "Password cannot be empty";
        }

        if (emailError || firstNameError || lastNameError || passwordError) {
            setErrors({firstNameError, lastNameError, emailError, passwordError});
            return false;
        }

        return true;
    }

    return (
        <div className='form-container'>
            <div className="free-info">
                <span>Try it for free 7 days</span> then $20/mo. thereafter
            </div>
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    <input type="text" className={errors.firstNameError.length ? 'error' : ''} placeholder="First Name"
                           onChange={(e) => inputChangeHandler(setFirstName, 'firstNameError', e)}/>
                    {errors.firstNameError.length ?
                        <><span className="validation-error">{errors.firstNameError}</span>
                            <img className='error-img' src={iconErrorSvg} alt=""/></> : null}
                </label>

                <label>
                    <input type="text" placeholder="Last Name" className={errors.lastNameError.length ? 'error' : ''}
                           onChange={(e) => inputChangeHandler(setLastName, 'lastNameError', e)}/>
                    {errors.lastNameError.length ?
                        <><span className="validation-error">{errors.lastNameError}</span>
                            <img className='error-img' src={iconErrorSvg} alt=""/></> : null}
                </label>

                <label>
                    <input type="text" placeholder="Email address" className={errors.emailError.length ? 'error' : ''}
                           onChange={(e) => inputChangeHandler(setEmail, 'emailError', e)}/>
                    {errors.emailError.length ? <><span className="validation-error">{errors.emailError}</span>
                        <img className='error-img' src={iconErrorSvg} alt=""/></> : null}
                </label>

                <label>
                    <input type="password" placeholder="Password" className={errors.passwordError.length ? 'error' : ''}
                           onChange={(e) => inputChangeHandler(setPassword, 'passwordError', e)}/>
                    {errors.passwordError.length ?
                        <><span className="validation-error">{errors.passwordError}</span>
                            <img className='error-img' src={iconErrorSvg} alt=""/></> : null}
                </label>

                <button type='submit' className="submit">Claim your free trial</button>
                <p className="term-of-services">By clicking the button, you are agreeing to our
                    <span className="highlight"> Terms and Services</span>
                </p>
            </form>
        </div>)
}

export default FreeTrialForm;