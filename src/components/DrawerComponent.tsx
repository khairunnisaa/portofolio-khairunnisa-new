import React from 'react';
import Drawer from "@mui/material/Drawer";

interface DrawerComponentProps {
    window?: () => Window;
    children: React.ReactNode;
    drawerWidth: number;
    onClick: () => void;
    mobileOpen: boolean;
}

const DrawerComponent: React.FC<DrawerComponentProps> = ({
                                                             window,
                                                             children,
                                                             drawerWidth,
                                                             onClick,
                                                             mobileOpen,
                                                         }) => {
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Drawer
            container={container}
            variant="temporary"
            anchor={'right'}
            open={mobileOpen}
            onClose={onClick}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
        >
            {children}
        </Drawer>
    );
};

export default DrawerComponent;
