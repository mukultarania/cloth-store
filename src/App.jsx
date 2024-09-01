import { Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import Home from "./components/Home";

function App() {

	return (
		<div className="h-screen w-screen flex">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:id" element={<Details />} />
            </Routes>
            {/* <Details/> */}
		</div>
	);
}

export default App;
