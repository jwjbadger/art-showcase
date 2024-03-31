import { useEffect } from 'react';
import BadNav from './components/Navbar.jsx';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import useScrollLock from './hooks/scrollLock.jsx'
import './styles/style.css';

const Root = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	useEffect(() => {
		if (pathname === '/') return navigate('/aboutus');
	}, [pathname, navigate]);

	const [collapsed, setCollapsed] = useState(true);
    const { lockScroll, unlockScroll } = useScrollLock();

	const handleToggleCollapsed = () => {
		setCollapsed(!collapsed);
        if (collapsed)
            lockScroll();
        else
            unlockScroll();
	};

	return (
        <>
            <BadNav collapsed={collapsed} handleToggleCollapsed={handleToggleCollapsed}/>
            <Outlet/>
        </>
	);
};

export default Root;
