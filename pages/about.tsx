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
			<Box justify='center' direction='row' align='center' alignSelf='center' alignContent='center' basis='50%'>
				<Box justify='center' align='center' alignSelf='center' alignContent='center' gap='large'>
					<h2 className='align-middle pt-16 bg-slate-100 h-96 text-2xl font-semibold border-double border-stone-600 border-8 font-serif  mt-4 p-2 rounded-lg self-center justify-center items-center w-3/4 text-center '>The Cleaner Crew is pleased to provide families with customized cleanings organized specifically for each home. We offer a variety of different types of cleanings to target the type of service to best suit the client. In the sections below, each cleaning is broken down to explain what services are included in each cleaning; please remember, all cleanings are customizable- you name it, WE CLEAN IT!</h2>
				</Box>
			</Box>
		</div>
	);
};

export default about;
