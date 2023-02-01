import { Table, TableContent } from "Components";
import { useDispatch } from "react-redux";

export const View = ({ listData = [] }) => {
    const dispatch = useDispatch();
  return (
    <Table
      listLabel={[
        { id: "no_kwt", name: "Keperluan" },
        { id: "nip", name: "No Surat" },
        { id: "nama", name: "Lokasi" },
        { id: "no_spd", name: "No.SPD" },
        { id: "no_spt", name: "No.SPT" },
        { id: "tgl_mulai", name: "Tgl Mulai" },
        { id: "tgl_selesai", name: "Tgl Selesai" },
        { id: "kegiatan", name: "Kegiatan" },
        { id: "aksi", name: "Aksi" },
      ]}
    >
      <tr>
        <TableContent>001-KWT-2023</TableContent>
        <TableContent>20029121</TableContent>
        <TableContent>Teti(Kadis Pertanian)</TableContent>
        <TableContent>001-SPD-2023</TableContent>
        <TableContent>05-Jan-2023</TableContent>
        <TableContent>05-Jan-2023</TableContent>
        <TableContent>05-Jan-2023</TableContent>
        <TableContent>Rakor Anggaran</TableContent>
        <TableContent>Action</TableContent>
      </tr>
    </Table>
  );
};
