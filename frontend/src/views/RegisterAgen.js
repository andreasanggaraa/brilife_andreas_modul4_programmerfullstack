import React, { useState } from 'react';
import axios from 'axios';
import NotificationSuccess from '../components/NotificationSuccess';

export default function RegisterAgen() {
    const [status, setStatus] = useState(true);
    const [agenCreated, setAgenCreated] = useState();
    const [error, setError] = useState({
        type: '',
        message: ''
    })
    const [formPayload, setFormPayload] = useState({
        no_lisensi: '',
        nama_agen: '',
        id_agen_level: 1,
        wilayah_kerja: '',
    })

    const handleFormChange = (event) => {
        setFormPayload({ 
            ...formPayload,
            [event.target.name]: event.target.value
        })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        let statusAgen = 0;
        setError({ type: '', message: '' });
        setAgenCreated(null);

        if(status) {
            statusAgen = 1;
        }

        const payload = {...formPayload, status: statusAgen};

        // Guard
        if(!payload.no_lisensi) {
            return setError({
                type: 'no_lisensi',
                message: 'Nomor lisensi agen tidak boleh kosong'
            })
        }
        if(!Number(payload.no_lisensi)) {
            return setError({
                type: 'no_lisensi',
                message: 'Nomor lisensi harus berbentuk angka'
            })
        } else {
            payload.no_lisensi = Number(payload.no_lisensi)
        }
        if(!payload.nama_agen) {
            return setError({
                type: 'nama_agen',
                message: 'Nama agen tidak boleh kosong'
            })
        }
        if(!payload.wilayah_kerja) {
            return setError({
                type: 'wilayah_kerja',
                message: 'Wilaya kerja agen tidak boleh kosong'
            })
        }
        console.log(payload)

        axios({
            method: 'POST',
            data: payload,
            url: 'http://localhost:3000/agen'
        })
            .then(response => {
                let { no_lisensi, nama_agen, wilayah_kerja } = response.data.payload
                setAgenCreated({
                    no_lisensi,
                    nama_agen,
                    wilayah_kerja
                })

                // Reset Form to blank
                setFormPayload({
                    no_lisensi: '',
                    nama_agen: '',
                    id_agen_level: 1,
                    wilayah_kerja: '',
                })
            })
            .catch(error => {
                console.log(error.response);
                if(error.response.data.errors[0] === 'Nomor lisensi sudah terdaftar') {
                    return setError({
                        type: 'no_lisensi',
                        message: 'Nomor lisensi sudah terdaftar'
                    })
                }
            })
    }

    return (
        <>
            <h2 className="header-section">REGISTER AGEN BARU</h2>
            <form onSubmit={handleFormSubmit} className="form-register">
                <div className="input-row">
                    <label>No. Lisensi</label>
                    <input className={error.type === 'no_lisensi' ? 'input-error' : null} name='no_lisensi' onChange={handleFormChange} value={formPayload.no_lisensi} min={0} type="number" />
                </div>
                <div className="input-row">
                    <label>Nama Agen</label>
                    <input className={error.type === 'nama_agen' ? 'input-error' : null} name='nama_agen' onChange={handleFormChange} value={formPayload.nama_agen} type="text" />
                </div>
                <div className="input-row">
                    <label>Level Agen</label>
                    <select name="id_agen_level" value={formPayload.id_agen_level} onChange={handleFormChange}>
                        <option value={1}>FU</option>
                        <option value={2}>UM</option>
                        <option value={3}>SM</option>
                        <option value={4}>RM</option>
                    </select>
                </div>
                <div className="input-row">
                    <label>Wilayah kerja</label>
                    <input className={error.type === 'wilayah_kerja' ? 'input-error' : null} name='wilayah_kerja' onChange={handleFormChange} value={formPayload.wilayah_kerja} type="text"/>
                </div>
                <div className="input-row">
                    <label>Status</label>
                    <label>
                        <input checked={status} onChange={event => setStatus(event.target.checked)} type="checkbox" />
                        Aktif
                    </label>
                </div>
                <button type="submit" className="save-button">Save</button>
                {error && <h4 className="error-message">{error.message}</h4>}
                {agenCreated && <NotificationSuccess agenCreated={agenCreated} /> }
            </form>
            
        </>
    )
}
