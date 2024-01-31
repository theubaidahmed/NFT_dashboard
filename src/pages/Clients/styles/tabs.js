import styled from '@mui/material/styles/styled';
import MuiTabs from '@mui/material/Tabs';
import MuiTab from '@mui/material/Tab';
import React from 'react';

const Tabs = styled(props => (
    <MuiTabs
        {...props}
        TabIndicatorProps={{ children: <span className='MuiTabs-indicatorSpan' /> }}
    />
))(({ theme }) => ({
    minHeight: theme.spacing(4),
    borderBottom: '1px solid',
    borderColor: theme.palette.divider,
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        width: '65%',
        backgroundColor: theme.palette.secondary.main,
    },
}));

const Tab = styled(props => <MuiTab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(13),
    marginRight: theme.spacing(1),
    padding: 0,
    minHeight: theme.spacing(4),
    '&.Mui-selected': {
        color: theme.palette.text.primary,
        fontWeight: 'bold',
    },
    '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
}));

export { Tabs, Tab };
