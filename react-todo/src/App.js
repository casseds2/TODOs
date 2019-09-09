import React from "react";
import { useState } from "react";
import { auth, googleProvider } from "./firebase";
import { authState } from "rxfire/auth";

import Navbar from "./Navbar";
import Profile from "./Profile";
import Todos from "./Todos";

const App = () => {
	const [user, setUser] = useState(null);

	authState(auth).subscribe(u => setUser(u));

	const login = () => {
		auth.signInWithPopup(googleProvider);
	};

	const logout = () => {
		auth.signOut();
	};

	return (
		<section>
			{user ? (
				<div>
					<Navbar logout={logout} />
					<Profile {...user} />
					<hr />
					<Todos uid={user.uid} />
				</div>
			) : (
				<button type="button" className="btn btn-dark" onClick={login}>
					Google Signin
				</button>
			)}
		</section>
	);
};

export default App;
