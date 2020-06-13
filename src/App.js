import React from 'react';
import Header from './components/Header/Header';
import NotificationForm from "./components/NotificationForm/NotificationForm";
import { GlobalStyles } from "./components/StyledComponents/GlobalStyles";

function App() {
  return (
		<main className="app__container">
			<GlobalStyles />
			<Header />
			<NotificationForm />
		</main>
  );
}

export default App;
