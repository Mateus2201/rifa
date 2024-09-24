'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Button } from '@/components/ui/button'
import { Alert } from '@/components/Alert';
import instance from '@/API/axiosConfig';

export default function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();

	useEffect(() => {
		instance.post(`api/users`, JSON.stringify({ username, password }))
			.then(response => {
				console.log(response.data);

			})
			.catch(error => {
				console.log(error);
			});

	}, []);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		instance.post(`api/users`, JSON.stringify({ username, password }))
			.then(response => {
				if (response.data.ok) 
					router.push('/raffles');
			})
			.catch(error => {
				console.log(error);
				console.error('Falha no login');

			});
	};

	return <div className={`h-screen w-screen flex justify-center items-center bg-slate-600 font-thin font-mono `}>
		<form className={`border w-1/4 h-1/2 flex items-center rounded-md`} onSubmit={handleSubmit}>
			<div className={`w-full `}>
				<div className={`flex justify-center`}>
					<input
						type="text"
						id="username"
						placeholder='Username'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
						className={`m-3 p-1 outline-none w-2/3`}
					/>
				</div>
				<div className={`flex justify-center`}>
					<input
						type="password"
						id="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						className={`m-3 p-1 outline-none w-2/3`}

					/>
				</div>
				<div className={`flex justify-center `}>
					<Button type='submit' className='m-3 w-2/3'>
						Login
					</Button>
				</div>
				<div className={`flex justify-center items-center text-center`}>
					<a className={`border p-1 rounded-md w-2/3`} href="http://localhost:3001/auth/google">Login com Google</a>
				</div>
			</div>

		</form>

		{/* Login com Google */}

	</div>
};

