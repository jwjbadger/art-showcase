import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { CardText, Mortarboard, Palette, ChevronDoubleRight } from 'react-bootstrap-icons';

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
					<ChevronDoubleRight color='white' onClick={props.handleToggleSidebar}>test</ChevronDoubleRight >
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
			</Nav>
		</>
	);
};

export default Sidebar;
