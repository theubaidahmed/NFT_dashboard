import { FormControl, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { styled } from '@mui/material/styles';

const SearchWrapper = styled('div')(({ theme }) => ({
    position: 'relative',
    marginLeft: 0,
    width: '100%',
    maxWidth: '720px',
    minWidth: '240px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.custom.search.main,
    border: 'none',
    borderRadius: '10px',
}));

const IconWrapperLeft = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(1.1, 1, 1.1),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        },
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
}));

const SearchBar = () => {
    return (
        <React.Fragment>
            <SearchWrapper>
                <IconWrapperLeft>
                    <SearchIcon />
                </IconWrapperLeft>
                <FormControl fullWidth>
                    <StyledInputBase
                        sx={{
                            flex: 1,
                        }}
                        placeholder='Search...'
                    />
                </FormControl>
            </SearchWrapper>
        </React.Fragment>
    );
};

export default SearchBar;
