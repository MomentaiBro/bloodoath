import React from 'react'


export default function FollowerCard({recruit, image}){
    return (
        <div className="follower-card">
            <img src={image} alt="cultists"/>
            <h3>{recruit.name}</h3>
            <p>{recruit.catchphrase}</p>

        </div>
    )

}


