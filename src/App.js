import React from 'react';
import Header from './components/Header/Header';
import EmailForm from "./components/EmailForm/EmailForm";
import { GlobalStyles } from "./components/StyledComponents/GlobalStyles";

function App() {
  return (
		<main className="app__container">
			<GlobalStyles />
			<Header />
			<EmailForm />
		</main>
  );
}

export default App;
