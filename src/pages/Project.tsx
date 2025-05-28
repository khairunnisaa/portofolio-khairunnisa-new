import React, { useState } from 'react';
import {
    Box, Card, CardActions, CardContent, CardMedia,
    Chip, Grid, Link, Popover, Typography, Button
} from "@mui/material";
import { data } from '../data/kharirunnisa-resume';

const Project: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedProject, setSelectedProject] = useState<any>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>, project: any) => {
        setAnchorEl(event.currentTarget);
        setSelectedProject(project);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setSelectedProject(null);
    };

    const open = Boolean(anchorEl);

    return (
        <Box display={'flex'} flexDirection={'row'} sx={{ p: 5, backgroundColor: 'rgba(3,2,18,0.5)' }}>
            <Grid container spacing={2}>
                {data.projects.map((project, index) => (
                    <Grid size={{xs:12, sm:6, md:4}} key={index}>
                        <Card sx={{ m: 1 }}>
                            <CardMedia
                                component="img"
                                alt={project.title}
                                image={project.image}
                                height="180"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6">
                                    {project.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {project.date}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={(e) => handleClick(e, project)}>
                                    View Me
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                PaperProps={{ sx: { maxWidth: 400, p: 2 } }}
            >
                {selectedProject && (
                    <Box>
                        <Typography variant="h6" gutterBottom>{selectedProject.title}</Typography>
                        <Box
                            component="img"
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            sx={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: 2,
                                mb: 1,
                            }}
                        />
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                            {selectedProject.date}
                        </Typography>
                        <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
                            {selectedProject.description}
                        </Typography>

                        <Box mt={2}>
                            <Typography variant="subtitle2">Tools Used:</Typography>
                            {selectedProject.tools.map((tool: any, i: number) => (
                                <Box key={i} mt={1}>
                                    <Typography variant="body2"><strong>{tool.type}:</strong></Typography>
                                    {tool.technology.map((tech: string, idx: number) => (
                                        <Chip
                                            key={idx}
                                            label={tech}
                                            size="small"
                                            sx={{ mr: 0.5, mt: 0.5 }}
                                        />
                                    ))}
                                </Box>
                            ))}
                        </Box>

                        <Box mt={2}>
                            <Link href={selectedProject.link} target="_blank" underline="hover">
                                Visit Project
                            </Link>
                        </Box>
                    </Box>
                )}
            </Popover>
        </Box>
    );
};

export default Project;
