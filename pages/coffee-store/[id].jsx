import { useRouter } from 'next/router';
import React from 'react';

function coffeeStore() {
	const {query: {id}} = useRouter();
	return (
		<div>
      This is the coffee-store {id} route!
		</div>
	);
}

export default coffeeStore;