import "./App.css";
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Nav from "./components/navigation/Nav";
import Profile from "./components/profile/Profile";
import Music from "./components/music/Music";
import Messages from "./components/messages/Messages";
import News from "./components/news/News";
import Settings from "./components/settings/Settings";

function App(props) {

	return (
		<BrowserRouter>
			<div className="app-wrapper">
                <Header/>
                <Nav/>
				<div className="app-wrapper-content">
					<Routes>
						<Route path="/" element={<Profile posts={props.posts}/>}/>
						<Route path="/messages" element={<Messages messages={props.messages} dialogs={props.dialogs}/>}/>
						<Route path="/music" element={<Music/>}/>
						<Route path="/news" element={<News/>}/>
						<Route path="/settings" element={<Settings/>}/>
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
