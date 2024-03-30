import { useEffect } from 'react';
import { Navbar } from 'react-bootstrap';
import Logo from './components/Logo.jsx';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { List } from 'react-bootstrap-icons';
//import React, { useState } from 'react';
import './styles/style.css';

const Root = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	useEffect(() => {
		if (pathname === '/') return navigate('/aboutus');
	}, [pathname, navigate]);

	//const [collapsed, setCollapsed] = useState(false);

	//const handleToggleSidebar = () => {
		//setCollapsed(!collapsed);
	//};

	return (
		<>
            <Navbar className='nav' >
                <Logo className='logo' />
                <List className='ms-auto menu' />
            </Navbar>
            <Outlet/>
            {/*<Row>
				<Col xs={collapsed ? 3 : 1} id='sidebar-wrapper'>
					<Sidebar
						collapsed={collapsed}
						handleToggleSidebar={handleToggleSidebar}
					/>
				</Col>
				<Col xs={9} id='page-content-wrapper'>*/}
                {/*</Col>
			</Row>*/}
		</>
	);
};

export default Root;
