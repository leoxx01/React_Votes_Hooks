import React from 'react'
import Position from './Position'
import Picture from './Picture'
import Info from './Info'
import Name from './Name'
import Votes from './Votes'
import Percenter from './Percenter'
import Popularty from './Popularty'
import css from './candidate.module.css'

export default function Candidate(props) {
    const {candidate, index} = props
    const imageSource = `${candidate.id}.jpg`
    return (
        <div className={css.rightElements}>
            <Position ><strong>{index}</strong></Position> 
            <Picture imageSource={imageSource} description={candidate.name}/> 
            <Info>
                <Name>{candidate.name}</Name>
                <Votes>{candidate.votes}</Votes>
                <Percenter>{candidate.percentage}</Percenter>
                <Popularty>{candidate.popularity}</Popularty>
            </Info>
        </div>
    )
}
