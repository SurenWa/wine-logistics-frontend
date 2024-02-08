// material-ui
import { useTheme } from '@mui/material/styles';
import { Card } from '@mui/material';
import MuiTypography from '@mui/material/Typography';

// ==============================|| USER SIMPLE CARD ||============================== //

const UserSimpleCard = () => {
    const theme = useTheme();
    return (
        <Card
            sx={{
                p: 2,
                background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[50],
                border: '1px solid',
                borderColor: theme.palette.mode === 'dark' ? 'transparent' : theme.palette.grey[100],
                '&:hover': {
                    border: `1px solid${theme.palette.primary.main}`
                },
                alignItems: "center", justifyContent: "center"
            }}
        >
            <MuiTypography variant="h1" sx={{ fontSize: 300 }}>
                5
            </MuiTypography>
        </Card>
    );
};



export default UserSimpleCard;
