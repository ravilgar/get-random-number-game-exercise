import React from "react";

import "./App.css";
import Game from "./game/Game";

function App() {
	return (
		<div className="App">
			<Game max={13} />
		</div>
	);
}

export default App;
