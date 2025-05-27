import React from 'react';
import { Avatar, Box, Card, CardContent, Stack, Typography } from "@mui/material";
import bg from "../../assets/images/bg3.jpg";
import photo from '../../assets/images/photo/nisa-2.png'
import NavbarProfile from "./NavbarProfile";
interface HeroItem {
    name: string;
    title: string;
    photo: string;
    quote: string;
    summary: string;
}

interface HeroProps {
    data: HeroItem;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
    return (
        <Card
            sx={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                display: 'flex',
                overflow: 'hidden',
                flexDirection: 'column',
                borderRadius: { xs: 4, md: '100px 0 0 0' },
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    opacity: 0.7,
                    background: "#0a1427",
                    width: "100%",
                    height: '100%',
                    zIndex: 1,
                    objectFit: 'cover',
                    borderRadius: { xs: 4, md: '100px 0 0 0' },
                }}
            />
            <CardContent sx={{ position: 'relative', zIndex: 2 }}>
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={3}
                    sx={{
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        borderRadius: { xs: 4, md: '100px 0 0 100px' },
                        p:3,
                        alignItems: 'center',
                    }}
                >
                    <Avatar
                        src={photo}
                        alt={data.name}
                        sx={{
                            width: 150,
                            height: 150,
                            backgroundSize: 'cover',
                        }}
                    />
                    <Box textAlign={{ xs: 'center', md: 'left' }}>
                        <Typography variant="h3" color="white" gutterBottom>
                            Hello! I&#39;m <strong>{data.name}</strong>,
                        </Typography>
                        <Typography variant="h5" color="white" gutterBottom>
                            <strong>“{data.quote}”</strong>
                        </Typography>
                    </Box>
                </Stack>

                <Stack sx={{px:3}}>
                    <Box>
                        <Typography variant="h5" color={'white'} gutterBottom>
                            Summary
                        </Typography>
                        <Typography variant="body2" color={'white'} gutterBottom>
                            {data.summary}
                        </Typography>
                    </Box>
                </Stack>
                <Stack>
                    <NavbarProfile/>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default Hero;
