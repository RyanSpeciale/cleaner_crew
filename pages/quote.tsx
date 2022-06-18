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
						<p className=''>Getting a quote gives you a set price for the services you&apos;d like done. All quotes are done in-person at the location the services would be provided. An in-person quote would consist of meeting your housekeeper, going over the specific details of what services your housekeeper would be providing, and figuring out a schedule that best accommodates you. Please feel free to request an in-person quote by submitting the form below.</p>
					</Alert>
				</Collapse>
				: <button className='bg-emerald-800 text-zinc-100 justify-center items-center self-center p5 w-28 font-semibold rounded-md animate-bounce mt-4' onClick={() => { setShow(true)}}>Show Alert</button>}
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
