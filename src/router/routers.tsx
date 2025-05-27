import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import routeData from '../data/router.json';
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { lazyWithDelay } from "../utils/lazyWithDelay";

// ✅ Mapping nama string dari JSON ke komponen React
const componentMap: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {
    PortfolioLayout: lazyWithDelay(() => import('../layouts/PortfolioLayout'), 100),
    Profile: lazyWithDelay(() => import('../pages/Profile'), 100),
    NotFound: lazyWithDelay(() => import('../pages/NotFound'), 100),
    Contact: lazyWithDelay(() => import('../pages/Contact'), 100),
    Portfolio: lazyWithDelay(() => import('../pages/Portfolio'), 100),
    Service: lazyWithDelay(() => import('../pages/Service'), 100),
    Project: lazyWithDelay(() => import('../pages/Project'), 1000),
};

const Loader = () => (
    <Stack
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
            position: 'relative',
            height: '100vh',
            zIndex: 0,
        }}
    >
        <Box
            sx={{
                position: "absolute",
                opacity: 0.3,
                background: "#0a1427",
                width: "100%",
                height: '100%',
                zIndex: 1,
            }}
        />
        <Box
            display="flex"
            sx={{
                position: 'absolute',
                zIndex: 2,
                background: '#0a1427',
                opacity: 0.5,
                borderRadius: 3,
                p: 3,
                gap: 2,
            }}
        >
            <CircularProgress color="secondary" />
            <Typography variant="h5" color="secondary">Loading...</Typography>
        </Box>
    </Stack>
);

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            {routeData.map((route, i) => {
                const Layout = componentMap[route.layout];
                return (
                    <Route key={i} path="/" element={<Layout />}>
                        {route.children.map((child, j) => {
                            const Element = componentMap[child.element];
                            return child.index ? (
                                <Route
                                    key={j}
                                    index
                                    element={
                                        <Suspense fallback={<Loader />}>
                                            <Element />
                                        </Suspense>
                                    }
                                />
                            ) : (
                                <Route
                                    key={j}
                                    path={child.path}
                                    element={
                                        <Suspense fallback={<Loader />}>
                                            <Element />
                                        </Suspense>
                                    }
                                />
                            );
                        })}
                    </Route>
                );
            })}
        </Routes>
    );
};

export default AppRoutes;
