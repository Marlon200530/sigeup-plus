import { useState } from "react";
import {
  Home, Mail, MessageSquare, Bell, FileText, LogOut,
  User, Lock, Search, PlusCircle, Printer, ChevronRight,
  BookOpen, ClipboardList, UserCheck, GraduationCap, Menu, X
} from "lucide-react";

const disciplines = [
  { name: "Métodos de Estudos Universitários" },
  { name: "Tecnologia de Informação e Comunicação" },
  { name: "Introdução a Gestão" },
  { name: "Introdução a Economia" },
  { name: "Contabilidade Financeira I" },
  { name: "Matemática I" },
];

const inscricoes = [
  { ano: 2026, semestre: 1, data: "06/03/2026", entidade: "---", referencia: "---", valor: "---", confirmada: "SIM" },
];

function Field({ label, value, className = "" }) {
  return (
    <div className={className}>
      <label className="text-xs text-gray-500 mb-1 block">{label}</label>
      <input
        readOnly
        value={value}
        className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm bg-gray-50 text-gray-800"
      />
    </div>
  );
}

// ── LOGIN ─────────────────────────────────────────────────────────────────────
function LoginPage({ onLogin }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (user.trim() && pass.trim()) {
      onLogin();
    } else {
      setError("Por favor, preencha todos os campos.");
    }
  };

  return (
    <div style={{ backgroundColor: "#d0d0d0", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      <a href="#" style={{ paddingTop: 15, paddingLeft: 5, display: "inline-block", color: "#0000cc", fontWeight: "bold", fontSize: 13, textDecoration: "none" }}>
        Estado dos serviços
      </a>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "calc(100vh - 44px)", padding: "0 12px 30px" }}>
        <div style={{ position: "relative", width: "100%", maxWidth: 360 }}>
          <div style={{ position: "absolute", top: 10, left: 10, width: "100%", height: "100%", backgroundColor: "white", boxShadow: "1px 1px 4px rgba(0,0,0,0.18)", borderRadius: 2 }} />
          <div style={{ position: "absolute", top: 5, left: 5, width: "100%", height: "100%", backgroundColor: "white", boxShadow: "1px 1px 4px rgba(0,0,0,0.18)", borderRadius: 2 }} />
          <div style={{ position: "relative", backgroundColor: "white", boxShadow: "2px 2px 8px rgba(0,0,0,0.22)", borderRadius: 2, padding: "22px 24px 24px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1 style={{ color: "#888", fontSize: 17, fontWeight: "normal", marginBottom: 14, textAlign: "center", lineHeight: 1.4 }}>
              Sistema de Gestão Universitária
            </h1>
            <div style={{ textAlign: "center", marginBottom: 12 }}>
              <img
                src="https://www.sigeup.up.ac.mz/sigeup/public/dist/img/up.png"
                style={{ width: "100%", maxWidth: 220, height: "auto", display: "block", margin: "0 auto" }}
                alt="Heráldica da Universidade Pedagógica"
              />
            </div>
            <div style={{ marginBottom: 6 }} />
            {error && <span style={{ color: "red", fontSize: 12, marginBottom: 6, display: "block", width: "100%" }}>{error}</span>}
            <div style={{ width: "100%", marginBottom: 8, position: "relative" }}>
              <User size={14} color="#bbb" style={{ position: "absolute", left: 9, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
              <input type="text" placeholder="Usuário" autoFocus value={user}
                onChange={(e) => { setUser(e.target.value); setError(""); }}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                style={{ width: "100%", boxSizing: "border-box", backgroundColor: "#ebebeb", border: "1px solid #ccc", borderRadius: 3, padding: "8px 10px 8px 28px", fontSize: 13, outline: "none", color: "#333" }}
              />
            </div>
            <div style={{ width: "100%", marginBottom: 14, position: "relative" }}>
              <Lock size={14} color="#bbb" style={{ position: "absolute", left: 9, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
              <input type="password" placeholder="Senha" value={pass}
                onChange={(e) => { setPass(e.target.value); setError(""); }}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                style={{ width: "100%", boxSizing: "border-box", backgroundColor: "#ebebeb", border: "1px solid #ccc", borderRadius: 3, padding: "8px 10px 8px 28px", fontSize: 13, outline: "none", color: "#333" }}
              />
            </div>
            <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
              <button onClick={handleLogin} style={{ backgroundColor: "#45aee0", color: "white", border: "none", borderRadius: 4, padding: "8px 22px", fontSize: 13, cursor: "pointer" }}>
                Autenticar
              </button>
              <div style={{ textAlign: "right", fontSize: 12, lineHeight: "22px" }}>
                <div><a href="#" style={{ color: "#3355bb", textDecoration: "none", fontWeight: "bold" }}>• Recém-admitidos</a></div>
                <div><a href="#" style={{ color: "#3355bb", textDecoration: "none" }}>• Esqueci a senha</a></div>
              </div>
            </div>
            <div style={{ width: "100%", borderTop: "1px solid #eee", paddingTop: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 6 }}>
                <span style={{ fontSize: 11, color: "#555" }}>© 2026 | <a href="#" style={{ color: "#3355bb", textDecoration: "none" }}>Universidade Pedagógica de Maputo</a></span>
                <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
                  {[
                    "https://sigeul.unilicungo.ac.mz/sigeup/public/dist/img/favicon.png",
                    "https://sig.unisave.ac.mz/sigeup/public/dist/img/favicon.png",
                    "https://epungue.unipungue.ac.mz/sigeup/public/dist/img/favicon.png",
                    "https://sigeur.up.ac.mz/sigeup/public/dist/img/favicon.png",
                  ].map((src, i) => (
                    <img key={i} src={src} width={26} height={26} alt="" style={{ borderRadius: 2 }} onError={(e) => { e.target.style.opacity = 0; }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── MAIN APP ──────────────────────────────────────────────────────────────────
export default function SIGEUP() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState("notas");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!loggedIn) return <LoginPage onLogin={() => setLoggedIn(true)} />;

  const navItems = [
    { key: "notas", icon: <ClipboardList size={13} />, label: "Notas de Frequência" },
    { key: "inscricoes", icon: <BookOpen size={13} />, label: "Inscrições" },
    { key: "dados", icon: <UserCheck size={13} />, label: "Visualizar Dados do Estudante" },
  ];

  const handleNav = (key) => {
    setActivePage(key);
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col" style={{ fontFamily: "Arial, sans-serif" }}>

      {/* ── NAVBAR ── */}
      <nav className="bg-blue-800 text-white px-3 py-2">
        {/* Desktop row */}
        <div className="flex items-center justify-between">
          {/* Left: logo + hamburger on mobile */}
          <div className="flex items-center gap-3">
            <button className="md:hidden text-white p-1" onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <span className="font-bold text-sm">SIGEUP<sub className="text-xs font-normal">v4.7</sub></span>
            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-3 ml-2">
              {[
                { icon: <Home size={13} />, label: "Início" },
                { icon: <Mail size={13} />, label: "FAQ" },
                { icon: <MessageSquare size={13} />, label: "Mensagens" },
                { icon: <Bell size={13} />, label: "Notificações" },
                { icon: <FileText size={13} />, label: "Documentos Úteis" },
              ].map(({ icon, label }) => (
                <a key={label} href="#" className="text-white text-xs hover:underline flex items-center gap-1">{icon}{label}</a>
              ))}
            </div>
          </div>

          {/* Right: user + logout */}
          <div className="flex items-center gap-2">
            <div className="text-right hidden sm:block">
              <div className="text-xs text-gray-300 leading-tight">Nome do Usuário:</div>
              <div className="text-blue-300 text-xs font-semibold leading-tight">MELANI JUNICE MUCAVELE</div>
            </div>
            <button onClick={() => setLoggedIn(false)} className="bg-red-500 hover:bg-red-600 text-white text-xs px-2 py-1.5 rounded flex items-center gap-1">
              <LogOut size={12} /> <span className="hidden sm:inline">Sair</span>
            </button>
          </div>
        </div>

        {/* Mobile user name (shown when name hidden above) */}
        <div className="sm:hidden mt-1 text-xs text-blue-300 font-semibold">MELANI JUNICE MUCAVELE</div>

        {/* Mobile nav links */}
        <div className="md:hidden flex flex-wrap gap-x-3 gap-y-1 mt-2">
          {[
            { icon: <Home size={12} />, label: "Início" },
            { icon: <Mail size={12} />, label: "FAQ" },
            { icon: <MessageSquare size={12} />, label: "Mensagens" },
            { icon: <Bell size={12} />, label: "Notificações" },
            { icon: <FileText size={12} />, label: "Documentos" },
          ].map(({ icon, label }) => (
            <a key={label} href="#" className="text-white text-xs hover:underline flex items-center gap-1">{icon}{label}</a>
          ))}
        </div>
      </nav>

      {/* ── BODY ── */}
      <div className="flex flex-1 relative">

        {/* Mobile overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-40 z-20 md:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* ── SIDEBAR ── */}
        <aside className={`
          bg-white border-r border-gray-200 p-4 flex-shrink-0 z-30
          fixed top-0 left-0 h-full w-64 transition-transform duration-200 ease-in-out
          md:static md:translate-x-0 md:h-auto
          ${sidebarOpen ? "translate-x-0 shadow-xl mt-0 pt-16" : "-translate-x-full"}
          md:block
        `}>
          <div className="text-xs font-bold text-gray-500 mb-3 uppercase tracking-wide">Menu do Sistema</div>
          <div className="mb-1">
            <div className="font-bold text-blue-700 text-sm mb-2 flex items-center gap-1">
              <GraduationCap size={14} /> Portal do Estudante
            </div>
            <div className="ml-2 space-y-0.5">
              {navItems.map(({ key, icon, label }) => (
                <button
                  key={key}
                  onClick={() => handleNav(key)}
                  className={`text-sm w-full text-left px-2 py-2 rounded flex items-center gap-2 transition ${
                    activePage === key ? "bg-blue-50 text-blue-800 font-semibold" : "text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  {icon} {label}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-3">
            <div className="font-bold text-blue-700 text-sm flex items-center gap-1">
              <ChevronRight size={14} /> Personalizações
            </div>
          </div>
        </aside>

        {/* ── MAIN CONTENT ── */}
        <main className="flex-1 p-4 md:p-6 overflow-x-auto min-w-0">
          {activePage === "notas" && <NotasPage />}
          {activePage === "inscricoes" && <InscricoesPage />}
          {activePage === "dados" && <DadosPage />}
        </main>
      </div>
    </div>
  );
}

// ── NOTAS ─────────────────────────────────────────────────────────────────────
function NotasPage() {
  const [ano, setAno] = useState("2026");
  return (
    <div>
      <h2 className="text-lg md:text-xl text-gray-600 mb-4">Notas de Frequência</h2>
      <div className="flex flex-wrap items-center gap-2 mb-5">
        <select value={ano} onChange={(e) => setAno(e.target.value)} className="border border-gray-300 rounded px-3 py-1.5 text-sm flex-1 min-w-0 max-w-xs">
          <option value="2026">Ano Lectivo de 2026</option>
        </select>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 text-sm rounded flex items-center gap-2 transition whitespace-nowrap">
          <Search size={14} /> Buscar
        </button>
      </div>

      {/* Scrollable table on mobile */}
      <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
        <table className="w-full text-xs md:text-sm border-collapse" style={{ minWidth: 600 }}>
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              {["Disciplina","Nível","Teste 1","Teste 2","Teste 3","Trab 1","Trab 2","Trab 3","Média","Classificação"].map((h) => (
                <th key={h} className={`px-2 md:px-3 py-2 font-semibold text-gray-700 whitespace-nowrap ${h === "Disciplina" ? "text-left" : "text-center"}`}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {disciplines.map((d, i) => (
              <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <td className="px-2 md:px-3 py-2 text-gray-800">{d.name}</td>
                <td className="px-2 md:px-3 py-2 text-center text-gray-700">1</td>
                {[...Array(8)].map((_, j) => <td key={j} className="px-2 md:px-3 py-2" />)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── INSCRIÇÕES ────────────────────────────────────────────────────────────────
function InscricoesPage() {
  return (
    <div>
      <h2 className="text-lg md:text-xl text-gray-600 mb-4">Inscrições</h2>
      <div className="mb-5 border border-dashed border-gray-300 rounded p-3 inline-block">
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm rounded flex items-center gap-2 transition">
          <PlusCircle size={15} /> Nova Inscrição
        </button>
      </div>

      {/* Mobile: card view | Desktop: table */}
      <div className="md:hidden space-y-3">
        {inscricoes.map((ins, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded p-3 text-sm">
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-700">{ins.ano} — Sem. {ins.semestre}</span>
              <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs font-semibold">{ins.confirmada}</span>
            </div>
            <div className="text-gray-500 text-xs mb-2">Data: {ins.data}</div>
            <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 text-xs rounded flex items-center gap-1 mt-1">
              <Printer size={12} /> Abrir
            </button>
          </div>
        ))}
      </div>

      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              {["Ano Lectivo","Semestre","Data","Entidade","Referencia","Valor","Confirmada",""].map((h) => (
                <th key={h} className="text-left px-4 py-2 font-semibold text-gray-700">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {inscricoes.map((ins, i) => (
              <tr key={i} className="bg-white border-b border-gray-100">
                <td className="px-4 py-3 text-gray-700">{ins.ano}</td>
                <td className="px-4 py-3 text-gray-700">{ins.semestre}</td>
                <td className="px-4 py-3 text-gray-700">{ins.data}</td>
                <td className="px-4 py-3 text-gray-700">{ins.entidade}</td>
                <td className="px-4 py-3 text-gray-700">{ins.referencia}</td>
                <td className="px-4 py-3 text-gray-700">{ins.valor}</td>
                <td className="px-4 py-3">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-xs font-semibold">{ins.confirmada}</span>
                </td>
                <td className="px-4 py-3">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 text-xs rounded flex items-center gap-1 transition">
                    <Printer size={12} /> Abrir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── DADOS ─────────────────────────────────────────────────────────────────────
function DadosPage() {
  const [activeTab, setActiveTab] = useState("curso");

  return (
    <div>
      <h2 className="text-lg md:text-xl text-gray-600 mb-4">Dados pessoais</h2>

      <div className="bg-white border border-gray-200 rounded p-4">
        {/* Photo + basic info stacked on mobile, side-by-side on desktop */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-shrink-0 flex justify-center sm:justify-start">
            <div className="w-24 h-28 sm:w-28 sm:h-32 bg-gray-200 rounded flex items-center justify-center border border-gray-300">
              <User size={44} color="#9ca3af" />
            </div>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Field label="Nº de Estudante" value="01.0036.2026" />
            <Field label="Ano de Ingresso" value="2026" />
            <Field label="Apelido: *" value="MUCAVELE" />
            <Field label="Outros Nomes: *" value="MELANI JUNICE" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          <Field label="Nome do Pai:" value="JULIÃO CHAICOMO MUCAVEL" />
          <Field label="Nome da Mãe:" value="NILCE MARIA ISABEL BARRATA HERIQUES" />
        </div>

        {/* 5 fields: stack 2+2+1 on mobile, all in a row on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mt-3">
          <Field label="Sexo: *" value="FEMININO" />
          <Field label="Data de Nasc.: *" value="22/02/2006" />
          <Field label="Telefone: *" value="" />
          <Field label="Telefone alternativo:" value="" />
          <Field label="Nível:" value="1" />
        </div>

        <div className="mt-3">
          <label className="text-xs text-gray-500 mb-1 block">Email:</label>
          <input readOnly value="" className="w-full sm:w-2/3 md:w-1/2 border border-gray-300 rounded px-3 py-1.5 text-sm bg-gray-50" />
        </div>
      </div>

      {/* Tabs — scrollable on mobile */}
      <div className="flex border-b border-gray-200 mt-4 overflow-x-auto">
        {[
          { key: "curso", label: "Dados do Curso" },
          { key: "pessoais", label: "Dados Pessoais" },
          { key: "doc", label: "Documento de Identificação" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-3 md:px-4 py-2 text-xs md:text-sm border-b-2 -mb-px transition-colors whitespace-nowrap ${
              activeTab === tab.key
                ? "border-gray-500 text-gray-800 font-semibold bg-white"
                : "border-transparent text-blue-500 hover:text-blue-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-white border border-gray-200 border-t-0 rounded-b p-4">
        {activeTab === "curso" && <TabCurso />}
        {activeTab === "pessoais" && <TabPessoais />}
        {activeTab === "doc" && <TabDocumento />}
      </div>
    </div>
  );
}

function TabCurso() {
  return (
    <div className="space-y-4">
      <div className="border border-gray-200 rounded p-3 md:p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-3">
          <Field label="Extensão: *" value="UNIVERSIDADE PEDAGÓGICA DE MAPUTO" />
          <Field label="Centro: *" value="POUSADA CFM" />
          <Field label="Regime: *" value="LABORAL" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          <Field label="Plano Curricular" value="PLANO A" />
          <Field label="Curso Major: *" value="GESTÃO FINANCEIRA E BANCÁRIA" />
        </div>
        <Field label="Curso Minor" value="" />
      </div>
      <div className="border border-gray-200 rounded p-3 md:p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
          <Field label="Habilitações de Ingresso:" value="MEDIO" />
          <Field label="Última Escola:" value="" />
          <Field label="Área de Formação:" value="12b" />
          <Field label="Ano Conclusão:" value="2025" />
        </div>
        <Field label="Tem Certificado:" value="" className="w-36" />
      </div>
    </div>
  );
}

function TabPessoais() {
  return (
    <div className="border border-gray-200 rounded p-3 md:p-4">
      <p className="text-xs font-semibold underline text-gray-700 mb-3">Naturalidade:</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
        <Field label="País:" value="MOÇAMBIQUE" />
        <Field label="Provincia:" value="CIDADE DE MAPUTO" />
        <Field label="Distrito:" value="KALHAMANCULO" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-3">
        <Field label="Bairro:" value="CHAMANCULO.C" className="col-span-2" />
        <Field label="Quart.:" value="14" />
        <Field label="Cs nº:" value="50" />
        <Field label="Rua/Avenida:" value="" className="col-span-2" />
      </div>
      <Field label="Nacionalidade:" value="MOÇAMBICANA" className="w-full sm:w-48" />
    </div>
  );
}

function TabDocumento() {
  return (
    <div className="border border-gray-200 rounded p-3 md:p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-3">
        <Field label="Tipo Doc. Ident.:" value="BILHETE DE IDENTIDADE" />
        <Field label="N.º do Documento:" value="1102088666604I" />
        <Field label="Local de Emissão:" value="CIDADE DE MAPUTO" />
        <Field label="Validade:" value="10/09/2030" />
      </div>
      <Field label="NUIT:" value="133622209" className="w-full sm:w-48" />
    </div>
  );
}
