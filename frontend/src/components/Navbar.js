import {Link} from 'react-router-dom'


/* Link to is to where will the link connect, / means it will be directed to homepage */
const Navbar = () => {
    return(
        <header>
            <div className = "container">
                <Link to = "/" >
                    <h1>Workout Buddy</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar;