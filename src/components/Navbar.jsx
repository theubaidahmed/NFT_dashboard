import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

//mui component
import {
    AppBar,
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Avatar,
    Grid,
    Toolbar,
    Typography,
    ListItemButton,
    Card,
    Collapse,
} from '@mui/material';

//mui icons
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';

//services
import { NavLinks } from './../data/sidebarLinks';
import Image from './Image';
import { deleteSession } from '../utils/function';
import If from './If';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

const drawerWidth = 280;

export default function Navbar(props) {
    const { children } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [collapsesState, setCollapsesState] = useState(menuItemsStates(NavLinks));
    const location = useLocation();
    const user = { firstName: 'Alison', lastName: 'Parker', email: 'dashboard@template.in' };
    // const matches = useMediaQuery('(min-width:1024px)', { noSsr: true });

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // const handleDrawerOpen = () => {
    //     setCollapseDrawer(!collapseDrawer);
    // };

    const modifyCollapsesState = key => {
        setCollapsesState(prev => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const signOut = () => {
        deleteSession('isLoggedIn');
        window.location.reload();
    };

    useEffect(() => {
        setMobileOpen(false);
    }, [location.pathname, location.hash]);

    const drawer = (
        <Box minHeight='100dvh' color='white' display='flex' flexDirection='column'>
            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                position='relative'
                component={Link}
                to='/'
                sx={{ textDecoration: 'none', color: 'text.primary', py: 2.5 }}>
                <Image alt='#logo' name='logo.png' sx={{ height: '65px' }} />
            </Box>

            <Box
                sx={{
                    overflowY: 'auto',
                    height: 'calc(100dvh - 90px)',
                    flexGrow: 1,
                    mt: 4,
                }}>
                <List sx={{ px: 3.5 }}>
                    {NavLinks.map(link => (
                        <NavLink
                            to={link.to}
                            key={link.name}
                            style={{ textDecoration: 'none', color: 'inherit' }}>
                            {({ isActive }) => (
                                <>
                                    <ListItemButton
                                        disableRipple
                                        disableTouchRipple
                                        variant='sidebarButton'
                                        {...(Array.isArray(link.to)
                                            ? {
                                                  selected: collapsesState[link.name],
                                                  variant: 'sidebarDropDown',
                                                  onClick: () => modifyCollapsesState(link.name),
                                              }
                                            : {
                                                  to: link.to,
                                                  selected: isActive,
                                              })}>
                                        <ListItemIcon
                                            sx={{
                                                minWidth: '35px',
                                                color: 'sidebar.text',
                                            }}>
                                            {link.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={link.name} />
                                        <If
                                            condition={Array.isArray(link.to)}
                                            so={
                                                <If
                                                    condition={collapsesState[link.name]}
                                                    so={<ExpandMore fontSize='small' />}
                                                    otherwise={
                                                        <ChevronRightOutlinedIcon fontSize='small' />
                                                    }
                                                />
                                            }
                                            otherwise
                                        />
                                    </ListItemButton>
                                    {Array.isArray(link.to) ? (
                                        <Collapse
                                            in={collapsesState[link.name]}
                                            timeout='auto'
                                            unmountOnExit>
                                            <List
                                                sx={{
                                                    p: '10px',
                                                    ml: 2,
                                                    py: 0,
                                                }}>
                                                {link.to.map(subLink => (
                                                    <NavLink
                                                        to={subLink.to}
                                                        key={subLink.name}
                                                        style={{
                                                            textDecoration: 'none',
                                                            color: 'currentColor',
                                                        }}>
                                                        {({ isActive }) => (
                                                            <ListItem disablePadding>
                                                                <ListItemButton
                                                                    selected={isActive}
                                                                    disableRipple
                                                                    disableTouchRipple
                                                                    variant='sidebarButton'
                                                                    sx={{ overflow: 'hidden' }}>
                                                                    <ListItemIcon
                                                                        sx={{
                                                                            minWidth: '35px',
                                                                            color: 'sidebar.text',
                                                                        }}>
                                                                        {subLink.icon}
                                                                    </ListItemIcon>
                                                                    <ListItemText
                                                                        primary={subLink.name}
                                                                        primaryTypographyProps={{
                                                                            overflow: 'hidden',
                                                                            textOverflow:
                                                                                'ellipsis',
                                                                            whiteSpace: 'nowrap',
                                                                            variant: 'body2',
                                                                        }}
                                                                    />
                                                                </ListItemButton>
                                                            </ListItem>
                                                        )}
                                                    </NavLink>
                                                ))}
                                            </List>
                                        </Collapse>
                                    ) : (
                                        ''
                                    )}
                                </>
                            )}
                        </NavLink>
                    ))}
                </List>
            </Box>
            <List sx={{ px: 3.5 }}>
                <ListItem disablePadding>
                    <ListItemButton
                        disableRipple
                        disableTouchRipple
                        variant='sidebarButton'
                        sx={{
                            '&:hover': {
                                color: 'sidebar.activeText',
                            },
                        }}
                        onClick={signOut}>
                        <ListItemIcon
                            sx={{
                                minWidth: '30px',
                                color: 'currentColor',
                            }}>
                            <LogoutIcon fontSize='small' />
                        </ListItemIcon>
                        <ListItemText primary='Log Out' primaryTypographyProps={{ fontSize: 14 }} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box
            sx={{
                bgcolor: 'background.default',
                height: '100dvh',
            }}>
            <AppBar
                elevation={0}
                component={Box}
                position='sticky'
                sx={{
                    width: {
                        xs: '100%',
                        xm: `calc(100% - ${drawerWidth}px)`,
                    },
                    ml: {
                        xm: `${drawerWidth}px`,
                    },
                    borderBottom: '1px solid custom.border',
                    color: 'text.primary',
                    transition: 'ease-in-out 225ms, background-color 0s',
                    backgroundColor: 'background.default',
                }}>
                <Toolbar
                    sx={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        position: 'relative',
                        '&': {
                            minHeight: '76px',
                            px: { xs: 1, xm: 2 },
                        },
                    }}>
                    <Grid container alignItems='center' my={2} columnSpacing={1}>
                        <Grid item>
                            <IconButton
                                // onClick={matches ? handleDrawerOpen : handleDrawerToggle}
                                onClick={handleDrawerToggle}
                                edge='start'
                                sx={{
                                    display: { xs: 'inline-flex', xm: 'none' },
                                }}>
                                <MenuIcon sx={{ fontSize: '28px' }} />
                            </IconButton>
                        </Grid>

                        <Grid item xs></Grid>

                        <Grid item sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <Card
                                sx={{
                                    borderRadius: '10px',
                                    px: 2,
                                    py: 1,
                                }}
                                elevation={0}>
                                <Typography variant='subtitle1'>
                                    {user.firstName + ' ' + user.lastName}
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Avatar
                                alt='Remy Sharp'
                                src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDxANDxAPDw8PDw8NDg8PDQ8NEA8QFREWFxUVFhYYHSggGB0lHRUVITEhJSkrLi4uFx80OTQsOCgtLisBCgoKDg0OFxAQFy0fHiUtLS0tKy0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAABAgADBAUGBwj/xAA+EAABBAAEAwYCBwUIAwAAAAABAAIDEQQSITEFQVEGEyJhcYEykQcUQqGxwdEjUmJy8BUzQ3OCorLhFheS/8QAGwEAAgIDAQAAAAAAAAAAAAAAAAECBAMFBgf/xAAyEQACAgECAggGAQQDAAAAAAAAAQIRAwQhEjEFQVFhcYGx8AYTIpGh0cEUMnLhJDTx/9oADAMBAAIRAxEAPwDrmhWtCrarGrZnPlgRCARUSY4RS2iCgYUUtopAFEJUUDGRSgpggYUKRUSAATBBS+aBjoLju1Pb2LCPOHhb384aC43UUd7AnmfILkv/AGdjL1GFroIn6f7ljlljF0zNDTzmrSPXgnC8z4b9JpJDZoW61Ra4sv52F3nB+MQ4ppMZIc2s8bxley9rHMeY0RHLGTpMMmnyY1clt28zZBOEoRU2QQVAogkAwTIBRAyKKKJAMEUoTBAwIoKJDIooomICiKiANA1WhVtThZyqh7UtLaNpDDaNpbUtFANae1XaIKKCxwVEgKIKQxwmBSgqApDLLRSgohIYJHhoLnENa0Ekk0AAvH+3PbN2Jc6GJ5jwrSW2NHTnr6eS6T6VONujiZgonU+YjvCOTSaA/NcB2O4J9bxD5ni4oiA0HmeX3V81Vz5eHY2Wi03G1Jrw/Zj8O7LYrEtzwiQN3GbwtI/Nbc9hsWBtr5Hwn2PNet8Iw7coAGwqqW8ZA0jKQDei1zzSZuvkQifPsXCHszNc0MkYSCKOV3k5p2/qlueA8WfERLFfeQmnxEkkN+0AebSOXuu87d9n6hM8LM5YLIGjyzm2+fUdKXmsUFv79jjVEh1aujvQ+ody/m5Jqbu+TISgqrmmey8D4rFjIWzxHQ6ObzY8btP9c1sgvLPo5x5j4g/D3lbiY5MzOQniN6f6S4+hC9SC2mKfHFNmgz4ljyOK5DIpUVkMJEUqloGOogEUARMlRSGFQKKBABUKiCQyKKKJiOfCsBVQRtZymWWpartS0AWWhartDMgC20wKpzKByAsyAUQVSHJgUDstBTgqoFMFEkWApgUoKx8fKWxuIu9hRon35evJIdnkv0pTj65nsEtsEXt4aaFsPo/IZgmPYx0jpHyHKwamnZSSdgNPvXEdpMd9ZlkmFU59NDfhoE0R6g7r0DsVw7vuHMw2d0WcPDnMNO/vDYvktVqGnb7zpdHBwSj2I63hfaFrXCN+Hmjv7RdE9or+UrpxigGd6AXCr0F2uJHZRuFjc5rnglzXWH2CRyohddwKLPgwwn4swsbjlYVXZvYuvZWzBb2nfKe6+qZATlBmxMbM3KhQOq8l48ThMZjMOA5rO9EkbHCiwSMBcOlW87aaBemt7EQySPc8ueXBrSc7mGm7XXP3XBfSrwd0GNieHPeyaHKCfG4FgDSOriBlPU6qUabMc1S2MbsHjI/rvfStNxyRuGpaf2meLN5gDIT6L2sFfOmBbLh5A9tPid8L2G8h0cAeY1G3/a+hMHIXxtcRWZodXqFsdLLmjS6+O8ZeXv7l6iiis0ULIoigmAQmShRIkOCikUQAyYJLRSAdRAFRAyKIKIA58FC0AorBSGtC0loWgLHtKSlJQJQKxrRzJLUUqFZaHJ2uWOCrGlRJJmQ0qwFUNKtakSRYFTjYTJG9gNFzHNaehLSAfvVoThRJHgXF+HHCRQSZbkE8sUrHaZHMkLQy/NrL/wBS7/sJxOKVhdFG5gjlyFjqJzEBxrXbxLpuKdnYMSZ2ysDo8QxmduxEzNGytPJ2Whf8I81xHZnhOIwOMxWGDJ5YDlkZP9XkY1pbycSKunbgkeFa7UYGo2vftG90OsUpcMtt/X07DtuKYx01MBDQD8JdV+p5Lc8CLxEyN7oGgXdOux5f9rl8Vg2Yp4koNmFW4aZv1W/4bwt2gc1lc65rXo3jjFxdujMgmdh5O7a7vo3HwuBDnMvk7qPNcR9Ls0Y+p943OS6VzW5spFZLPtYXoRgbGAGNDeZoAX5nqvG/pH4o3F8QELWmSPCwviaWmrlcQXEaiwKYN+R35ygrl3FfJLa1zNb2dwE+KxLGN0PhLnAaZdCS7z8/T390YKAG1CqXMdgOENw2CjeRUszWyyE3YsaM1XThbbBjcI79ZzurzLJPbkvbGUShFZiqFRKVLQAwUtBFAyWjaCiQDgo2q0UEhgioELSAKiiCAOctFIpaslKwkoEqWhaBNhQtBAlMQbUtLaFoEWApmlVgp2oYy5hV7VjtVrVEmi8Jgq2lOCosyIcIYjENjY6R7g1rWkuJ5BK+QNBc4hrRqSSAAPMri+1nE/rQfhoTbY6lsHR72EOA9NFX1GeOGPFIvaHRZNXl4ILbrfZ/t8l+rMuFzhRG66ThmOndVRjTnn/6XP8ADsskTZG6ggOB6grp+ENpo6rSnUy5Gy7pzgS87jYbA/muYd2QwT3d65mYkNsWMpNVe263vGeJtw8f70j/AAxMv4nfoNz6LX8CxOaMsO7CderT/RVnSzgsvy3za9++412vw5Xp/nR2UWr8Ht60vM2DGhoDQAAAAABQAGwCdBS1tjngqWhaW0AOogCogAooWoCkAyKW0UAFRC1EUA1pgUiiRKyxRV2ogVnOqJLUtWSiMUpKBKBKYBtAlKXJLQJse1LSWpaAstBVjVQ0q5pQNFrSnlnaxpe9zWNG7nkABVNK5btbxEmRuGbs2pJPN1Gh7DX3VbU5lhxub9sv6DSS1eeOJbdr7F1/pd7Nrju1UTDljaZD1JEbPvFn5LVT9p8Y8eFkTBvYYXEe7jX3LU8PhHePYddngH912y3YgG3zXOZulM7ezrwO80/w9oscVceJ9+/45fg53jEuMmDTLK92YimFxDRrvlGgWbwrSfyII8knFZSH0BYbRIHktGeKTsnjcQBHZIiaNXNo7uPPnp0Vbinmu3ubGOPHp6UI0ttl799h6D2chdG58H+GA50fkM2y3LOItiBoj9KWm4XxyF0DpWuDsubyc3Nu1w9fxXN8S+sSCTLbQ7NpZDmivu9FlWVRiuIpf0ssmSUVyOkZJJNI7ESnxO8MbT/hx/qd/kkxeN7ksDXFriHP8LqIAofmua7PYvHMpsxEkf2c4Ocejv1tb6bDNkkEjr0aGgXoBd/iqs2+O737UX8eJKKTW3Y/5Ntg+09EMlGbTVzBlI9Qd/avRbvD8Thl+GRv8riGO+RXHyxsbZoaAk/Ja6fEENF18Gd2YXryA5q/h6Uyx2kuL1+6/wDTUan4d0uX6sdw8OX2fomkel2ouQ4JxOWKNveDwmvAczst8gTde+i6uOQOaHDUOAcFutNq8edfTzXNHJ9IdG5tFJce8XykuT7u5932bHTgqu0QVZNemPaNpLTWgdjKWgCigZLUtRRIAhG0qKACohaiKA5q0uZLaFqyULGLkpKQlKSmKxi5AuSWhaBWPaIKrtMCgLLgVawrHBVrSkSReSuDleJsVJJqQ97i2/3b0+5dVxzFd1hpn88hYPV1N/NcVhpw1zSdiataPpjJ9MYefql/J2Pwrg3nmf8Aj9qb9UZ0WmMZ0dE9o9iDS3g0tajEOrF4YVoWykHzpbSV2pC52XJeH8s7hLdo1ONju3dVkS8MY6NoIFgBGZuoHmFsBslY2jn2cJMU7XRuDWONva5pcMt66Derv2W0g8TAwWW6guJsuAJ69VkyN1B/hd+Sqwehd0rN83O/RNyb5kUkv0WuABGmyvYaWI2TM4fNZSiORjYqTflYr2WJgC2aR8rv7qI6dHPG3yS9oJMkRPPYKYKPJDBEObe+kJ63z9/wUq2si93SNjI1721YbmcHGzqGg6BdVwd37KuYOnod/vB+a5J5OjGnxvNZuYHM/JdNwVw1YNgzT2LR+avdGT4dRHvtGm6fxcein3VJeT/RtFLQUXUnng9qWlUtAx7TAqu0wKQWMmCrRtBIstBLaa0AMoltRIDliUhKhKQlWjXjWktAlC0xBJQQtRABtMCkCYICyxpVrSscFWNKQzVdsH1hT5ytHsA535LmIYs8T2gW4U9tbrp+1bbgb/mN/wCD1oeEHLK0cjYPqVzPS8n86u5HofwxBf0afbKX8GNDjc82AeessDvJxZounkdZXF8RhMczgdAJmYln8zDZ+5dfgcQJmBwq+a1ORbJr3vZ0uN7uymU+MLPbsscYbxl1+izGNWMyNiFpNAdFqsVI7vcjdLjGbyGd2i3J6jcag3stI937V5JskMFnU7X+JKEQtmdhW17ClmsWJhgSNlmd3Q3SHJml7TDM1repCPEcS2J0LTQzRNv2cVmSYEvfmdsNgtdjcMJceHHVkEDCByL3OfX4KcafPvIt00kbPh1kmRw8RFNB+wz9St9waS5HVsGEe9j9Foon2co2HxHqVtuGyBlHa3t+XP8AFZNNPgzQk+poq9IYfm6fJBc3FpeLWx0VopSguzPLbsdFAIWkMZQIWhaAse0wKrRCBj2iCktMCkAbUQUQOzk7QKFoFWjXBJQtAoWmINoWoSltAWMCmCW0QUAOCrAVWCmakSswePyARx3sZaP/AMOH5rTiHxA9CCCFn9qD+yb/AJl/7SsLBvtgduOY5rlemV/yL7kek/C3/RS75P8AIvaDAGRmdnxsGdvqOS0/ZnEubdfCx+Wv4SA4fK69l1kDmvaWg3+S4rBQy4aWeORrmtM1xPIOVzBoKPpS12P6oSj2U/yb3I1HJG+u1+NvfcdsZBurIZAVoIcS7mVBxF0Tw12x2PULFRndUdFL8JI9FqDGDI4/y/c0BbF85LGkCw6zfstcx2UyP/jc1vsaSIo2UTq0V/fClqIpHHUphiUEuBMysRi+ixIXOe5+QF0jqADdTQFfiXLEnndJNHBHu8243WWMauPy+8hdtwiCIMpgOHYDYO8svU9dfms2PC5bvZFbUamOHZK2aFmCkgcIn5czmCTwnNuSKPnostmpy7AHXkdN1uzE5jyYoA2xmOIndlrr/EfelpMfM3vHMjl70vGZ8gaQMz7zGvXZPNiUN+r39zHp9Q8rqt175dXm72OngkD2tcPtNafdNaowcAijZECSGtGp3Jqz+KuBXYY7cI8XOlfjSs8w1HAs2RY/7eKVeFuvwMjaFqKRiTJaKCIQMKKARSGRFBAoANqKWggDk7RtJmUtWjXjEoFAlC0CAUUtoWgB0wKrCYIAsBTtKVqcIA0vah3hj6Fzx75RX5rHwOFeY2hsoYKJcGBpfd9TdfJZHHsU01EBZaczj0NZaHzWPgZ8rar7Wp8lyfSslLUS4XfJeaR6d8OQnj0ONTVXbXg22n5oz4sIWAEPe9wIPjd8QB1aaA0Oy6LDyxPtrWBtD4aFUtLAbAABs6ALfYHgRaRJn8ZHiZrl9LVLBdvY2Gu4Uk29zFxfZ/CyguLMh6xnuvw0+awH9jIpWhhlnGU2x1sLh/tXRY+fuQM0bq5uAzN+Y296WLgu0+ELyO8bm2LQQ4j5K18tN2a5anKlSbMBvZmaNmRkrHgbCRpYfm2/wWhx/C8ax9uhcWA6d0BKDZ3puv3L0JmOikFse0+V0UweFjeniZodI5Vzp++48r4jjxE3JVPI2Ioj2XO4nFYzKXhga3qdF7hiMOx4pzWvHRwDh96wZ+A4WUU+GMjplr8FGOHhfK/EsPpGMlumvBo4LsNgXmE4+fV0pyRx8ywaj0s6+gC7TAZi55jeHT0A8uGZke9ADy6LZYfhEDBTWAAaAa6JcZ2fjfG4QnupNS0gktcd6cDuD81n36kUHkjJ/VLz5/g0fFMfhy2SKSc4mfK6PfJBE8jcBuljetSKVGGioCvLYbqiDW2uBa9hLHNO7XA0QsqN5atflk5vdUbvFjWOKUXfvqOji2bf7jP+IVgWLg5g5g6gUVkBdlhmp4oyXWkeW6vHLHnyQkqak/Xb7rfwGRQUBWQwBRQtQJDTGCKVFIkElLahQTERRRRBGzj7TZlQHJg5WSiW2lJSZlLTExrUS2paCNlgKcKoJgUDsuCYiwRtmblsbi1WCnBSJHKYmN0by1++Y2f66rKwGEkldkYOhJOwvmVucfhRMwt0zDVrj+9+QS4GM4cBsbSTu92ZpzHmbK5vP0XKE6gm49X6O/0nxHjzYbySUMnXbpeKvt7OrvVN7fh3DjGQ4kPd8gPRbhkrun3rif8AyuIH4yPVpV+H7TRv2kHsQq6gq2os5JS4m5352dyya9Cuf4/2RwuL8Tmhr92vaMrmnqCNlRDxcH7Y99Fmsx9/bajgaI8SexzP9hcQwXwv+twjk41K0eTufuszBcaDvA4vjfza8EEf15LfnGWNZAtPxWOKQEl7L35Kasi68DPixrxzseSyG8RPRcO7jcWHNGaPTkXhZWE7VYaTQSszdCcp+/dScGQU0dpHjgeayYsSDzXI/wBqRkb0eo1CMfF2jmo8DJccTL4twidssmJhqVshD5I9n2BVt67bLDgxLZW6HUaEHQg9CORW34fxUOIo3fmtNx7DObxTDOirLio5PrDQNzHlp56fFVqtlwcW65+psNLq+GoS/t7ez/Xb2I3PBoSAXk6EEV7jX+vNbMKuJoa0NGwblKsC6TS4Pk4ow+/j1/k4XpHWPV6mebqb2/xWy86597fVQyiClrOUwpgktEJAOoltTMkSsKBKGZKSgTY1oKvMimKzig5MCoorBRDmRDkVEyI1oWoomIIKYFRRADgpwVFEgsYOSYuYtjkcN+7eR61Q/FRRYszrHJrsfoWtJFS1GKL5OUV95JHAPh1PqlOHUUXE8TPXGk3Zlsw1+JpLeeji1ZkWDeW5hLLXTvHfqook8kk6TY4YoS5xT8gvwfIyTE5Sf7145aHdCThbCK1On2nF34qKKDyzfOTMqw4+qK+xgT8IYBsFqJOFAnluoosuPLNdZWzYYN8i9nDqe2jQrkaW8kwha1klnodVFEpzk6t+9yeLHFN0jt+CYSKSBri2nAuGdpLH9RqN91tY8Oxrs4aM+UR5z4pMt3VnlaKi6jRRi8GOVb0t/I866YyTjq80FJ8Lk9r237i1MCoorhrEG0MyKiQxC5EORUQFkzKZkVEBYhclL1FExWLaiiiBWf/Z'
                                sx={{ width: 40, height: 40 }}
                            />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

            <Box
                component='nav'
                sx={{
                    width: { xm: drawerWidth },
                    flexShrink: { sm: 0 },
                }}>
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    variant='temporary'
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', xm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            bgcolor: 'primary.main',
                        },
                    }}>
                    {drawer}
                </Drawer>
                <Drawer
                    variant='permanent'
                    sx={{
                        display: { xs: 'none', xm: 'block' },
                        p: 0,
                        '& .MuiDrawer-paper': {
                            boxShadow: 'none',
                            bgcolor: 'primary.main',
                            width: drawerWidth,
                            transition: 'ease-in-out 225ms, background-color 0s',
                        },
                    }}>
                    {drawer}
                </Drawer>
            </Box>

            <Box
                component='main'
                sx={{
                    width: {
                        xs: '100%',
                        xm: `calc(100% - ${drawerWidth}px)`,
                    },
                    ml: {
                        xm: `${drawerWidth}px`,
                    },
                    minHeight: { xs: 'calc(100dvh - 76px)' },
                    backgroundColor: 'background.default',
                    borderRadius: '12px',
                    transition: 'ease-in-out 225ms, background-color 0s',
                }}>
                {children}
            </Box>
        </Box>
    );
}

function menuItemsStates(menuItems) {
    const states = {};
    menuItems.forEach(menuItem => {
        if (Array.isArray(menuItem.to)) states[menuItem.name] = false;
    });
    return states;
}
