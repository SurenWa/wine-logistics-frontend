import { useEffect, useState } from 'react';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import AccountCircleTwoTone from '@mui/icons-material/AccountCircleTwoTone';
import LocalMallTwoToneIcon from '@mui/icons-material/LocalMallTwoTone';
// project imports
import { gridSpacing } from 'src/store/constant';
import RevenueCard from 'src/ui-component/cards/RevenueCard';
// import MainCard from 'src/ui-component/cards/MainCard';
// import ApexPieChart from './ApexPieChart';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import PopularCard from './PopularCard';

// ===========================|| WIDGET STATISTICS ||=========================== //

const Analytics = () => {
    const theme = useTheme();
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} lg={4} md={12}>
                <RevenueCard
                    primary="Revenue"
                    secondary="$42,562"
                    content="$50,032 Last Month"
                    iconPrimary={MonetizationOnTwoToneIcon}
                    color={theme.palette.secondary.main}
                />
            </Grid>
            <Grid item xs={12} lg={4} sm={6}>
                <RevenueCard
                    primary="Orders Received"
                    secondary="486"
                    content="20% Increase"
                    iconPrimary={AccountCircleTwoTone}
                    color={theme.palette.primary.dark}
                />
            </Grid>
            <Grid item xs={12} lg={4} sm={6}>
                <RevenueCard
                    primary="Total Sales"
                    secondary="1641"
                    content="$1,055 Revenue Generated"
                    iconPrimary={LocalMallTwoToneIcon}
                    color={theme.palette.orange.dark}
                />
            </Grid>

            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={8}>
                        <TotalGrowthBarChart isLoading={isLoading} />
                    </Grid>
                    <Grid item xs={12} md={4}>                        
                        <PopularCard isLoading={isLoading} />  
                    </Grid>
                </Grid>
            </Grid>            
        </Grid>
    );
};

export default Analytics;
