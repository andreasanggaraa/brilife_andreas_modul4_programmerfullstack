import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NotificationStruktur from '../components/NotificationStruktur';

export default function RegisterStrukturAgen() {
    const [strukturCreated, setStrukturCreated] = useState()
    const [agenOptions, setAgenOptions] = useState([]);
    const [status, setStatus] = useState(true);
    const [agenRM, setAgenRM] = useState(false);
    const [error, setError] = useState({
        type: '',
        message: ''
    })
    const [formPayload, setFormPayload] = useState({
        berlaku_mulai: '',
        berlaku_akhir: '',
        nama_agen: '',
        id_agen: 0,
        keterangan: '',
        parent_id: '',
    })

    const fetchAgen = () => {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/agen'
        })
            .then(response => {
                setAgenOptions(response.data)
            })
            .catch(error => {
                console.log(error.response)
            })
    }

    const handleFormChange = (event) => {
        setFormPayload({ 
            ...formPayload,
            [event.target.name]: event.target.value
        })
    }

    const handleFormAgen = (event) => {
        const [id, level, nama_agen] = event.target.value.split(',')

        if(Number(level) === 4) {
            setAgenRM(true)
            setFormPayload({
                ...formPayload,
                nama_agen,
                id_agen: id,
                parent_id: 0
            })
        } else {
            setAgenRM(false)
            setFormPayload({
                ...formPayload,
                id_agen: id,
                nama_agen,
            })
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        let statusAgen = "N";
        setError({ type: '', message: '' });
        setStrukturCreated(null)

        if(status) {
            statusAgen = "A";
        }

        const payload = { ...formPayload, status: statusAgen };

        // Guard
        if(!payload.id_agen) {
            return setError({
                type: 'id_agen',
                message: 'Nama agen tidak boleh kosong'
            })
        }
        if(!payload.parent_id) {
            return setError({
                type: 'parent_id',
                message: 'Nama atasan agen tidak boleh kosong'
            })
        }
        if(payload.id_agen === payload.parent_id) {
            return setError({
                type: 'parent_id',
                message: 'Nama atasan agen tidak boleh sama dengan agen'
            })
        }
        if(!payload.berlaku_mulai) {
            return setError({
                type: 'berlaku_mulai',
                message: 'Tanggal mulai tidak boleh kosong'
            })
        }
        if(!payload.berlaku_akhir) {
            return setError({
                type: 'berlaku_akhir',
                message: 'Tanggal berakhir tidak boleh kosong'
            })
        }
        if(new Date(payload.berlaku_mulai) > new Date(payload.berlaku_akhir)) {
            return setError({
                type: 'berlaku_akhir',
                message: 'Tanggal berakhir tidak boleh lebih kecil dari tanggal mulai'
            })
        }
        
        return axios({
            method: 'POST',
            url: 'http://localhost:3000/agen-struktur',
            data: payload
        })
            .then(response => {

                setStatus(0)
                setFormPayload({
                    berlaku_mulai: '',
                    berlaku_akhir: '',
                    nama_agen: '',
                    id_agen: 0,
                    keterangan: '',
                    parent_id: '',
                })


                setStrukturCreated({
                    no_lisensi: response.data.no_lisensi,
                    nama_agen: response.data.nama_agen,
                    wilayah_kerja: response.data.wilayah_kerja
                })
            })
            .catch(error => {
                console.log(error.response.data)
                if(error.response.data.errors[0] === "id must be unique") {
                    return setError({
                        type: 'data',
                        message: "Agen sudah didaftarkan"
                    })
                }
                return setError({
                    type: 'data',
                    message: error.response.data.message
                })
            })
    }

    useEffect(() => {
        fetchAgen();
    }, [])

    return (
        <>
            <h2 className="header-section">REGISTER STRUKTUR AGEN</h2>
            <form className="form-register" onSubmit={handleFormSubmit}>
                <div className="input-row">
                    <label>Pilih nama agen</label>
                    <select name="id_agen" onChange={handleFormAgen}>
                        <option value=""> </option>
                        { agenOptions && agenOptions.map((agen, index) => (
                            <option key={index} value={[agen.id, agen.id_agen_level, agen.nama_agen]}>{agen.nama_agen}</option>
                        ))}
                    </select>
                </div>
                <div className="input-row">
                    <label>Nama atasan</label>
                    <select disabled={ agenRM ? true : false } name="parent_id" value={formPayload.parent_id} onChange={handleFormChange}>
                        <option value=''> </option>
                        { agenOptions && agenOptions.map((agen, index) => (
                            <option key={index} value={agen.id}>{agen.nama_agen}</option>
                        ))}
                    </select>
                </div>
                <div className="input-row">
                    <label>Mulai Berlaku</label>
                    <input value={formPayload.berlaku_mulai} onChange={handleFormChange} name="berlaku_mulai" type="date" />
                </div>
                <div className="input-row">
                    <label>Akhir Berlaku</label>
                    <input value={formPayload.berlaku_akhir} onChange={handleFormChange} name="berlaku_akhir" type="date" />
                </div>
                <div className="input-row">
                    <label>Status</label>
                    <label>
                        <input checked={status} onChange={event => setStatus(event.target.checked)} type="checkbox" />
                        Aktif
                    </label>
                </div>
                <button type="submit" className="save-button">Save</button>
            </form>
            {error && <h4 className="error-message">{error.message}</h4>}
            {strukturCreated && <NotificationStruktur strukturCreated={strukturCreated} /> }
        </>
    )
}
