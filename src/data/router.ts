import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

export const dataRouter = {
    layout: 'PortfolioLayout',
    children: [
        {
            index: true,
            name: 'Profile',
            element: 'Profile', // Gantilah ini dengan <Profile /> jika digunakan langsung sebagai komponen
            path: '/',
            icon: AccountBoxIcon,
        },
        {
            index: false,
            path: '/project',
            name: 'Project',
            element: 'Project', // Sama, pastikan nanti diganti <Project /> kalau langsung digunakan
            icon: AccountTreeIcon,
        },
    ],
};
