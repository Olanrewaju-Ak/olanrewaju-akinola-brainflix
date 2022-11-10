import "./styles/App.scss";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadPage from "./pages/upload-page/UploadPage";
import HomePage from "./pages/home-page/HomePage";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path=":videoId" element={<HomePage />} />
					<Route path="/upload" element={<UploadPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
