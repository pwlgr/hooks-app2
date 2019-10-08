import * as React from 'react';
import { useState, useEffect } from 'react';
import { Planet } from '../../types/types';

const Film: React.FC<Planet> = (props) => {
	const { planets } = props;
	const [ planetList, setPlanetList ] = useState([]);
	const [ loading, setLoading ] = useState(false);
	const getUsers = async () => {
		setLoading(true);
		const fetchedPlanetsInfo = planets.map(async (film) => {
			const response = await fetch(film);
			return response.json();
		});
		const done = await Promise.all(fetchedPlanetsInfo).then((asd) => {
			setLoading(false);
			return asd;
		});
		setPlanetList(done);
	};
	return (
		<div>
			<div onClick={getUsers}>{loading ? 'loading' : props.name}</div>
			{planetList.length ? planetList.map((planet) => <p key={planet.name}>{planet.name}</p>) : null}
		</div>
	);
};

export default Film;
