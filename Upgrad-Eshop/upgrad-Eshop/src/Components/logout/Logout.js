// Importing required dependencies and styles
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import useAuthentication from "../../hooks/useAuthentication";
import { useContext } from "react";
import { clearAllMetadata } from "../../store/actions/metadataAction";
import { connect } from "react-redux";

// Logout component
const Logout = ({ sx, resetMetadata }) => {
    // Extracting authentication context and logout function from useAuthentication hook
    const { AuthCtx } = useAuthentication();
    const { logout } = useContext(AuthCtx);

    // Setting default styles if sx prop is not provided
    if (sx === null || sx === undefined) {
        sx = {};
    }

    // Initializing navigate function from useNavigate hook
    const navigate = useNavigate();

    // Function to perform logout action
    let performLogout = () => {
        // Resetting metadata before logout
        resetMetadata();
        // Logging out the user
        logout().then(() => {
            // Redirecting to login page after successful logout
            navigate("/login");
        });
    }

    // Rendering the logout button
    return (
        <Button
            sx={sx}
            variant="contained"
            color="secondary"
            onClick={() => performLogout()}
        >
            LOGOUT
        </Button>
    );
};

// Mapping state to props
const mapStateToProps = (state) => {
    return {
        sortBy: state.metadata.selectedSortBy,
        category: state.metadata.selectedCategory,
    };
};

// Mapping dispatch to props
const mapDispatchToProps = (dispatch) => {
    return {
        resetMetadata: () => dispatch(clearAllMetadata()),
    };
};

// Connecting Logout component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Logout);
