import React from 'react';
import {Box, Link, Stack} from "@mui/material";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

const NavbarProfile:React.FC = () => {
    return (
        <Stack mb={-3} mr={-2} direction={'row'} justifyContent={'flex-end'} >
            <Stack direction={'row'} spacing={3} sx={{
                backgroundColor: 'white',
                padding: '10px',
                borderTopLeftRadius: '10px',
                cursor: 'pointer',
            }}>
                <Stack direction={'column'}
                       sx={{
                           m:1,
                           backgroundColor: 'white',
                           color: 'black',
                           borderRadius: 2,
                       }}>
                    <Stack ml={1} direction={'row'} alignItems={'stretch'}>
                        <Box sx={{backgroundColor:'orange', mt:-3, width: 40, borderRadius:1}}>
                            <AccountBoxIcon fontSize={'large'}/>
                        </Box>
                    </Stack>
                    <Link m={1} color={'textPrimary'} href="/" underline="hover">
                        Profile
                    </Link>
                </Stack>


                <Stack direction={'column'}
                       sx={{
                           m:1,
                           backgroundColor: 'white',
                           color: 'black',
                           borderRadius: 2,
                       }}>
                    <Stack ml={1} direction={'row'} alignItems={'stretch'}>
                        <Box sx={{backgroundColor:'orange', mt:-3, width: 40, borderRadius:1}}>
                            <AccountTreeIcon fontSize={'large'}/>
                        </Box>
                    </Stack>
                    <Link m={1} color={'textPrimary'} href="/project" underline="hover">
                        Project
                    </Link>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default NavbarProfile;
