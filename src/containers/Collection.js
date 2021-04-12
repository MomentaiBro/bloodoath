import React from 'react'
import FollowerCard from '../components/FollowerCard'
import CellPicture from '../cultists/cell.jpg'
import CovidPicture from "../cultists/covid.jpg"
import HIMPicture from "../cultists/HIM.jpg"
import JamesPicture from "../cultists/james.jpg"
import JessePicture from "../cultists/jesse.jpg"
import KittyPicture from "../cultists/kitty.jpg"
import MajinPicture from "../cultists/majin-buu.jpg"
import MojoPicture from "../cultists/mojo-jojo.jpg"
import RyukuPicture from "../cultists/ryuku.jpg"
import ThanosPicture from "../cultists/thanos.jpg"
import VoldemortPicture from "../cultists/voldemort.jpg"
const pictures = {
    'Cell': CellPicture,
    'Covid': CovidPicture,
    'HIM': HIMPicture,
    'James': JamesPicture,
    'Jesse': JessePicture,
    'Kitty': KittyPicture,
    'Majin Buu': MajinPicture,
    'Mojo Jojo': MojoPicture,
    'Ryuku': RyukuPicture,
    'Thanos': ThanosPicture,
    'Voldemort': VoldemortPicture
}

export default function Collection({recruits}) {


    const createCards = () => {
        return recruits.map(recruit => <FollowerCard recruit={recruit} image={pictures[recruit.name]} />)
    
    }


    return (
        <div className="collection-container">
            {createCards()}
        </div>
    )
}
