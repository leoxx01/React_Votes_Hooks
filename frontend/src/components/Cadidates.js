import React from 'react'
import Card from './Card'
import Candidate from './Candidate'
import FlipMove from 'react-flip-move'

export default function Cadidates(props) {
    const {candidates} = props
    return (
        <div>
            <FlipMove>
                {candidates.map((candidate, index) =>{
                        const {id} = candidate
                        return(
                        <div key={id}>
                            <Card >
                                <Candidate candidate={candidate} index={index+1}/>
                            </Card>
                        </div>
                            
                        )
                    })}
            </FlipMove>
        </div>
    )
}
