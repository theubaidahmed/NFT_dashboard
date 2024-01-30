import GridViewIcon from '@mui/icons-material/GridView';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import FlagCircleOutlinedIcon from '@mui/icons-material/FlagCircleOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import { Typography } from '@mui/material';

const NavLinks = [
    {
        name: 'Dashboard',
        icon: <GridViewIcon fontSize='small' />,
        to: '/',
    },
    {
        name: 'Clients',
        icon: <PersonOutlinedIcon fontSize='small' />,
        to: '/clients',
    },
    {
        name: 'Assessments',
        icon: <AssessmentOutlinedIcon fontSize='small' />,
        to: '/assessments',
    },
    {
        name: 'Session',
        icon: <PersonOutlinedIcon fontSize='small' />,
        to: '/session',
    },
    {
        name: 'Client Goals',
        icon: <FlagCircleOutlinedIcon fontSize='small' />,
        to: '/client-goals',
    },
    {
        name: 'Report',
        icon: <InsightsOutlinedIcon fontSize='small' />,
        to: [
            {
                name: 'Session Report',
                icon: <LeaderboardOutlinedIcon fontSize='small' />,
                to: '/session-report',
            },
            {
                name: 'Progress Report',
                icon: <LeaderboardOutlinedIcon fontSize='small' />,
                to: '/progress-report',
            },
        ],
    },
];

const columns = [
    {
        field: 'id',
        headerName: 'ID',
        sortable: false,
        width: 100,
        valueGetter: params => `${params.row.id + 1}`,
    },
    {
        field: 'name',
        headerName: 'Name',
        sortable: false,
        width: 200,
        renderCell: params => (
            <Typography variant='subtitle2' fontWeight='600' sx={{ color: 'primary.main' }}>
                {params.row.name}
            </Typography>
        ),
    },
    {
        field: 'therapy',
        headerName: 'Therapy',
        width: 250,
    },
    {
        field: 'slotTime',
        headerName: 'Slot Time',
        width: 150,
    },
    {
        field: 'createdAt',
        headerName: 'Created On',
        width: 150,
        renderCell: params => new Date(params.row.createdAt).toLocaleDateString(),
    },
    {
        field: 'assessment',
        headerName: 'Assessment',
        width: 200,
    },
    {
        field: 'remarks',
        headerName: 'Remarks',
        width: 300,
    },
];

const rows = [
    {
        id: '12',
        name: 'Teja',
        therapy: 'Occupational Therapy',
        slotTime: '10:00',
        createdAt: '2024-01-12',
        assessment: 'OT',
        remarks: 'Patient making steady progress.',
    },
    {
        id: '5',
        name: 'Alice',
        therapy: 'Speech Therapy',
        slotTime: '11:30',
        createdAt: '2024-01-13',
        assessment: 'ST',
        remarks: 'Improvement in speech clarity observed.',
    },
    {
        id: '19',
        name: 'Bob',
        therapy: 'Physical Therapy',
        slotTime: '14:15',
        createdAt: '2024-01-14',
        assessment: 'PT',
        remarks: 'Patient reported reduced pain in joints.',
    },
    {
        id: '8',
        name: 'Sara',
        therapy: 'Counseling',
        slotTime: '16:45',
        createdAt: '2024-01-15',
        assessment: 'CL',
        remarks: 'Positive response to counseling sessions.',
    },
    {
        id: '33',
        name: 'Mike',
        therapy: 'Occupational Therapy',
        slotTime: '09:30',
        createdAt: '2024-01-16',
        assessment: 'OT',
        remarks: 'Working on fine motor skills improvement.',
    },
    {
        id: '21',
        name: 'Eva',
        therapy: 'Speech Therapy',
        slotTime: '12:00',
        createdAt: '2024-01-17',
        assessment: 'ST',
        remarks: 'Speech fluency exercises implemented.',
    },
    {
        id: '14',
        name: 'David',
        therapy: 'Physical Therapy',
        slotTime: '15:20',
        createdAt: '2024-01-18',
        assessment: 'PT',
        remarks: 'Patient demonstrating improved muscle strength.',
    },
    {
        id: '6',
        name: 'Sophie',
        therapy: 'Counseling',
        slotTime: '17:00',
        createdAt: '2024-01-19',
        assessment: 'CL',
        remarks: 'Working on stress management techniques.',
    },
    {
        id: '29',
        name: 'Alex',
        therapy: 'Occupational Therapy',
        slotTime: '10:45',
        createdAt: '2024-01-20',
        assessment: 'OT',
        remarks: 'Focused on activities of daily living.',
    },
    {
        id: '10',
        name: 'Emma',
        therapy: 'Speech Therapy',
        slotTime: '13:30',
        createdAt: '2024-01-21',
        assessment: 'ST',
        remarks: 'Improvements in articulation noticed.',
    },
];

export { NavLinks, rows, columns };
