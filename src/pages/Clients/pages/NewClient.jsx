import { MenuItem, Select, TextField, Stack, Divider } from '@mui/material';
import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { Form, Submit, useForm } from '../../../hooks/useForm';
import { Input } from '../../../hooks/useForm/inputs/index';
import { useMessage } from '../../../components/Header';
import Loading from '../../../components/Loading';
import { useParams } from 'react-router-dom';
import { Tab, Tabs } from '../styles/tabs';
import { CheckBox } from '@mui/icons-material';

function TabPanel(props) {
    const { children, value, index } = props;

    return (
        <div role='tabpanel' hidden={value !== index} style={{ height: '90%' }}>
            {value === index && children}
        </div>
    );
}

const NewClient = () => {
    const { clientId } = useParams();
    const [loading] = useState(false);
    const { showError } = useMessage();
    const [tabSelected, setTabSelected] = useState(0);
    const handleChange = (event, newValue) => {
        setTabSelected(newValue);
    };

    const handlers = useForm(
        useMemo(
            () => ({
                gender: { required: true },
                dob: { required: true },
                email: { required: true },
                phone: { required: true },
                alternate_phone: '',
                father_name: { required: true },
                mother_name: { required: true },
                address: { required: true },
                branch: '',
                discontinious: '',
                assessment: '',
                slot_time_from: '',
                slot_time_to: '',
                theropyselect: '',
                chief_complaints: '',
                diagnosis: '',
                remarks: '',
                medical_history: '',
            }),
            []
        ),
        { Input: TextField }
    );

    // const setValues = handlers.setValues;

    // const fetchPlan = useCallback(async () => {
    //     setLoading(true);
    //     try {
    //         const response = await axios.get(`/admin/plans/${id}`);
    //         const plan = response.data.plan;
    //         const {
    //             name,
    //             email,
    //             branch,
    //             phone,
    //             fatherName,
    //             motherName,
    //             address,
    //             gender,
    //             alternatePhone,

    //         } = plan;
    //         setValues({
    //             name,
    //             email,
    //             branch,
    //             fatherName,
    //             motherName,
    //             alternatePhone,
    //             address,
    //             gender,
    //         });
    //         setFeatureList(phone);
    //     } catch (e) {
    //         console.log(e);
    //     } finally {
    //         setLoading(false);
    //     }
    // }, [id, setValues]);

    const customChangeHandler = e => {
        const { name, value } = e.target;
        handlers.setValues({ [name]: value });
    };

    // const onSubmit = res => {
    //     const { message, success } = res.data;

    //     if (success) {
    //         handleClose();
    //         setSelectedPlan({});
    //         showSuccess(
    //             clientId ? 'Plan Updated Successfully' : 'Plan Added Successfully'
    //         );
    //         return refresh();
    //     }

    //     showError(message);
    // };

    function onError(err) {
        const { message } = err.response.data;

        showError(message);
    }

    // useEffect(() => {
    //     if (id) {
    //         console.log(id);
    //         fetchPlan();
    //     }
    // }, [id, fetchPlan]);

    return (
        <Box
            bgcolor='background.paper'
            height='calc(100vh - 76px)'
            overflow='auto'
            display='flex'
            flexDirection='column'
            p={0}>
            <Typography variant='h5' fontWeight={600} color='primary' p={2}>
                {clientId ? 'Edit Client' : 'New Client'}
            </Typography>
            <Divider variant='fullWidth' />
            {loading ? (
                <Loading message='Please wait, while your credentials are loading...' />
            ) : (
                <Form
                    handlers={handlers}
                    // onSubmit={onSubmit}
                    clientId={clientId ? `/admin/plans/${clientId}` : '/admin/plans/'}
                    method={clientId ? 'patch' : 'post'}
                    onError={onError}
                    style={{ flexGrow: 1, position: 'relative' }}>
                    <Box p={2} display='flex' flexDirection='column' mb={4} overflow='auto'>
                        <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                            <Grid item xs={12} lg>
                                <Typography variant='body2' fontWeight={600}>
                                    Primary Contact
                                </Typography>
                            </Grid>

                            <Grid item xs={12} lg={10} display='flex' spacing={2}>
                                <Input
                                    name='name'
                                    variant='outlined'
                                    placeholder='First Name'
                                    size='small'
                                    sx={{ mr: 2, width: 150 }}
                                />
                                <Input
                                    name='name'
                                    variant='outlined'
                                    placeholder='Last Name'
                                    size='small'
                                    sx={{ width: 150 }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                            <Grid item xs={12} lg>
                                <Typography variant='body2' fontWeight={600}>
                                    Date of Birth
                                </Typography>
                            </Grid>

                            <Grid item xs={12} lg={10} display='flex' spacing={2}>
                                <Input
                                    name='dob'
                                    variant='outlined'
                                    size='small'
                                    type='date'
                                    sx={{ width: 150, mr: 2 }}
                                />
                                <Input
                                    name='age'
                                    variant='outlined'
                                    size='small'
                                    placeholder='Age'
                                    sx={{ width: 150, mr: 2 }}
                                />
                                <Input
                                    name='month'
                                    variant='outlined'
                                    size='small'
                                    placeholder='Month'
                                    sx={{ width: 150 }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                            <Grid item xs={12} lg>
                                <Typography variant='body2' fontWeight={600}>
                                    Gender
                                </Typography>
                            </Grid>

                            <Grid item xs={12} lg={10} display='flex' spacing={2}>
                                <Select
                                    size='small'
                                    name='gender'
                                    sx={{ width: 316 }}
                                    displayEmpty
                                    renderValue={v => (v ? v : 'Gender')}
                                    onChange={customChangeHandler}>
                                    <MenuItem value='Male'>Male</MenuItem>
                                    <MenuItem value='Female'>Female</MenuItem>
                                    <MenuItem value='Other'>Other</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>
                        <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                            <Grid item xs={12} lg>
                                <Typography variant='body2' fontWeight={600}>
                                    Father name
                                </Typography>
                            </Grid>

                            <Grid item xs={12} lg={10}>
                                <Input
                                    name='father_name'
                                    variant='outlined'
                                    size='small'
                                    sx={{ width: { xs: '100%', sm: '90%', lg: '316px' } }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                            <Grid item xs={12} lg>
                                <Typography variant='body2' fontWeight={600}>
                                    Mother name
                                </Typography>
                            </Grid>

                            <Grid item xs={12} lg={10}>
                                <Input
                                    name='mother_name'
                                    variant='outlined'
                                    size='small'
                                    sx={{ width: { xs: '100%', sm: '90%', lg: '316px' } }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                            <Grid item xs={12} lg>
                                <Typography variant='body2' fontWeight={600}>
                                    Client Email
                                </Typography>
                            </Grid>

                            <Grid item xs={12} lg={10}>
                                <Input
                                    name='email'
                                    variant='outlined'
                                    size='small'
                                    sx={{ width: { xs: '100%', sm: '90%', lg: '316px' } }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                            <Grid item xs={12} lg>
                                <Typography variant='body2' fontWeight={600}>
                                    Client Phone
                                </Typography>
                            </Grid>

                            <Grid item xs={12} lg={10} display='flex' spacing={2}>
                                <Input
                                    name='phone'
                                    variant='outlined'
                                    placeholder='Primary'
                                    size='small'
                                    sx={{ mr: 2, width: 150 }}
                                />
                                <Input
                                    name='alternate_phone'
                                    variant='outlined'
                                    placeholder='Alternate'
                                    size='small'
                                    sx={{ width: 150 }}
                                />
                            </Grid>
                        </Grid>

                        <Tabs value={tabSelected} onChange={handleChange} sx={{ mt: 4 }}>
                            <Tab label='Address' />
                            <Tab label='Assessment' />
                            <Tab label='Other Details' />
                        </Tabs>
                        <Box flexGrow={1} py={2} mb={3}>
                            <TabPanel value={tabSelected} index={0}>
                                <Grid
                                    container
                                    columnSpacing={5}
                                    rowSpacing={1}
                                    alignItems='center'
                                    mb={2}>
                                    <Grid item xs={12} lg>
                                        <Typography variant='body2' fontWeight={600}>
                                            Adddress
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} lg={10}>
                                        <Input
                                            name='address'
                                            variant='outlined'
                                            size='small'
                                            sx={{ width: { xs: '100%', sm: '90%', lg: '316px' } }}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    columnSpacing={5}
                                    rowSpacing={1}
                                    alignItems='center'
                                    mb={2}>
                                    <Grid item xs={12} lg>
                                        <Typography variant='body2' fontWeight={600}>
                                            Branch
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} lg={10}>
                                        <Input
                                            name='branch'
                                            variant='outlined'
                                            size='small'
                                            sx={{ width: { xs: '100%', sm: '90%', lg: '316px' } }}
                                        />
                                    </Grid>
                                </Grid>
                            </TabPanel>
                            <TabPanel value={tabSelected} index={1}>
                                <Grid
                                    container
                                    columnSpacing={5}
                                    rowSpacing={1}
                                    alignItems='center'
                                    mb={2}>
                                    <Grid item xs={12} lg>
                                        <Typography variant='body2' fontWeight={600}>
                                            Assessment
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} lg={10}>
                                        <Select
                                            name='assessment'
                                            size='small'
                                            sx={{ width: 316 }}
                                            displayEmpty
                                            renderValue={v => (v ? v : 'Select')}
                                            onChange={customChangeHandler}>
                                            <MenuItem value='OT'>OT</MenuItem>
                                            <MenuItem value='BT'>BT</MenuItem>
                                            <MenuItem value='ST'>ST</MenuItem>
                                        </Select>
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    columnSpacing={5}
                                    rowSpacing={1}
                                    alignItems='center'
                                    mb={2}>
                                    <Grid item xs={12} lg>
                                        <Typography variant='body2' fontWeight={600}>
                                            Slot time
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} lg={10} display='flex' spacing={2}>
                                        <Input
                                            name='slot_time_from'
                                            variant='outlined'
                                            type='time'
                                            placeholder='From'
                                            size='small'
                                            sx={{ mr: 2, width: 150 }}
                                        />
                                        <Input
                                            name='slot_time_to'
                                            variant='outlined'
                                            placeholder='To'
                                            type='time'
                                            size='small'
                                            sx={{ width: 150 }}
                                        />
                                    </Grid>
                                </Grid>

                                <Grid
                                    container
                                    columnSpacing={5}
                                    rowSpacing={1}
                                    alignItems='center'
                                    mb={2}>
                                    <Grid item xs={12} lg>
                                        <Typography variant='body2' fontWeight={600}>
                                            Discontinued
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} lg={10}>
                                        <CheckBox />
                                    </Grid>
                                </Grid>
                            </TabPanel>
                            <TabPanel value={tabSelected} index={2}>
                                <Grid
                                    container
                                    columnSpacing={5}
                                    rowSpacing={1}
                                    alignItems='center'
                                    mb={2}>
                                    <Grid item xs={12} lg>
                                        <Typography variant='body2' fontWeight={600}>
                                            Therapy
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} lg={10}>
                                        <Select
                                            name='therapyselect'
                                            size='small'
                                            sx={{ width: 316 }}
                                            displayEmpty
                                            renderValue={v => (v ? v : 'Select')}
                                            onChange={customChangeHandler}>
                                            <MenuItem value='male'>Male</MenuItem>
                                            <MenuItem value='female'>Female</MenuItem>
                                            <MenuItem value='other'>Other</MenuItem>
                                        </Select>
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    columnSpacing={5}
                                    rowSpacing={1}
                                    alignItems='center'
                                    mb={2}>
                                    <Grid item xs={12} lg>
                                        <Typography variant='body2' fontWeight={600}>
                                            Chief Complaints
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} lg={10}>
                                        <Input
                                            name='chief_complaints'
                                            variant='outlined'
                                            size='small'
                                            sx={{ width: { xs: '100%', sm: '90%', lg: '316px' } }}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    columnSpacing={5}
                                    rowSpacing={1}
                                    alignItems='center'
                                    mb={2}>
                                    <Grid item xs={12} lg>
                                        <Typography variant='body2' fontWeight={600}>
                                            Diagnosis
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} lg={10}>
                                        <Input
                                            name='diagnosis'
                                            variant='outlined'
                                            size='small'
                                            sx={{ width: { xs: '100%', sm: '90%', lg: '316px' } }}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    columnSpacing={5}
                                    rowSpacing={1}
                                    alignItems='center'
                                    mb={2}>
                                    <Grid item xs={12} lg>
                                        <Typography variant='body2' fontWeight={600}>
                                            Remarks
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} lg={10}>
                                        <Input
                                            name='remarks'
                                            variant='outlined'
                                            size='small'
                                            sx={{ width: { xs: '100%', sm: '90%', lg: '316px' } }}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    columnSpacing={5}
                                    rowSpacing={1}
                                    alignItems='center'
                                    mb={2}>
                                    <Grid item xs={12} lg>
                                        <Typography variant='body2' fontWeight={600}>
                                            Medical History
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} lg={10}>
                                        <Input
                                            name='medical_history'
                                            variant='outlined'
                                            size='small'
                                            multiline
                                            rows={4}
                                            sx={{ width: { xs: '100%', sm: '90%', lg: '316px' } }}
                                        />
                                    </Grid>
                                </Grid>
                            </TabPanel>
                        </Box>
                    </Box>
                    <Stack
                        direction='row'
                        p={2}
                        spacing={2}
                        sx={{
                            boxShadow: '0 -4px 5px -3px rgba(0,0,0,.1);',
                            backgroundColor: 'background.paper',
                            zIndex: 1100,
                            position: 'fixed',
                            bottom: 0,
                            width: {
                                xs: '100%',
                                xm: `calc(100% - 280px)`,
                            },
                        }}>
                        <Submit>
                            {loader => (
                                <Button
                                    variant='contained'
                                    color='secondary'
                                    type='submit'
                                    disabled={Boolean(loader)}
                                    sx={{
                                        textTransform: 'capitalize',
                                    }}
                                    endIcon={loader}>
                                    Save
                                </Button>
                            )}
                        </Submit>
                        <Button
                            sx={{
                                bgcolor: 'background.default',
                                border: '1px solid',
                                borderColor: 'divider',
                            }}>
                            Cancel
                        </Button>
                    </Stack>
                </Form>
            )}
        </Box>
    );
};

export default NewClient;
