import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import AppContainer from './AppContainer';
import api from '../api';

const Edit = () => {
	const { id } = useParams();
	const history = useHistory();
	const [loading, setLoading] = useState(false);
	const [Name, setName] = useState('');
	const [Faculty, setFaculty] = useState('');
	const [NIM, setNIM] = useState('');
	const [Gender, setGender] = useState('');

	const onEditSubmit = async () => {
		setLoading(true);
		try {
			await api.updateMahasiswa({
				Name, Faculty, NIM, Gender,
			}, id);
			history.push('/');
		}	catch (error) {
            console.log(error)
          }finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		api.getOneMahasiswas(id).then(res => {
			const result = res.data;
			const mahasiswa = result.data;
			setName(mahasiswa.Name);
			setFaculty(mahasiswa.Faculty);
			setNIM(mahasiswa.NIM);
			setGender(mahasiswa.Gender);
		})
	}, []);

	return (
		<AppContainer
			title="Edit Mahasiswa"
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
					onClick={onEditSubmit}
					disabled={loading}
				>
					{loading ? 'Loading...' : 'Save'}
				</button>
			</div>
		</form>

		</AppContainer>
	);
};

export default Edit;
