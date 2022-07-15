import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
	increment,
	decrement,
	incrementByAmount,
} from "./features/counter/counter-slice";
import { useFetchBreedsQuery } from "./features/dogs/dogs-api-slice";

const App = () => {
	const count = useAppSelector((state) => state.counter.value);
	const dispatch = useAppDispatch();

	const [numDogs, setNumDogs] = useState(10);

	const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

	const incrementClickHandler = () => {
		console.log("increment clicked");
		dispatch(increment());
	};

	const decrementClickHandler = () => {
		console.log("decrement clicked");
		dispatch(decrement());
	};

	const incrementByFiveHandler = () => {
		console.log("increment by 5 clicked");
		dispatch(incrementByAmount(5));
	};

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={incrementClickHandler}>Increment by 1</button>
			<button onClick={decrementClickHandler}>Decrement by 1</button>
			<button onClick={incrementByFiveHandler}>Increment by 5</button>
			<div>
				<p>Dogs to fetch:</p>
				<select
					value={numDogs}
					onChange={(e) => setNumDogs(Number(e.target.value))}
				>
					<option value="5">5</option>
					<option value="10">10</option>
					<option value="15">15</option>
					<option value="20">20</option>
				</select>
			</div>

			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Picture</th>
					</tr>
				</thead>
				<tbody>
					{data.map((breed) => (
						<tr key={breed.id}>
							<td>{breed.name}</td>
							<td>
								<img
									src={breed.image.url}
									alt={breed.name}
									style={{ height: "50px" }}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default App;
