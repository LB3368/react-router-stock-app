import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav>
            <Link to="/"><h1>iStocks</h1></Link>
            <ul className='links'>
                <Link to="/stocks"><li>Stocks</li></Link>
                <Link to="/about"><li>About</li></Link>
            </ul>
        </nav>
    )
}