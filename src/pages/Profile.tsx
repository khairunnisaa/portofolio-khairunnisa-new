import React from 'react';
import {Box, Grid} from "@mui/material";
import data from '../data/khairunisa-resume.json'
import TechStack from "../components/Profile/TechStack";
import Experience from "../components/Profile/Experience";
import Education from "../components/Profile/Education";
import Language from "../components/Profile/Language";
import Project from "../components/Profile/Project";
import bg from "../assets/images/696.jpg";

const Profile:React.FC = () => {
    return(
        <Box sx={{
            backgroundImage: `url(${bg})`,
            borderRadius: { xs: 4, md: '100px 0 0 0' },
        }}>
            <Grid container>
                <Grid px={5} size={{xs:12, md:5}}>
                        <TechStack data={data}/>
                        <Education/>
                        <Language/>
                        <Project/>
                </Grid>
                <Grid size={{xs:12, md:7}}>
                    <Experience data={data}/>
                </Grid>
            </Grid>
        </Box>


    )
}
export default Profile;
