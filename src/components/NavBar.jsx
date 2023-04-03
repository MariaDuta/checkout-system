import React from "react";
import {Link} from "react-router-dom";

function NavBar({}) {
	return (
	  <div className="flex justify-between items-center py-4 px-8 bg-gray-100">
		<Link to={`/admin`} className="text-gray-800 hover:text-gray-600">
		  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
			Manage Discounts
		  </button>
		</Link>
		<Link to={`/`} className="text-gray-800 hover:text-gray-600">
		  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
			Checkout
		  </button>
		</Link>
	  </div>
	);
  }
  
  export default NavBar;