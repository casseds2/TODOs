import React from "react";

const Profile = ({ displayName, photoURL }) => {
	const styles = {
		profileCard: {
			width: "18rem",
		},
	};

	return (
		<div className="card" style={styles.profileCard}>
			<img src={photoURL} width="100" alt="user avatar" />
			<div className="card-body">
				<h3 className="card-title">Hi {displayName}!</h3>
				<p className="card-text">Here is what's left to do.</p>
			</div>
		</div>
	);
};

export default Profile;
