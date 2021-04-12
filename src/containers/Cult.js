import React from 'react'
import background from './Blood-Oath-soft.png'
import FollowerCard from '../components/FollowerCard'

export default function Cult() {
    return (
        <div className="cult-container" style={{ backgroundImage: {background} }}>
            {background}
            <FollowerCard />
        </div>
    )
}
