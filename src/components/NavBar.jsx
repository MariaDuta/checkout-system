import React from "react";
import {Link} from "react-router-dom";

function NavBar({}) {
	return (
		<div>
			<Link to={`/admin`}>
				<button>Manage Discounts</button>
			</Link>
			<button>Checkout</button>
		</div>
	);
}

export default NavBar;