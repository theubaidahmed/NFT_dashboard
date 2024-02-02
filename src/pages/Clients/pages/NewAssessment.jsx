import { MenuItem, Select, TextField, Stack, Divider } from '@mui/material';
import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { Form, Submit, useForm } from '../../../hooks/useForm';
import { Input } from '../../../hooks/useForm/inputs/index';
import { useMessage } from '../../../components/Header';
import Loading from '../../../components/Loading';
import { useParams } from 'react-router-dom';
import { Tab, Tabs } from '../../../styles/tabs';
import Add from '@mui/icons-material/Add';

function TabPanel(props) {
    const { children, value, index } = props;

    return (
        <div role='tabpanel' hidden={value !== index} style={{ height: '90%' }}>
            {value === index && children}
        </div>
    );
}

const NewAssessment = () => {
    const { assessmentId } = useParams();
    const [loading] = useState(false);
    const { showError } = useMessage();
    const [tabSelected, setTabSelected] = useState(0);
    const [tests, setTests] = useState([
        { test_administered: '', qutient: '', dev_years: '', dev_months: '' },
    ]);
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

    const addMoreTest = () => {
        setTests([...tests, { test_administered: '', qutient: '', dev_years: '', dev_months: '' }]);
    };

    const handleContentChange = (e, i) => {
        const newValue = e.target.value;
        const name = e.target.name;
        tests[i][name] = newValue;
        setTests([...tests]);
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
                {assessmentId ? 'Edit Assessment' : 'New Assessment'}
            </Typography>
            <Divider variant='fullWidth' />
            {loading ? (
                <Loading message='Please wait, while your credentials are loading...' />
            ) : (
                <Form
                    handlers={handlers}
                    // onSubmit={onSubmit}
                    clientId={assessmentId ? `/admin/plans/${assessmentId}` : '/admin/plans/'}
                    method={assessmentId ? 'patch' : 'post'}
                    onError={onError}
                    style={{ flexGrow: 1, position: 'relative' }}>
                    <Box p={2} display='flex' flexDirection='column' mb={4} overflow='auto'>
                        <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                            <Grid item xs={12} lg>
                                <Typography variant='body2' fontWeight={600}>
                                    Client Name
                                </Typography>
                            </Grid>

                            <Grid item xs={12} lg={10} display='flex' spacing={2}>
                                <Input
                                    name='name'
                                    variant='outlined'
                                    size='small'
                                    sx={{ width: { xs: '100%', sm: '90%', lg: '316px' } }}
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
                                    editable='false'
                                />
                                <Input
                                    name='age'
                                    variant='outlined'
                                    size='small'
                                    placeholder='Age'
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
                                    Date of Assessment
                                </Typography>
                            </Grid>

                            <Grid item xs={12} lg={10}>
                                <Input
                                    name='date_of_assessment'
                                    variant='outlined'
                                    size='small'
                                    type='date'
                                    sx={{ width: { xs: '100%', sm: '90%', lg: '316px' } }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                            <Grid item xs={12} lg>
                                <Typography variant='body2' fontWeight={600}>
                                    Presenting Complaints
                                </Typography>
                            </Grid>

                            <Grid item xs={12} lg={10}>
                                <Input
                                    name='presenting_complaints'
                                    variant='outlined'
                                    size='small'
                                    sx={{ width: { xs: '100%', sm: '90%', lg: '316px' } }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                            <Grid item xs={12} lg>
                                <Typography variant='body2' fontWeight={600}>
                                    Behavioural Observation
                                </Typography>
                            </Grid>

                            <Grid item xs={12} lg={10}>
                                <Input
                                    name='behavioural_observation'
                                    variant='outlined'
                                    size='small'
                                    sx={{ width: { xs: '100%', sm: '90%', lg: '316px' } }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                            <Grid item xs={12} lg>
                                <Typography variant='body2' fontWeight={600}>
                                    Test Results
                                </Typography>
                            </Grid>

                            <Grid item xs={12} lg={10}>
                                <Input
                                    name='test_results'
                                    variant='outlined'
                                    size='small'
                                    sx={{ width: { xs: '100%', sm: '90%', lg: '316px' } }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                            <Grid item xs={12} lg>
                                <Typography variant='body2' fontWeight={600}>
                                    Impression
                                </Typography>
                            </Grid>

                            <Grid item xs={12} lg={10}>
                                <Input
                                    name='impression'
                                    variant='outlined'
                                    size='small'
                                    sx={{ width: { xs: '100%', sm: '90%', lg: '316px' } }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                            <Grid item xs={12} lg>
                                <Typography variant='body2' fontWeight={600}>
                                    Recommendations
                                </Typography>
                            </Grid>

                            <Grid item xs={12} lg={10}>
                                <Input
                                    name='recommendations'
                                    variant='outlined'
                                    size='small'
                                    sx={{ width: { xs: '100%', sm: '90%', lg: '316px' } }}
                                />
                            </Grid>
                        </Grid>

                        <Tabs value={tabSelected} onChange={handleChange} sx={{ mt: 4 }}>
                            <Tab label='History' />
                            <Tab label='Tests' />
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
                                            Perantal History
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} lg={10}>
                                        <Input
                                            name='perantal_history'
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
                                            Family History
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} lg={10} display='flex' spacing={2}>
                                        <Input
                                            name='family_history'
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
                                            Development History
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} lg={10} display='flex' spacing={2}>
                                        <Input
                                            name='development_history'
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
                                            School History
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} lg={10} display='flex' spacing={2}>
                                        <Input
                                            name='school_history'
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
                                            Development History
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} lg={10} display='flex' spacing={2}>
                                        <Input
                                            name='development_history'
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
                                    {tests.map((test, i) => (
                                        <React.Fragment key={i}>
                                            <Grid item xs={12} md={6}>
                                                <Grid
                                                    container
                                                    alignItems='center'
                                                    spacing={1}
                                                    mb={2}>
                                                    <Grid item xs={12} sm lg>
                                                        <Typography
                                                            variant='body2'
                                                            fontWeight={600}>
                                                            Tests Administered
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12} sm lg={8}>
                                                        <TextField
                                                            variant='outlined'
                                                            size='small'
                                                            name='test_administered'
                                                            value={test.test_administered}
                                                            onChange={e =>
                                                                handleContentChange(e, i)
                                                            }
                                                            sx={{
                                                                width: {
                                                                    xs: '100%',
                                                                    sm: '90%',
                                                                    lg: '316px',
                                                                },
                                                            }}
                                                        />
                                                    </Grid>
                                                </Grid>
                                                <Grid
                                                    container
                                                    alignItems='center'
                                                    spacing={1}
                                                    mb={2}>
                                                    <Grid item xs={12} sm lg>
                                                        <Typography
                                                            variant='body2'
                                                            fontWeight={600}>
                                                            Qutient
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12} sm lg={8}>
                                                        <TextField
                                                            variant='outlined'
                                                            size='small'
                                                            name='qutient'
                                                            value={test.qutient}
                                                            onChange={e =>
                                                                handleContentChange(e, i)
                                                            }
                                                            sx={{
                                                                width: {
                                                                    xs: '100%',
                                                                    sm: '90%',
                                                                    lg: '316px',
                                                                },
                                                            }}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <Grid
                                                    container
                                                    alignItems='center'
                                                    spacing={1}
                                                    mb={2}>
                                                    <Grid item xs={12} sm lg>
                                                        <Typography
                                                            variant='body2'
                                                            fontWeight={600}>
                                                            Dev.Years
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12} sm lg={8}>
                                                        <TextField
                                                            variant='outlined'
                                                            size='small'
                                                            name='dev_years'
                                                            value={test.dev_years}
                                                            onChange={e =>
                                                                handleContentChange(e, i)
                                                            }
                                                            sx={{
                                                                width: {
                                                                    xs: '100%',
                                                                    sm: '90%',
                                                                    lg: '316px',
                                                                },
                                                            }}
                                                        />
                                                    </Grid>
                                                </Grid>
                                                <Grid
                                                    container
                                                    alignItems='center'
                                                    spacing={1}
                                                    mb={2}>
                                                    <Grid item xs={12} sm lg>
                                                        <Typography
                                                            variant='body2'
                                                            fontWeight={600}>
                                                            Dev.Months
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12} sm lg={8}>
                                                        <TextField
                                                            name='dev_months'
                                                            variant='outlined'
                                                            size='small'
                                                            value={test.dev_months}
                                                            onChange={e =>
                                                                handleContentChange(e, i)
                                                            }
                                                            sx={{
                                                                width: {
                                                                    xs: '100%',
                                                                    sm: '90%',
                                                                    lg: '316px',
                                                                },
                                                            }}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </React.Fragment>
                                    ))}
                                </Grid>
                                <Divider variant='fullWidth' />
                                <Box textAlign='center' my={2}>
                                    <Button
                                        variant='contained'
                                        color='secondary'
                                        startIcon={<Add />}
                                        onClick={addMoreTest}>
                                        Add More tests
                                    </Button>
                                </Box>
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

export default NewAssessment;
