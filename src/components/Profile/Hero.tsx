import React from 'react';
import { Avatar, Box, Card, CardContent, Stack, Typography } from "@mui/material";
import NavbarProfile from "./NavbarProfile";
import bg from '../../assets/images/bg3.jpg'
import photo from '../../assets/images/photo/nisa-2.png'

interface HeroItem {
    name: string;
    title: string;
    photo: string;
    quote: string;
    summary: string;
}

interface RouteChild {
    index?: boolean;
    path: string;
    name: string;
    element: string;
    icon: React.ElementType; // ✅ ubah dari string jadi ReactNode
}

interface RouteData {
    layout: string;
    children: RouteChild[];
}

interface HeroProps {
    data: HeroItem;
    router: RouteData;
}

const Hero: React.FC<HeroProps> = ({ data, router }) => {
    return (
        <Card
            sx={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                borderRadius: { xs: 4, md: '100px 0 0 0' },
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#0a1427',
                    opacity: 0.7,
                    zIndex: 1,
                    borderRadius: { xs: 4, md: '100px 0 0 0' },
                }}
            />
            <CardContent sx={{ position: 'relative', zIndex: 2 }}>
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={3}
                    sx={{ p: 3, alignItems: 'center' }}
                >
                    <Avatar
                        src={photo}
                        alt={data.name}
                        sx={{ width: 150, height: 150 }}
                    />
                    <Box textAlign={{ xs: 'center', md: 'left' }}>
                        <Typography variant="h3" color="white" gutterBottom>
                            Hello! I&#39;m <strong>{data.name}</strong>
                        </Typography>
                        <Typography variant="h5" color="white" gutterBottom>
                            <strong>“{data.quote}”</strong>
                        </Typography>
                    </Box>
                </Stack>

                <Box sx={{ px: 3, mt: 2 }}>
                    <Typography variant="h5" color="white" gutterBottom>
                        Summary
                    </Typography>
                    <Typography variant="body2" color="white">
                        {data.summary}
                    </Typography>
                </Box>

                <Box sx={{ mt: 3 }}>
                    <NavbarProfile data={router} />
                </Box>
            </CardContent>
        </Card>
    );
};

export default Hero;
