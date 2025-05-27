import React from 'react';
import { Box, Stack, Link } from "@mui/material";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { Link as RouterLink } from 'react-router-dom';

const BASE_URL = process.env.REACT_APP_BASENAME || '';

const NavbarProfile: React.FC = () => {
    return (
        <Stack mb={-3} mr={-2} direction="row" justifyContent="flex-end">
            <Stack direction="row" spacing={3} sx={{
                backgroundColor: 'white',
                padding: 2,
                borderTopLeftRadius: 8,
                cursor: 'pointer',
            }}>
                {/* Profile */}
                <Stack direction="column" sx={{ m: 1, backgroundColor: 'white', color: 'black', borderRadius: 2 }}>
                    <Stack ml={1} direction="row" alignItems="stretch">
                        <Box sx={{ backgroundColor: 'orange', mt: -3, width: 40, borderRadius: 1 }}>
                            <AccountBoxIcon fontSize="large" />
                        </Box>
                    </Stack>
                    <Link
                        component={RouterLink}
                        to={'/'}
                        underline="hover"
                        sx={{ m: 1, color: 'text.primary' }}
                    >
                        Profile
                    </Link>
                </Stack>

                {/* Project */}
                <Stack direction="column" sx={{ m: 1, backgroundColor: 'white', color: 'black', borderRadius: 2 }}>
                    <Stack ml={1} direction="row" alignItems="stretch">
                        <Box sx={{ backgroundColor: 'orange', mt: -3, width: 40, borderRadius: 1 }}>
                            <AccountTreeIcon fontSize="large" />
                        </Box>
                    </Stack>
                    <Link
                        component={RouterLink}
                        to={'/project'}
                        underline="hover"
                        sx={{ m: 1, color: 'text.primary' }}
                    >
                        Project
                    </Link>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default NavbarProfile;
