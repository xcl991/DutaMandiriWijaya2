'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Building2, ArrowLeft, FileText, AlertCircle, CheckCircle, Scale, Clock, Users, DollarSign } from 'lucide-react'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background">
      {/* Navigation */}
      <nav className="bg-background shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-orange-600" />
              <span className="text-xl font-bold text-foreground">DMW</span>
            </Link>
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <Link href="/">
                <Button variant="outline" className="border-gray-300 hover:border-orange-600">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Kembali ke Beranda
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600/10 to-red-600/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-orange-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Syarat & Ketentuan
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ketentuan penggunaan layanan PT Duta Mandiri Wijaya
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <Card className="mb-8 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <FileText className="w-6 h-6 mr-2 text-orange-600" />
                  Penerimaan Syarat
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Dengan mengakses dan menggunakan website PT Duta Mandiri Wijaya ("Website"), 
                  Anda menyatakan telah membaca, memahami, dan menyetujui untuk terikat oleh 
                  syarat dan ketentuan ini.
                </p>
                <p>
                  Jika Anda tidak menyetujui syarat dan ketentuan ini, jangan menggunakan 
                  layanan yang kami sediakan melalui Website ini.
                </p>
                <div className="bg-orange-50 border-l-4 border-orange-600 p-4 rounded">
                  <p className="font-semibold text-orange-800">
                    Penting: Syarat dan ketentuan ini merupakan perjanjian yang mengikat secara hukum 
                    antara Anda dan PT Duta Mandiri Wijaya.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <Users className="w-6 h-6 mr-2 text-orange-600" />
                  Definisi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div className="space-y-3">
                  <div>
                    <strong>"Perusahaan"</strong> merujuk pada PT Duta Mandiri Wijaya, 
                    perusahaan yang bergerak di bidang real estate, plumbing, dan konstruksi sipil.
                  </div>
                  <div>
                    <strong>"Website"</strong> merujuk pada situs web resmi PT Duta Mandiri Wijaya 
                    yang dapat diakses melalui URL yang disediakan.
                  </div>
                  <div>
                    <strong>"Layanan"</strong> merujuk pada semua layanan yang disediakan oleh Perusahaan, 
                    termasuk namun tidak terbatas pada konsultasi real estate, jasa plumbing, dan konstruksi sipil.
                  </div>
                  <div>
                    <strong>"Pengguna"</strong> merujuk pada individu atau entitas yang mengakses 
                    atau menggunakan Website dan/atau Layanan.
                  </div>
                  <div>
                    <strong>"Klien"</strong> merujuk pada Pengguna yang menggunakan Layanan berbayar 
                    dari Perusahaan.
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2 text-orange-600" />
                  Layanan yang Disediakan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  PT Duta Mandiri Wijaya menyediakan layanan-layanan berikut:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Real Estate:</strong> Jual beli properti, konsultasi investasi, dan manajemen properti</li>
                  <li><strong>Plumbing:</strong> Instalasi, perbaikan, dan maintenance sistem pipa dan sanitasi</li>
                  <li><strong>Konstruksi Sipil:</strong> Pembangunan, renovasi, dan konsultasi konstruksi</li>
                  <li><strong>Konsultasi:</strong> Layanan konsultasi teknis dan perencanaan proyek</li>
                </ul>
                <p>
                  Perusahaan berhak untuk mengubah, menambah, atau menghentikan layanan sewaktu-waktu 
                  dengan pemberitahuan sebelumnya.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <DollarSign className="w-6 h-6 mr-2 text-orange-600" />
                  Pembayaran dan Biaya
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div className="space-y-3">
                  <div>
                    <strong>Struktur Biaya:</strong> Biaya layanan akan diinformasikan secara transparan 
                    sebelum dimulainya pekerjaan. Biaya dapat berupa:
                  </div>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Biaya tetap untuk proyek tertentu</li>
                    <li>Biaya per jam untuk layanan konsultasi</li>
                    <li>Biaya berdasarkan persentase nilai proyek</li>
                  </ul>
                  
                  <div>
                    <strong>Metode Pembayaran:</strong> Pembayaran dapat dilakukan melalui:
                  </div>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Transfer bank ke rekening Perusahaan</li>
                    <li>Tunai dengan tanda ter resmi</li>
                    <li>Metode pembayaran lain yang disetujui</li>
                  </ul>
                  
                  <div>
                    <strong>Jadwal Pembayaran:</strong>
                  </div>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Uang muka minimal 30% untuk memulai proyek</li>
                    <li>Pembayaran tahapan sesuai progres pekerjaan</li>
                    <li>Pelunasan sebelum serah terima proyek</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <Clock className="w-6 h-6 mr-2 text-orange-600" />
                  Jadwal dan Waktu Pengerjaan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Perusahaan akan memberikan estimasi waktu pengerjaan yang realistis untuk setiap proyek:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Waktu pengerjaan akan ditentukan dalam kontrak perjanjian</li>
                  <li>Perubahan jadwal karena faktor di luar kendali Perusahaan akan dikomunikasikan</li>
                  <li>Klien berhak mendapatkan update berkala mengenai progres pekerjaan</li>
                  <li>Keterlambatan karena faktor cuaca, perizinan, atau force majeure tidak menjadi tanggung jawab Perusahaan</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <AlertCircle className="w-6 h-6 mr-2 text-orange-600" />
                  Kewajiban Pengguna
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Sebagai Pengguna, Anda setuju untuk:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Memberikan informasi yang akurat dan lengkap</li>
                  <li>Memenuhi kewajiban pembayaran tepat waktu</li>
                  <li>Memberikan akses yang diperlukan untuk pelaksanaan pekerjaan</li>
                  <li>Mematuhi peraturan keselamatan yang ditetapkan</li>
                  <li>Tidak melakukan aktivitas ilegal melalui Website</li>
                  <li>Respect terhadap properti dan peralatan Perusahaan</li>
                  <li>Memberikan konfirmasi persetujuan untuk setiap perubahan proyek</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <Scale className="w-6 h-6 mr-2 text-orange-600" />
                  Kewajiban Perusahaan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Perusahaan berkomitmen untuk:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Menyediakan layanan profesional dengan standar kualitas tinggi</li>
                  <li>Menggunakan material berkualitas sesuai kesepakatan</li>
                  <li>Menyelesaikan proyek sesuai spesifikasi dan waktu yang disepakati</li>
                  <li>Memberikan garansi untuk pekerjaan yang dilakukan</li>
                  <li>Menangani keluhan dengan cepat dan profesional</li>
                  <li>Memastikan keselamatan kerja selama pelaksanaan proyek</li>
                  <li>Memberikan dokumentasi lengkap setelah penyelesaian proyek</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Garansi dan Layanan Purnajual</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div className="space-y-3">
                  <div>
                    <strong>Periode Garansi:</strong>
                  </div>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Konstruksi bangunan: 1-2 tahun</li>
                    <li>Instalasi plumbing: 6-12 bulan</li>
                    <li>Material dan produk: sesuai garansi pabrik</li>
                  </ul>
                  
                  <div>
                    <strong>Cakupan Garansi:</strong>
                  </div>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Kerusakan akibat kesalahan instalasi</li>
                    <li>Kebocoran atau masalah struktural</li>
                    <li>Tidak mencakup kerusakan akibat penggunaan yang salah</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Pembatalan dan Pengembalian Dana</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div className="space-y-3">
                  <div>
                    <strong>Pembatalan oleh Klien:</strong>
                  </div>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Pembatalan sebelum pekerjaan dimulai: pengembalian 80% dari uang muka</li>
                    <li>Pembatalan setelah pekerjaan dimulai: biaya material dan pekerjaan yang sudah dilakukan</li>
                    <li>Pembatalan mendadak (kurang dari 24 jam): tidak ada pengembalian</li>
                  </ul>
                  
                  <div>
                    <strong>Pembatalan oleh Perusahaan:</strong>
                  </div>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Pengembalian penuh jika pembatalan karena kesalahan Perusahaan</li>
                    <li>Kompensasi jika pembatalan menyebabkan kerugian bagi Klien</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Hak Kekayaan Intelektual</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Semua konten, desain, dan materi di Website ini merupakan hak milik PT Duta Mandiri Wijaya 
                  dan dilindungi oleh hukum hak kekayaan intelektual.
                </p>
                <p>
                  Pengguna dilarang:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Menggunakan konten untuk tujuan komersial tanpa izin</li>
                  <li>Mereproduksi atau mendistribusikan materi Website</li>
                  <li>Memodifikasi atau mengadaptasi konten yang ada</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Batasan Tanggung Jawab</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Perusahaan tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Kerugian tidak langsung atau konsekuensial</li>
                  <li>Kerusakan akibat force majeure (bencana alam, perang, dll)</li>
                  <li>Keterlambatan karena proses perizinan pemerintah</li>
                  <li>Kerusakan akibat penggunaan yang tidak sesuai</li>
                  <li>Kehilangan data atau informasi selama proses proyek</li>
                </ul>
                <p>
                  Tanggung jawab maksimum Perusahaan terbatas pada nilai kontrak proyek yang bersangkutan.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Penyelesaian Sengketa</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Setiap sengketa yang timbul dari syarat dan ketentuan ini akan diselesaikan melalui:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>Negosiasi:</strong> Upaya penyelesaian secara damai antara kedua belah pihak</li>
                  <li><strong>Mediasi:</strong> Menggunakan mediator netral jika negosiasi gagal</li>
                  <li><strong>Arbitrase:</strong> Penyelesaian melalui lembaga arbitrase yang diakui</li>
                  <li><strong>Pengadilan:</strong> Sebagai upaya terakhir di Pengadilan Negeri Batam</li>
                </ol>
                <p>
                  Hukum yang berlaku adalah hukum Republik Indonesia.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Perubahan Syarat dan Ketentuan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Perusahaan berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Diinformasikan melalui Website</li>
                  <li>Diberlakukan setelah 7 hari dari pemberitahuan</li>
                  <li>Menggantikan versi sebelumnya sepenuhnya</li>
                </ul>
                <p>
                  Pengguna disarankan untuk secara berkala meninjau syarat dan ketentuan ini.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Informasi Kontak</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Untuk pertanyaan atau klarifikasi mengenai syarat dan ketentuan ini, hubungi:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>PT Duta Mandiri Wijaya</strong></p>
                  <p>Email: dutamandiriwijaya570@wubdo.com</p>
                  <p>Telepon: 0823-8246-6325</p>
                  <p>Alamat: Pancur Swadaya Blok J No. 15, Tanjung Piayu, Sei Beduk, Batam, Kepulauan Riau 29437</p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Efektif Date</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Syarat dan ketentuan ini berlaku efektif sejak tanggal 1 Januari 2024.
                </p>
                <p className="font-semibold">
                  Dengan menggunakan layanan kami, Anda menyatakan telah membaca, memahami, 
                  dan menyetujui syarat dan ketentuan ini sepenuhnya.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-8 w-8 text-orange-600" />
                <span className="text-xl font-bold text-foreground">DMW</span>
              </div>
              <p className="text-muted-foreground">
                Solusi terpadu untuk real estate, plumbing, dan konstruksi sipil
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Layanan</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Real Estate</li>
                <li>Plumbing</li>
                <li>Konstruksi Sipil</li>
                <li>Konsultasi</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Perusahaan</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Tentang Kami</li>
                <li>Portfolio</li>
                <li>Testimoni</li>
                <li>Karir</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/privacy" className="hover:text-orange-600 transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-orange-600 transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 PT Duta Mandiri Wijaya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}