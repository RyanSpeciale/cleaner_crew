import React from 'react';
import styles from '../styles/about.module.scss';
import { Box } from 'grommet';
import Image from 'next/image';
import example1 from '../photos/example1.jpg';
import example2 from '../photos/example2.jpg';

type aboutProps = {};

const about = (props: aboutProps) => {
	return (
		<div className={styles.mainContainer}>
			<Box justify='center' align='center' alignSelf='center' alignContent='center'>
				<h3></h3>
			</Box>
		</div>
	);
};

export default about;
