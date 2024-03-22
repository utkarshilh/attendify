import React from 'react'
import Card from './Card'
export default function Main() {
    return (
        <div>
            <h1>This is main page</h1>
            <Card name="John Doe" rollNo="101" onTime={1} />
        </div>
    )
}
