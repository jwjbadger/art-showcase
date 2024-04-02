import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './Root.jsx';
import Classes, { ClassesLoader } from './pages/Classes.jsx';
import Artwork, { ArtworkLoader } from './pages/Artwork.jsx';
import AboutUs from './pages/AboutUs.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: 'aboutus/',
				element: <AboutUs />,
			},
			{
				path: 'classes/',
				element: <Classes />,
				loader: ClassesLoader,
			},
			{
				path: 'artwork/',
				element: <Artwork />,
				loader: ArtworkLoader,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
