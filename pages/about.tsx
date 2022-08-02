import React from 'react';
import styles from '../styles/about.module.scss';
import { Box } from 'grommet';
import Image from 'next/image';
import example1 from '../photos/example1.jpg';
import example2 from '../photos/example2.jpg';
import { Typography } from '@mui/material';

type aboutProps = {};

const message: string = 'The Cleaner Crew is pleased to provide families with customized cleanings organized specifically for each home. We offer a variety of different types of cleanings to target the type of service to best suit the client. In the sections below, each cleaning is broken down to explain what services are included in each cleaning; please remember, all cleanings are customizable- you name it, WE CLEAN IT!'

const about = (props: aboutProps) => {
	return (
		<div className={styles.mainContainer}>
			<Box justify='center' direction='row' align='center' alignSelf='center' alignContent='center' basis='50%'>
				<Box className={styles.messageBox} justify='center' align='center' height='fit-content' alignSelf='center' alignContent='center' gap='large' >
					<Typography>{`${message}`}</Typography>
				</Box>
			</Box>
		</div>
	);
};

export default about;
