import PropTypes from "prop-types";

function UserGreeting(props) {

  const welcomeGreeting = <h2 className="welcome-message">Welcome {props.username}</h2>
  const notLoggedInGreeting = <h2 className="login-prompt">Please, log in to continue</h2>

  return props.isLoggedIn
    ? welcomeGreeting
    : notLoggedInGreeting
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
}

UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest"
}

export default UserGreeting;
