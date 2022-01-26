import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDebounce } from 'use-debounce';
import { useResultContext } from '../contexts/ResultContextProvider';

export const Search = () => {

	const [searchText, setSearchText] = useState('')
	const {setSearchTerm } = useResultContext()
	const [debouncedValue] = useDebounce(searchText, 1000)

	useEffect (()=>{
		if (debouncedValue) setSearchTerm(debouncedValue)
	},[debouncedValue])
	// ml-30 sm:ml-48 md:ml-72
	return (
	<div className='flex justify-between items-center p-2 flex-wrap '>
		<div className='relative '>
			<input 
				value={searchText}
				type='text'
				className='sm:w-96 w-64 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg'
				placeholder='Search on GooGol or type URL'
				onChange={e=>setSearchText(e.target.value)}
			/>
			{ searchText && (
				<button type='button' className='absolute top-2.5 right-4 text-xl text-gray-500 ' onClick={() =>setSearchText('')}>
					X
				</button>
			)}
		</div>
		<div className='flex sm:justify-around justify-between items-center flex-wrap' className='m-2 '>
			{/* <NavLink  end to='/search'  style={ ( {isActive}) => isActive ? 'my-1 mx-2 p-1 active:ring-2 rounded-md active:ring-blue-500 focus:outline-none focus:shadow-outline': "border-b-1" } className='my-1 mx-2 p-1 active:ring-2 rounded-md active:ring-blue-500 focus:outline-none focus:shadow-outline'> */}
			<NavLink to='/search'  className={ ( {isActive}) => isActive ? 'my-1 mx-1 sm:mx-2 px-2 py-1 border-b-2 border-orange-500  text-orange-500  ': 
										'my-1 mx-1 sm:mx-2 px-2 py-1 hover:ring-2 rounded-md hover:ring-orange-500 '}>
				All
			</NavLink>
			<NavLink to='/news'	className={ ( {isActive}) => isActive ? 'my-1  mx-1 sm:mx-2 px-2 py-1 border-b-2 border-fuchsia-500  text-fuchsia-500': 
										'my-1  mx-1 sm:mx-2 px-2 py-1 hover:ring-2 rounded-md hover:ring-fuchsia-500 '}>
				News
			</NavLink>
			<NavLink to='/images' className={ ( {isActive}) => isActive ? 'my-1  mx-1 sm:mx-2 px-2 py-1 border-b-2 border-lime-500  text-lime-500  ': 
										'my-1  mx-1 sm:mx-2 px-2 py-1 hover:ring-2 rounded-md hover:ring-lime-500 '}>
				Images
			</NavLink>
			<NavLink  to='/videos' className={ ( {isActive}) => isActive ? 'my-1 px-2 py-1 border-b-2 border-sky-600  text-sky-600 ': 
										'my-1 mx-1 sm:mx-2  px-2 py-1 hover:ring-2 rounded-md hover:ring-sky-600 '}>
				Videos
			</NavLink>
		</div>
	</div>
	)

};
