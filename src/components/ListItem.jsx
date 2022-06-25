import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';

const ListItem = (props) => {
	const location = useLocation();

	const personId = location.state.id;
	
	const storeData = useSelector((store) => store.person);
	const person = [];

	if (storeData.length > 0 ) {
		storeData.forEach((obj) => {
			const data = obj.data.person;
			data.forEach((item) => {
				if(item.id === personId) {
					person.push(item);
				}else {
					const obj = {};
					person.push(obj);
				}
			});
		});
	}
	
	return (
		<div>
			<Link to="/list">Back</Link>
			{
				person.map((item) => (
					(item.id) ? (
						<div key={item.id} className="container border">
							<img src={item.image} alt={item.name} />
							<h3>{item.name}</h3>
							<p><b>Crime: </b>{item.crime}</p>
							<p><b>Region: </b>{item.country},&nbsp;{item.state}</p>
							<p><b>Victims: </b>{item.victims}</p>
							<p><b>Last words: </b>{item.last_words}</p>
							<p><b>Date of birth: </b>{item.d_o_b}</p>
							<p><b>Date of death: </b>{item.d_o_d}</p>
							<p><b>Died at the age of: </b>{item.age_of_death}</p>
							<p><b>Death: </b>{item.death}</p>
							<p><b>More details: </b>{item.link}</p>
						</div>
					) : (<p>OOPS! Something went wrong try again</p>)
				))
			}
		</div>
	)
};

export default ListItem;
