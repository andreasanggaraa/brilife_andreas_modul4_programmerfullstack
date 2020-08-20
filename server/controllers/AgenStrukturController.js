const { Agen, agen_struktur, agen_level } = require('../models/index.js');

class AgenStruktrurController {
    static create(req, res, next) {
        let { parent_id, id_agen, berlaku_mulai, berlaku_akhir, status, keterangan } = req.body;

        if(Number(parent_id) === Number(id_agen)) {
            return next({
                status: 400,
                message: 'Atasan agen tidak bisa sama dengan Agen'
            })
        }
        
        if(!parent_id) {
            parent_id = null;
        }

        if(berlaku_mulai > berlaku_akhir) {
            return next({
                status: 400,
                message: 'Tanggal mulai tidak bisa lebih kecil dari tanggal berakhir'
            })
        }

        agen_struktur.findOne({ where: { id_agen }, include: [Agen]})
            .then(response => {
                if(response) {
                    let { nama_agen } = response.Agen;
                    throw ({ status: 400, message: `${nama_agen} sudah didaftarkan pada struktur`});
                } else {
                    let namaAgen = ""
                    let wilayah_kerja = ""
                    Agen.findByPk(id_agen)
                        .then(response => {
                            if(response) {
                                namaAgen = response.nama_agen;
                                wilayah_kerja = response.wilayah_kerja
                                agen_struktur.create({ parent_id, id_agen, berlaku_akhir, berlaku_mulai, status, keterangan })
                                .then(response => {
                                    res.status(201).json({
                                        nama_agen: namaAgen,
                                        wilayah_kerja,
                                        id_agen: response.id_agen
                                    })
                                })
                                .catch(error => {
                                    next(error)
                                })
                            } else {
                                throw({ status: 404, message: `Agen dengan ID ${id_agen} tidak ditemukan`})
                            }
                        })
                }
            })
            .catch(error => {
                next(error)
            })
    }

    static getFormattedDate = (date) => {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    }


}

module.exports = AgenStruktrurController