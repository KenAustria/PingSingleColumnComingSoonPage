import React from 'react';
import Header from './components/Header/Header';
import NotificationForm from "./components/NotificationForm/NotificationForm";
import { GlobalStyles } from "./components/StyledComponents/GlobalStyles";

function App() {
  return (
		<div>
			<GlobalStyles />
			<Header />
			<NotificationForm />
		</div>
  );
}

export default App;
