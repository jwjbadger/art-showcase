import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CardText, Mortarboard, Palette } from 'react-bootstrap-icons';
import Logo from './Logo.jsx';
import { List, X } from 'react-bootstrap-icons';

const BadNav = (props) => {
	return (
		<>
            {props.collapsed ?
                <Navbar className='nav'>
                    <Logo className='logo' white={false} />
                    <List onClick={props.handleToggleCollapsed} className='ms-auto menu' />
                </Navbar>
            :
                <>
                    <Navbar className='nav nav-back'>
                        <div className='nav-forward navbar'>
                            <Logo className='logo' white={true} />
                            <X onClick={props.handleToggleCollapsed} color='#ffffff' className='ms-auto menu' />
                        </div>
                    </Navbar>
                    <div className='nav nav-open'>
                        <div id='nav-body-container'>
                            <ul>
                                <li><Link onClick={props.handleToggleCollapsed} className="bnavlink" to="/aboutus/">About Us</Link></li>
                                <li><Link onClick={props.handleToggleCollapsed} className="bnavlink" to="/artwork/">Artwork</Link></li>
                                <li><Link onClick={props.handleToggleCollapsed} className="bnavlink" to="/classes/">Classes</Link></li>
                            </ul>
                        </div>
                    </div>
                </>
        }
		</>
	);
};

export default BadNav;
