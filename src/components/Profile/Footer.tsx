import React from 'react';
import {
    Box,
    Card,
    Grid,
    Stack,
    Typography,
    Link,
    Divider
} from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WebIcon from '@mui/icons-material/Web';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import HomeIcon from '@mui/icons-material/Home';

import bg from "../../assets/images/bg3.jpg";

interface DataFooterProps {
    contact: {
        address: string;
        phone: string;
        email: string;
        linkedin: string;
        github: string;
        website: string;
    };
}

interface FooterProps {
    data: DataFooterProps;
}

const Footer: React.FC<FooterProps> = ({ data }) => {
    const contacts = [
        {
            icon: <EmailIcon fontSize="large" />,
            label: data.contact.email,
            href: `mailto:${data.contact.email}`,
        },
        {
            icon: <GitHubIcon fontSize="large" />,
            label: data.contact.github,
            href: data.contact.github,
        },
        {
            icon: <LinkedInIcon fontSize="large" />,
            label: data.contact.linkedin,
            href: data.contact.linkedin,
        },
        {
            icon: <WebIcon fontSize="large" />,
            label: data.contact.website,
            href: data.contact.website,
        },
    ];

    return (
        <Card
            sx={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: { xs: 4, md: '0 0 100px 0' },
                mt: 5,
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
                    borderRadius: { xs: 4, md: '0 0 100px 0' },
                }}
            />

            <Box p={5} sx={{ zIndex: 2, position: 'relative' }}>
                <Stack spacing={1} textAlign={{ xs: 'center', md: 'left' }}>
                    <Typography variant="h6" color="white" fontWeight="bold">
                        <HomeIcon fontSize="small" /> {data.contact.address}
                    </Typography>
                    <Typography variant="h6" color="white" fontWeight={900}>
                        <ContactPhoneIcon fontSize="small" /> {data.contact.phone}
                    </Typography>
                </Stack>

                <Divider sx={{ my: 3 }} color="white" />

                <Grid container spacing={2} justifyContent="center">
                    {contacts.map((item, index) => (
                        <Grid size={{xs:12, sm:6, md:3}} key={index}>
                            <Box
                                sx={{
                                    backgroundColor: 'white',
                                    color: 'black',
                                    borderRadius: 2,
                                    p: 2,
                                    textAlign: 'center',
                                }}
                            >
                                <Box
                                    sx={{
                                        backgroundColor: 'orange',
                                        width: 48,
                                        height: 48,
                                        mx: 'auto',
                                        mb: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 1,
                                    }}
                                >
                                    {item.icon}
                                </Box>
                                <Link
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener"
                                    underline="hover"
                                    color="textPrimary"
                                    sx={{ wordBreak: 'break-word' }}
                                >
                                    {item.label}
                                </Link>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Card>
    );
};

export default Footer;
