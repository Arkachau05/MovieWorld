
import { Navigate, Route, Routes } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext.jsx";
import Home from "./Home.jsx";
import Login from "./Login";
import SignUp from "./Signup";
import Home2 from "./Home2.jsx";
import About from "./pages/About.jsx";
import Navbar from "./navbar.jsx";
import Favourite from "./pages/Favourite.jsx";
import Detail from "./components/Detail.jsx";
import Contact from "./pages/Contact.jsx";


function App() {
	const { authUser } = useAuthContext();
	return (
		<div>
			<Routes>
			
				<Route path='/*' element={authUser ? <Home /> : <Navigate to={`/login`} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login/>} />
				<Route path="/" element={authUser ? <Home /> : <Navigate to={`/login`} />}/>
				<Route path="/movie/:imdbID" element={authUser ? <Detail /> : <Navigate to={`/login`} />} />
				<Route path="/favorites" element={authUser ? <Favourite/> : <Navigate to={`/login`} />} />
				<Route path="/about" element={authUser ? <About/> : <Navigate to={`/login`} />}/>
				<Route path="/contact" element={authUser ? <Contact/> : <Navigate to={`/login`} />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp/>} />
			</Routes>
			<Toaster />
		</div>
	);
}

export default App;
