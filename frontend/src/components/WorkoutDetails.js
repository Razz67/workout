
const WorkouDetails = ({ workout }) => {
	return (
		<div>
			<div className="col-sm-6">
				<div className="card workout-details " style={{ width: "25rem" }}>
					<div className="card-body">
						<h5 className="card-title">{workout.title}</h5>
						<p className="card-text">
							<strong>Load: </strong>
							{workout.load}(lbs)
						</p>

						<p className="card-text">
							<strong>Reps: </strong>
							{workout.reps}
						</p>
						<p>{workout.createdAt}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorkouDetails;
