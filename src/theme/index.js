import { createTheme } from '@mui/material';
import React, { useMemo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

const ThemeContextProvider = props => {
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    primary: {
                        main: '#08090e',
                        shadow: '#08090e33',
                    },
                    secondary: {
                        main: '#d92550',
                        shadow: '#d9255033',
                    },
                    text: {
                        secondary: '#7B7D95',
                        tertiary: '#97a3b4',
                    },
                    background: {
                        // paper: '#FFFFFF',
                        default: '#fafafa',
                        ghostWhite: 'rgb(235 238 244 / 38%)',
                    },
                    divider: '#e7e3e3',
                    sidebar: {
                        text: '#646569',
                        activeText: '#c6c6c8',
                        activeBackground: '#17181c',
                    },
                    custom: {
                        search: {
                            main: '#edf2fc',
                            focus: 'white',
                        },
                        border: '#e7e3e3',
                        hoverColor: '#45B5E8',
                        common: 'white',
                        color: 'rgba(0, 0, 0, 0.87)',
                        appsHover: 'rgb(232, 240, 254)',
                        menu: '#FFFFFF',
                        cardHover: '#E1E5EA',
                        trashCaption: '#E3E3E3',
                        selectedCard: '#c2e7ff',
                        selectedMove: '#c2e7ff',
                        selectedPanel: '#f2f6fc',
                        response: '#2f2e2e',
                        selectedHover: '#B3D7EF',
                        shareHover: 'rgb(140 140 140 / 15%)',
                        uploadButton: '#FFF',
                        uploadButtonHover: '#EDF2FA',
                    },
                },
                typography: {
                    fontFamily: '"Open Sans", sans-serif',
                },
                breakpoints: {
                    keys: ['xs', 'sm', 'md', 'xm', 'lg', 'xl', 'xxl'],
                    values: {
                        xs: 0,
                        sm: 576,
                        md: 768,
                        xm: 1024,
                        lg: 1280,
                        xl: 1516,
                        xxl: 1756,
                    },
                },
                components: {
                    MuiCssBaseline: {
                        styleOverrides: theme => ({
                            body: {
                                '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
                                    backgroundColor: 'transparent',
                                    width: '6px',
                                },
                                '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
                                    borderRadius: 8,
                                    backgroundColor: theme.palette.divider,
                                    // backgroundColor: 'red',
                                },
                                '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus':
                                    {
                                        backgroundColor: '#747775',
                                    },
                                '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active':
                                    {
                                        backgroundColor: '#747775',
                                    },
                                '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover':
                                    {
                                        backgroundColor: '#747775',
                                    },
                            },
                        }),
                    },

                    MuiDivider: {
                        styleOverrides: {
                            light: {
                                borderColor: '#424242',
                                width: '100%',
                            },
                        },
                    },
                    MuiSelect: {
                        styleOverrides: {
                            root: {
                                '& .MuiInputBase-input.MuiOutlinedInput-input': {
                                    paddingBlock: '7px',
                                    minWidth: '138px',
                                },
                            },
                        },
                    },
                    MuiListItemButton: {
                        variants: [
                            {
                                props: { variant: 'sidebarButton' },
                                style: ({ theme }) => ({
                                    padding: '8px 15px',
                                    marginBlock: '8px',
                                    cursor: 'pointer',
                                    color: theme.palette.sidebar.text,

                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                    },

                                    '&.Mui-selected': {
                                        '&:hover': {
                                            backgroundColor: theme.palette.sidebar.activeBackground,
                                        },
                                        backgroundColor: theme.palette.sidebar.activeBackground,
                                        boxShadow: '#292b31 0px -1px 3px, #292b31 0px -1px 2px',

                                        borderRadius: '10px',
                                        '.MuiListItemIcon-root': {
                                            color: theme.palette.sidebar.activeText,
                                        },
                                        '.MuiListItemText-root': {
                                            color: theme.palette.sidebar.activeText,
                                        },
                                    },
                                }),
                            },
                            {
                                props: { variant: 'sidebarDropDown' },
                                style: ({ theme }) => ({
                                    padding: '8px 15px',
                                    cursor: 'pointer',
                                    color: theme.palette.sidebar.text,

                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                    },

                                    '&.Mui-selected': {
                                        backgroundColor: 'transparent',
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                        },
                                        '.MuiListItemIcon-root': {
                                            color: theme.palette.sidebar.activeText,
                                        },
                                        '.MuiListItemText-root': {
                                            color: theme.palette.sidebar.activeText,
                                        },
                                        '.MuiSvgIcon-root': {
                                            color: theme.palette.sidebar.activeText,
                                        },
                                    },
                                }),
                            },
                        ],
                    },
                    MuiButton: {
                        styleOverrides: {
                            root: {
                                textTransform: 'none',
                                fontSize: '13px',
                                paddingInline: '22px',
                            },
                        },
                    },
                    MuiTextField: {
                        styleOverrides: {
                            root: {
                                marginBottom: '16px',
                                '& .MuiInputBase-input.MuiOutlinedInput-input': {
                                    paddingBlock: '7px',
                                },
                            },
                        },
                    },
                    MuiMenu: {
                        styleOverrides: {
                            root: {
                                // '.MuiPaper-root.MuiMenu-paper.MuiPopover-paper': {
                                //     minWidth: '180px',
                                // },
                                '.MuiMenu-list': {
                                    padding: '5px',
                                },
                                '.MuiButtonBase-root.MuiMenuItem-root': {
                                    fontSize: '14px',
                                },
                            },
                        },
                    },

                    MuiCard: {
                        styleOverrides: {
                            root: {
                                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                            },
                        },
                    },

                    MuiTab: {
                        styleOverrides: {
                            root: {
                                textTransform: 'capitalize',
                            },
                        },
                    },
                },
            }),
        []
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {props.children}
        </ThemeProvider>
    );
};

export default ThemeContextProvider;
