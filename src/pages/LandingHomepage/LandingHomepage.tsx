import { useState } from 'react';

export default function LandingHomepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  return (
    <div className="bg-white text-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">B</div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900">Bitelo</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#">Home</a>
              <a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#">About</a>
              <a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#">Team</a>
              <a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#">Services</a>
              <div className="relative">
                <button
                  type="button"
                  className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                  onClick={() => setPagesOpen(!pagesOpen)}
                >
                  Pages
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {pagesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 rounded-lg bg-white shadow-lg border border-slate-100 py-1 z-50">
                    <a className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50" href="#">Team Detail</a>
                    <a className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50" href="#">Services</a>
                    <a className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50" href="#">Contact</a>
                  </div>
                )}
              </div>
            </div>
            <div className="hidden md:block">
              <a className="inline-flex items-center px-6 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-all gap-2 group" href="#">
                Get Started
                <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            <div className="md:hidden">
              <button type="button" className="p-2 text-slate-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-100">
              <a className="block py-2 text-slate-600 hover:text-blue-600" href="#">Home</a>
              <a className="block py-2 text-slate-600 hover:text-blue-600" href="#">About</a>
              <a className="block py-2 text-slate-600 hover:text-blue-600" href="#">Team</a>
              <a className="block py-2 text-slate-600 hover:text-blue-600" href="#">Services</a>
              <a className="block py-2 text-slate-600 hover:text-blue-600" href="#">Pages</a>
              <a className="inline-flex mt-2 px-6 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-full" href="#">Get Started</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 overflow-hidden bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-blue-100 rounded-full text-blue-600 text-xs font-semibold mb-6 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                Welcome to Bitelo!
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                Build Smarter <br />
                <span className="text-blue-600">Scale Faster</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                Empower your innovation through clean design, strategic development, and high-performance tech strategy tailored for modern growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <a className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center gap-2 group" href="#">
                  Get Started
                  <span className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
                <a className="px-8 py-4 bg-white text-slate-900 border border-slate-200 font-bold rounded-full hover:bg-slate-50 transition-all" href="#">
                  Learn More
                </a>
              </div>
              <div className="mt-12 flex items-center gap-4">
                <div className="flex -space-x-2">
                  <img alt="User" className="w-10 h-10 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNLIeoVmwWHNMwYqGZTq3ImGAVHVSwO2TNEuHD9fPfvr1ggVKieHF3XSRmwOMcPCcUYwEnDv6SC_poBI6Aj8I3z8WAbxde5U1pX6tPbht8XPOZ5Hb3TGjWrdFNCFYXE_Nd1H2p0ZMmzlrvCYcg7dSzR0kuoD8YtdvaLEWAPGZDuYZYM7kT-fDbg26IIT16f9uRNYKo61WBTHiI4LfnLGsIZXISibKxq8ZxImqhUlTNEvdYYeFzNzK6SK6yf17NkfLgXrYjJgoKTB0" />
                  <img alt="User" className="w-10 h-10 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcQHxmKyP8QngcyYdYhbtNeSqLk8qOSDsFBuSRXA3qmnhMand-qWVPls3BLvhaCoh1adhdauIax780yPvrlYaZ9iuf7o1qCuNTV9uAUg3Ve-2I4WVzZgxxs-pne09E0gTpYmnxPNbQtths0Ja0KqNLLgdZ4gDDjEipNOnYiRL4gQ78m1gCCbGV8qJJwWcq1frvcUWAQPUt5_kmQGGDnox0eR0IerlXatHglP-uUA8CXazJbOc3jOSuKdu0Y7U2Sa-zHSRrrF1fZnk" />
                  <img alt="User" className="w-10 h-10 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz4KTqeN5FJO56R3BhPHT9-fKdist4NDa0ZekvxP4pq816KmfUk-30IDnuB6rHQ0WkcvCrSrSgq3VAFefGKKrR7vO6jIwm5InXOIrp-3wLn0NzsZ0gA5aaX5ff3VbFDLDRCnk5UIA-VzfnqKCwIiDSTqX2OKSuydCkrtVvTM_TZIByb_MXIe-ssvxM1jf-tztPi_s9-RLq9JKS6WPz2vQjbPfgP8z6GwI9PWYgJOaZQqlEM-wtoRfZZONWKBBlp5EjgB6lLDzYAiM" />
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-[10px] text-white font-bold">80+</div>
                </div>
                <p className="text-sm text-slate-500 font-medium">Join 2,000+ companies growing with us</p>
              </div>
            </div>
            <div className="relative min-h-[500px] flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-lg animate-float">
                <div className="glass-morphism rounded-3xl shadow-2xl overflow-hidden border border-white/40">
                  <img alt="App Dashboard" className="w-full h-auto opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8t5de6EEGposdh72O1Aj5H-QA7ZdUu9BFTG1S_k6vNDpA7pY0F79iNAP1lRUEj9lNtS1bCY4-J_LMIwn1ojbxNNvXOBddGBSAnTrPLRhPIB0UOidelBfH3xS51zVpNKkcAty640xvop5cEhklAE0JpYJQzC2oUFrpD8mRio2iLXjhWyUNu59uJ1MjxKRCqq91UJyH5kT-_j_WrqHrg-EBAdlEq7SeyL-7udk-JMz-UDGlJybfOobT6hCfYo_O6bqCquqINAfb6R0" />
                </div>
                <div className="absolute -left-12 top-1/4 glass-morphism p-4 rounded-2xl shadow-xl border border-white/50 w-48 hidden sm:block">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="h-2 w-full bg-slate-200 rounded-full mb-2" />
                  <div className="h-2 w-3/4 bg-slate-200 rounded-full" />
                </div>
                <div className="absolute -right-8 -bottom-8 w-64 h-80 bg-blue-600 rounded-3xl overflow-hidden shadow-2xl border-4 border-white hidden lg:block">
                  <div className="h-full w-full opacity-50 bg-[url('https://placehold.co/400x600/2563eb/white?text=Fluid+UI')] bg-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent p-6 flex flex-col justify-end">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-[10px] text-white">Product Management</span>
                      <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-[10px] text-white">Dev Collaboration</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-1">32+</div>
              <p className="text-sm font-medium text-slate-500">Years Of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-1">140+</div>
              <p className="text-sm font-medium text-slate-500">Professional Staff</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-1">1.2K+</div>
              <p className="text-sm font-medium text-slate-500">Yearly Customer</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-1">99,5%</div>
              <p className="text-sm font-medium text-slate-500">Positive Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 relative">
              <div className="relative z-10 w-4/5 aspect-square rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img alt="Office Collaboration" className="object-cover w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD85DqhJVuCbmIdcQ2qt3B8vqsqBokcsKrQ7kWRFtKNrFP1OSzPkEPl8MUdal-gsp2zK2QaSlUGjfxb3H6vJ_Dn03q8ylGKv0_Zv2TD32iW5FwaH0E_VQeW9VTWXTIWvHOzuU-JeellHeUC-CHgIJ7KSDOb9pqosuvFzRvp8CdMApUxDP1Yi8RwqKemUD-sB1THqNURj2ACPcXXgpyxu15wQpH5efnBWKj_sObx8w8bnKri99z2iZfi0eMT6MxOyRo_xzO2QqeHvuc" />
              </div>
              <div className="absolute -bottom-8 -right-4 w-1/2 aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-8 border-white z-20 hidden sm:block">
                <img alt="Tech Focused Work" className="object-cover w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn2lt7NK5GLVmnFqDrN3ua3WJNZqiCUyZkL8I8VgEclzw5jITQc0WL62cc3NUdaJzRUABhXNKDwzkzrYnLY2vfutkNbP1AJ4GdzOfyTFzuodeAjrQrM0A67__kTN_ztfXk4zmIaj3NRRcbdJFh0dbl15vDF887uW7oDvoJg5A0tR65FtMGWBv4C5DWaW9DbNiu--Kg5_z_l4uTAByeWbieafE7lJBZwNX7ZE7BhL12ojV_d-5JLSxyEEhhcbAoxuRzQ3EiMvBrM-8" />
              </div>
              <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center z-30 shadow-xl border-4 border-white">
                <div className="text-white text-3xl">✦</div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-2 mb-6">
                <span className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path clipRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" fillRule="evenodd" />
                  </svg>
                </span>
                <span className="text-blue-600 font-bold tracking-wider text-sm uppercase">About Us</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
                Fuel your growth with <span className="text-slate-400">clean code</span>, clear strategy and customer-first design. <span className="text-blue-600">Bitelo</span> is the tech partner for bold ideas.
              </h2>
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-slate-600 font-medium">Streamlined development workflow for rapid launch</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-slate-600 font-medium">Dedicated expert team with niche industry focus</p>
                </div>
              </div>
              <a className="inline-flex items-center gap-2 font-bold text-slate-900 group" href="#">
                Explore our approach
                <svg className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4">Our Services</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Tailored solutions for your digital ecosystem</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
                </svg>
              </div>
              <div className="mb-4">
                <span className="px-2 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded uppercase">Strategy</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Product Discovery</h4>
              <p className="text-slate-500 mb-6 leading-relaxed">Deep dive into market requirements and user needs to build the right MVP roadmap.</p>
              <a className="text-blue-600 font-bold text-sm hover:underline" href="#">Learn more</a>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
              <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
                </svg>
              </div>
              <div className="mb-4">
                <span className="px-2 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded uppercase">Engineering</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Custom Software</h4>
              <p className="text-slate-500 mb-6 leading-relaxed">High-performance scalable architecture built with modern frameworks and best practices.</p>
              <a className="text-orange-600 font-bold text-sm hover:underline" href="#">Learn more</a>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
                </svg>
              </div>
              <div className="mb-4">
                <span className="px-2 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded uppercase">Research</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Growth Analytics</h4>
              <p className="text-slate-500 mb-6 leading-relaxed">Data-driven insights to optimize user retention and increase conversion metrics.</p>
              <a className="text-indigo-600 font-bold text-sm hover:underline" href="#">Learn more</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="w-full md:w-1/3">
              <div className="relative inline-block">
                <img alt="Client Maya" className="w-full h-auto rounded-3xl border-4 border-white/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1QjHSaUHia4f2a8VBWY9OLzo0LFLt1t2d0eeu_bKsOukmeAoj_GaOikxi2sLCrByvJnvpNabaHEbUdeIlOJyTcoP-BF5m3Cq0b0HAoQNni_dvYkxAHxT0APr1VA3iL1kDTQp-G-NN_SD-iXNUBe2o9KloQj5iD5ctwWQMhf8y-9e_7fkxe96-CLBdiQvCazARqAQc0SA3tcF_VwNNRurBDNmeo7sDSADxIMpD3yP7WCs8sbWaM_CzFDOLYGxJomgEVFGE2LE28Ac" />
                <div className="absolute -bottom-4 -right-4 p-4 bg-white rounded-2xl shadow-xl">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Client Feedback</p>
                  <div className="flex text-orange-400 mt-1">★★★★★</div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3 text-white">
              <svg className="w-12 h-12 text-blue-300 opacity-50 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H15.017C13.3591 14 12.017 12.6579 12.017 11V5C12.017 3.34315 13.3591 2 15.017 2H21.017C22.6749 2 24.017 3.34315 24.017 5V11C24.017 12.6579 22.6749 14 21.017 14H21.017V16C21.017 18.7614 18.7784 21 16.017 21H14.017ZM2.01695 21L2.01695 18C2.01695 16.8954 2.91238 16 4.01695 16H7.01695V14H3.01695C1.35909 14 0.0169492 12.6579 0.0169492 11V5C0.0169492 3.34315 1.35909 2 3.01695 2H9.01695C10.6748 2 12.017 3.34315 12.017 5V11C12.017 12.6579 10.6748 14 9.01695 14H9.01695V16C9.01695 18.7614 6.77837 21 4.01695 21H2.01695Z" />
              </svg>
              <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
                &quot;Bitelo felt like an extension of our own team — fast, smart, and truly invested in our long-term product success. They transformed our vision into reality.&quot;
              </p>
              <div>
                <h5 className="text-xl font-bold">Maya R.</h5>
                <p className="text-blue-200">Bitelo Client &amp; Tech Lead</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[3rem] overflow-hidden bg-slate-900 px-8 py-16 md:p-24 text-center">
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/40 to-transparent" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Ready to transform your business?</h2>
              <p className="text-blue-100 text-lg mb-10">
                Let&apos;s build something extraordinary together. Contact our team for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a className="w-full sm:w-auto px-10 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-all shadow-xl" href="#">
                  Get Started Now
                </a>
                <a className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all" href="#">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">B</div>
                <span className="text-xl font-extrabold tracking-tight text-slate-900">Bitelo</span>
              </div>
              <p className="text-slate-500 mb-6 leading-relaxed">Leading tech startup partner helping businesses scale through innovation and strategic design.</p>
              <div className="flex gap-4">
                <a className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all" href="#">
                  <span className="sr-only">FB</span>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                </a>
                <a className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all" href="#">
                  <span className="sr-only">TW</span>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                </a>
              </div>
            </div>
            <div>
              <h6 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Company</h6>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li><a className="hover:text-blue-600" href="#">About Us</a></li>
                <li><a className="hover:text-blue-600" href="#">Careers</a></li>
                <li><a className="hover:text-blue-600" href="#">Blog</a></li>
                <li><a className="hover:text-blue-600" href="#">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Services</h6>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li><a className="hover:text-blue-600" href="#">Web Development</a></li>
                <li><a className="hover:text-blue-600" href="#">Mobile Apps</a></li>
                <li><a className="hover:text-blue-600" href="#">UI/UX Design</a></li>
                <li><a className="hover:text-blue-600" href="#">Consultancy</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Newsletter</h6>
              <p className="text-slate-500 text-sm mb-4">Subscribe to our weekly newsletter.</p>
              <div className="relative">
                <input className="w-full bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-blue-500" placeholder="Your email" type="email" />
                <button type="button" className="absolute right-1 top-1 h-8 w-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs">
            <p>© 2023 Bitelo Tech Startup. All rights reserved.</p>
            <div className="flex gap-6">
              <a className="hover:text-slate-600" href="#">Privacy Policy</a>
              <a className="hover:text-slate-600" href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
