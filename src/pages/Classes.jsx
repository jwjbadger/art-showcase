import { Card, Col, Button } from 'react-bootstrap';
import classes from '../data/classes.json';

const Classes = (props) => {
	const handleInterest = (e) => {
		fetch('https://joesph.kreatesomething.dev/api/classes/interest/', {
			method: 'POST',
			headers: new Headers(),
			body: JSON.stringify({
				class: e.target.parentElement.children[0].innerText,
			}),
		})
			.then((res) => {
				if (res.status === 200)
					console.log('SUCCESSFULLY SHOWED INTEREST');
			})
			.catch((err) => console.err(err));
	};

	return (
		<>
			<Col>
				{classes.classes
					.filter((e) => e.Type === 'Class')
					.map((clas) => (
						<Card className='card-class'>
							<Card.Title>{clas.Name}</Card.Title>
							<Card.Text>{clas.Description}</Card.Text>
							<Button variant='primary' onClick={handleInterest}>
								I'm interested!
							</Button>
						</Card>
					))}
			</Col>
		</>
	);
};

export default Classes;
