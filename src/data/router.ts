
const BASE_URL = process.env.BASENAME;

export const  data =
    {
        "layout": "PortfolioLayout",
        "children": [
            {
                "index": true,
                "name": "Profile",
                "element": "Profile"
            },
            {
                "path": BASE_URL+'/project',
                "name": "Project",
                "element": "Project"
            },
        ]
    }
