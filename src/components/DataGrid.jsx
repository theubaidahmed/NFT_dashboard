import React from 'react';
import { DataGrid as MuiDataGrid } from '@mui/x-data-grid';
import styled from '@emotion/styled';

const StyledDataGrid = styled(MuiDataGrid)(({ theme }) => ({
    '.MuiDataGrid-withBorderColor': {
        border: 'none',
    },
    '.MuiDataGrid-cell:is(:focus, :focus-within)': {
        outline: 'none',
    },
    '.MuiDataGrid-row': {
        borderBottom: '1px solid rgb(224 224 224)',
        fontWeight: 600,
        color: theme.palette.text.tertiary,
    },

    '& .MuiDataGrid-main': {
        width: '100%',
        background: theme.palette.background.paper,
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        padding: '8px',
        borderRadius: '6px',
        borderColor: 'transparent',
    },

    '& .MuiDataGrid-main .MuiDataGrid-columnHeaders': {
        backgroundColor: theme.palette.background.ghostWhite,
        borderRadius: '8px',

        '.MuiDataGrid-columnHeaderTitle': {
            fontWeight: 600,
            color: '#b4b5b9',
            fontSize: '14px',
            textTransform: 'uppercase',
        },
        '& .MuiDataGrid-columnHeader:is(:focus, :focus-within)': {
            outline: 'none',
        },
    },
}));

const DataGrid = props => {
    return <StyledDataGrid {...props} />;
};

export default DataGrid;
