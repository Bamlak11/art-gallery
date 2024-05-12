import React from 'react'

const HeroSection = () => {
  return (
    <div className="flex items-center">
	<section className="w-full bg-cover bg-center py-40"  
    style={{backgroundImage: "url('https://images.pexels.com/photos/732548/pexels-photo-732548.jpeg?auto=compress&cs=tinysrgb&w=800')"}}>
		
        <div className="container mx-auto text-center text-white">
			<h1 className="text-5xl font-semibold mb-6 text-black">React Art Gallery</h1>

			<p className="text-xl mb-12 text-slate-200">Where Art Speaks: Explore, Discover, Upload!</p>
                
			<a href="#all-collection" className="bg-black text-white py-4 px-12 rounded-full hover:bg-gray-300 hover:text-black">Artwork</a>
		</div>

	</section>
</div>
  )
}

export default HeroSection
