import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DrawerComponent from "./DrawerComponent";
import { useNavigate } from "react-router-dom";

// ✅ Tipe data yang benar untuk data navigasi
interface NavItem {
    name: string;
    path: string;
}

interface NavbarProps {
    title: string;
    window?: () => Window;
    data: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ window, title, data }) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleNavigate = (path: string) => {
        navigate(path);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                {title}
            </Typography>
            <Divider />
            <List>
                {data.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton
                            sx={{ textAlign: 'center' }}
                            onClick={() => handleNavigate(item.path)}
                        >
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        {title}
                    </Typography>
                    {/* Desktop Menu */}
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {data.map((item, index) => (
                            <Button
                                key={index}
                                sx={{ color: '#fff' }}
                                onClick={() => handleNavigate(item.path)}
                            >
                                {item.name}
                            </Button>
                        ))}
                    </Box>
                    {/* Mobile Menu Icon */}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ ml: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <nav>
                <DrawerComponent
                    drawerWidth={235}
                    onClick={handleDrawerToggle}
                    mobileOpen={mobileOpen}
                    window={window}
                >
                    {drawer}
                </DrawerComponent>
            </nav>
        </Box>
    );
};

export default Navbar;
