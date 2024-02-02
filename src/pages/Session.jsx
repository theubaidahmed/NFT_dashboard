import React, { useMemo, useState } from 'react';
import {
    Box,
    Container,
    IconButton,
    Typography,
    Grid,
    Menu,
    MenuItem,
    Divider,
    Button,
} from '@mui/material';
import DataGrid from '../components/DataGrid';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { GridToolbarContainer } from '@mui/x-data-grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useMenu } from '../hooks/useMenu';
import Image from '../components/Image';
import SearchBar from '../components/SearchBar';

const columns = [
    {
        field: 'id',
        headerName: 'Session ID',
        sortable: false,
        width: 100,
        valueGetter: params => `${params.row.id + 1}`,
    },
    {
        field: 'client',
        headerName: 'Client',
        sortable: false,
        width: 200,
        renderCell: params => (
            <Typography variant='subtitle2' fontWeight='600' sx={{ color: 'primary.main' }}>
                {params.row.client}
            </Typography>
        ),
    },
    {
        field: 'goal',
        headerName: 'Goal',
        width: 250,
    },
    {
        field: 'activity',
        headerName: 'Activity',
        width: 250,
    },
    {
        field: 'department',
        headerName: 'Department',
        width: 150,
    },
    {
        field: 'createdBy',
        headerName: 'Created By',
        width: 150,
    },
    {
        field: 'startTime',
        headerName: 'Start Time',
        width: 150,
    },
    {
        field: 'endTime',
        headerName: 'End Time',
        width: 150,
    },
    {
        field: 'createdAt',
        headerName: 'Date',
        width: 150,
        renderCell: params => new Date(params.row.createdAt).toLocaleDateString(),
    },
    {
        field: 'observation',
        headerName: 'Observation',
        width: 150,
    },
    {
        field: 'video',
        headerName: 'Video',
        width: 150,
    },
];

const rows = [
    {
        id: '12',
        client: 'Haneesh',
        goal: 'Comprehension of lexical items',
        activity: 'The child would be shown various picture cards.',
        department: 'BT',
        createdBy: 'BT01',
        startTime: '10:15 p.m',
        endTime: '10:17 p.m',
        createdAt: '2022-06-17',
        observation: 'ttt',
        video: 'No Video Added',
    },
];

const Index = () => {
    const [loading] = useState(false);
    const [filter, setFilter] = useState('');
    const [setInterval] = useState({});
    const [paginationModel, setPaginationModel] = useState({
        pageSize: 5,
        page: 0,
    });
    const [rowCount] = useState(0);

    return (
        <Container maxWidth='false'>
            <Box pt={3}>
                <Typography variant='h4' fontWeight={500}>
                    Session
                </Typography>
                <Typography variant='body2' color='text.secondary' sx={{ wordSpacing: '2px' }}>
                    An organized space for scheduling, goals, activity and observation tracking.
                </Typography>
                <Divider variant='fullWidth' sx={{ mt: 2, mb: 4 }} />
            </Box>
            <DataGrid
                rows={rows}
                columns={columns}
                paginationModel={paginationModel}
                onPaginationModelChange={setPaginationModel}
                paginationMode='server'
                pageSizeOptions={[5, 10, 50, 100, 1000]}
                autoHeight
                disableSelectionOnClick
                loading={loading}
                rowCount={rowCount}
                slots={{ toolbar: CustomToolbar }}
                slotProps={{
                    toolbar: { setFilter, filter, setInterval },
                }}
                checkboxSelection
                components={{
                    Footer: CustomToolbar,
                }}
            />
        </Container>
    );
};

