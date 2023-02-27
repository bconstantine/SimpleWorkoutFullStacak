import {useEffect, useState} from 'react'
import WorkoutDetails from '../components/WorkoutDetails'

const Home = () => {
    const [workouts, setWorkouts] = useState(null)

    //The first parameter is the function that will fire (for the effect) when the component is loaded (or the dependency is invoked)
    //The second parameter is the depedency that will be trigger for the effect, leave it an empty array if only done when component is loaded
    useEffect(() => {
        //fetch the workout on the backend
        const fetchWorkouts = async () => {
            const response= await fetch(`/api/workouts/`)
            const json = await response.json() //pass the response in json

            if (response.ok){
                //only enter here if the response is ok
                //update teh workouts with to the use stae wit setWorkouts
                setWorkouts(json)
            }
        }

        fetchWorkouts()
    }, [])

    return (
        <div className="home">
            <div className="workouts">
            {/* if workouts is empty, then it wont be loaded */}
            {/* if not, map ecah element of the workout to the display*/}
            {workouts && workouts.map((workout) => (
                <WorkoutDetails key = {workout._id} workout = {workout}/>
                
            ))}
            </div>
        </div>
    )
}

export default Home