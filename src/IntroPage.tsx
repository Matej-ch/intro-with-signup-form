import './IntroPage.scss'

type Props = {
    children?: JSX.Element,
};

function IntroPage({children}: Props) {

    return (
        <div className='page-container'>
            <div className='header'>
                <h1 className="heading">Learn to code by watching others</h1>
                <p className="paragraph">See how experienced developers solve problems in real-time.
                    Watching scripted tutorials is great, but understanding how developers think is invaluable
                </p>
            </div>
            {children}
        </div>
    )
}

export default IntroPage;