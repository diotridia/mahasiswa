import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppContainer from './AppContainer';
import api from '../api';

const Create = () => {
	const history = useHistory();
	const [loading, setLoading] = useState(false);
	const [Name, setName] = useState('');
	const [Faculty, setFaculty] = useState('');
	const [NIM, setNIM] = useState('');
	const [Gender, setGender] = useState('');

	const onAddSubmit = async () => {
		setLoading(true);
		try {
			await api.addMahasiswa({
				Name, Faculty, NIM, Gender,
			})
			history.push('/home');
		}	catch (error) {
            console.log(error)

		}	finally {
			setLoading(false);
		}
	};

	return (
		<AppContainer
			title="Create Mahasiswa"
		>
		<form>
        <div className="form-group">
				<label>Name</label>
				<input
					className="form-control"
					type="text"
					value={Name}
					onChange={e => setName(e.target.value)}
				/>
			</div>
			<div className="form-group">
				<label>Faculty</label>
				<input
					className="form-control"
					type="text"
					value={Faculty}
					onChange={e => setFaculty(e.target.value)}
				/>
			</div>
			<div className="form-group">
				<label>NIM</label>
				<input
					className="form-control"
					type="text"
					value={NIM}
					onChange={e => setNIM(e.target.value)}
				/>
			</div>
			<div className="form-group">
				<label>Gender</label>
				<input
					className="form-control"
					type="text"
					value={Gender}
					onChange={e => setGender(e.target.value)}
				/>
			</div>
			<div className="form-group">
				<button
					type="button"
					className="btn btn-success"
					onClick={onAddSubmit}
					disabled={loading}
				>
					{loading ? 'Loading...' : 'Create'}
				</button>
			</div>
		</form>

		</AppContainer>
	);
};

export default Create;
