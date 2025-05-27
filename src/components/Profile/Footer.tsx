import React from 'react';
import {Box, Card, CardContent, Stack, Typography, Link} from "@mui/material";
import bg from "../../assets/images/bg3.jpg";
import Divider from "@mui/material/Divider";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WebIcon from '@mui/icons-material/Web';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import HomeIcon from '@mui/icons-material/Home';

interface DataFooterProps {
    contact: {
        address: string;
        phone: string;
        email: string;
        linkedin: string;
        github: string;
        website: string;
    }
}

interface FooterProps {
    data: DataFooterProps;
}
const Footer:React.FC<FooterProps> = ({data}) => {
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
                borderRadius: { xs: 4, md: '0 0 100PX 0' },
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
                    borderRadius: { xs: 4, md: '0 0 100PX 0' },
                }}
            />

            <Box p={5} sx={{zIndex: 2}}>
                <Stack spacing={1}>
                    <Typography variant="h6" color="white" fontWeight="bold" gutterBottom>
                        <HomeIcon fontSize={'small'}/> {data.contact.address}
                    </Typography>
                    <Typography variant="h6" color="white" fontWeight={900}>
                        <ContactPhoneIcon fontSize={'small'}/> {data.contact.phone}
                    </Typography>

                    <Divider sx={{ my: 1 }}  color='white'/>

                    <Typography variant="body1" color={'white'}>
                        <Stack mt={2} direction="row">
                            <Stack direction={'column'}
                                   sx={{
                                       m:1,
                                       backgroundColor: 'white',
                                       color: 'black',
                                       borderRadius: 2
                            }}>
                                <Stack ml={1} direction={'row'} alignItems={'stretch'}>
                                    <Box sx={{backgroundColor:'orange', mt:-3, width: 40, borderRadius:1}}>
                                        <EmailIcon fontSize={'large'}/>
                                    </Box>
                                </Stack>

                                <Link m={1} color={'textPrimary'} href={data.contact.email}  target={'_blank'} underline="hover">
                                    {data.contact.email}
                                </Link>

                            </Stack>

                            <Stack direction={'column'}
                                   sx={{
                                       m:1,
                                       backgroundColor: 'white',
                                       color: 'black',
                                       borderRadius: 2
                                   }}>
                                <Stack ml={1} direction={'row'} alignItems={'stretch'}>
                                    <Box sx={{backgroundColor:'orange', mt:-3, width: 40, borderRadius:1}}>
                                        <GitHubIcon fontSize={'large'}/>
                                    </Box>
                                </Stack>


                                <Link m={1} color={'textPrimary'} href={data.contact.github}  target={'_blank'} underline="hover">
                                    {data.contact.github}
                                </Link>
                            </Stack>

                            <Stack direction={'column'}
                                   sx={{
                                       m:1,
                                       backgroundColor: 'white',
                                       color: 'black',
                                       borderRadius: 2
                                   }}>
                                <Stack ml={1} direction={'row'} alignItems={'stretch'}>
                                    <Box sx={{backgroundColor:'orange', mt:-3, width: 40, borderRadius:1}}>
                                        <LinkedInIcon fontSize={'large'}/>
                                    </Box>
                                </Stack>

                                <Link m={1} color={'textPrimary'} href={data.contact.linkedin}  target={'_blank'} underline="hover">
                                    {data.contact.linkedin}
                                </Link>
                            </Stack>

                            <Stack direction={'column'}
                                   sx={{
                                       m:1,
                                       backgroundColor: 'white',
                                       color: 'black',
                                       borderRadius: 2
                                   }}>
                                <Stack ml={1} direction={'row'} alignItems={'stretch'}>
                                    <Box sx={{backgroundColor:'orange', mt:-3, width: 40, borderRadius:1}}>
                                        <WebIcon fontSize={'large'}/>
                                    </Box>
                                </Stack>
                                <Link m={1} color={'textPrimary'} href={data.contact.website}  target={'_blank'} underline="hover">
                                    {data.contact.website}
                                </Link>
                            </Stack>
                        </Stack>
                    </Typography>
                </Stack>
            </Box>

        </Card>

    )
}

export default Footer