export function CustomToolbar({ setFilter, filter, setInterval }) {
    const { anchorEl, openMenu, closeMenu } = useMenu();
    const [dateInterval, setDateInterval] = useState({ from: '', to: '' });
    const [customOption, setCustomOption] = useState(false);

    const filterOptions = useMemo(
        () => [
            { name: 'All', value: '' },
            { name: 'Today', value: 'today' },
            { name: 'This month', value: 'month' },
            { name: 'This year', value: 'year' },
        ],
        []
    );

    const onMenuClick = filter => {
        setFilter(filter);
        closeMenu();
    };

    return (
        <GridToolbarContainer sx={{ pb: '24px' }}>
            <Grid container alignItems='center' width='100%' spacing={1}>
                <Grid item xs>
                    <SearchBar />
                </Grid>
                {/* <Grid item xs={12} sm='auto'>
                    <Button variant='contained' fullWidth>
                        Create Session
                    </Button>
                </Grid>
                <Grid item xs={12} sm='auto'>
                    <Button
                        variant='contained'
                        fullWidth
                       >
                        Edit Session
                    </Button>
                </Grid> */}
                <Grid item xs={12} sm='auto'>
                    <IconButton
                        color='text.tertiary'
                        onClick={e => {
                            setCustomOption(false);
                            openMenu(e);
                        }}>
                        <FilterAltOutlinedIcon />
                    </IconButton>
                    <Menu
                        open={Boolean(anchorEl)}
                        anchorEl={anchorEl}
                        onClose={closeMenu}
                        sx={{
                            '.MuiPaper-root.MuiMenu-paper.MuiPopover-paper': {
                                width: 'min(100%, 212px)',
                                boxShadow:
                                    'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
                                border: '1px solid #00000017',
                                px: 0.5,
                            },
                        }}>
                        {filterOptions.map(item => (
                            <MenuItem
                                key={item.name}
                                onClick={() => onMenuClick(item.value)}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}>
                                <div>{item.name}</div>

                                {filter === item.value && !customOption && (
                                    <Image name='check.png' sx={{ height: '14px' }} />
                                )}
                            </MenuItem>
                        ))}
                        <MenuItem
                            onClick={() => setCustomOption(true)}
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                            <div>Custom</div>

                            {customOption ? (
                                <Image name='check.png' sx={{ height: '14px' }} />
                            ) : (
                                filter === 'custom' && (
                                    <Image name='check.png' sx={{ height: '14px' }} />
                                )
                            )}
                        </MenuItem>
                        {customOption && (
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <Divider variant='middle' />
                                <Box px={1}>
                                    <Typography
                                        variant='body2'
                                        color='text.tertiary'
                                        fontWeight={500}
                                        gutterBottom>
                                        From
                                    </Typography>
                                    <DatePicker
                                        slotProps={{
                                            textField: { size: 'small' },
                                        }}
                                        value={dateInterval.from}
                                        onChange={value =>
                                            setDateInterval({
                                                ...dateInterval,
                                                from: value,
                                            })
                                        }
                                    />
                                    <Typography
                                        variant='body2'
                                        color='text.tertiary'
                                        fontWeight={500}
                                        gutterBottom>
                                        To
                                    </Typography>
                                    <DatePicker
                                        slotProps={{
                                            textField: { size: 'small' },
                                        }}
                                        value={dateInterval.to}
                                        onChange={value =>
                                            setDateInterval({
                                                ...dateInterval,
                                                to: value,
                                            })
                                        }
                                    />
                                </Box>
                                <Divider variant='middle' />
                                <Box mt={1.5} textAlign='right' px={1}>
                                    <Button
                                        variant='outlined'
                                        size='small'
                                        sx={{ p: '3px 14px', fontSize: '12px' }}
                                        disabled={!(dateInterval.from && dateInterval.to)}
                                        onClick={() => {
                                            setFilter('custom');
                                            setInterval(dateInterval);
                                            setDateInterval({
                                                from: '',
                                                to: '',
                                            });
                                            closeMenu();
                                        }}>
                                        Apply
                                    </Button>
                                </Box>
                            </LocalizationProvider>
                        )}
                    </Menu>
                </Grid>
            </Grid>
        </GridToolbarContainer>
    );
}

export default Index;
