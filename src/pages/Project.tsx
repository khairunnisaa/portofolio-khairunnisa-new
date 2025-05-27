import React from 'react';
import {Box, Link, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {data} from '../data/kharirunnisa-resume'



const Project:React.FC = () => {
    return (
        <Box display={'flex'} flexDirection={'row'} sx={{p: 5, backgroundColor: 'rgba(3,2,18,0.5)'}}>
            <Grid container>
                {data.projects.map((project, index) => (
                    <Grid size={{xs:12, sm:4, md:4}} key={index}>
                        <Card sx={{
                            m:1,
                        }}>
                            <CardMedia
                                component="img"
                                alt={project.image}
                                image={project.image}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {project.title}
                                </Typography>
                                <Typography variant="body2" textAlign={'justify'} sx={{ color: 'text.secondary' }}>
                                    {project.date}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Link m={1} color={'textSecondary'} href={project.link} target={'_blank'} underline="hover">
                                   View Me
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}

            </Grid>
        </Box>
    )
}

export default Project;
