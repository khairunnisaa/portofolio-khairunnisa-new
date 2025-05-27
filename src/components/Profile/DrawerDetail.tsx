import React from "react";
import {
    Drawer,
    Typography,
    Divider,
    Stack,
    IconButton, Box, Chip
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface ExperienceItem {
    title: string;
    company: string;
    year: string;
    description: string[];
    tool: string[];
    icon: string;
    color: string;
}


interface DrawerDetailProps {
    open: boolean;
    onClose: () => void;
    experience: ExperienceItem | null;
}

const DrawerDetail: React.FC<DrawerDetailProps> = ({
                                                       open,
                                                       onClose,
                                                       experience,
                                                   }) => {
    if (!experience) return null;

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: { width: {xs: 300, md: 600}, p: 2 },
            }}
        >
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="h5" fontWeight={900}>Experience Detail</Typography>
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </Stack>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h5" fontWeight={900} gutterBottom>
                {experience.title}
            </Typography>
            <Typography variant="body1" color="info">
                {experience.company}
            </Typography>
            <Typography variant="body1" fontWeight={900} color="success">
               ({experience.year})
            </Typography>

            <Box mt={2}>
                <Typography variant="body1" fontWeight="bold">
                    Description:
                </Typography>
                <ul>
                    {experience.description.map((item, index) => (
                        <li key={index}>
                            <Typography variant="body1">{item}</Typography>
                        </li>
                    ))}
                </ul>
            </Box>

            <Box mt={2}>
                <Typography variant="body2" fontWeight="bold">
                    Tools:
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1} mt={1}>
                    {experience.tool.map((tool, index) => (
                        <Chip key={index} color={'primary'} label={tool} size="small" />
                    ))}
                </Stack>
            </Box>
        </Drawer>
    );
};

export default DrawerDetail;
