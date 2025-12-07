import React, { useState, useEffect } from 'react'
import Loader from '../../components/Loader/Loader'
import './Home.css'
import { useNavigate } from 'react-router-dom'
import Logocollections from "../../assets/clublogos.svg"
import Synclogo from "../../assets/synclogo.svg"
import SyncAIT from "../../assets/syncaithome.svg"

export default function Home() {
	/*
	No loader till deployment. It wastes time and annoys me
	
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 2000)
		return () => clearTimeout(timer)
	}, [])

	if (loading) {
		return <Loader />
	}
	*/
	const navigate = useNavigate()
	return (

		<section id="home" className="home-hero" >
			
			<div className="page-head flex  font-[Poppins]">
				<div className='hero-div'  >
					<img src={Synclogo} alt="" />
					<img src={SyncAIT} alt=""  className='syncAITdesigned'  style={{margin:"40px 0 0 0 "}}/>
					<h1 className="blue-hero hero">A Place Where</h1>
					<h1 className="blue-hero hero">Every Club Finds a</h1>
					<h1 className="gray-hero hero">Home</h1>
					<div className='secondary-hero-div'>
					</div>
				</div>
				<div className='clubCollectionDiv'>
					<img className='w-[70vw] clubCollection' src={Logocollections} alt="" />
					<div className='flex hero-btn-div'>
							<button className='hero-btn bg-blue-300 font-medium'>ANNOUNCEMENTS</button>
							<button className='hero-btn font-medium cursor-pointer' onClick={()=>navigate('/clubs')}>ALL CLUBS</button>
						</div>
				</div>
			</div>
		</section>
	)
}