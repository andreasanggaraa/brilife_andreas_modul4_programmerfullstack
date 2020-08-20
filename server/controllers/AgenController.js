const { Agen, agen_struktur, agen_level } = require('../models/index.js');

class AgenController {
    static register(req, res, next) {
        let { no_lisensi, nama_agen, id_agen_level, status, wilayah_kerja } = req.body;
        const status_tgl = new Date().toISOString();

        Agen.create({ no_lisensi, nama_agen, id_agen_level: Number(id_agen_level), status, status_tgl, wilayah_kerja })
            .then(response => {
                let payload = {
                    id: response.id,
                    no_lisensi: response.no_lisensi,
                    nama_agen: response.nama_agen,
                    wilayah_kerja: response.wilayah_kerja
                }
                res.status(201).json({ payload })
            })
            .catch(error => {
                next(error)
            })
    }

    static findAll(req, res, next) {
        Agen.findAll({ order: ["wilayah_kerja", "id_agen_level"]})
            .then(dataAgen => {
                res.status(200).json(dataAgen)
            })
            .catch(error => {
                next(error)
            })
    }

    static findSA(req, res, next) {
        agen_struktur.findAll()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(error => {
                next(error)
            })            
    }

    static findAL(req, res, next) {
        agen_level.findAll()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(error => {
                next(error)
            })
    }

}

module.exports = AgenController;