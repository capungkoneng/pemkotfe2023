import * as Yup from "yup";

export const Np2dSchema = Yup.object().shape({
  no_np2d: Yup.string().required("no_np2d harus di isi"),
  nama_penerima: Yup.string().required("nama_penerima harus di isi"),
  nik_penerima: Yup.number().required("nik_penerima harus di isi"),
  jumlah: Yup.number().required("jumlah kota harus di isi"),
  tgl_kwt: Yup.number().required("tgl_kwt Kota harus di isi"),
  tgl: Yup.number().required("tgl Kota harus di isi"),
  no_kwt: Yup.number().required("no_kwt Kota harus di isi"),
  nama_bank: Yup.number().required("nama_bank Kota harus di isi"),
  nama_rek: Yup.number().required("nama_rek Kota harus di isi"),
  no_rek: Yup.number().required("no_rek Kota harus di isi"),
  tujuan: Yup.number().required("tujuan Kota harus di isi"),
  kegiatan: Yup.number().required("kegiatan Kota harus di isi"),
  sub_kegiatan: Yup.number().required("sub_kegiatan Kota harus di isi"),
  kode_rek_dpa: Yup.number().required("kode_rek_dpa Kota harus di isi"),
  tahun_anggaran: Yup.number().required("tahun_anggaran Kota harus di isi"),
  uraian_pembayaran: Yup.number().required(
    "uraian_pembayaran Kota harus di isi"
  ),
});
