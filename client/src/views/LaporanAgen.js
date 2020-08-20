import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function LaporanAgen() {
    const [agenList, setAgenList] = useState([]);
    const [wilayah, setWilayah] = useState([]);
    const [status, setStatus] = useState(true);
    const [selectedWilayah, setSelectedWilayah] = useState("SEMUA");
    const [selectedData, setSelectedData] = useState([]);

    const fetchAgen = () => {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/agen'
        })
            .then(response => {
                setAgenList(response.data);
                setWilayah([...new Set(agenList.map(agen => agen.wilayah_kerja))]);
            })
            .catch(error => {
                return console.log(error)
            })
    }

    const processData = (event) => {
        event.preventDefault()
        const processed = agenList.filter(agen => {
            return (selectedWilayah === "SEMUA" ? agen.wilayah_kerja : agen.wilayah_kerja == selectedWilayah) && agen.status == status
        })

        return setSelectedData(processed);
    }

    const processLevelAgen = (kode) => {
        switch (kode) {
            case 1:
                return 'FU';
            case 2:
                return 'UM';
            case 3:
                return 'SM';
            case 4:
                return 'RM';
            default:
                return 'null'
        }
    }

    useEffect(() => {
        fetchAgen()
    }, [])
    
    return (
        <>
            <h2 className="header-section">AGEN LEVEL BERDASARKAN WILAYAH KERJA</h2>
            <form id="form-report">
                <label>Pilih Wilayah Kerja: </label>
                <select onClick={() => setWilayah([...new Set(agenList.map(agen => agen.wilayah_kerja))])} onChange={event => setSelectedWilayah(event.target.value)}>
                    <option value="SEMUA">SEMUA</option>
                    { wilayah && wilayah.map((area, index) => (
                        <option key={index} value={area}>{area}</option>
                    ))}
                </select>
                <label>Status: </label>
                <label>
                <input checked={status} onChange={event => setStatus(event.target.checked)} type="checkbox" />
                    Aktif
                </label>
                <button className="save-button" onClick={processData}>View</button>
            </form>

            <table id="agents-report">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Wilayah</th>
                        <th>Nama Agen</th>
                        <th>Level Agen</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedData && selectedData.map((agen, index) => (
                        <tr key={index}>
                            <th>{index + 1}</th>
                            <th>{agen.wilayah_kerja}</th>
                            <th>{agen.nama_agen}</th>
                            <th>{processLevelAgen(agen.id_agen_level)}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
