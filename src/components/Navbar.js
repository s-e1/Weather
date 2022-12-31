import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        Weather App
                    </Typography>

                    <Button
                        component={NavLink}
                        to="/"
                        variant="outlined"
                        color="inherit"
                        style={
                            ({ isActive }) => ({
                                color: "white",
                                backgroundColor: isActive ? "dodgerblue" : "",
                                textDecoration: "none"
                            })
                        }
                    >
                        Home
                    </Button>
                    &nbsp;&nbsp;
                    
                    <Button
                        component={NavLink}
                        to="/favorites"
                        variant="outlined"
                        color="inherit"
                        style={
                            ({ isActive }) => ({
                                color: "white",
                                backgroundColor: isActive ? "dodgerblue" : "",
                                textDecoration: "none"
                            })
                        }
                    >
                        Favorites
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;