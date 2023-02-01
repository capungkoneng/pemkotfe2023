import * as Yup from 'yup';

export const KwitansiSchema = Yup.object().shape({
    no_spd: Yup.string().required('No SPD harus diisi'),
    no_spt: Yup.string().required('No SPT harus diisi'),
    no_kwt: Yup.string().required('No KWT harus diisi'),
    nik: Yup.string().required('NIK harus diisi'),
    nama: Yup.string().required('Nama harus diisi'),
    tgl: Yup.string().required('Tanggal harus diisi'),
    tgl_berangkat: Yup.string().required('Tgl Berangkat harus diisi'),
    tgl_mulai: Yup.string().required('Tgl Mulai harus diisi'),
    tgl_pulang: Yup.string().required('Tgl Pulang harus diisi'),
    tujuan: Yup.string().required('Tujuan harus diisi'),
    kegiatan: Yup.string().required('Kegiatan harus diisi'),
    sub_kegiatan: Yup.string().required('Sub Kegiatan harus diisi'),
    kode_rek: Yup.string().required('Kode Rekening harus diisi'),
    bidang: Yup.string().required('Bidang harus diisi'),
})