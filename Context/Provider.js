import React from 'react';
import {useState} from 'react';
import myContext from './MyContext';
import propTypes from 'prop-types';

function Provider({children}) {
	const [nearby, toggleNearby] = useState(false);
	return (
		<myContext.Provider value={{nearby, toggleNearby}}>
			{children}
		</myContext.Provider>
	);
}

//Use propTypes to validate the props passed to the component.
Provider.propTypes = {
	children: propTypes.node.isRequired
};

export default Provider;