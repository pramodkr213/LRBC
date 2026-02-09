import { useState, useEffect } from "react";
const automationImg = "/assets/automation.png";
const steelImg = "/assets/steel.png";
const pharmaImg = "/assets/pharma.png";
const workPilotImg = "/assets/workpilot.png";
const nonwovenImg = "/assets/nonwoven.png";
const moldingImg = "/assets/molding.png";
const corporateImg = "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2074";

export default function LRBCLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formState, setFormState] = useState({ status: "idle", name: "", email: "", industry: "Steel Manufacturing", message: "" });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          if (entry.target.id && ["hero", "expertise", "services", "process", "workpilot", "contact"].includes(entry.target.id)) {
            setActiveSection(entry.target.id);
          }
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal-on-scroll, section[id]").forEach(el => observer.observe(el));

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-petrol-600 z-[60] transition-all duration-100 ease-out" style={{ width: `${scrollProgress}%` }}></div>

      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-xl shadow-lg py-3" : "bg-transparent py-5"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm border border-white/10 hover:shadow-md transition-all">
              <img src="/Lrbc.png" alt="LRBC Logo" className="h-10 sm:h-12 w-auto object-contain" />
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center gap-8 font-bold text-[18px] uppercase tracking-widest ${scrolled ? "text-slate-600" : "text-white/80"}`}>
            {[["Expertise", "expertise"], ["Services", "services"], ["Process", "process"], ["Work Pilot", "workpilot"], ["Contact", "contact"]].map(([label, id]) => (
              <a 
                key={id} 
                href={`#${id}`} 
                className={`relative py-1 transition-colors hover:text-petrol-600 ${activeSection === id ? "text-petrol-600" : ""}`}
              >
                {label}
                {activeSection === id && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-petrol-600 rounded-full"></span>}
              </a>
            ))}
            <a href="#contact" className="bg-petrol-600 text-white px-6 py-2.5 rounded-full hover:bg-petrol-700 transition-all shadow-[0_10px_20px_-5px_rgba(13,74,92,0.4)] active:scale-95">Consult Now</a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
             <svg className={`w-8 h-8 transition-colors ${scrolled ? "text-slate-900" : "text-white"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
             </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-slate-950/95 backdrop-blur-2xl z-[100] transition-all duration-500 md:hidden ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
          <div className="flex flex-col items-center justify-center h-full gap-8 text-center">
            {[["Expertise", "expertise"], ["Services", "services"], ["Process", "process"], ["Work Pilot", "workpilot"], ["Contact", "contact"]].map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-black text-white hover:text-petrol-600 transition-colors tracking-tighter">{label}</a>
            ))}
            <button onClick={() => setIsMobileMenuOpen(false)} className="mt-8 bg-petrol-600 text-white px-6 py-2.5 rounded-full text-xl font-black">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-24 lg:pt-56 lg:pb-40 overflow-hidden bg-slate-950">
        {/* Authentic Background Layer */}
        <div className="absolute inset-0 z-0">
          <img src={corporateImg} alt="Business Solutions" className="w-full h-full object-cover opacity-60" />
          <img src={steelImg} alt="Industrial Foundation" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay brightness-75" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/20 to-slate-950"></div>
          <div className="absolute inset-0 bg-grid opacity-5"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="reveal-on-scroll inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-2.5 rounded-full mb-12 backdrop-blur-2xl">
              <div className="w-2.5 h-2.5 rounded-full bg-petrol-600 animate-pulse shadow-[0_0_10px_theme(colors.petrol.600)]"></div>
              <span className="text-white/80 font-black uppercase tracking-[0.4em] text-[15px]">Empowering 30+ Companies with Strategic Precision</span>
            </div>
            
            <h1 className="animate-fade-in-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 md:mb-12 leading-[1] md:leading-[0.95] tracking-tighter" style={{animationDelay: '100ms'}}>
              The Future of Indian Manufacturing: <br className="hidden sm:block" /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-petrol-600 via-cyan-high to-teal-400">Systems that Scale.</span>
            </h1>

            <p className="animate-fade-in-up text-lg md:text-xl lg:text-2xl text-white/50 mb-12 md:mb-16 max-w-3xl font-medium leading-relaxed tracking-tight" style={{animationDelay: '300ms'}}>
              Building the foundational systems that transform messy operations into organised, high-growth organisations. We empower MSMEs and manufacturing plants to move beyond daily "firefighting" and into strategic growth.
            </p>

            <div className="animate-fade-in-up flex flex-col sm:flex-row items-center gap-10 mb-20" style={{animationDelay: '500ms'}}>
              <a href="#contact" className="w-full sm:w-auto bg-petrol-600 text-white px-10 py-5 rounded-2xl text-xl font-black hover:bg-petrol-700 transition-all shadow-[0_30px_60px_-15px_rgba(13,74,92,0.4)] hover:scale-105 active:scale-95 group flex items-center gap-3">
                Initiate Your Audit
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
              <a href="#workpilot" className="w-full sm:w-auto text-white/70 border-b-2 border-white/20 px-4 py-4 text-xl font-black hover:text-petrol-600 hover:border-cyan-high transition-all hover:translate-x-2">Explore Work Pilot Intelligence</a>
            </div>

            {/* Accreditation Trust Bar */}
            <div className="animate-fade-in-up flex flex-wrap items-center gap-6 md:gap-10 opacity-80" style={{animationDelay: '700ms'}}>

               <div className="flex flex-col items-start border-l-2 border-white/20 pl-4 md:pl-6 hover:translate-x-2 transition-transform duration-300">
                  <span className="text-white text-[14px] md:text-[16px] font-black uppercase tracking-[0.3em] mb-1 text-cyan-high">MSME Certified</span>
                  <span className="text-white/80 text-[16px] md:text-[18px] font-bold font-mono">UDYAM-TS-02-0312494</span>
               </div>
               <div className="flex flex-col items-start border-l-2 border-white/20 pl-4 md:pl-6 hover:translate-x-2 transition-transform duration-300">
                  <span className="text-white text-[14px] md:text-[16px] font-black uppercase tracking-[0.3em] mb-1 text-cyan-high">Operation Hub</span>
                  <span className="text-white/80 text-[16px] md:text-[18px] font-bold uppercase tracking-widest leading-none">Somajiguda, Hyderabad</span>
               </div>
               <div className="hidden md:flex flex-col items-start border-l-2 border-white/20 pl-6 hover:translate-x-2 transition-transform duration-300">
                  <span className="text-white text-[14px] md:text-[16px] font-black uppercase tracking-[0.3em] mb-1 text-cyan-high">Impact Radius</span>
                  <span className="text-white/80 text-[16px] md:text-[18px] font-bold uppercase tracking-widest">Loom Roll to Cloud</span>
               </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-6 md:left-24 animate-bounce text-white/5">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>
      </section>

      {/* Trusted Partners / Logo Cloud */}
      <section className="py-20 bg-slate-950 border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
           <p className="text-white/60 text-md font-black uppercase tracking-[0.3em] mb-12 reveal-on-scroll">Trusted by Industry Leaders Worldwide</p>
        </div>
        {/* Marquee Container */}
        <div className="relative overflow-hidden">
           <div className="flex items-center gap-16 animate-marquee">
              {/* First set of logos */}
              <img src="/ARV.png" alt="ARV" className="h-12 sm:h-16 md:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
              <img src="/Avenior.jpeg" alt="Avenior" className="h-12 sm:h-16 md:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
              <img src="/Colorplas.png" alt="Colorplas" className="h-12 sm:h-16 md:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
              <img src="/Chefmate.png" alt="Chefmate" className="h-12 sm:h-16 md:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
              <img src="/Navtech.jpeg" alt="Navtech" className="h-12 sm:h-16 md:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
              <img src="/Sant_wires.jpeg" alt="Sant Wires" className="h-12 sm:h-16 md:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
              {/* Duplicate set for seamless loop */}
              <img src="/ARV.png" alt="ARV" className="h-12 sm:h-16 md:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
              <img src="/Avenior.jpeg" alt="Avenior" className="h-12 sm:h-16 md:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
              <img src="/Colorplas.png" alt="Colorplas" className="h-12 sm:h-16 md:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
              <img src="/Chefmate.png" alt="Chefmate" className="h-12 sm:h-16 md:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
              <img src="/Navtech.jpeg" alt="Navtech" className="h-12 sm:h-16 md:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
              <img src="/Sant_wires.jpeg" alt="Sant Wires" className="h-12 sm:h-16 md:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
           </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-600/5 rounded-full blur-[120px] z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { val: "30+", label: "Companies Served", desc: "Across 4 continents" },
              { val: "15+", label: "Industries Mastered", desc: "Deep domain expertise" },
              { val: "100%", label: "Client Retention", desc: "Long-term partnerships" }
            ].map((s, i) => (
              <div key={i} className="reveal-on-scroll p-8 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-500">
                <div className="text-5xl sm:text-6xl font-black text-white mb-3 tracking-tighter">{s.val}</div>
                <div className="text-blue-400 font-black uppercase tracking-[0.2em] text-sm sm:text-md mb-2">{s.label}</div>
                <div className="text-white/60 text-sm sm:text-md font-medium">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Philosophy Section */}
      <section id="philosophy" className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="reveal-on-scroll text-center mb-20">
              <div className="text-petrol-600 font-black uppercase tracking-[0.4em] text-lg sm:text-2xl mb-6">From Cost Centre to Profit Centre</div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-950 mb-8 leading-[0.9] tracking-tighter">
                Stop Managing People. <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-petrol-600 to-cyan-high">Start Building Systems.</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {[
                { 
                  icon: "⚙️", 
                  title: "Systems Create Organisations", 
                  desc: "An organisation is only as strong as its processes. We help you move from a person-dependent business to a system-driven powerhouse." 
                },
                { 
                  icon: "📈", 
                  title: "From Cost to Profit", 
                  desc: "Most owners view operations as a cost centre. Our tailored systems turn your floor into a Profit Centre by eliminating leaks, delays, and manual errors." 
                },
                { 
                  icon: "⏰", 
                  title: "Reclaim Your Time", 
                  desc: "Daily operations shouldn't own you. We automate the repetitive so you can focus on the strategic." 
                }
              ].map((item, i) => (
                <div key={i} className="reveal-on-scroll group p-10 lg:p-12 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-petrol-600/30 hover:-translate-y-4 transition-all duration-500 shadow-sm hover:shadow-xl" style={{transitionDelay: `${i * 100}ms`}}>
                  <div className="text-5xl mb-8">{item.icon}</div>
                  <h3 className="text-2xl lg:text-3xl font-black text-slate-950 mb-6 tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 font-medium text-lg leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-40 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 mb-24 relative z-10">
          <div className="reveal-on-scroll flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="max-w-3xl">
              <div className="text-petrol-600 font-black uppercase tracking-[0.4em] text-lg sm:text-2xl mb-6">Sector Specialization</div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-950 mb-6 md:mb-8 leading-[0.9] md:leading-[0.85] tracking-tighter">Industrial <br className="hidden sm:block" /> Mastery</h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-500 font-medium leading-relaxed">Specialized operational strategies for high-stakes manufacturing environments.</p>
            </div>
            <div className="hidden lg:block w-40 h-[2px] bg-slate-100 mb-8"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
          {[
            { title: "Precision Moulding", img: moldingImg, tag: "Injection Moulding", desc: "Automated control for complex injection cycles." },
            { title: "Steel Manufacturing", img: steelImg, tag: "Heavy Industry", desc: "Resilient throughput analytics for heavy production." },
            { title: "Textile & Non-Woven", img: nonwovenImg, tag: "Technical Textiles", desc: "Process optimisation for high-yield technical textiles." },
            { title: "Pharmaceutical", img: pharmaImg, tag: "Care & Compliance", desc: "Strict regulatory oversight and sterile environment compliance." },
            { title: "Factory Automation", img: automationImg, tag: "Smart Systems", desc: "End-to-end line integration and SCADA controls." }
          ].map((item, i) => (
            <div key={i} className="reveal-on-scroll group relative overflow-hidden rounded-[3rem] bg-slate-50 border border-slate-100 transition-all duration-700 hover:-translate-y-4 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)]" style={{transitionDelay: `${i * 100}ms`}}>
              <div className="h-96 overflow-hidden relative">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-10 left-10">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[9px] font-black uppercase tracking-[0.3em] text-white border border-white/20 mb-4">{item.tag}</span>
                  <h3 className="text-4xl font-black text-white tracking-tighter leading-none">{item.title}</h3>
                </div>
              </div>
              <div className="p-12">
                <p className="text-slate-500 leading-relaxed mb-10 font-bold text-lg">{item.desc}</p>
                <button className="text-petrol-600 font-black flex items-center gap-4 group/btn uppercase text-[14px] tracking-[0.4em] hover:tracking-[0.5em] transition-all">
                  Analyze Methodology 
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center transition-all group-hover/btn:bg-petrol-600 group-hover/btn:text-white shadow-lg">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Consultancy Process Section */}
      <section id="process" className="py-40 bg-white relative overflow-hidden">
         <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-24">
               <div className="lg:w-1/2 reveal-on-scroll">
                  <div className="text-petrol-600 font-black uppercase tracking-[0.4em] text-lg sm:text-2xl mb-8">Deployment Methodology</div>
                  <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-950 mb-8 md:mb-12 leading-[0.9] md:leading-[0.85] tracking-tighter">The LRBC <br className="hidden sm:block" /> Engineering Flow</h2>
                  <p className="text-base sm:text-lg md:text-xl text-slate-500 mb-12 md:mb-16 font-medium leading-relaxed max-w-xl">We don't just advise; we engineer your business processes to ensure technical resilience and perpetual scaling.</p>
                  
                  <div className="space-y-16">
                     {[
                        { step: "Audit", title: "Diagnostic Audit", desc: "Rigorous diagnostic of factory floor throughput and supply chain status." },
                        { step: "Design", title: "Strategy Architecture", desc: "Building the custom technical blueprint for automation and management." },
                        { step: "Deploy", title: "Implementation Ops", desc: "Execution of G-Suite, Tally API, and Machine-Level integration." },
                        { step: "Scale", title: "Scale Guarding", desc: "Periodic optimization and dashboard monitoring to maintain peak efficiency." }
                     ].map((p, i) => (
                        <div key={i} className="flex gap-10 group">
                           <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center text-slate-200 text-3xl font-black group-hover:bg-petrol-600 group-hover:text-white transition-all duration-500 shadow-sm">{i+1}</div>
                           <div className="pt-2 border-t border-slate-100 w-full">
                              <h4 className="text-2xl font-black text-slate-950 mb-3 uppercase tracking-tight">{p.title}</h4>
                              <p className="text-slate-500 font-bold text-lg leading-relaxed">{p.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="lg:w-1/2 relative reveal-on-scroll">
                  <div className="relative rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)]">
                     <img src={pharmaImg} alt="Process" className="w-full h-[400px] sm:h-[600px] lg:h-[800px] object-cover" />
                     <div className="absolute inset-0 bg-petrol-600/10 mix-blend-overlay"></div>
                     <div className="absolute top-6 left-6 right-6 sm:top-12 sm:left-12 sm:right-12 p-6 sm:p-10 bg-white/10 backdrop-blur-3xl rounded-[1.5rem] sm:rounded-[2.5rem] border border-white/20">
                        <div className="text-3xl sm:text-5xl font-black text-white mb-2 sm:mb-4 tracking-tighter">99.8%</div>
                        <p className="text-white/60 font-black uppercase text-[8px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em]">Historical Production Uptime Achieved</p>
                     </div>
                  </div>
                  {/* Structural detail */}
                  <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-slate-100 -z-10 rounded-[3rem]"></div>
               </div>
            </div>
         </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-40 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '60px 60px'}}></div>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="reveal-on-scroll max-w-3xl">
              <div className="text-petrol-600 font-black uppercase tracking-[0.4em] text-2xl mb-6">Strategic Intelligence</div>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.85]">Consultancy <br /> Modules</h2>
            </div>
            <p className="reveal-on-scroll text-white/60 text-lg md:text-xl font-medium max-w-sm mb-4 leading-relaxed tracking-tight">Industrial expertise to enhance and boost your business operations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Enquiry to Dispatch", label: "End-to-End Flow", desc: "Seamless management from initial inquiry through vendor sync to final dispatch." },
              { title: "Digital Blueprint", label: "G-Suite & Adobe", desc: "Implementation and implementation of G-Suite solutions and Adobe Task workflows." },
              { title: "Financial Core", label: "Tally Integration", desc: "Rigorous Tally synchronization with real-time statutory financial reporting." }
            ].map((s, i) => (
              <div key={i} className="reveal-on-scroll group p-12 bg-white/5 rounded-[3rem] border border-white/10 hover:border-cyan-high/50 transition-all duration-500 hover:-translate-y-4">
                <div className="text-petrol-600 font-black uppercase tracking-[0.3em] text-[16px] mb-8 border-b border-white/10 pb-4 inline-block">{s.label}</div>
                <h3 className="text-4xl font-black text-white leading-[1.1] mb-8 tracking-tighter">{s.title}</h3>
                <p className="text-white/40 font-bold text-lg mb-10 leading-relaxed">{s.desc}</p>
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-petrol-600 group-hover:border-cyan-high transition-all cursor-pointer">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Spotlight: Work Pilot Ecosystem */}
      <section id="workpilot" className="py-40 bg-slate-950 overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-stretch">
            <div className="lg:w-2/5 reveal-on-scroll flex flex-col justify-center">
              <div className="inline-flex items-center gap-3 bg-petrol-600/10 px-6 py-3 rounded-full mb-10 border border-petrol-600/30 w-fit">
                 <div className="w-2.5 h-2.5 rounded-full bg-petrol-600 animate-pulse"></div>
                 <span className="text-petrol-600 text-2xl font-black tracking-[0.3em] uppercase">Core Operating System</span>
              </div>
              <h2 className="text-6xl md:text-7xl font-black mb-12 text-white tracking-tighter leading-[0.85]">Work Pilot <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-petrol-600 to-cyan-high">Intelligence</span></h2>
              
              <div className="space-y-4">
                {[
                  { title: "Smart Delegation & Point-Based Rewards", img: automationImg, desc: "Automatically route tasks based on priority and skill level. Every completion earns Efficiency Points, turning manual work into a measurable performance game." },
                  { title: "Live Compliance Ledger", img: pharmaImg, desc: "Instantly track what's Done, Overdue, or Pending. No more asking for status updates; the data is live on your screen." },
                  { title: "5-Minute Weekly Review (WRM)", img: moldingImg, desc: "Eliminate long, unproductive meetings. The WRM Dashboard generates your agenda automatically based on team performance data." },
                  { title: "FMS (Flow Management System) SYNCED", img: steelImg, desc: "Seamless management of your high-stakes flows: Enquiry to Dispatch, Purchase Order, Requirement to Fulfilment, Order to Delivery, etc." }
                ].map((mod, i) => (
                  <div key={i} className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-high/50 transition-all duration-500 cursor-pointer">
                    <img src={mod.img} alt={mod.title} className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-50 transition-opacity duration-700" />
                    <div className="relative p-10 flex gap-8 items-center">
                       <div className="w-16 h-16 rounded-2xl bg-petrol-600/10 border border-petrol-600/20 flex items-center justify-center text-petrol-600 group-hover:bg-petrol-600 group-hover:text-white transition-all animate-float" style={{animationDelay: `${i * 0.5}s`}}>
                          <span className="text-3xl font-black italic">{i+1}</span>
                       </div>
                       <div>
                          <h4 className="text-2xl font-black text-white mb-2">{mod.title}</h4>
                          <p className="text-white/60 font-bold text-lg leading-relaxed">{mod.desc}</p>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-3/5 reveal-on-scroll relative">
               <div className="lg:sticky lg:top-40 bg-white/5 rounded-[2.5rem] sm:rounded-[4rem] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur-2xl">
                  {/* Genuine Enterprise UI Mockup */}
                  <div className="p-6 sm:p-10 border-b border-white/5 bg-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                     <div className="flex items-center gap-4 sm:gap-6">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-petrol-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-black text-lg sm:text-xl">W</div>
                        <div className="text-white/80 font-black text-sm sm:text-lg tracking-[0.3em] sm:tracking-[0.4em] uppercase">Control Center v4.12</div>
                     </div>
                     <div className="flex gap-3 sm:gap-4">
                        <div className="px-3 py-1.5 bg-emerald-500/10 text-emerald-500 rounded-lg sm:rounded-xl text-[10px] sm:text-[13px] font-black uppercase tracking-widest border border-emerald-500/20 whitespace-nowrap">System: Prime</div>
                        <div className="px-3 py-1.5 bg-white/5 text-white/40 rounded-lg sm:rounded-xl text-[10px] sm:text-[13px] font-black uppercase tracking-widest border border-white/10 whitespace-nowrap">Feb 04, 2026</div>
                     </div>
                  </div>

                  <div className="p-6 sm:p-10 md:p-16">
                     <div className="bg-petrol-900/50 rounded-2xl sm:rounded-3xl border border-white/5 p-6 sm:p-10 mb-8 sm:mb-10">
                        <div className="flex justify-between items-center mb-6 sm:mb-8">
                           <h4 className="text-white font-black italic uppercase tracking-widest text-base sm:text-lg">FMS: Active Flow Stream</h4>
                           <span className="px-3 py-1 bg-blue-600/20 text-petrol-600 text-[13px] font-black rounded-lg border border-petrol-600/30 uppercase tracking-widest">Live Execution</span>
                        </div>
                        
                        <div className="space-y-4">
                           {[
                             { task: "Quality Audit", stage: "Checklist", status: "Verified", method: "Auto-FMS", color: "text-emerald-500" },
                             { task: "Line Transfer", stage: "Delegation", status: "Assigned", method: "AI Route", color: "text-petrol-600" },
                             { task: "Pack Protocol", stage: "FMS Core", status: "Pending", method: "Sequential", color: "text-white/40" }
                           ].map((item, i) => (
                              <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                                 <div className="flex items-center gap-6">
                                    <span className="text-white font-black text-lg">{item.task}</span>
                                    <span className="text-white/60 text-[13px] font-bold uppercase tracking-widest">{item.stage}</span>
                                 </div>
                                 <div className="flex items-center gap-8">
                                    <div className="flex items-center gap-2">
                                       <div className={`w-1.5 h-1.5 rounded-full animate-pulse bg-petrol-600`}></div>
                                       <span className={`text-[13px] font-black uppercase tracking-widest ${item.color}`}>{item.status}</span>
                                    </div>
                                    <span className="text-white/60 font-mono text-md italic">{item.method}</span>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                        <div className="bg-petrol-600/5 border border-cyan-high/20 p-8 rounded-3xl group cursor-pointer hover:bg-petrol-600/10 transition-colors">
                           <div className="text-white/60 text-[18px] font-black uppercase tracking-widest mb-4">Integrations</div>
                           <div className="flex items-center justify-between mb-4">
                              <span className="text-white font-black text-2xl tracking-tighter">Adobe Task</span>
                              <div className="w-8 h-8 rounded-lg bg-petrol-600 flex items-center justify-center text-white">
                                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 19h20L12 2zm0 4.19L18.42 16H5.58L12 6.19z"/></svg>
                              </div>
                           </div>
                           <p className="text-white/50 text-[13px] font-bold leading-relaxed">Automated workflow execution for multi-department sync.</p>
                        </div>
                        <div className="bg-emerald-500/5 border border-emerald-500/10 p-8 rounded-3xl group cursor-pointer hover:bg-emerald-500/10 transition-colors">
                           <div className="text-white/60 text-[18px] font-black uppercase tracking-widest mb-4">Financial Core</div>
                           <div className="flex items-center justify-between mb-4">
                              <span className="text-white font-black text-2xl tracking-tighter">Tally.ERP</span>
                              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white">
                                 <span className="text-[10px] font-black">T</span>
                              </div>
                           </div>
                           <p className="text-white/50 text-[13px] font-bold leading-relaxed">Bidirectional ledger synchronization for real-time dispatching.</p>
                        </div>
                     </div>
                  </div>

                  <div className="p-10 bg-petrol-600 flex justify-between items-center group cursor-pointer">
                     <span className="text-white text-2xl font-black italic tracking-tighter">Request Product Demo</span>
                     <svg className="w-10 h-10 text-white transition-transform group-hover:translate-x-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data-Driven Strategy Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2 reveal-on-scroll">
                <div className="text-petrol-600 font-black uppercase tracking-[0.4em] text-lg sm:text-2xl mb-6">The Owner's Dashboard</div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-950 mb-8 leading-[0.95] tracking-tighter">
                  Real Data for <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-petrol-600 to-cyan-high">Real Decisions.</span>
                </h2>
                <p className="text-slate-500 font-medium text-lg md:text-xl leading-relaxed mb-8">
                  Stop leading by "gut feeling." We build customised dashboards that pull real-time data from your production output and machine readings. See your margins, bottlenecks, and throughput in one glance, allowing you to make strategic decisions that actually impact your bottom line.
                </p>
                <div className="flex flex-wrap gap-4">
                  {["Live Production Data", "Margin Analysis", "Bottleneck Detection", "Throughput Metrics"].map((item, i) => (
                    <span key={i} className="px-4 py-2 bg-slate-100 rounded-full text-slate-600 font-bold text-sm">{item}</span>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 reveal-on-scroll">
                <div className="bg-slate-950 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { value: "24/7", label: "Live Monitoring" },
                      { value: "15%", label: "Avg. Margin Boost" },
                      { value: "<5min", label: "Issue Detection" },
                      { value: "100%", label: "Data Accuracy" }
                    ].map((stat, i) => (
                      <div key={i} className="text-center p-6 bg-white/5 rounded-2xl">
                        <div className="text-3xl lg:text-4xl font-black text-petrol-600 mb-2">{stat.value}</div>
                        <div className="text-white/60 font-bold text-sm uppercase tracking-widest">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Journey Section */}
      <section className="py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '60px 60px'}}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="reveal-on-scroll text-center mb-16">
              <div className="text-petrol-600 font-black uppercase tracking-[0.4em] text-lg sm:text-2xl mb-6">Founder DNA</div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-8 leading-[0.95] tracking-tighter">
                Built on <span className="text-transparent bg-clip-text bg-gradient-to-r from-petrol-600 to-cyan-high">Real-World Grit</span>
              </h2>
              <p className="text-white/50 font-medium text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                At Lalit Raj Business Consulting (LRBC), we don't just provide software; we provide a partnership grounded in academic excellence and official recognition. We combine the strategic depth of an MBA with the technical precision of an Engineer to build systems that are as resilient as the industries we serve.
              </p>
            </div>

            <div className="reveal-on-scroll bg-white/5 rounded-[2.5rem] p-8 lg:p-12 border border-white/10 mb-12">
              <p className="text-white/80 text-xl md:text-2xl font-medium italic text-center leading-relaxed">
                "I don't just consult on systems because I studied them; I build them because I've lived the challenges of starting and scaling in India."
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  era: "The BTech Years", 
                  title: "Gharbanao.in", 
                  desc: "Founded during my time at NIT Silchar, this was my first venture into the world of technical entrepreneurship, teaching me the foundational importance of product-market fit.",
                  badge: "NIT Silchar"
                },
                { 
                  era: "The MBA Years", 
                  title: "Sneko", 
                  desc: "A food-delivery startup built during my MBA, which honed my understanding of logistics, supply chain flow, and the critical need for 'Order-to-Delivery' automation.",
                  badge: "Food-Tech"
                },
                { 
                  era: "The Evolution", 
                  title: "LRBC", 
                  desc: "Today, I combine these years of startup grit with my experience at IndiaMart, Kellogg's, and Kotak Mahindra Bank to empower the Indian MSME sector.",
                  badge: "Present"
                }
              ].map((item, i) => (
                <div key={i} className="reveal-on-scroll group p-8 bg-white/5 rounded-[2rem] border border-white/10 hover:border-petrol-600/50 transition-all duration-500" style={{transitionDelay: `${i * 100}ms`}}>
                  <span className="inline-block px-3 py-1 bg-petrol-600/20 text-petrol-600 rounded-full text-xs font-black uppercase tracking-widest mb-4">{item.badge}</span>
                  <div className="text-white/40 font-bold text-sm uppercase tracking-widest mb-2">{item.era}</div>
                  <h3 className="text-2xl font-black text-white mb-4">{item.title}</h3>
                  <p className="text-white/50 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="reveal-on-scroll mt-12 text-center">
              <p className="text-white/60 font-bold text-lg">
                <span className="text-petrol-600">Headquarters:</span> Based in the heart of Hyderabad, Telangana, serving a growing roster of <span className="text-white font-black">10+ active industrial clients</span> across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section: The Audit Portal */}
      <section id="contact" className="py-40 bg-slate-950 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row rounded-[5rem] overflow-hidden shadow-[0_50px_150px_-30px_rgba(0,0,0,0.8)] border border-white/5 bg-petrol-900/50 backdrop-blur-3xl">
            {/* Real Info Side */}
            <div className="lg:w-1/3 p-16 md:p-24 text-white relative">
              <div className="relative z-10">
                <div className="text-petrol-600 font-black uppercase tracking-[0.4em] text-lg sm:text-[18px] mb-8">Consultancy Portal</div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-10 md:mb-12 leading-[0.9] md:leading-[0.85] tracking-tighter">Initiate <br className="hidden sm:block" /> Your Audit.</h2>
                <p className="text-white/40 text-lg sm:text-xl md:text-2xl mb-12 sm:mb-20 font-medium leading-relaxed tracking-tight">Genuine industrial transformation starts with a rigorous diagnostic session.</p>
                
                <div className="space-y-16">
                  <div className="flex items-start gap-10">
                    <div className="w-2 justify-center">
                       <div className="w-1.5 h-1.5 rounded-full bg-petrol-600"></div>
                    </div>
                    <div>
                      <h4 className="font-black text-white uppercase tracking-[0.3em] text-[18px] mb-4">Corporate Headquarters</h4>
                      <p className="text-white/70 font-bold text-lg">Somajiguda, Hyderabad <br /> Telangana - 500082</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-10">
                    <div className="w-2 justify-center">
                       <div className="w-1.5 h-1.5 rounded-full bg-petrol-600"></div>
                    </div>
                    <div>
                      <h4 className="font-black text-white uppercase tracking-[0.3em] text-[18px] mb-4">Consultation Desk</h4>
                      <p className="text-white font-black text-2xl tracking-tighter">+91 99549 53008</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Genuine Form Side */}
            <div className="lg:w-2/3 bg-white p-16 md:p-24 relative">
              {formState.status === "success" ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-32 h-32 bg-slate-950 rounded-[2.5rem] flex items-center justify-center text-petrol-600 mb-12 shadow-2xl">
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h3 className="text-5xl font-black mb-6 tracking-tighter text-slate-950 uppercase">Audit Requested</h3>
                  <p className="text-slate-500 font-bold text-lg mb-12">The LRBC diagnostics team will contact you <br /> within 2 business hours for verification.</p>
                  <button onClick={() => setFormState({...formState, status: "idle"})} className="bg-slate-100 text-slate-950 px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-200 transition-colors">Submit New Request</button>
                </div>
              ) : (
                <form 
                  className="space-y-12"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormState({...formState, status: "submitting"});
                    setTimeout(() => setFormState({...formState, status: "success"}), 2000);
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <label className="text-[14px] font-bold uppercase tracking-[0.4em] text-slate-800">Executive Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="e.g. Anand Satheeson" 
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        className="w-full bg-slate-50 border-b-2 border-slate-100 px-0 py-6 outline-none focus:border-[#1ba6f2] transition-colors font-bold text-xl placeholder:text-slate-600" 
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[14px] font-bold uppercase tracking-[0.4em] text-slate-800">Enterprise Email</label>
                      <input 
                        required
                        type="email" 
                        placeholder="anand@company.in" 
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        className="w-full bg-slate-50 border-b-2 border-slate-100 px-0 py-6 outline-none focus:border-[#1ba6f2] transition-colors font-bold text-xl placeholder:text-slate-600" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <label className="text-[14px] font-bold uppercase tracking-[0.4em] text-slate-800">Primary Industry Vertical</label>
                    <select 
                      value={formState.industry}
                      onChange={(e) => setFormState({...formState, industry: e.target.value})}
                      className="w-full bg-slate-50 border-b-2 border-slate-100 px-0 py-6 outline-none focus:border-[#1ba6f2] transition-colors font-bold text-xl appearance-none"
                    >
                        <option>Steel & Heavy Infrastructure</option>
                        <option>Textiles & Non-Woven Production</option>
                        <option>Pharmaceutical Manufacturing</option>
                        <option>Automated Precision Molding</option>
                    </select>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[14px] font-bold uppercase tracking-[0.4em] text-slate-800">Audit Requirements Overview</label>
                    <textarea 
                      required
                      placeholder="Specify your production challenges..." 
                      rows={4} 
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      className="w-full bg-slate-50 border-b-2 border-slate-100 px-0 py-6 outline-none focus:border-[#1ba6f2] transition-colors font-bold text-xl resize-none placeholder:text-slate-600"
                    ></textarea>
                  </div>

                  <button 
                    disabled={formState.status === "submitting"}
                    className="w-full bg-slate-950 text-white rounded-[2rem] py-8 text-2xl font-black hover:bg-petrol-600 transition-all flex items-center justify-center gap-6 group"
                  >
                    {formState.status === "submitting" ? (
                      <svg className="animate-spin h-8 w-8 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    ) : (
                      <>
                        Verify & Register Audit
                        <svg className="w-8 h-8 transition-transform group-hover:translate-x-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Integration */}
      <section className="reveal-on-scroll container mx-auto px-6 mb-32 h-[500px] rounded-[4rem] overflow-hidden border border-slate-100 shadow-xl">
        <iframe 
          title="LRBC Headquarters"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.9421869625345!2d78.45607067586542!3d17.414545501865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9747970dca2d%3A0xe5a1b3a3a4a4a4a4!2sJyothi%20Enclave%2C%20Somajiguda%2C%20Hyderabad%2C%20Telangana%20500082!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="transition-all duration-700"
        ></iframe>
      </section>

      {/* Footer Section - Dark Premium */}
      <footer className="bg-slate-950 pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
        {/* Subtle Branding Mask */}
        <div className="absolute -bottom-20 -right-20 text-[20rem] font-black text-white/[0.02] pointer-events-none select-none tracking-tighter uppercase italic">LRBC</div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* CTA Section */}
          <div className="mb-16 text-center">
            <a href="#contact" className="inline-flex items-center gap-4 bg-petrol-600 text-white px-12 py-6 rounded-2xl text-xl font-black hover:bg-petrol-700 transition-all shadow-[0_20px_40px_-10px_rgba(13,74,92,0.5)] hover:shadow-[0_30px_60px_-15px_rgba(13,74,92,0.6)] group ring-1 ring-white/10">
              Initiate Your Audit
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 md:gap-20 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm">
                  <img src="/Lrbc.png" alt="LRBC Logo" className="h-10 w-auto object-contain" />
                </div>
              </div>
              <p className="text-white/50 text-base font-medium leading-relaxed max-w-md mb-8">
                <span className="font-black text-white">Lalit Raj Business Consulting</span><br />
                Engineering industrial growth since 2018. Bridging the gap between traditional manufacturing and the digital future.
              </p>
              <div className="space-y-4">
                <div className="flex flex-col">
                  <span className="text-petrol-600 font-black text-xs uppercase tracking-[0.3em] mb-1">Headquarters</span>
                  <span className="text-white/80 font-medium text-sm">501, Jyothi Enclave, Raj Bhawan Road, Somajiguda, Hyderabad - 500082</span>
                </div>
                <div className="flex gap-8">
                  <div className="flex flex-col">
                    <span className="text-petrol-600 font-black text-xs uppercase tracking-[0.3em] mb-1">MSME Registration</span>
                    <span className="text-white/80 font-medium font-mono text-sm">UDYAM-TS-02-0312494</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-petrol-600 font-black text-xs uppercase tracking-[0.3em] mb-1">Enterprise Type</span>
                    <span className="text-white/80 font-medium text-sm">Micro</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-petrol-600 font-black text-xs uppercase tracking-[0.3em] mb-1">Contact</span>
                  <span className="text-white/80 font-medium text-sm">+91 99549 53008 | contact@lalitraj.com</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-black uppercase tracking-[0.3em] text-[14px] mb-6">Operations</h4>
              <ul className="space-y-3">
                {['Strategic Audit', 'Process Engineering', 'Cloud Implementation', 'Industrial Dashboarding'].map((link) => (
                  <li key={link}><a href="#" className="text-white/40 hover:text-petrol-600 transition-colors font-medium text-base">{link}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-black uppercase tracking-[0.3em] text-[14px] mb-6">Connect</h4>
              <ul className="space-y-3">
                {['Contact Support', 'Privacy Protocol', 'Security Policy', 'Cookie Framework'].map((link) => (
                  <li key={link}><a href="#" className="text-white/40 hover:text-petrol-600 transition-colors font-medium text-base">{link}</a></li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/20 font-bold uppercase tracking-[0.3em] text-[10px]">© 2026 Lalit Raj Business Consulting. All Rights Reserved.</p>
            <div className="flex gap-8">
              {['LinkedIn', 'Twitter', 'Facebook'].map((social) => (
                <a key={social} href="#" className="text-white/20 hover:text-petrol-600 transition-all font-bold text-xs tracking-widest uppercase">{social}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
