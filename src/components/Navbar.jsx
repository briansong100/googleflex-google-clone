import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from './Search';
export const Navbar = ({darkTheme, setDarkTheme}) => {
	return (

		<div className='flex justify-center items-center border-b boder-gray-200 
				sm:justify-between dark:boder-gray-700 p-4 pl-5  w-screen ' >
			<div className='flex  items-center space-x-1 '>
				<Link to ='/' >
					<p className='text-3xl bg-blue-500 font-bold text-white py-2 px-3 md:px-6 
						rounded-md	 dark:bg-gray-300 dark:text-green-500'>GooGol</p>
				</Link>
			</div>
			<Search />
			<div className='flex  items-center space-x-1 mr-2 sm:mr-4'>
				<button type='button' onClick={()=>setDarkTheme(!darkTheme)}  
						className='text-xl bg-white dark:bg-gray-300 dark:text-gray-900
						border rounded-full px-2 py-1 hover:shadow-lg rou'
					>
						{ darkTheme ? '☀️': '🌙'}
				</button>
			</div>
		</div>

	)
};


