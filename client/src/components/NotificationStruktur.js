import React from 'react'

export default function NotificationStruktur({ strukturCreated }) {
    return (
        <div className="notification-success">
            <h1>STRUKTUR AGEN BERHASIL DIREGISTRASI</h1>
            <h2>Nama Agen: {strukturCreated.nama_agen}</h2>
            <h2>Wilayah Kerja: {strukturCreated.wilayah_kerja}</h2>
        </div>
    )
}
