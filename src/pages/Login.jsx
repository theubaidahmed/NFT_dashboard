import {
    Box,
    Button,
    Card,
    Checkbox,
    FormControlLabel,
    TextField,
    Typography,
} from '@mui/material';
import { useMemo } from 'react';
import { Form, useForm } from './../hooks/useForm/index';
import { Input } from './../hooks/useForm/inputs/index';
import Image from '../components/Image';
import { useAuthorize } from '../hooks/Authorize';

export default function Login() {
    const authorize = useAuthorize();
    const handlers = useForm(
        useMemo(
            () => ({
                username: { required: true },
                password: { required: true },
            }),
            []
        ),
        { Input: TextField }
    );

    const onSubmit = response => {
        console.log(response);
    };

    return (
        <Box
            sx={{
                background: '#F2F2F2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                flexDirection: 'column',
                py: 2,
            }}>
            <div style={{ marginBottom: '8px' }}>
                <Image name='logo-dark.png' sx={{ maxWidth: '250px' }} />
            </div>
            <Card sx={{ p: 2, maxWidth: '465px', mx: 2 }}>
                <Box sx={{ p: { xs: 2, sm: 4 } }}>
                    <Typography variant='h4' fontWeight={500} textAlign='center' gutterBottom>
                        Log in
                    </Typography>
                    <Typography
                        variant='body2'
                        sx={{ color: 'rgba(0, 0, 0, 0.5)', mb: 7 }}
                        textAlign='center'>
                        Enter your credentials to login your account.
                    </Typography>

                    <Form
                        handlers={handlers}
                        onSubmit={onSubmit}
                        method='post'
                        action='#'
                        onError={console.log}>
                        <Typography variant='subtitle2' sx={{ fontWeight: ' 500' }} gutterBottom>
                            Email
                        </Typography>
                        <Input
                            variant='outlined'
                            size='small'
                            fullWidth
                            name='username'
                            placeholder='name@domain.com'
                            sx={{
                                mb: 3,
                                mt: 1,
                                '& .MuiInputBase-root': {
                                    p: 0.8,
                                },
                            }}
                        />
                        <Typography variant='subtitle2' sx={{ fontWeight: ' 500' }} gutterBottom>
                            Password
                            <div
                                variant='body2'
                                style={{
                                    float: 'right',
                                    textDecoration: 'none',
                                    color: '#0472D2',
                                    cursor: 'pointer',
                                }}>
                                Forget password?
                            </div>
                        </Typography>
                        <Input
                            type='password'
                            variant='outlined'
                            size='small'
                            fullWidth
                            name='password'
                            placeholder='contain at least 8 characters'
                            sx={{
                                mb: 2,
                                mt: 1,
                                '& .MuiInputBase-root': {
                                    p: 0.8,
                                },
                            }}
                        />
                        <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            componentsProps={{ typography: { variant: 'body2' } }}
                            label='Remember Information'
                        />

                        <Button
                            variant='contained'
                            size='large'
                            fullWidth
                            onClick={() => authorize(true)}
                            sx={{ p: 1.5, my: 1 }}>
                            Login
                        </Button>
                    </Form>
                </Box>
            </Card>
        </Box>
    );
}
