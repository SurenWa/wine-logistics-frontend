import AnimateButton from 'src/ui-component/extended/AnimateButton';
import { IconButton, Tooltip } from '@mui/material';
import { IconSettings } from '@tabler/icons';

const LoaderButton = () => (
    <AnimateButton type="rotate">
        <Tooltip title="Rotate">
            <IconButton color="primary" size="small">
                <IconSettings stroke={1.5} size="28px" />
            </IconButton>
        </Tooltip>
    </AnimateButton>
);

export default LoaderButton;
