import React, {useEffect} from 'react';

import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../contexts/ResultContextProvider';
import { Loading} from './Loading'

export const Result = () => {
	const { results, isLoading, getResults, searchTerm, typeSave} =useResultContext()
	const {pathname}  = useLocation()

	useEffect(()=>{
		if ( searchTerm ) {
			if (pathname ==='/videos') {
				getResults( pathname, `q=${searchTerm} video` )
			} else {
				getResults(pathname, `q=${searchTerm}`)
			}
		}
	}, [pathname,  searchTerm])
	

	if (searchTerm.trim() ==='' ) {
		return (
		<div className='flex justify-center items-center h-96'>
			<div >
				<p className='text-2xl text-bold' >Welcome to GooGoL Search!</p>
			</div>
		</div>	
		)
	}
	if (isLoading || typeSave !==pathname) return <Loading />
	switch (pathname) {
		case '/search':
			return (
				<div className='flex flex-wrap justify-between items-baseline space-y-6 px-5 sm:px-10 ' >

					{results?.map( ({title, link, description}, i) =>(
						<div key={i} className='sm:w-4/5 md:w-1/2 lg:w-4/12 w-full p-2 ' >
							<a href={link} target='_blank' rel='noreferrer' >
								<p className='text-sm'>
									{ link.length > 40 ? link.substring(0,40): link}
								</p>
								<p className='text-lg text-blue.700 dark:text-blue-200 hover:underline'>
									{title}
								</p>
							</a>
								<p className='text-sm text-blue.700 dark:text-blue-200'>
									{description}
								</p>
						</div>
					))}
				</div>
			)
		case '/images':
			return (
				<div className='flex flex-wrap justify-between items-center space-y-6 sm:px-10'>
					{results?.map( ({image, link}, i) =>(
						<div className='p-5 sm:p-3' key={i}>
							<a href={link?.href} target='_blank' rel='noreferrer' >
								<img src={image?.src} alt="" loading='lazy' />
								<p className='w-36 break-words text-sm mt-2'>
									{link?.title}
								</p>
							</a>
						</div>
					))}
				</div>
			)
		case '/news':
			return (
				<div className='flex flex-wrap justify-between items-baseline	 space-y-6 sm:px-10' >
					{results?.map( ({id, link, title, source, published}) =>(
						<div key={id} className='sm:w-4/5 md:w-1/2 lg:w-4/12 w-full p-2'>
							<a href={link} target='_blank' rel='noreferrer' >
								<p className='text-lg text-blue.700 dark:text-blue-200 hover:underline'>
									{title}
								</p>
							</a>
							<a href={source?.href} target='_blank' rel='noreferrer' >
								<p className='text-sm'>Source: { source?.title}
								</p>
							</a>
							<p>{published}</p>
						</div>
					))}
				</div>
			)
		case '/videos':
			return (
				<div className='flex flex-wrap'>
					{ results.map( (video, index)=>(
						<div key={index} className='p-2'>
						{video?.link && <ReactPlayer url={ video?.link } controls width={355} height={200} />}
						</div>
					))}	
				</div>
			)				
		default:
			return (
				<div className='flex justify-center items-center h-[550px]' >
						<div >
							<p className='text-3xl text-bold' >Welcome to GooGoL Search !</p>
						</div>
				</div>
			)
	}
};
