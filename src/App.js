import React from 'react';
import Header from './components/Header/Header';
import EmailForm from "./components/EmailForm/EmailForm";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import { GlobalStyles } from "./components/StyledComponents/GlobalStyles";

function App() {
  return (
		<main className="app__container">
			<GlobalStyles />
			<Header />
			<EmailForm />
			<Dashboard />
			<Footer />
		</main>
  );
}

export default App;
