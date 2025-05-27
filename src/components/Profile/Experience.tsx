import React from 'react';
import {
    Avatar,
    Box,
    Typography,
    useTheme,
} from "@mui/material";
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineContent,
    TimelineOppositeContent,
    TimelineConnector,
} from '@mui/lab';
import DrawerDetail from "./DrawerDetail";
import bg from "../../assets/images/696.jpg";

// Define type for single experience
interface ExperienceItem {
    title: string;
    company: string;
    year: string;
    description: string[];
    tool: string[];
    icon: string;
    color: string;
}

interface ExperienceProps {
    data: {
        experience: ExperienceItem[];
    };
}

const Experience: React.FC<ExperienceProps> = ({ data }) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [selectedExp, setSelectedExp] = React.useState<ExperienceItem | null>(null);

    const handleDrawerToggle = (exp: ExperienceItem) => {
        setSelectedExp(exp);
        setMobileOpen(true);
    };

    const handleCloseDrawer = () => {
        setMobileOpen(false);
        setSelectedExp(null);
    };

    return (
        <Box sx={{
                position: 'relative',
                display: 'flex',
                overflow: 'hidden',
                flexDirection: 'column',
        }}>
            <Box
                sx={{
                    position: "absolute",
                    opacity: 0.7,
                    background: "#0a1427",
                    width: "100%",
                    height: '100%',
                    zIndex: 1,
                    objectFit: 'cover',
                }}
            />
            <Typography sx={{ zIndex: 2, ml:3}} color={'white'} variant="h6">Experience</Typography>

            <Timeline sx={{ zIndex: 2,}}>
                {data.experience.map((exp, index) => (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent sx={{ flex: 0.2 }}>
                            <Typography variant="body2" color="white" component="p">
                                {exp.year}
                            </Typography>
                        </TimelineOppositeContent>

                        <TimelineSeparator>
                            <Avatar
                                src={exp.icon}
                                alt={exp.title}
                                sx={{ width: 56, height: 56 }}
                            />
                            <TimelineConnector />
                        </TimelineSeparator>

                        <TimelineContent>
                            <Box
                                sx={{ cursor: "pointer" }}
                                onClick={() => handleDrawerToggle(exp)}
                            >
                                <Typography color={'white'} variant="h6">{exp.title}</Typography>
                                <Typography
                                    color={'white'}
                                    fontWeight={600}
                                    variant="body2"
                                    gutterBottom
                                >
                                    {exp.company}
                                </Typography>
                            </Box>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>

            <DrawerDetail
                open={mobileOpen}
                onClose={handleCloseDrawer}
                experience={selectedExp}
            />
        </Box>
    );
};

export default Experience;
