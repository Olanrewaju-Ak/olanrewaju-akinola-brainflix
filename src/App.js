import "./styles/App.scss";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadPage from "./pages/upload-page/UploadPage";
import HomePage from "./pages/home-page/HomePage";
import SuccessPage from "./pages/success-page/SuccessPage";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path=":videoId" element={<HomePage />} />
					<Route path="/upload" element={<UploadPage />} />
					<Route path="/upload/success" element={<SuccessPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
