import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

function coffeeStore() {
	const {query: {id}} = useRouter();
	return (
		<div>
			<Link href='/'>Back to home!</Link>
      This is the coffee-store {id} route!
		</div>
	);
}

export default coffeeStore;