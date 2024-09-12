import { createTheme } from '@mui/material'

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: "#FFFFFF", // Bright white for active inputs
        },
        secondary: {
            main: "#BB86FC", // You can pick a secondary accent color like this purple.
        },
        background: {
            main: "#121212", // Dark background for the app
            default: "#121212", // Default background
            paper: "#1E1E1E" // Slightly lighter for elements like cards and modals
        },
        text: {
            primary: "#FFFFFF", // Bright white for active text or content
            secondary: "#B0B0B0" // Slightly dimmed white for inactive or placeholder text
        }
    },
    typography: {
        fontFamily: 'Playpen Sans'
    }
});
