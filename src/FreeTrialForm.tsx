import './IntroPage.scss'

function FreeTrialForm() {

    const handleSubmit = () => {

    }

    return (<div>
        <div className="free-info">
            <span>Try it for free 7 days</span> then $20/mo. thereafter
        </div>
        <form className="form" onSubmit={handleSubmit}>
            <input type="text" placeholder="First Name"/>
            <input type="text" placeholder="Last Name"/>
            <input type="text" placeholder="Email address"/>
            <input type="text" placeholder="Password"/>
            <button type='submit' className="submit">Claim your free trial</button>
            <p className="term-of-services">By clicking the button, you are agreeing to our
                <span className="highlight"> Terms and Services</span>
            </p>
        </form>
    </div>)
}

export default FreeTrialForm;