import "./App.css";
import React from 'react';
import { NavLink, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Nav from "./components/navigation/Nav";
import Profile from "./components/profile/Profile";
import Music from "./components/music/Music";
import News from "./components/news/News";
import Settings from "./components/settings/Settings";
import sNav from "./components/navigation/Nav.module.css"
import {UilTimesCircle} from '@iconscout/react-unicons'
import MessagesContainer from "./components/messages/MessagesContainer";


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
					<NavLink className="hide" onClick={hideContent} to="/bubbly"><UilTimesCircle/></NavLink>
					<div className="content">
						<Routes>
							<Route path="/bubbly/profile" element={<Profile 
																		store={props.store}
																	/>}/>
							<Route path="/bubbly/messages" element={<MessagesContainer
                                                                        store={props.store}
                                                                    />}/>
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
