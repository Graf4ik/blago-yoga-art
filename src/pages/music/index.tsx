"use client"

import Layout from "@widgets/layout/ui/layout"
import MusicCard from "@widgets/music-card/ui/music-card"
import { musicCards } from "./model/constants"

const MusicPage = () => {
	return (
		<Layout>
			<div className="flex flex-wrap">
			{musicCards.map(({ id, title, author, year, link, img }) => (
					<MusicCard 
            key={id} 
            title={title} 
            author={author} 
            year={year} 
            link={link} 
            img={img} 
        />
				))}
			</div>
		</Layout>
	)
}

export default MusicPage
