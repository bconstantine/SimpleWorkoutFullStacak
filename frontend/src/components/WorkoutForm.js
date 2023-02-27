import {useState} from "react"

const WorkoutForm = () => {
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = {title, load, reps}

        const response = await fetch('/api/workouts',{
            method: 'POST', 
            body: JSON.stringify(workout), 
            headers: {
                'Content-Type':'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok){
            
        }
    }
    return (
        <form className="create">
            <h3>Add a New Workout</h3>
            
            <label>Exercise Title</label>
            <input
                type = "text"
                onChange = {(e) => setTitle(e.target.value)}
                value={title}
            />

            <label>Load (in Kg)</label>
            <input
                type="number"
                onChange = {(e) => setLoad(e.target.value)}
                value={load}
            />

            <label>Reps</label>
            <input
                type="text"
                onChange = {(e) => setReps(e.target.value)}
                value={reps}
            />
        </form>
    )
}