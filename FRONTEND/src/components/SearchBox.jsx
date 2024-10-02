import React from 'react';
import { FaSearch } from "react-icons/fa";
const SearchBox = (props) => {
	return (
		<div className="flex items-center justify-center">
			<div className="flex space-x-2">
				<input
					type="text"
					className="block w-full px-4 py-2 text-yellow-400 bg-black border border-yellow-400 rounded-full focus:border-yellow-500 focus:ring-yellow-500 focus:outline-none focus:ring focus:ring-opacity-40 transition-shadow duration-300"
					value={props.value}
					onChange={(event) => props.setSearchValue(event.target.value)}
					placeholder="Type to search..."
				/>
				<button className="px-4 text-black bg-yellow-400 hover:bg-yellow-500 rounded-full transition-colors duration-300 flex items-center justify-center">
				<FaSearch />
				</button>
			</div>
		</div>
	);
};

export default SearchBox;
