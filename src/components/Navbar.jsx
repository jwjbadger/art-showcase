import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { CardText, Mortarboard, Palette } from 'react-bootstrap-icons';
import Logo from './Logo.jsx';
import { List } from 'react-bootstrap-icons';

const BadNav = (props) => {
	return (
		<>
            <Navbar className='nav' >
                <Logo className='logo' />
                <List className='ms-auto menu' />
            </Navbar>
		</>
	);
};

export default BadNav;
