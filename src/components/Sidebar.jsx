import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { CardText, Mortarboard, Palette } from 'react-bootstrap-icons';

const Sidebar = (props) => {
	return (
		<>
			<Nav
				className={`bg-dark sidebar`}
				activeKey='aboutus/'
				onSelect={(selectedKey) =>
					console.log(`selected ${selectedKey}`)
				}
			>
				<div className='sidebar-heading'>
					<button>test</button>
				</div>
				<LinkContainer to='aboutus/'>
					{/* <Nav.Link>About Us</Nav.Link> */}
					{!props.collapsed ? (
						<CardText color='white' />
					) : (
						<Nav.Link>About Us</Nav.Link>
					)}
				</LinkContainer>
				<LinkContainer to='classes/'>
					{!props.collapsed ? (
						<Mortarboard color='white' />
					) : (
						<Nav.Link>Classes</Nav.Link>
					)}
				</LinkContainer>
				<LinkContainer to='artwork/'>
					{!props.collapsed ? (
						<Palette color='white' />
					) : (
						<Nav.Link>Artwork</Nav.Link>
					)}
				</LinkContainer>
				<button onClick={props.handleToggleSidebar}>
					Toggle Sidebar
				</button>
			</Nav>
		</>
	);
};

export default Sidebar;
