import { Button, InputSelect, SectionForm, TextInput, WrapperForm } from "Components"
import { Form, Formik } from "formik";
import { useEffect, useState } from "react"
import { toast } from "react-toastify";
import { AddDataSp2d, EditDataSp2d } from "Services";
import { Np2dSchema } from "./data/Np2dSchema";

export const FormInput = ({
    onCallback = () => {},
    listProvince = [],
    contentType = 'Add',
    item = null
}) => {

    const [data, setData] = useState({
        no_np2d: "",
        nama_penerima: "",
        nik_penerima: "",
        jumlah: "",
        tgl_kwt: "",
        tgl: "",
        no_kwt: "",
        nama_bank: "",
        nama_rek: "",
        no_rek: "",
        tujuan: "",
        kegiatan: "",
        sub_kegiatan: "",
        kode_rek_dpa: "",
        tahun_anggaran: "",
        uraian_pembayaran: ""
    });

    useEffect(() => {
        if (item) {
            setData({
                provinsi: item?.provinsi,
                satuan: item?.satuan,
                luar_kota: item.luar_kota,
                dalam_kota: item.dalam_kota,
                diklat: item.diklat
            });
        }
    }, [item]);

    const addData = async (payload) => {
        try {
            const response = await AddDataSp2d(payload);
            if (response.data) {
                onCallback({success: true});
                toast.success("Berhasil tambah data");
            }
        } catch (error) {
            console.log(error)
        }
    }

    const editData = async (payload) => {
        try {
            const response = await EditDataSp2d(item?.id, payload);
            if (response.data) {
                onCallback({success: true});
                toast.success("Berhasil edit data");
            } 
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <WrapperForm
            title={`${contentType === 'Edit' ? 'Edit' : 'Tambah'} Data NP2D`}
        >

            <Formik
                initialValues={data}
                enableReinitialize
                validationSchema={Np2dSchema}
                onSubmit={(value) => contentType === 'Edit' ? editData(value) : addData(value)}
            >
                {({errors, touched, handleChange, handleSubmit, values}) => (
                    <Form>

                        <SectionForm
                            column="3"
                            gap="4"
                            className="mt-8"
                        >
                            <div>
                                <TextInput 
                                    id="no_np2d"
                                    name="no_np2d"
                                    withLabel
                                    label="No NP2D"
                                    placeholder="001-NP2D-2012"
                                    value={values.no_np2d}
                                    onChange={handleChange}
                                />
                                {touched.satuan && errors.satuan && <span className="mt-2 text-xs text-red-500 font-semibold">{errors.satuan}</span>}
                            </div>

                            <div>
                                <TextInput 
                                    id="luar_kota"
                                    name="luar_kota"
                                    withLabel
                                    label="Luar Kota"
                                    placeholder="Luar Kota"
                                    value={values.luar_kota}
                                    onChange={handleChange}
                                    type="number"
                                />
                                {touched.luar_kota && errors.luar_kota && <span className="mt-2 text-xs text-red-500 font-semibold">{errors.luar_kota}</span>}
                            </div>
                        </SectionForm>

                        <SectionForm
                            column="3"
                            gap="4"
                            className="mt-8"
                        >
                            <div>
                                <TextInput 
                                    id="satuan"
                                    name="satuan"
                                    withLabel
                                    label="Satuan"
                                    placeholder="Satuan"
                                    value={values.satuan}
                                    onChange={handleChange}
                                />
                                {touched.satuan && errors.satuan && <span className="mt-2 text-xs text-red-500 font-semibold">{errors.satuan}</span>}
                            </div>

                            <div>
                                <TextInput 
                                    id="luar_kota"
                                    name="luar_kota"
                                    withLabel
                                    label="Luar Kota"
                                    placeholder="Luar Kota"
                                    value={values.luar_kota}
                                    onChange={handleChange}
                                    type="number"
                                />
                                {touched.luar_kota && errors.luar_kota && <span className="mt-2 text-xs text-red-500 font-semibold">{errors.luar_kota}</span>}
                            </div>
                        </SectionForm>
                        <div className="mt-4">
                            <TextInput 
                                id="diklat"
                                name="diklat"
                                withLabel
                                label="Diklat"
                                placeholder="Diklat"
                                value={values.diklat}
                                onChange={handleChange}
                                type="number"
                            />
                            {touched.diklat && errors.diklat && <span className="mt-2 text-xs text-red-500 font-semibold">{errors.diklat}</span>}
                        </div>

                        <div className="mt-10 flex pb-10 md:pb-0 lg:pb-0 justify-center md:justify-end lg:justify-end">
                            <Button onClick={handleSubmit} className="w-full md:w-60 lg:w-60" backgroundColor="bg-orange-500">Simpan</Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </WrapperForm>
    )
}