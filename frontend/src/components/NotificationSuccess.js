import React from 'react'

export default function NotificationSuccess({ agenCreated }) {
    return (
        <div className="notification-success">
            <h1>AGEN BERHASIL DIREGISTRASI</h1>
            <h2>No Lisensi: {agenCreated.no_lisensi}</h2>
            <h2>Nama Agen: {agenCreated.nama_agen}</h2>
            <h2>Wilayah Kerja: {agenCreated.wilayah_kerja}</h2>
        </div>
    )
}
