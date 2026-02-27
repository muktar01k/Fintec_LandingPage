import { useState, useEffect } from 'react';

export default function LandingHomepagePage2() {
  const [activeTab, setActiveTab] = useState<'data' | 'airtime' | 'electricity' | 'cable'>('data');

  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth');
    return () => document.documentElement.classList.remove('scroll-smooth');
  }, []);

  return (
    <div className="scroll-smooth bg-midnight text-white font-sans antialiased selection:bg-cyan-400/30 min-h-screen">
      {/* Sticky Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
        <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a className="text-2xl font-bold tracking-tighter flex items-center gap-2" href="#">
              <div className="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-[#020617]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} />
                </svg>
              </div>
              NovaPay
            </a>
            <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
              <a className="hover:text-cyan-400 transition-colors" href="#products">Products</a>
              <a className="hover:text-cyan-400 transition-colors" href="#pricing">Pricing</a>
              <a className="hover:text-cyan-400 transition-colors" href="#agents">Agents</a>
              <a className="hover:text-cyan-400 transition-colors" href="#security">Security</a>
              <a className="hover:text-cyan-400 transition-colors" href="#faq">Help</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button type="button" className="hidden md:block text-sm font-semibold hover:text-cyan-400 transition-colors">Login</button>
            <button type="button" className="bg-cyan-400 text-[#020617] px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-white transition-all transform hover:scale-105">
              Create Account
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden hero-gradient">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-[120px] -z-10" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10" />
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 text-xs font-semibold text-cyan-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                </span>
                Trusted by 50,000+ Active Users
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1]">
                Buy Data &amp; <br />
                <span className="text-cyan-400">Airtime in Seconds.</span>
                <br />
                Pay Bills Instantly.
              </h1>
              <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
                Experience the fastest way to stay connected. No downtime, instant value delivery, and secure transactions for every Nigerian.
              </p>
              <div className="flex flex-wrap gap-4">
                <button type="button" className="bg-cyan-400 text-[#020617] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white transition-all glow-cyan">
                  Get Started Now
                </button>
                <button type="button" className="bg-slate-800 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-700 transition-all border border-slate-700 flex items-center gap-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.5 2H6.5A2.5 2.5 0 004 4.5v15A2.5 2.5 0 006.5 22h11a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0017.5 2zM12 20a1 1 0 110-2 1 1 0 010 2zm5-4H7V5h10v11z" />
                  </svg>
                  Download App
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 mx-auto w-[280px] lg:w-[320px] bg-slate-900 border-[8px] border-slate-800 rounded-[3rem] shadow-2xl overflow-hidden aspect-[9/19]">
                <div className="h-full bg-slate-950 p-6 space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700" />
                    <div className="w-8 h-8 rounded-lg bg-cyan-400/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 4.36 6 6.92 6 10v5l-2 2v1h16v-1l-2-2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-400/20 to-[#020617] p-4 rounded-2xl border border-cyan-400/30">
                    <p className="text-[10px] text-slate-400">Total Balance</p>
                    <p className="text-2xl font-bold">₦45,250.00</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-800 p-3 rounded-xl aspect-square flex flex-col items-center justify-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20" />
                      <span className="text-[10px]">Data</span>
                    </div>
                    <div className="bg-slate-800 p-3 rounded-xl aspect-square flex flex-col items-center justify-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-green-500/20" />
                      <span className="text-[10px]">Airtime</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 animate-float-nova delay-100 bg-[#0f172a] p-4 rounded-2xl border border-slate-700 shadow-xl">
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                </svg>
              </div>
              <div className="absolute bottom-20 -left-12 animate-float-nova bg-[#0f172a] p-4 rounded-2xl border border-slate-700 shadow-xl">
                <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Purchase Widget */}
        <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
          <div className="glass rounded-3xl p-1 shadow-2xl overflow-hidden">
            <div className="bg-[#0f172a]/80 p-8 lg:p-12 rounded-[1.4rem] grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="flex gap-8 border-b border-slate-800 mb-8 overflow-x-auto pb-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab('data')}
                    className={`pb-4 font-bold whitespace-nowrap ${activeTab === 'data' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-500 hover:text-white'}`}
                  >
                    Data Purchase
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('airtime')}
                    className={`pb-4 font-bold whitespace-nowrap ${activeTab === 'airtime' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-500 hover:text-white'}`}
                  >
                    Airtime Top-up
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('electricity')}
                    className={`pb-4 font-bold whitespace-nowrap ${activeTab === 'electricity' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-500 hover:text-white'}`}
                  >
                    Electricity Bills
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('cable')}
                    className={`pb-4 font-bold whitespace-nowrap ${activeTab === 'cable' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-500 hover:text-white'}`}
                  >
                    Cable TV
                  </button>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Network Provider</label>
                    <select className="w-full bg-slate-900 border border-slate-800 rounded-xl py-4 focus:ring-cyan-400 text-slate-200">
                      <option>Select Network</option>
                      <option>MTN Nigeria</option>
                      <option>Airtel Nigeria</option>
                      <option>Glo Nigeria</option>
                      <option>9mobile</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone Number</label>
                    <input className="w-full bg-slate-900 border border-slate-800 rounded-xl py-4 focus:ring-cyan-400" placeholder="0810 000 0000" type="tel" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Data Plan</label>
                    <select className="w-full bg-slate-900 border border-slate-800 rounded-xl py-4 focus:ring-cyan-400 text-slate-200">
                      <option>Select Plan</option>
                      <option>10GB Monthly - ₦3,000</option>
                      <option>20GB Monthly - ₦5,000</option>
                      <option>40GB Monthly - ₦10,000</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <button type="button" className="w-full bg-cyan-400 text-[#020617] font-bold py-4 rounded-xl hover:scale-105 transition-transform">
                      Continue to Pay
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 space-y-6">
                <h3 className="font-bold text-lg border-b border-slate-800 pb-4">Order Summary</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Transaction Fee</span>
                    <span>₦0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Cashback (2%)</span>
                    <span className="text-emerald-400">+ ₦60.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Processing Time</span>
                    <span className="text-cyan-400">Instant</span>
                  </div>
                  <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                    <span className="font-bold">Total Payable</span>
                    <span className="text-2xl font-black text-cyan-400">₦3,000</span>
                  </div>
                </div>
                <p className="text-[10px] text-slate-500 italic text-center">Value will be delivered within 30 seconds</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-32 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-extrabold">Why Choose NovaPay?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Engineered for speed, built for reliability. We provide the most seamless transaction experience in Nigeria.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'M13 10V3L4 14h7v7l9-11h-7z', title: 'Instant Delivery', desc: 'No delays. Your data or airtime hits your balance the moment you pay.' },
              { icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Best Rates', desc: 'Enjoy direct-from-network prices with no hidden charges or middlemen fees.' },
              { icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', title: 'Secure Wallet', desc: 'Multi-layered encryption and 2FA protection for every kobo you store.' },
              { icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Instant Cashback', desc: 'Earn as you spend. Get up to 5% back on every transaction you make.' },
            ].map((item) => (
              <div key={item.title} className="group p-8 rounded-3xl bg-[#0f172a] border border-slate-800 hover:border-cyan-400/50 hover:bg-slate-900/50 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d={item.icon} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-3">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Network Logos */}
        <section className="py-12 bg-slate-900/30 border-y border-slate-800/50">
          <div className="max-w-7xl mx-auto px-6 overflow-hidden">
            <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all">
              <img alt="MTN" className="h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOF5o9NjOBp9R1yTtA8TdqeYJqbxvqn3RX4PpO6fjCiaHopwFrKS8F6CxfG5J5ZHlE4d0af46JT1MFZMDEbMHcmtSbUfubhBf1lFZFgBerVqqJUOBqDNBxLyZSSFBhpT7mQueU6v4peLOiBEDbgGBkx5PI9oy4Aly4F1DmX86EdJvbYPnlCPSGHOe289tA3ZPHONdWsmZrmoMN8VD03nKPqKMNY7n-F4iO_UHoeqU3pOCC4SD9qsEloSlRnbiJRX-dOkwe-_hVS2Uh" />
              <img alt="Airtel" className="h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzkllo4qlhPoskVual9lgaHETkN5NYPfeIT_RW6WcjssfubcV9zAPLid4Kfr715SMA8wj7Kl3nxY3PDPm5CTaleud3f-AhhNiJvOupQy8D8YQrTaoYuPqQh58c1X_qcxJaR80Wy9Hm4cX-ONh_38BJ0ZTXePuXCI6UwmYnvzzAioOfRgse0Fl3yL17VaK_tEX14mJO0uPVXuyiJ9NKQhpaPw9QlEoDP5lfkoYy597V2UMhTkh9oYzBDeY7Mza20nTv2wUFiVRgUpHB" />
              <img alt="Glo" className="h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoVj_mmZJBVA8oa6iAFv8K-qd1IAXoGPklLKNCwwQMarcq3kXy1-oDKho1WeKyh5G3V7i-bLmit9bJT_4P-OmS2u9hvC1Jr-GjExDiplQUDw8glOwOSFCgFMd7phE7gZDAq6vzveZhhRSgZhEMWy39bf8lSWpmKVST4BHEUMYsDrut8LMIfFo3xJ41V0eXRj3OxZACeLHahT3T3l5LkUV3T0z78PkQX7NYAHCIjK5oSJKHnb3FpuKKEFRdGGuCznNAjcCwr5YfkGHt" />
              <img alt="9mobile" className="h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI7uolYLF9HpjsrSZej7sV70oQ9oJeoFCZ_9PsP7WGkHmghl7FAhsQ6jBODq2qgT-G-Sr77OQq76YU8gk5QK_DDQ2VXJabCLLKbyWQhYnORQrluCydtkYz_ggVQRpyNiJc18AQlI4xleF8-kyhmp-EEhhN0MwLRU68cg60SXrG-GvhAfA1TrxhHCeGQrorBAYQ1nUF-XX_Zw6L53BG8HMh1u2tedfEvTwlDrKz9e9eqJxenkQ7GIN4EYtdfWfxbyBoF7NP-sNPLFe1" />
              <img alt="DSTV" className="h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMDrt65yXNM12AhY0u3cd0C9rzE5OKYqVSkpDonl0rGoiEdm1zGAQ3vcuhdJMXxBGWU-eMeuLRumyplP74yt0jrYvXxQLrn07mfJmhTXpOnzDHyRmk0ocOGUkH2HJNGRxqJ_Te3Stqg-0D6ZmFnqNQNLekbYLsADz5IA2ZSbk0Ahj_tldq_LzTErkeXE0hPV8ScWKwSDFk6gE41ywX6s6Rt_qX4xQ9nrCvuqwD5bi42WSI2eYiqufdDH26bV2T371hSf48fVMXTZXp" />
              <img alt="IKEDC" className="h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWL19TryYrLVYocR88WsDAkUpYfAQWMejCCzHoEscmdRDiiMPeq7ySYI5EuMkRRbUcBvZAFOT3DBEfNCnxGAb_6mmC6WUNKPreACOtIaTcV9ZycFcM0udTMw3UJtl6ylJw8_Vj27I0PeY-RShDzQ8sSq0YXglKwaczsFpOPZHnd0qJ0EQXw6McslRpzXtnrpLUl2sTLJLhm8sFPBFaUuYHyDecVsZ6wmhiS_aKV_6N3Mk3Kajx4qWOR5hgXPW7B9C0RsPo8pp4ijGj" />
            </div>
          </div>
        </section>

        {/* Agent Panel */}
        <section className="py-32 relative overflow-hidden" id="agents">
          <div className="max-w-7xl mx-auto px-6">
            <div className="glass rounded-[3rem] p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 space-y-8">
                <h2 className="text-4xl lg:text-5xl font-black">
                  Empower Your Business <br />
                  <span className="text-cyan-400">Become a Nova Agent.</span>
                </h2>
                <p className="text-slate-400 text-lg">
                  Earn massive commissions by reselling data, airtime, and paying bills for others. Our portal provides advanced reporting and API access.
                </p>
                <ul className="space-y-4">
                  {['Lowest reseller prices in Nigeria', 'Dedicated agent support manager', 'Developer-friendly API documentation'].map((text) => (
                    <li key={text} className="flex items-center gap-3 font-medium text-slate-200">
                      <div className="w-5 h-5 bg-cyan-400 rounded-full flex items-center justify-center text-[#020617]">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} />
                        </svg>
                      </div>
                      {text}
                    </li>
                  ))}
                </ul>
                <button type="button" className="bg-cyan-400 text-[#020617] px-10 py-5 rounded-2xl font-black text-xl hover:bg-white transition-all transform hover:-translate-y-1">
                  Open Agent Portal
                </button>
              </div>
              <div className="flex-1 relative">
                <div className="bg-slate-900 rounded-3xl border border-slate-700 shadow-2xl p-4 overflow-hidden relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono tracking-widest">AGENT_DASHBOARD_V2</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="h-24 bg-slate-800 rounded-xl p-4 flex flex-col justify-between">
                      <span className="text-[10px] text-slate-400">Monthly Commission</span>
                      <span className="text-xl font-bold text-cyan-400">₦85,400.00</span>
                    </div>
                    <div className="h-24 bg-slate-800 rounded-xl p-4 flex flex-col justify-between">
                      <span className="text-[10px] text-slate-400">Total Transactions</span>
                      <span className="text-xl font-bold">1,245</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-8 bg-slate-800 rounded-lg w-full" />
                    <div className="h-8 bg-slate-800/50 rounded-lg w-3/4" />
                    <div className="h-8 bg-slate-800 rounded-lg w-full" />
                  </div>
                </div>
                <div className="absolute -inset-10 bg-cyan-400/20 blur-[100px] -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="py-24 bg-[#0f172a]/50" id="security">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="w-16 h-16 bg-cyan-400/10 rounded-2xl flex items-center justify-center text-cyan-400 mx-auto mb-8">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
            </div>
            <h2 className="text-4xl font-extrabold mb-6">Bank-Grade Security</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-16 text-lg">
              Your data and funds are protected by the same encryption standards used by leading global banks.
            </p>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { title: 'AES-256 Encryption', desc: 'All sensitive data is encrypted end-to-end.' },
                { title: 'Two-Factor Auth', desc: 'Mandatory verification for all withdrawals and major changes.' },
                { title: 'PCIDSS Compliant', desc: 'Fully certified to handle payment card information securely.' },
              ].map((item) => (
                <div key={item.title} className="space-y-4">
                  <h5 className="text-lg font-bold">{item.title}</h5>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-cyan-400 to-blue-600 rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden group">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#020617]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
            <h2 className="text-4xl lg:text-6xl font-black text-[#020617] mb-8 relative z-10">
              Start spending smarter today.
            </h2>
            <p className="text-[#020617]/70 text-lg lg:text-xl font-medium mb-12 max-w-2xl mx-auto relative z-10">
              Join 50,000+ Nigerians who trust NovaPay for their daily bills and connectivity.
            </p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              <button type="button" className="bg-[#020617] text-white px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-2xl">
                Create Free Account
              </button>
              <button type="button" className="bg-white/20 backdrop-blur-md text-[#020617] px-10 py-5 rounded-2xl font-bold text-xl border border-white/30 hover:bg-white/40 transition-all">
                Download Mobile App
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0f172a] border-t border-slate-800 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <a className="text-2xl font-bold tracking-tighter flex items-center gap-2" href="#">
              <div className="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-[#020617]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} />
                </svg>
              </div>
              NovaPay
            </a>
            <p className="text-slate-400 text-sm leading-relaxed">
              The preferred payment platform for thousands of Nigerians. Fast, secure, and rewarding bill payments and connectivity.
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-400 hover:text-[#020617] transition-colors" href="#">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-400 hover:text-[#020617] transition-colors" href="#">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
              </a>
            </div>
          </div>
          <div>
            <h6 className="font-bold mb-6 text-white">Products</h6>
            <ul className="space-y-4 text-sm text-slate-400">
              {['Data Services', 'Airtime Top-up', 'TV Subscription', 'Electricity Utility', 'Agent Portal'].map((link) => (
                <li key={link}><a className="hover:text-cyan-400 transition-colors" href="#">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h6 className="font-bold mb-6 text-white">Company</h6>
            <ul className="space-y-4 text-sm text-slate-400">
              {['About Us', 'Pricing & Rates', 'Terms of Service', 'Privacy Policy', 'Careers'].map((link) => (
                <li key={link}><a className="hover:text-cyan-400 transition-colors" href="#">{link}</a></li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h6 className="font-bold mb-6 text-white">Stay Updated</h6>
            <div className="relative">
              <input className="w-full bg-slate-900 border border-slate-800 rounded-xl py-4 pl-4 pr-12 focus:ring-cyan-400" placeholder="email@example.com" type="email" />
              <button type="button" className="absolute right-2 top-2 bottom-2 bg-cyan-400 text-[#020617] px-4 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
            <p className="text-[10px] text-slate-500">Registered in Nigeria. 123 Nova Tower, Victoria Island, Lagos.</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs">© 2024 NovaPay Technologies Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <img alt="App Store" className="h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHJRGW2Yc5yvvWGD_KdY9nu9VYBgEnHWxOPL3hXrIndWlcgpvoUrLEnx1SuU-XBHeDqsgUMXFsdGqjY65mW37WBFRCbabXi_SzMLAa1Di0v5Wl4LVY94aiXDoZeISRn7i_TbILcqcejlov2-Ktng_Vu3mWPCGUH805TO4ByfrceA2c_wvsilxUktYURA60j3A0MpvvV4lzSxND7AdwOwDihW0_-WgDSFnPvL8eVpi2Jzs8834Ake4al9j8NFhZe_1CLWoXxcstPvTL" />
            <img alt="Play Store" className="h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqb9h2Rv2CxwVRAp3FVV2kl2eaHr2IuVTUguhgOd2LIpTCwp8si4M3bd_Tfs_zwwj6uUTzbmvmq36X0GS8lsgN4fMgeicmVYxvwVPLGm84R4HhUonv01R9gBv0NauhCvKhUoyfrPbQU7SK5WMBDJyTLBb2XIJl8Dyef5xKmXCbGSsc1NnUdwiYNUC_2kLev-6FwoYCnvebo82JuVa2tSRSOjLGS-3RJIj-xyzZMFHibmmVo4TIMryGe_a7F15HJBdxuG_5gbeuuSpQ" />
          </div>
        </div>
      </footer>
    </div>
  );
}
