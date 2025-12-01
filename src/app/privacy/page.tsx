'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Building2, ArrowLeft, Shield, Eye, Database, UserCheck, Cookie } from 'lucide-react'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'

export default function PrivacyPage() {
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
              <Shield className="w-10 h-10 text-orange-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Kebijakan Privasi
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              PT Duta Mandiri Wijaya berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda
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
                  <Database className="w-6 h-6 mr-2 text-orange-600" />
                  Pengumpulan Informasi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Kami mengumpulkan informasi pribadi yang Anda berikan secara sukarela saat:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mengisi formulir kontak di website kami</li>
                  <li>Menghubungi kami melalui email atau telepon</li>
                  <li>Menggunakan layanan konsultasi kami</li>
                  <li>Mendaftar untuk newsletter atau update</li>
                </ul>
                <p>
                  Informasi yang kami kumpulkan meliputi:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Nama lengkap</li>
                  <li>Alamat email</li>
                  <li>Nomor telepon</li>
                  <li>Alamat properti (jika relevan)</li>
                  <li>Informasi tentang kebutuhan layanan Anda</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <Eye className="w-6 h-6 mr-2 text-orange-600" />
                  Penggunaan Informasi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Informasi pribadi yang kami kumpulkan digunakan untuk:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Merespons pertanyaan dan permintaan Anda</li>
                  <li>Memberikan layanan konsultasi yang Anda butuhkan</li>
                  <li>Mengirimkan informasi tentang layanan kami</li>
                  <li>Meningkatkan kualitas layanan kami</li>
                  <li>Menghubungi Anda untuk follow-up terkait proyek</li>
                  <li>Memenuhi kewajiban hukum dan peraturan yang berlaku</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <Cookie className="w-6 h-6 mr-2 text-orange-600" />
                  Cookie dan Teknologi Pelacakan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Website kami menggunakan cookie untuk:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Meningkatkan pengalaman pengguna</li>
                  <li>Menganalisis traffic website</li>
                  <li>Mengingat preferensi Anda</li>
                  <li>Menyediakan konten yang relevan</li>
                </ul>
                <p>
                  Anda dapat mengatur browser untuk menolak cookie atau memberi tahu saat cookie dikirim.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <UserCheck className="w-6 h-6 mr-2 text-orange-600" />
                  Berbagi Informasi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Kami tidak menjual, menukar, atau menyewakan informasi pribadi Anda kepada pihak ketiga. 
                  Informasi Anda hanya akan dibagikan dalam keadaan berikut:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Dengan persetujuan Anda yang eksplisit</li>
                  <li>Kepada mitra bisnis tepercaya untuk menyediakan layanan</li>
                  <li>Untuk memenuhi persyaratan hukum atau peraturan</li>
                  <li>Untuk melindungi hak, properti, atau keselamatan kami atau pihak lain</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Keamanan Data</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi informasi pribadi Anda, 
                  termasuk:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Enkripsi data sensitif</li>
                  <li>Akses terbatas ke informasi pribadi</li>
                  <li>Prosedur keamanan fisik dan digital</li>
                  <li>Monitoring keamanan berkelanjutan</li>
                </ul>
                <p>
                  Namun, perlu diingat bahwa tidak ada metode transmisi internet atau penyimpanan elektronik 
                  yang 100% aman.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Hak Anda</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Sebagai pemilik data, Anda memiliki hak untuk:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mengakses informasi pribadi yang kami simpan tentang Anda</li>
                  <li>Memperbaiki informasi yang tidak akurat</li>
                  <li>Menghapus informasi pribadi Anda</li>
                  <li>Menolak pemrosesan informasi tertentu</li>
                  <li>Meminta pembatasan pemrosesan data</li>
                  <li>Memindahkan data Anda ke penyedia layanan lain</li>
                </ul>
                <p>
                  Untuk melaksanakan hak-hak ini, silakan hubungi kami melalui informasi kontak yang tersedia.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Penyimpanan Data</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Informasi pribadi Anda akan disimpan selama diperlukan untuk:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Memenuhi tujuan pengumpulan data</li>
                  <li>Memenuhi persyaratan hukum dan peraturan</li>
                  <li>Menyelesaikan perselisihan</li>
                  <li>Melaksanakan perjanjian kami</li>
                </ul>
                <p>
                  Setelah periode penyimpanan berakhir, informasi akan dihapus atau dihancurkan secara aman.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Perubahan Kebijakan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan 
                  diberitahukan melalui:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Pemberitahuan di website kami</li>
                  <li>Email kepada pengguna terdaftar</li>
                  <li>Pemberitahuan langsung untuk perubahan signifikan</li>
                </ul>
                <p>
                  Pengguna disarankan untuk secara berkala meninjau kebijakan privasi ini.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Kontak Kami</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Jika Anda memiliki pertanyaan atau kekhawatiran tentang kebijakan privasi kami, 
                  silakan hubungi:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>PT Duta Mandiri Wijaya</strong></p>
                  <p>Email: dutamandiriwijaya570@wubdo.com</p>
                  <p>Telepon: 0823-8246-6325</p>
                  <p>Alamat: Pancur Swadaya Blok J No. 15, Tanjung Piayu, Sei Beduk, Batam, Kepulauan Riau 29437</p>
                </div>
                <p>
                  Kami akan merespons pertanyaan Anda sesegera mungkin, paling lambat dalam 14 hari kerja.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Efektif Date</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Kebijakan privasi ini berlaku efektif sejak tanggal 1 Januari 2024 dan akan terus 
                  diperbarui sesuai kebutuhan.
                </p>
                <p className="font-semibold">
                  Dengan menggunakan website kami, Anda menyatakan telah membaca, memahami, dan 
                  menyetujui kebijakan privasi ini.
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