import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { Result } from './Result';

export const Routers = () => {

	return (
		<div className='p-4 min-h-[calc(100vh-11.8rem)]'>
			<Routes>
				<Route path="/" element={<Navigate to='/search' />}/>
				<Route path='/search' element={<Result />} />
				<Route path='/images' element={<Result />} />
				<Route path='/videos' element={<Result />} />
				<Route path='/news' element={<Result />} />
				<Route path='*' element={<Result />} />
			</Routes>
		</div>
	)
};

