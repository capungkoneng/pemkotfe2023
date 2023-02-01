import { Button, InputSelect, TextInput, WrapperForm } from "Components";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import { AddKwitansi } from "Services/KPD/Kwitansi";
import { KwitansiSchema } from "./data/KwitansiSchema";

export const FormInput = ({
  onCallback = () => {},
  contentType = "Add",
  item = null,
}) => {
  const [data, setData] = useState({
    no_spd: "",
    no_spt: "",
    nik: "",
    nama: "",
    no_kwt: "",
    tgl: new Date(),
    tgl_berangkat: new Date(),
    tgl_mulai: new Date(),
    tgl_pulang: new Date(),
    tujuan: "",
    kegiatan: "",
    sub_kegiatan: "",
    kode_rek: "",
    bidang: "",
    vkwitansi: [
      {
        uraian: "",
        nilai_rill: "",
        nilai_disetujui: "",
      },
    ],
  });

  const listKegiatan = [{ label: "Services", value: "Services" }];
  const listSubKegiatan = [{ label: "Maintenance", value: "Maintenance" }];
  const listKodeRek = [{ label: "029231", value: "029231" }];
  const listBidang = [{ label: "Instalasi", value: "Instalasi" }];

  useEffect(() => {
    if (item) {
      setData({
        no_spd: item.no_spd,
        no_spt: item.no_spt,
        nik: item.nik,
        nama: item.nama,
        tgl: new Date(item.tgl),
        tgl_berangkat: new Date(item.tgl_berangkat),
        tgl_mulai: new Date(item.tgl_mulai),
        tgl_pulang: new Date(item.tgl_pulang),
        tujuan: item.tujuan,
        kegiatan: item.kegiatan,
        sub_kegiatan: item.sub_kegiatan,
        kode_rek: item.kode_rek,
        bidang: item.bidang,
      });
    }
  }, [item]);

  const addData = async (payload) => {
    try {
      const response = await AddKwitansi(payload);
      if (response.data) {
        onCallback({ success: true });
        toast.success("Berhasil tambah data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WrapperForm
      title={`${contentType === "Edit" ? "Edit" : "Tambah"} Data Kwitansi`}
    >
      <Formik
        initialValues={data}
        enableReinitialize
        validationSchema={KwitansiSchema}
        onSubmit={(value) =>
          //   contentType === "Edit" ? editData(value) : addData(value)
          addData(value)
        }
      >
        {({
          errors,
          touched,
          values,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <Form>
            <div className="grid lg:grid-cols-2 gap-4 mt-4 mb-4">
              <div>
                <TextInput
                  id="no_kwt"
                  name="no_kwt"
                  withLabel
                  label="No KWT"
                  placeholder="Nomor KWT"
                  value={values.no_kwt}
                  onChange={handleChange}
                />
              </div>
              {touched.no_kwt && errors.no_kwt && (
                <span className="mt-2 text-xs text-red-500 font-semibold">
                  {errors.no_kwt}
                </span>
              )}
              <div>
                <div className="relative">
                  <label className="text-gray-700">Tanggal</label>
                  <DatePicker
                    selected={new Date(values.tgl)}
                    onChange={(value) => setFieldValue("tgl", value)}
                    className="base-input px-10 mt-2"
                    dateFormat="dd-MM-yyyy"
                  />

                  <div className="absolute top-11 left-3">
                    <svg
                      className="w-[16px] h-[16px] text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                {touched.tgl && errors.tgl && (
                  <span className="mt-2 text-xs text-red-500 font-semibold">
                    {errors.tgl}
                  </span>
                )}
              </div>
              <div>
                <TextInput
                  id="no_spd"
                  name="no_spd"
                  withLabel
                  label="No SPD"
                  placeholder="Nomor SPD"
                  value={values.no_spd}
                  onChange={handleChange}
                />
              </div>
              {touched.no_spd && errors.no_spd && (
                <span className="mt-2 text-xs text-red-500 font-semibold">
                  {errors.no_spd}
                </span>
              )}
              <div>
                <TextInput
                  id="nik"
                  name="nik"
                  withLabel
                  label="NIK"
                  placeholder="NIK"
                  value={values.nik}
                  onChange={handleChange}
                />
              </div>
              {touched.nik && errors.nik && (
                <span className="mt-2 text-xs text-red-500 font-semibold">
                  {errors.nik}
                </span>
              )}
              <div>
                <TextInput
                  id="no_spt"
                  name="no_spt"
                  withLabel
                  label="No SPT"
                  placeholder="Nomor SPT"
                  value={values.no_spt}
                  onChange={handleChange}
                />
              </div>
              {touched.no_spt && errors.no_spt && (
                <span className="mt-2 text-xs text-red-500 font-semibold">
                  {errors.no_spt}
                </span>
              )}
              <div>
                <TextInput
                  id="nama"
                  name="nama"
                  withLabel
                  label="Nama"
                  placeholder="Nama"
                  value={values.nama}
                  onChange={handleChange}
                />
              </div>
              {touched.nama && errors.nama && (
                <span className="mt-2 text-xs text-red-500 font-semibold">
                  {errors.nama}
                </span>
              )}
            </div>
            <TextInput
              id="tujuan"
              name="tujuan"
              withLabel
              label="Tujuan"
              placeholder="Tujuan"
              value={values.tujuan}
              onChange={handleChange}
            />
            {touched.tujuan && errors.tujuan && (
              <span className="mt-2 text-xs text-red-500 font-semibold">
                {errors.tujuan}
              </span>
            )}

            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div>
                <div className="relative">
                  <label className="text-gray-700">Tgl Berangkat</label>
                  <DatePicker
                    selected={new Date(values.tgl_berangkat)}
                    onChange={(value) => setFieldValue("tgl_berangkat", value)}
                    className="base-input px-10 mt-2"
                    dateFormat="dd-MM-yyyy"
                  />

                  <div className="absolute top-11 left-3">
                    <svg
                      className="w-[16px] h-[16px] text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                {touched.tgl_berangkat && errors.tgl_berangkat && (
                  <span className="mt-2 text-xs text-red-500 font-semibold">
                    {errors.tgl_berangkat}
                  </span>
                )}
              </div>

              <div>
                <div className="relative">
                  <label className="text-gray-700">Tgl Mulai</label>
                  <DatePicker
                    selected={new Date(values.tgl_mulai)}
                    onChange={(value) => setFieldValue("tgl_mulai", value)}
                    className="base-input px-10 mt-2"
                    dateFormat="dd-MM-yyyy"
                  />

                  <div className="absolute top-11 left-3">
                    <svg
                      className="w-[16px] h-[16px] text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                {touched.tgl_mulai && errors.tgl_mulai && (
                  <span className="mt-2 text-xs text-red-500 font-semibold">
                    {errors.tgl_mulai}
                  </span>
                )}
              </div>

              <div>
                <div className="relative">
                  <label className="text-gray-700">Tgl Pulang</label>
                  <DatePicker
                    selected={new Date(values.tgl_pulang)}
                    onChange={(value) => setFieldValue("tgl_pulang", value)}
                    className="base-input px-10 mt-2"
                    dateFormat="dd-MM-yyyy"
                  />

                  <div className="absolute top-11 left-3">
                    <svg
                      className="w-[16px] h-[16px] text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                {touched.tgl_pulang && errors.tgl_pulang && (
                  <span className="mt-2 text-xs text-red-500 font-semibold">
                    {errors.tgl_pulang}
                  </span>
                )}
              </div>
            </div>

            {/* Verifikasi Biaya SPPD Section */}
            <h2 className="subtitle mt-4">Verifikasi Biaya SPPD</h2>
            <div
              style={{
                backgroundColor: "green",
                padding: 20,
                color: "white",
                fontWeight: 600,
                borderRadius: 8,
              }}
              className="grid md:grid-cols-3 gap-4 mt-4"
            >
              <div>Uraian</div>
              <div>Nilai Riil</div>
              <div>Nilai Disetujui</div>
            </div>
            {data.vkwitansi.map((vkwitansi, key) => (
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div key={key} id="uang_harian" className="mt-4">
                  Uang Harian
                  <TextInput
                    id="uang_harian"
                    name="uang_harian"
                    type="hidden"
                    value={
                      values.vkwitansi[key].nilai_rill &&
                      values.vkwitansi[key].nilai_disetujui
                        ? (values.vkwitansi[key].uraian = "Uang Harian")
                        : []
                    }
                  />
                </div>
                <div>
                  <TextInput
                    id="uang_harian_riil"
                    name="uang_harian_riil"
                    value={values.vkwitansi[key].nilai_rill}
                    onChange={(e) =>
                      setData({
                        ...data,
                        vkwitansi: [
                          ...data.vkwitansi.map((item, i) => {
                            if (i === key) {
                              return {
                                ...item,
                                nilai_rill: e.target.value,
                              };
                            } else {
                              return item;
                            }
                          }),
                        ],
                      })
                    }
                  />
                </div>
                <div>
                  <TextInput
                    id="uang_harian_disetujui"
                    name="uang_harian_disetujui"
                    value={values.vkwitansi[key].nilai_disetujui}
                    onChange={(e) =>
                      setData({
                        ...data,
                        vkwitansi: [
                          ...data.vkwitansi.map((item, i) => {
                            if (i === key) {
                              return {
                                ...item,
                                nilai_disetujui: e.target.value,
                              };
                            } else {
                              return item;
                            }
                          }),
                        ],
                      })
                    }
                  />
                </div>
              </div>
            ))}

            {/* Transportasi Seciton */}
            <div className="mt-4">Transportasi</div>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="ml-2 mt-4">
                Dari Kantor Ke Bandara / Stasiun / Terminal PP
              </div>
              <div>
                <TextInput
                  id="jenis_pull_rill"
                  name="jenis_pull_rill"
                  value={values.jenis_pull_rill}
                  onChange={handleChange}
                />
              </div>
              <div>
                <TextInput
                  id="jenis_pull_disetujui"
                  name="jenis_pull_disetujui"
                  value={values.jenis_pull_disetujui}
                  onChange={handleChange}
                />
              </div>

              <div className="ml-2 mt-4">Tiket</div>
              <div>
                <TextInput
                  id="harga_tiket_rill"
                  name="harga_tiket_rill"
                  value={values.harga_tiket_rill}
                  onChange={handleChange}
                />
              </div>
              <div>
                <TextInput
                  id="harga_tiket_disetujui"
                  name="harga_tiket_disetujui"
                  value={values.harga_tiket_disetujui}
                  onChange={handleChange}
                />
              </div>

              <div className="ml-2 mt-4">Lain - Lain</div>
              <div>
                <TextInput
                  id="nilai_lain_rill"
                  name="nilai_lain_rill"
                  value={values.nilai_lain_rill}
                  onChange={handleChange}
                />
              </div>
              <div>
                <TextInput
                  id="nilai_lain_disetujui"
                  name="nilai_lain_disetujui"
                  value={values.nilai_lain_disetujui}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="mt-4">Penginapan</div>
              <div>
                <TextInput
                  id="biaya_penginapan_riil"
                  name="biaya_penginapan_riil"
                  value={values.biaya_penginapan_riil}
                  onChange={handleChange}
                />
              </div>
              <div>
                <TextInput
                  id="biaya_penginapan_disetujui"
                  name="biaya_penginapan_disetujui"
                  value={values.biaya_penginapan_disetujui}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="mt-4">Biaya Pengeluaran Riil</div>
              <div>
                <TextInput
                  id="biaya_pengeluaran_riil"
                  name="biaya_pengeluaran_riil"
                  value={values.biaya_pengeluaran_riil}
                  onChange={handleChange}
                />
              </div>
              <div>
                <TextInput
                  id="biaya_pengeluaran_disetujui"
                  name="biaya_pengeluaran_disetujui"
                  value={values.biaya_pengeluaran_disetujui}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="mt-4">Uang Representatif</div>
              <div>
                <TextInput
                  id="biaya_representatif_riil"
                  name="biaya_representatif_riil"
                  value={values.biaya_representatif_riil}
                  onChange={handleChange}
                />
              </div>
              <div>
                <TextInput
                  id="biaya_representatif_disetujui"
                  name="biaya_representatif_disetujui"
                  value={values.biaya_representatif_disetujui}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="mt-4">Lain - Lain</div>
              <div>
                <TextInput
                  id="biaya_lain2_riil"
                  name="biaya_lain2_riil"
                  value={values.biaya_lain2_riil}
                  onChange={handleChange}
                />
              </div>
              <div>
                <TextInput
                  id="biaya_lain2_disetujui"
                  name="biaya_lain2_disetujui"
                  value={values.biaya_lain2_disetujui}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="mt-4">Lain - Lain</div>
              <div>
                <TextInput
                  id="biaya_lain3_riil"
                  name="biaya_lain3_riil"
                  value={values.biaya_lain3_riil}
                  onChange={handleChange}
                />
              </div>
              <div>
                <TextInput
                  id="biaya_lain3_disetujui"
                  name="biaya_lain3_disetujui"
                  value={values.biaya_lain3_disetujui}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="mt-4">Lain - Lain</div>
              <div>
                <TextInput
                  id="biaya_lain4_riil"
                  name="biaya_lain4_riil"
                  value={values.biaya_lain4_riil}
                  onChange={handleChange}
                />
              </div>
              <div>
                <TextInput
                  id="biaya_lain4_disetujui"
                  name="biaya_lain4_disetujui"
                  value={values.biaya_lain4_disetujui}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="mt-4">Lain - Lain</div>
              <div>
                <TextInput
                  id="biaya_lain5_riil"
                  name="biaya_lain5_riil"
                  value={values.biaya_lain5_riil}
                  onChange={handleChange}
                />
              </div>
              <div>
                <TextInput
                  id="biaya_lain5_disetujui"
                  name="biaya_lain5_disetujui"
                  value={values.biaya_lain5_disetujui}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div
              style={{
                backgroundColor: "green",
                padding: 5,
                color: "white",
                fontWeight: 600,
                borderRadius: 2,
              }}
              className="grid md:grid-cols-4 gap-4 mt-4"
            >
              <div>Kegiatan</div>
              <div>Sub Kegiatan</div>
              <div>Kode Rekening</div>
              <div>Bidang</div>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mt-4">
              <InputSelect
                id="kegiatan"
                name="kegiatan"
                onChange={handleChange}
                value={values.kegiatan}
              >
                {listKegiatan.map((value) => {
                  return (
                    <option key={value.id} value={value.label}>
                      {value.label}
                    </option>
                  );
                })}
              </InputSelect>

              <InputSelect
                id="sub_kegiatan"
                name="sub_kegiatan"
                onChange={handleChange}
                value={values.sub_kegiatan}
              >
                {listSubKegiatan.map((value) => {
                  return (
                    <option key={value.id} value={value.label}>
                      {value.label}
                    </option>
                  );
                })}
              </InputSelect>

              <InputSelect
                id="kode_rek"
                name="kode_rek"
                onChange={handleChange}
                value={values.kode_rek}
              >
                {listKodeRek.map((value) => {
                  return (
                    <option key={value.id} value={value.label}>
                      {value.label}
                    </option>
                  );
                })}
              </InputSelect>

              <InputSelect
                id="bidang"
                name="bidang"
                onChange={handleChange}
                value={values.bidang}
              >
                {listBidang.map((value) => {
                  return (
                    <option key={value.id} value={value.label}>
                      {value.label}
                    </option>
                  );
                })}
              </InputSelect>
            </div>

            <div className="mt-10 flex pb-10 md:pb-0 lg:pb-0 justify-center md:justify-end lg:justify-end">
              <Button
                type="submit"
                onClick={handleSubmit}
                className="w-full md:w-60 lg:w-60"
                backgroundColor="bg-orange-500"
              >
                Simpan
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </WrapperForm>
  );
};
