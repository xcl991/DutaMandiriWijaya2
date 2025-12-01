'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Phone, Mail, MapPin, Building2, Wrench, Home, CheckCircle, ArrowRight, Star, Shield, Clock, Users } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg border-b' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-orange-600" />
              <span className="text-xl font-bold text-foreground">DMW</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className={`text-foreground hover:text-orange-600 transition-colors ${activeSection === 'home' ? 'text-orange-600 font-semibold' : ''}`}>Beranda</button>
              <button onClick={() => scrollToSection('services')} className={`text-foreground hover:text-orange-600 transition-colors ${activeSection === 'services' ? 'text-orange-600 font-semibold' : ''}`}>Layanan</button>
              <button onClick={() => scrollToSection('about')} className={`text-foreground hover:text-orange-600 transition-colors ${activeSection === 'about' ? 'text-orange-600 font-semibold' : ''}`}>Tentang</button>
              <button onClick={() => scrollToSection('portfolio')} className={`text-foreground hover:text-orange-600 transition-colors ${activeSection === 'portfolio' ? 'text-orange-600 font-semibold' : ''}`}>Portfolio</button>
              <button onClick={() => scrollToSection('contact')} className={`text-foreground hover:text-orange-600 transition-colors ${activeSection === 'contact' ? 'text-orange-600 font-semibold' : ''}`}>Kontak</button>
            </div>
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <Button onClick={() => scrollToSection('contact')} className="bg-orange-600 hover:bg-orange-700">
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 z-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-orange-100 text-orange-800 hover:bg-orange-200 px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              Terpercaya Sejak 2020
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Solusi Terpadu untuk
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600"> Properti & Konstruksi</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              PT Duta Mandiri Wijaya - Partner terpercaya untuk real estate, plumbing, dan konstruksi sipil di Batam dan sekitarnya
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => scrollToSection('services')} size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
                Jelajahi Layanan
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button onClick={() => scrollToSection('contact')} variant="outline" size="lg" className="border-2 border-input hover:border-orange-600 px-8 py-3">
                Konsultasi Gratis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-800">Layanan Kami</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">Solusi Lengkap untuk Kebutuhan Anda</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kami menyediakan layanan komprehensif untuk real estate, plumbing, dan konstruksi sipil
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Realtor Service */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-foreground">Real Estate</CardTitle>
                <CardDescription className="text-muted-foreground">Jual, beli, dan sewa properti</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Konsultasi properti profesional</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Pemasaran properti efektif</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Legal documentation lengkap</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Investment analysis</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                  Pelajari Lebih Lanjut
                </Button>
              </CardContent>
            </Card>

            {/* Plumbing Service */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-foreground">Plumbing</CardTitle>
                <CardDescription className="text-muted-foreground">Solusi pipa dan sanitasi</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Installation & repair</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Maintenance preventif</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Emergency service 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Quality materials guarantee</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">
                  Pelajari Lebih Lanjut
                </Button>
              </CardContent>
            </Card>

            {/* Civil Service */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-950 dark:to-red-900">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-foreground">Konstruksi Sipil</CardTitle>
                <CardDescription className="text-muted-foreground">Bangunan & infrastruktur</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Design & build</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Renovation & remodeling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Infrastructure development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Project management</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-orange-600 hover:bg-orange-700">
                  Pelajari Lebih Lanjut
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-100 text-orange-800">Tentang Kami</Badge>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                PT Duta Mandiri Wijaya
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Perusahaan yang bergerak di bidang real estate, plumbing, dan konstruksi sipil yang telah berpengalaman melayani berbagai proyek di Batam dan sekitarnya.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Dengan komitmen terhadap kualitas dan kepuasan pelanggan, kami terus berinovasi untuk memberikan solusi terbaik untuk setiap kebutuhan properti dan konstruksi Anda.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Users className="w-8 h-8 text-orange-600" />
                  <div>
                    <div className="text-2xl font-bold text-foreground">500+</div>
                    <div className="text-muted-foreground">Pelanggan Puas</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Building2 className="w-8 h-8 text-orange-600" />
                  <div>
                    <div className="text-2xl font-bold text-foreground">200+</div>
                    <div className="text-muted-foreground">Proyek Selesai</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-8 h-8 text-orange-600" />
                  <div>
                    <div className="text-2xl font-bold text-foreground">4+ Tahun</div>
                    <div className="text-muted-foreground">Pengalaman</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-8 h-8 text-orange-600" />
                  <div>
                    <div className="text-2xl font-bold text-foreground">4.9/5</div>
                    <div className="text-muted-foreground">Rating Pelanggan</div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-lg border">
                <h3 className="text-xl font-semibold text-foreground mb-4">Legalitas Perusahaan</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Nama:</strong> PT DUTA MANDIRI WIJAYA</p>
                  <p><strong>Alamat:</strong> Pancur Swadaya Blok J No. 15, Tanjung Piayu, Sei Beduk, Batam</p>
                  <p><strong>Kode Pos:</strong> 29437</p>
                  <p><strong>Modal:</strong> PMDN</p>
                  <p><strong>Status:</strong> Usaha Mikro</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl transform rotate-3 dark:from-orange-600 dark:to-red-600"></div>
              <div className="relative bg-card rounded-2xl shadow-2xl p-8 border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Mengapa Memilih Kami?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Profesional & Berpengalaman</h4>
                      <p className="text-muted-foreground">Tim ahli dengan pengalaman bertahun-tahun</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Kualitas Terjamin</h4>
                      <p className="text-muted-foreground">Material berkualitas dengan garansi</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Harga Kompetitif</h4>
                      <p className="text-muted-foreground">Penawaran terbaik dengan kualitas premium</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Pelayanan 24/7</h4>
                      <p className="text-muted-foreground">Siap membantu kapan saja Anda butuhkan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-800">Portfolio</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">Proyek-Proyek Kami</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hasil karya terbaik kami yang telah memberikan kepuasan kepada pelanggan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border">
                <div className="aspect-video bg-gradient-to-br from-orange-400 to-red-400 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building2 className="w-16 h-16 text-white/80" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Proyek {item}</h3>
                  <p className="text-muted-foreground mb-4">Deskripsi singkat proyek konstruksi atau real estate yang telah kami selesaikan dengan hasil maksimal.</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{item % 2 === 0 ? 'Real Estate' : 'Konstruksi'}</Badge>
                    <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700">
                      Lihat Detail
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-800">Kontak</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">Hubungi Kami</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Siap membantu mewujudkan proyek impian Anda
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="p-8 shadow-lg border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Kirim Pesan</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nama Lengkap</Label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Nomor Telepon</Label>
                    <Input id="phone" placeholder="+62 812-3456-7890" />
                  </div>
                  <div>
                    <Label htmlFor="service">Layanan yang Dibutuhkan</Label>
                    <Input id="service" placeholder="Real Estate, Plumbing, atau Konstruksi Sipil" />
                  </div>
                  <div>
                    <Label htmlFor="message">Pesan</Label>
                    <Textarea id="message" rows={4} placeholder="Ceritakan kebutuhan Anda..." />
                  </div>
                  <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                    Kirim Pesan
                  </Button>
                </form>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6 shadow-lg border">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Telepon</h4>
                    <p className="text-muted-foreground">0823-8246-6325</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-lg border">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">dutamandiriwijaya570@wubdo.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-lg border">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Alamat</h4>
                    <p className="text-muted-foreground">
                      Pancur Swadaya Blok J No. 15<br />
                      Desa/Kelurahan Tanjung Piayu<br />
                      Kec. Sei Beduk, Kota Batam<br />
                      Provinsi Kepulauan Riau<br />
                      Kode Pos: 29437
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-orange-600 to-red-600 text-white">
                <h4 className="text-xl font-bold mb-2">Jam Operasional</h4>
                <p className="mb-2">Senin - Jumat: 08:00 - 17:00</p>
                <p className="mb-2">Sabtu: 08:00 - 15:00</p>
                <p>Minggu: Tutup</p>
                <p className="mt-4 font-semibold">Emergency service tersedia 24/7</p>
              </Card>
            </div>
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
            <p>© 2024 PT Duta Mandiri Wijaya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}