import React from "react";

const Navbar = ({ logout }) => (
	<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
		<span className="navbar-brand mb-0 h1">TODO</span>
		<button
			className="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span className="navbar-toggler-icon" />
		</button>

		<div className="collapse navbar-collapse" id="navbarSupportedContent">
			<ul className="navbar-nav ml-auto">
				<li className="nav-item dropdown">
					<a
						className="nav-link dropdown-toggle"
						href="/settings"
						id="navbarDropdown"
						role="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						Settings
					</a>
					<div className="dropdown-menu" aria-labelledby="navbarDropdown">
						<button className="dropdown-item" onClick={logout}>
							Logout
						</button>
					</div>
				</li>
			</ul>
		</div>
	</nav>
);

export default Navbar