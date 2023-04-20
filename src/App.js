import "./css/main.css";
import "../src/App.css"
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import ForStudents from "./components/ForStudents";
import Ansatte from "./components/Ansatte";
import Dummypage from "./components/Dummypage";
import ContactPage from "./components/ContactPage";
import Studier from "./components/Studier";
import Forskning from "./components/Forskning";
import OmHiof from "./components/OmHiof";
import Grupperom from "./components/Grupperom";
import Timeplan from "./components/Timeplan";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Main />} />
				<Route path="/for-studenter" element={<ForStudents />} />
				<Route path="/for-ansatte" element={<Ansatte />} />
				<Route path="/dummypage" element={<Dummypage />} />
				<Route path="/for-studenter/dummypage" element={<Dummypage />} />
				<Route path="/kontakt-oss" element={<ContactPage />} />
				<Route path="/studier" element={<Studier />} />
				<Route path="/forskning" element={<Forskning />} />
				<Route path="/om-hiof" element={<OmHiof />} />
				<Route path="/for-studenter/book-grupperom" element={<Grupperom />} />
				<Route path="/timeplan" element={<Timeplan />} />
			</Route>
		</Routes>
	);
}

export default App;
