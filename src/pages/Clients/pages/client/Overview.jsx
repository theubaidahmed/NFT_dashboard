import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Avatar,
    Box,
    Button,
    Divider,
    Grid,
    Stack,
    Link,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Overview = () => {
    return (
        <Grid container height='100%'>
            <Grid item xs={12} md={4} bgcolor='background.ghostWhite' py={2} px={3}>
                <Typography variant='body2' color='text.secondary' my={1}>
                    Alison Parker
                </Typography>
                <Divider variant='fullWidth' />
                <Grid container my={2}>
                    <Grid item xs={2}>
                        <Avatar
                            alt='Remy Sharp'
                            variant='rounded'
                            src='data:image/jpeg;base64,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'
                            sx={{ width: 30, height: 30 }}
                        />
                    </Grid>
                    <Grid item xs>
                        <Typography variant='body2' fontWeight='bold' fontSize={13}>
                            Alison Parker
                        </Typography>
                        <Typography variant='body2' fontSize={13}>
                            alisonparker@gmail.com
                        </Typography>
                        <Typography variant='body2' fontSize={13}>
                            7985922465
                        </Typography>
                        <Typography variant='caption'>
                            <Link color='primary' mr={1}>
                                Edit
                            </Link>
                            <Link color='primary' mr={1}>
                                Delete
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
                <Accordion
                    slotProps={{ transition: { unmountOnExit: true } }}
                    sx={{
                        '&.MuiAccordion-root:before': {
                            backgroundColor: 'transparent',
                        },
                    }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>ADDRESS</AccordionSummary>
                    <AccordionDetails>
                        <Typography variant='body2' fontSize={13} fontWeight='500'>
                            Billing Address
                        </Typography>
                        <Typography variant='caption'>
                            No Billing Address -
                            <Link color='primary' mr={1}>
                                Add new address
                            </Link>
                        </Typography>
                        <Typography variant='body2' fontSize={13} fontWeight='500' mt={1}>
                            Shipping Address
                        </Typography>
                        <Typography variant='caption'>
                            No Shipping Address -
                            <Link color='primary' mr={1}>
                                Add new address
                            </Link>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    sx={{
                        '&.MuiAccordion-root:before': {
                            backgroundColor: 'transparent',
                        },
                    }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        OTHER DETAILS
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={1}>
                            <Grid item xs={12} xm={6}>
                                <Typography variant='body2' fontSize={13} color='text.secondary'>
                                    Customer Type
                                </Typography>
                            </Grid>
                            <Grid item xs={12} xm={6}>
                                <Typography variant='body2' fontSize={13}>
                                    Individual
                                </Typography>
                            </Grid>
                            <Grid item xs={12} xm={6}>
                                <Typography variant='body2' fontSize={13} color='text.secondary'>
                                    Default Currency
                                </Typography>
                            </Grid>
                            <Grid item xs={12} xm={6}>
                                <Typography variant='body2' fontSize={13}>
                                    INR
                                </Typography>
                            </Grid>
                            <Grid item xs={12} xm={6}>
                                <Typography variant='body2' fontSize={13} color='text.secondary'>
                                    Payment Terms
                                </Typography>
                            </Grid>
                            <Grid item xs={12} xm={6}>
                                <Typography variant='body2' fontSize={13}>
                                    Due on Receipt
                                </Typography>
                            </Grid>
                            <Grid item xs={12} xm={6}>
                                <Typography variant='body2' fontSize={13} color='text.secondary'>
                                    Portal Status
                                </Typography>
                            </Grid>
                            <Grid item xs={12} xm={6}>
                                <Typography variant='body2' fontSize={13}>
                                    Disabled
                                </Typography>
                            </Grid>
                            <Grid item xs={12} xm={6}>
                                <Typography variant='body2' fontSize={13} color='text.secondary'>
                                    Portal Language
                                </Typography>
                            </Grid>
                            <Grid item xs={12} xm={6}>
                                <Typography variant='body2' fontSize={13}>
                                    English
                                </Typography>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    sx={{
                        '&.MuiAccordion-root:before': {
                            backgroundColor: 'transparent',
                        },
                    }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        CONTACT PERSONS
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    sx={{
                        '&.MuiAccordion-root:before': {
                            backgroundColor: 'transparent',
                        },
                    }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>RECORD INFO</AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={1}>
                            <Grid item xs={12} xm={6}>
                                <Typography variant='body2' fontSize={13} color='text.secondary'>
                                    Customer ID
                                </Typography>
                            </Grid>
                            <Grid item xs={12} xm={6}>
                                <Typography variant='body2' fontSize={13}>
                                    14804030000002076
                                </Typography>
                            </Grid>
                            <Grid item xs={12} xm={6}>
                                <Typography variant='body2' fontSize={13} color='text.secondary'>
                                    Created on
                                </Typography>
                            </Grid>
                            <Grid item xs={12} xm={6}>
                                <Typography variant='body2' fontSize={13}>
                                    29/01/2024
                                </Typography>
                            </Grid>
                            <Grid item xs={12} xm={6}>
                                <Typography variant='body2' fontSize={13} color='text.secondary'>
                                    Created By
                                </Typography>
                            </Grid>
                            <Grid item xs={12} xm={6}>
                                <Typography variant='body2' fontSize={13}>
                                    @theubaidahmed
                                </Typography>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid item xs={12} md={8} borderLeft='1px solid' borderColor='divider'>
                <Stack direction={{ xs: 'column', sm: 'row' }} p={3} bgcolor='#f7f7fe' spacing={3}>
                    <svg
                        id='fe0a2ae8-fa24-4aea-882c-d6f5ae8d0ca0'
                        data-name='Layer 1'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 386.01 386.01'
                        style={{ width: '50px', height: '50px' }}>
                        <path
                            d='M230.34 401.43L110 281.07a60 60 0 010-84.85l-30 30a60 60 0 000 84.86l120.34 120.35a60 60 0 0084.85 0l30-30a60 60 0 01-84.85 0z'
                            transform='translate(-62.41 -63)'
                            fill='#212c3d'></path>
                        <path
                            d='M430.84 200.92L310.49 80.57a60 60 0 00-84.86 0l-30 30L110 196.22a60 60 0 000 84.85l120.34 120.36a60 60 0 0084.85 0l115.65-115.65a60 60 0 000-84.86z'
                            transform='translate(-62.41 -63)'
                            fill='#aebacd'></path>
                        <path
                            d='M349.18 206.82l-35.27-35.28a13.94 13.94 0 10-19.72 19.72l11.47 11.47h-60.9A35.86 35.86 0 00209 238.55v66.69a13.94 13.94 0 0027.88 0v-66.69a7.94 7.94 0 017.93-7.93h60.9l-11.48 11.47a13.94 13.94 0 0019.72 19.72l35.28-35.27a14 14 0 00-.05-19.72z'
                            transform='translate(-62.41 -63)'
                            fill='#fff'></path>
                    </svg>

                    <Box>
                        <Typography
                            variant='h6'
                            sx={{ fontStyle: 'italic' }}
                            fontWeight='600'
                            mb={1.5}>
                            What's Next for Your Customer?
                        </Typography>
                        <Typography variant='body2' mb={2}>
                            Your customer has been added. Create and send an quote or an invoice to
                            your customer for the items you want to sell to them.
                        </Typography>

                        <Button
                            sx={{
                                bgcolor: 'background.default',
                                border: '1px solid',
                                borderColor: 'divider',
                                borderRadius: '6px',
                                mr: 1,
                            }}>
                            New Quote
                        </Button>
                        <Button variant='contained' color='secondary' sx={{ borderRadius: '6px' }}>
                            New Invoice
                        </Button>
                    </Box>
                </Stack>
                <Box px={2} py={3}>
                    <Typography variant='body2' color='text.secondary'>
                        Payment due period
                    </Typography>
                    <Typography variant='body2' mb={3}>
                        Due on Receipt
                    </Typography>
                    <Typography variant='subtitle1' mb={2} fontWeight='600'>
                        Receivables
                    </Typography>

                    <Table size='small'>
                        <TableHead>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>CURRENCY</TableCell>
                                <TableCell align='right'>OUTSTANDING RECEIVABLES </TableCell>
                                <TableCell align='right'>UNUSED CREDITS</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component='th' scope='row'>
                                    INR- Indian Rupee
                                </TableCell>
                                <TableCell align='right'>₹0.00</TableCell>
                                <TableCell align='right'>₹0.00</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Overview;
