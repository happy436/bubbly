import "./App.css";
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Nav from "./components/navigation/Nav";
import Profile from "./components/profile/Profile";
import Music from "./components/music/Music";
import Messages from "./components/messages/Messages";
import News from "./components/news/News";
import Settings from "./components/settings/Settings";
import sNav from "./components/navigation/Nav.module.css"
import {UilTimesCircle} from '@iconscout/react-unicons'


function App(props) {
	/* show content in ./component/navigation/Nav  function name "showContent()" */

	function showContent(){
			document.querySelector(".app-wrapper-content").classList.add(sNav.swapIn);
			document.querySelector(".app-wrapper-content").style.display = 'flex';
			setTimeout(()=>{
				document.querySelector(".app-wrapper-content").classList.remove(sNav.swapIn);
			},1000)
		}

	function hideContent(){
        document.querySelector(".app-wrapper-content").classList.add(sNav.swapOut);
		setTimeout(()=>{
			document.querySelector(".app-wrapper-content").style = '';
		},650)

        setTimeout(() => {
            document.querySelector(".app-wrapper-content").classList.remove(sNav.swapOut);
        },700)
    }

	return (
		
			<div className="app-wrapper">
                <Header/>
                <Nav 
					hideContent={hideContent} 
					showContent={showContent}
				/>
				<div className="app-wrapper-content" >
					<div className="hide" onClick={hideContent}><UilTimesCircle/></div>
					<div className="content">
						<Routes>
							<Route path="/bubbly/profile" element={<Profile 
																		data={props.state.profilePage} 
																		addPost={props.addPost}
																	/>}/>
							<Route path="/bubbly/messages" element={<Messages data={props.state.messagesPage}/>}/>
							<Route path="/bubbly/music" element={<Music/>}/>
							<Route path="/bubbly/news" element={<News/>}/>
							<Route path="/bubbly/settings" element={<Settings/>}/>
						</Routes>
					</div>
					
				</div>
			</div>
		
	);
}

export default App;
