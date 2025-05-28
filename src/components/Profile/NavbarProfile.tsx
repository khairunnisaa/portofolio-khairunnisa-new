import React from 'react';
import { Box, Stack, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { ReactNode } from 'react';

interface RouteChild {
    index?: boolean;
    path: string;
    name: string;
    element: ReactNode | string;
    icon: React.ElementType;
}

interface RouteData {
    layout: string;
    children: RouteChild[];
}

interface NavbarProfileProps {
    data: RouteData;
}

const NavbarProfile: React.FC<NavbarProfileProps> = ({ data }) => {
    // @ts-ignore
    return (
        <Stack mb={-3} mr={-2} direction="row" justifyContent="flex-end">
            <Stack
                direction="row"
                spacing={3}
                sx={{
                    backgroundColor: 'white',
                    padding: 2,
                    borderTopLeftRadius: 8,
                    cursor: 'pointer',
                    '&:hover': {
                        color: 'white',
                        backgroundColor: 'white',
                    },
                }}
            >
                {data.children.map((route, i) => (
                    <Stack
                        key={i}
                        direction="column"
                        sx={{
                            m: 1,
                            backgroundColor: 'white',
                            color: 'black',
                            borderRadius: 2,
                            minWidth: 100,
                            '&:hover': {
                                color: 'white',
                                backgroundColor: 'orange',
                            },

                        }}
                    >
                        <Box
                            sx={{
                                backgroundColor: 'orange',
                                mt: -3,
                                width: 40,
                                height: 40,
                                borderRadius: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                '&:hover': {
                                    color: 'orange',

                                },
                            }}
                        >
                            {React.createElement(route.icon)}
                        </Box>
                        <Link
                            component={RouterLink}
                            to={route.path}
                            underline="hover"
                            sx={{
                                m: 1,
                                fontSize: 18,
                                color: 'black',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                '&:hover': {
                                    color: 'white',
                                    fontWeight: 'bold',
                                },
                            }}
                        >
                            {route.name}
                        </Link>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
};

export default NavbarProfile;
