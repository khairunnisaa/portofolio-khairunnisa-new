import React from 'react';
import {Box, Chip, Stack, Typography} from "@mui/material";
import CircleOutlined from "@mui/icons-material/CircleOutlined";

interface dataTechStackProps {
    skills: {
        title: string;
        tools: string[];
    }[];
}

interface TechStackProps {
    data:dataTechStackProps;
}

const TechStack:React.FC<TechStackProps> = ({data}) => {

    return (
        <Box sx={{backgroundColor: 'rgba(0,0,0,.5)', padding: '10px', borderRadius: '10px', mt: '10px', mb: '10px'}}>
            <Typography color={'white'} variant="h6" gutterBottom>
                Tech Stack
            </Typography>
            {data.skills.map((skill, i) => (
                <Stack direction={{ xs: 'column', md: 'row' }} p={1} key={i} spacing={1}>
                    <Typography color={'white'} variant="body2" fontWeight="bold">
                        <CircleOutlined sx={{ fontSize: 6, mr: 1 }} />
                        {skill.title}:
                    </Typography>
                    {skill.tools.map((tool, j) => (
                        <Chip size="small" key={j} label={tool} color={'info'} />
                    ))}
                </Stack>
            ))}
        </Box>
    )
}

export default TechStack;
