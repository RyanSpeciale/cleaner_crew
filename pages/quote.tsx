import React from 'react';
import { Text } from 'grommet';
import { Box } from 'grommet';
import styles from '../styles/quote.module.scss';
import FormComponent from '../components/Form';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import { AlertTitle } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';






const Quote = () => {
	
	const [show, setShow] = React.useState<boolean>(true);
	

	return (
		<div className={styles.mainDiv}>
			{show ?
				<Collapse className={styles.Alert} in={show}>
					<Alert severity='info' action={<IconButton aria-label='close' size='small' onClick={() => { setShow(false)}}><CloseIcon fontSize='inherit'/></IconButton>}>
						<AlertTitle>Hey There!</AlertTitle>
						Getting a free in person quote of the place you want to get cleaned gives you a guarented price for all future jobs.
					</Alert>
				</Collapse>
				: <Button onClick={() => { setShow(true); }}>Show Alert</Button>
			}
			<Box justify='center' direction='column'>
				<Box
					className={styles.formbox}
					round='small'
					gap='large'
					pad='medium'
					alignSelf='center'
					direction='column'
					width='14cm'
					margin={{ top: '2cm' }}
					border={{ color: 'black', size: 'small' }}
				>
					<Text className={styles.time}>We will respond within 48 hours</Text>
          		<FormComponent />
				</Box>
			</Box>
		</div>
	)
};

export default Quote;
