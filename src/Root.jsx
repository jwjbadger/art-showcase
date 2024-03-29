import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './components/Sidebar.jsx';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './styles/style.css';

const Root = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	useEffect(() => {
		if (pathname === '/') return navigate('/aboutus');
	}, [pathname, navigate]);

	const [collapsed, setCollapsed] = useState(false);

	const handleToggleSidebar = () => {
		setCollapsed(!collapsed);
	};

	return (
		<Container fluid>
			<Row>
				<Col xs={collapsed ? 3 : 1} id='sidebar-wrapper'>
					<Sidebar
						collapsed={collapsed}
						handleToggleSidebar={handleToggleSidebar}
					/>
				</Col>
				<Col xs={9} id='page-content-wrapper'>
					<Outlet />
				</Col>
			</Row>
		</Container>
	);
};

export default Root;
