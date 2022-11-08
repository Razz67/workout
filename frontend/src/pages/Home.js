import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/workouts')
        .then((data) => {
            console.log(data);
            setWorkouts(data?.data);
        });
    }, []);


	return (
		<div className="home">
			<div className="workouts">
				{workouts &&
					workouts.map((workout) => 
                    <p key={workout._id}>{workout.title}</p>)}
			</div>
		</div>
	);
};

export default Home;
