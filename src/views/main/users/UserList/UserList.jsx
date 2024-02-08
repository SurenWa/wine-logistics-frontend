import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Chip,
    Grid,
    IconButton,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
    Typography
} from '@mui/material';

// project imports
// import Avatar from 'src/ui-component/extended/Avatar';

import { useDispatch, useSelector } from 'src/store';
import { getUsersListStyle1 } from 'src/store/slices/user';

// assets
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ChatBubbleTwoToneIcon from '@mui/icons-material/ChatBubbleTwoTone';
import BlockTwoToneIcon from '@mui/icons-material/BlockTwoTone';

//const avatarImage = require.context('assets/images/users', true);

const users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        location: 'United States',
        friends: 42,
        followers: 789,
        status: 'Active'
    },
    {
        id: 2,
        name: 'Alice Smith',
        email: 'alice.smith@example.com',
        location: 'Canada',
        friends: 87,
        followers: 456,
        status: 'Pending'
    },
    {
        id: 3,
        name: 'Bob Johnson',
        email: 'bob.johnson@example.com',
        location: 'United Kingdom',
        friends: 23,
        followers: 123,
        status: 'Rejected'
    },
    {
        id: 4,
        name: 'Eva Davis',
        email: 'eva.davis@example.com',
        location: 'Australia',
        friends: 65,
        followers: 987,
        status: 'Active'
    },
    {
        id: 5,
        name: 'Michael Brown',
        email: 'michael.brown@example.com',
        location: 'Germany',
        friends: 53,
        followers: 654,
        status: 'Pending'
    },
    {
        id: 6,
        name: 'Sophia Lee',
        email: 'sophia.lee@example.com',
        location: 'South Korea',
        friends: 37,
        followers: 456,
        status: 'Active'
    },
    {
        id: 7,
        name: 'David Chen',
        email: 'david.chen@example.com',
        location: 'China',
        friends: 92,
        followers: 234,
        status: 'Rejected'
    },
    {
        id: 8,
        name: 'Emily Johnson',
        email: 'emily.johnson@example.com',
        location: 'France',
        friends: 78,
        followers: 567,
        status: 'Active'
    },
    {
        id: 9,
        name: 'Alex Turner',
        email: 'alex.turner@example.com',
        location: 'Spain',
        friends: 50,
        followers: 876,
        status: 'Pending'
    },
    {
        id: 10,
        name: 'Grace Kim',
        email: 'grace.kim@example.com',
        location: 'Japan',
        friends: 64,
        followers: 345,
        status: 'Rejected'
    },
    // Add more objects as needed...
];

// ==============================|| USER LIST 1 ||============================== //

const UserList = () => {
    const theme = useTheme();
    const dispatch = useDispatch();

    const [data, setData] = React.useState([]);
    const { usersS1 } = useSelector((state) => state.user);
    console.log(usersS1)

    React.useEffect(() => {
        setData(users);
    }, []);

    React.useEffect(() => {
        dispatch(getUsersListStyle1());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ pl: 3 }}>#</TableCell>
                        <TableCell>User Profile</TableCell>
                        <TableCell>Country</TableCell>
                        <TableCell>Friends</TableCell>
                        <TableCell>Followers</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell align="center" sx={{ pr: 3 }}>
                            Actions
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data &&
                        data.map((row, index) => (
                            <TableRow hover key={index}>
                                <TableCell sx={{ pl: 3 }}>{row.id}</TableCell>
                                <TableCell>
                                    <Grid container spacing={2} alignItems="center">
                                        {/* <Grid item>
                                            <Avatar alt="User 1" src={avatarImage(`./${row.avatar}`)} />
                                        </Grid> */}
                                        <Grid item xs zeroMinWidth>
                                            <Typography align="left" variant="subtitle1" component="div">
                                                {row.name}{' '}
                                                {row.status === 'Active' && (
                                                    <CheckCircleIcon sx={{ color: 'success.dark', width: 14, height: 14 }} />
                                                )}
                                            </Typography>
                                            <Typography align="left" variant="subtitle2" noWrap>
                                                {row.email}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </TableCell>
                                <TableCell>{row.location}</TableCell>
                                <TableCell>{row.friends}</TableCell>
                                <TableCell>{row.followers}</TableCell>
                                <TableCell>
                                    {row.status === 'Active' && (
                                        <Chip
                                            label="Active"
                                            size="small"
                                            sx={{
                                                background:
                                                    theme.palette.mode === 'dark'
                                                        ? theme.palette.dark.main
                                                        : theme.palette.success.light + 60,
                                                color: theme.palette.success.dark
                                            }}
                                        />
                                    )}
                                    {row.status === 'Rejected' && (
                                        <Chip
                                            label="Rejected"
                                            size="small"
                                            sx={{
                                                background:
                                                    theme.palette.mode === 'dark'
                                                        ? theme.palette.dark.main
                                                        : theme.palette.orange.light + 80,
                                                color: theme.palette.orange.dark
                                            }}
                                        />
                                    )}
                                    {row.status === 'Pending' && (
                                        <Chip
                                            label="Pending"
                                            size="small"
                                            sx={{
                                                background:
                                                    theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.warning.light,
                                                color: theme.palette.warning.dark
                                            }}
                                        />
                                    )}
                                </TableCell>
                                <TableCell align="center" sx={{ pr: 3 }}>
                                    <Stack direction="row" justifyContent="center" alignItems="center">
                                        <Tooltip placement="top" title="Message">
                                            <IconButton color="primary" aria-label="delete" size="large">
                                                <ChatBubbleTwoToneIcon sx={{ fontSize: '1.1rem' }} />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip placement="top" title="Block">
                                            <IconButton
                                                color="primary"
                                                sx={{
                                                    color: theme.palette.orange.dark,
                                                    borderColor: theme.palette.orange.main,
                                                    '&:hover ': { background: theme.palette.orange.light }
                                                }}
                                                size="large"
                                            >
                                                <BlockTwoToneIcon sx={{ fontSize: '1.1rem' }} />
                                            </IconButton>
                                        </Tooltip>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UserList;
