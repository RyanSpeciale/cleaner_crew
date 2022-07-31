import React from 'react';
import { Form, FormField, TextInput, Box, Button } from 'grommet';
import { send } from '@emailjs/browser';
import { useRouter } from 'next/router';

const FormComponent = () => {
	const [value, setValue] = React.useState({});
	const router = useRouter();
	
	
	return (
		<Form
			value={value}
			onChange={(nextValue) => setValue(nextValue)}
			onReset={() => setValue({})}
			onSubmit={({ value }) => {
				console.log(value);
				send(process.env.NEXT_PUBLIC_EMAILJS_SERVICEID!, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID!, value, process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY!)
					.then((response) => {
						console.log(response.text)
						router.push('/')
					}, (error) => {
						console.log(error.text)
					})
			}}
		>
			<FormField
				name='email'
				htmlFor='text-input-id'
				label='Email'
				required={true}
				validate={{ regexp: /.+\@.+\..+/, message: 'Email is required' }}
			>
				<TextInput id='text-input-id' name='email' />
			</FormField>
			<FormField name='first' htmlFor='text-input-id' label='First Name'>
				<TextInput id='text-input-id' name='first' />
			</FormField>
			<FormField name='last' htmlFor='text-input-id' label='Last Name'>
				<TextInput id='text-input-id' name='last' />
			</FormField>
			<FormField name='address' htmlFor='text-input-id' label='Full Address'>
				<TextInput id='text-input-id' name='address' />
			</FormField>
			<FormField name='number' htmlFor='text-input-id' label='Phone Number'>
				<TextInput id='text-input-id' name='number' />
			</FormField>
			<Box direction='row' gap='medium' justify='center'>
				<Button color='black' type='submit' primary label='Submit' />
			</Box>
		</Form>
	);
};

export default FormComponent;
