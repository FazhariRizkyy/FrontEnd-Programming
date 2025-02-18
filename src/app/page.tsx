"use client";
import { FaBed } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FaClipboardList } from 'react-icons/fa';
import { MdLocalHotel } from "react-icons/md";
import { FaUserFriends } from 'react-icons/fa';
import { FaMoneyBillAlt } from "react-icons/fa";
import { Card, CardContent } from "./components/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { PieChart, Pie, Cell } from "recharts";
import Image from "next/image";

const data = [
  { name: "Jan", tickets: 120 },
  { name: "Feb", tickets: 200 },
  { name: "Mar", tickets: 150 },
  { name: "Apr", tickets: 300 },
  { name: "May", tickets: 250 },
];

const pieData = [
  { name: "VIP", value: 400 },
  { name: "Regular", value: 300 },
  { name: "Economy", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"]; // Tambahkan ini!

<ResponsiveContainer width="100%" height={300}>
  <PieChart>
    <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#8884d8" dataKey="value">
      {pieData.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
  </PieChart>
</ResponsiveContainer>


export default function Home() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="text-2xl font-bold mb-6">Dashboard HotelKu</header>

      {/* Image Banner */}
      <div className="mb-6">
        <Image src="/images/wallpaper-itb.png" width={1200} height={400} alt="Concert Banner" className="rounded-lg shadow-md" />
      </div>
      
      {/* Cards */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        <Card>
          <CardContent className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">KAMAR TERSEDIA</h2>
              <p className="text-3xl font-bold text-gray-600">50 Kamar</p>
            </div>
            <FaBed className="text-green-600 text-8xl" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">KAMAR TERISI</h2>
              <p className="text-3xl font-bold text-gray-600">150 Kamar</p>
            </div>
            <MdLocalHotel className="text-red-600 text-8xl" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">TOTAL TAMU</h2>
              <p className="text-3xl font-bold text-gray-600">1,520</p>
            </div>
            <FaUserFriends className="text-blue-600 text-8xl" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">PENDAPATAN HARI INI</h2>
              <p className="text-3xl font-bold text-gray-600">Rp 350 Juta</p>
            </div>
            <FaMoneyBillAlt className="text-green-600 text-8xl" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">RESERVASI BERLANGSUNG</h2>
              <p className="text-3xl font-bold text-gray-600">15 Reservasi</p>
            </div>
            <FaClipboardList className="text-teal-600 text-8xl" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">RATA-RATA ULASAN PENGUNJUNG</h2>
              <p className="text-3xl font-bold text-yellow-500">4.8/5</p>
            </div>
            <FaStar className="text-yellow-500 text-8xl" />
          </CardContent>
        </Card>
      </div>

      {/* Chart Section - Menampilkan 2 Chart Sejajar */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Bar Chart */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">PENDAPATAN</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="tickets" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Distribusi Kategori Tiket</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#8884d8" dataKey="value">
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Container untuk menampung ketiga tabel */}
      <div className="bg-white p-5 rounded-lg shadow-md">
        <div className="flex justify-between space-x-4">
          {/* Tabel 1 */}
          <div className="w-1/3">
            <h2 className="text-xl font-semibold mb-4 text-center text-gray-700">Daftar Pembelian Tiket</h2>
            <table className="w-full table-auto border-separate border-spacing-0">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-3 text-left">Nama</th>
                  <th className="p-3 text-left">Konser</th>
                  <th className="p-3 text-left">Jumlah Tiket</th>
                  <th className="p-3 text-left">Total Harga</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border-t p-3">Andi</td>
                  <td className="border-t p-3">Coldplay</td>
                  <td className="border-t p-3">2</td>
                  <td className="border-t p-3">Rp 5 Juta</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border-t p-3">Budi</td>
                  <td className="border-t p-3">Taylor Swift</td>
                  <td className="border-t p-3">4</td>
                  <td className="border-t p-3">Rp 10 Juta</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Tabel 2 */}
          <div className="w-1/3">
            <h2 className="text-xl font-semibold mb-4 text-center text-gray-700">Daftar Pembelian Tiket</h2>
            <table className="w-full table-auto border-separate border-spacing-0">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-3 text-left">Nama</th>
                  <th className="p-3 text-left">Konser</th>
                  <th className="p-3 text-left">Jumlah Tiket</th>
                  <th className="p-3 text-left">Total Pendapatan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border-t p-3">Citra</td>
                  <td className="border-t p-3">Ed Sheeran</td>
                  <td className="border-t p-3">3</td>
                  <td className="border-t p-3">Rp 7.5 Juta</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border-t p-3">Dewi</td>
                  <td className="border-t p-3">Bruno Mars</td>
                  <td className="border-t p-3">5</td>
                  <td className="border-t p-3">Rp 12.5 Juta</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Tabel 3 */}
          <div className="w-1/3">
            <h2 className="text-xl font-semibold mb-4 text-center text-gray-700">Daftar Pembelian Tiket</h2>
            <table className="w-full table-auto border-separate border-spacing-0">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-3 text-left">Nama</th>
                  <th className="p-3 text-left">Konser</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Tanggal Pemesanan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border-t p-3">Eko</td>
                  <td className="border-t p-3">Adele</td>
                  <td className="border-t p-3">Diproses</td>
                  <td className="border-t p-3">2023-10-01</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border-t p-3">Fina</td>
                  <td className="border-t p-3">Billie Eilish</td>
                  <td className="border-t p-3">Selesai</td>
                  <td className="border-t p-3">2023-10-05</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}