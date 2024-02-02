import Add from '@mui/icons-material/Add';
import {
    Box,
    Button,
    Divider,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const headCell = [
    {
        field: 'id',
        headerName: 'ID',
        minWidth: 100,
    },
    {
        field: 'client',
        headerName: 'Client',
        minWidth: 200,
    },
    {
        field: 'goal',
        headerName: 'Goal',
        minWidth: 250,
    },
    {
        field: 'activity',
        headerName: 'Activity',
        minWidth: 250,
    },
    {
        field: 'department',
        headerName: 'Department',
        minWidth: 150,
    },
    {
        field: 'createdBy',
        headerName: 'Created By',
        minWidth: 150,
    },
    {
        field: 'startTime',
        headerName: 'Start Time',
        minWidth: 150,
    },
    {
        field: 'endTime',
        headerName: 'End Time',
        minWidth: 150,
    },
    {
        field: 'createdAt',
        headerName: 'Date',
        minWidth: 150,
    },
    {
        field: 'observation',
        headerName: 'Observation',
        minWidth: 150,
    },
    {
        field: 'video',
        headerName: 'Video',
        minWidth: 150,
    },
];

const Sessions = () => {
    const navigate = useNavigate();

    return (
        <Box p={2}>
            <Stack direction='row' mb={2} justifyContent='space-between' alignItems='center'>
                <Typography variant='h6'>All Sessions</Typography>

                <Button
                    variant='contained'
                    color='secondary'
                    sx={{ borderRadius: '6px' }}
                    startIcon={<Add />}
                    onClick={() => navigate('new')}>
                    New
                </Button>
            </Stack>
            <Divider variant='fullWidth' sx={{ mb: 4 }} />

            <TableContainer>
                <Table size='small' sx={{ tableLayout: 'auto' }}>
                    <TableHead>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            {headCell.map((cell, i) => (
                                <TableCell
                                    key={i}
                                    sx={{ textTransform: 'uppercase', minWidth: cell.minWidth }}>
                                    {cell.headerName}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>12</TableCell>
                            <TableCell>Haneesh </TableCell>
                            <TableCell>Comprehension of lexical items</TableCell>
                            <TableCell>The child would be shown various picture cards.</TableCell>
                            <TableCell>BT</TableCell>
                            <TableCell>BT01</TableCell>
                            <TableCell>10:15 p.m</TableCell>
                            <TableCell>10:17 p.m</TableCell>
                            <TableCell>2022-06-17</TableCell>
                            <TableCell>ttt</TableCell>
                            <TableCell>No Video Added</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default Sessions;
