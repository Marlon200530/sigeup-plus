import { useState } from "react";
import {
  Home, Mail, MessageSquare, Bell, FileText, LogOut,
  User, Lock, Search, PlusCircle, Printer, ChevronRight,
  BookOpen, ClipboardList, UserCheck, GraduationCap
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
      {/* Estado dos serviços link - top left */}
      <a
        href="#"
        style={{ paddingTop: 15, paddingLeft: 5, display: "inline-block", color: "#0000cc", fontWeight: "bold", fontSize: 13, textDecoration: "none" }}
      >
        Estado dos serviços
      </a>

      {/* Centered container */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "calc(100vh - 44px)", paddingBottom: 30 }}>
        {/* Stacked papers */}
        <div style={{ position: "relative", width: 350 }}>
          {/* Back paper */}
          <div style={{
            position: "absolute",
            top: 10, left: 10,
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            boxShadow: "1px 1px 4px rgba(0,0,0,0.18)",
            borderRadius: 2,
          }} />
          {/* Middle paper */}
          <div style={{
            position: "absolute",
            top: 5, left: 5,
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            boxShadow: "1px 1px 4px rgba(0,0,0,0.18)",
            borderRadius: 2,
          }} />
          {/* Main card */}
          <div style={{
            position: "relative",
            backgroundColor: "white",
            boxShadow: "2px 2px 8px rgba(0,0,0,0.22)",
            borderRadius: 2,
            padding: "22px 30px 24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
            {/* Title */}
            <h1 style={{
              color: "#888",
              fontSize: 17,
              fontWeight: "normal",
              marginBottom: 14,
              textAlign: "center",
              lineHeight: 1.4,
            }}>
              Sistema de Gestão Universitária
            </h1>

            {/* UP Logo - real image */}
            <div style={{ textAlign: "center", marginBottom: 12 }}>
              <img
                src="https://www.sigeup.up.ac.mz/sigeup/public/dist/img/up.png"
                width={220}
                height={208}
                alt="Heráldica da Universidade Pedagógica"
                style={{ display: "block", margin: "0 auto" }}
              />
            </div>

            <div style={{ marginBottom: 6 }} />

            {/* Error message */}
            {error && (
              <span style={{ color: "red", fontSize: 12, marginBottom: 6, display: "block", width: "100%" }}>
                {error}
              </span>
            )}

            {/* Username */}
            <div style={{ width: "100%", marginBottom: 8, position: "relative" }}>
              <User
                size={14}
                color="#bbb"
                style={{ position: "absolute", left: 9, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
              />
              <input
                type="text"
                placeholder="Usuário"
                autoFocus
                value={user}
                onChange={(e) => { setUser(e.target.value); setError(""); }}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  backgroundColor: "#ebebeb",
                  border: "1px solid #ccc",
                  borderRadius: 3,
                  padding: "8px 10px 8px 28px",
                  fontSize: 13,
                  outline: "none",
                  color: "#333",
                }}
              />
            </div>

            {/* Password */}
            <div style={{ width: "100%", marginBottom: 14, position: "relative" }}>
              <Lock
                size={14}
                color="#bbb"
                style={{ position: "absolute", left: 9, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
              />
              <input
                type="password"
                placeholder="Senha"
                value={pass}
                onChange={(e) => { setPass(e.target.value); setError(""); }}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  backgroundColor: "#ebebeb",
                  border: "1px solid #ccc",
                  borderRadius: 3,
                  padding: "8px 10px 8px 28px",
                  fontSize: 13,
                  outline: "none",
                  color: "#333",
                }}
              />
            </div>

            {/* Button + links row */}
            <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
              <button
                onClick={handleLogin}
                style={{
                  backgroundColor: "#45aee0",
                  color: "white",
                  border: "none",
                  borderRadius: 4,
                  padding: "8px 22px",
                  fontSize: 13,
                  cursor: "pointer",
                  fontWeight: "normal",
                }}
              >
                Autenticar
              </button>
              <div style={{ textAlign: "right", fontSize: 12, lineHeight: "22px" }}>
                <div>
                  <a href="#" style={{ color: "#3355bb", textDecoration: "none", fontWeight: "bold" }}>
                    • Recém-admitidos
                  </a>
                </div>
                <div>
                  <a href="#" style={{ color: "#3355bb", textDecoration: "none" }}>
                    • Esqueci a senha
                  </a>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div style={{ width: "100%", borderTop: "1px solid #eee", paddingTop: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 6 }}>
                <span style={{ fontSize: 12, color: "#555" }}>
                  © 2026 |{" "}
                  <a href="#" style={{ color: "#3355bb", textDecoration: "none" }}>
                    Universidade Pedagógica de Maputo
                  </a>
                </span>
                <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
                  {[
                    { src: "https://sigeul.unilicungo.ac.mz/sigeup/public/dist/img/favicon.png", alt: "unilicungo" },
                    { src: "https://sig.unisave.ac.mz/sigeup/public/dist/img/favicon.png", alt: "unisave" },
                    { src: "https://epungue.unipungue.ac.mz/sigeup/public/dist/img/favicon.png", alt: "unipungue" },
                    { src: "https://sigeur.up.ac.mz/sigeup/public/dist/img/favicon.png", alt: "unirovuma" },
                  ].map((img, i) => (
                    <img
                      key={i}
                      src={img.src}
                      width={28}
                      height={28}
                      alt={img.alt}
                      style={{ borderRadius: 2 }}
                      onError={(e) => { e.target.style.opacity = 0; }}
                    />
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

  if (!loggedIn) return <LoginPage onLogin={() => setLoggedIn(true)} />;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col" style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Navbar */}
      <nav className="bg-blue-800 text-white flex items-center justify-between px-4 py-2 flex-wrap gap-2">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="font-bold text-white text-sm">
            SIGEUP<sub className="text-xs font-normal">v4.7</sub>
          </span>
          {[
            { icon: <Home size={14} />, label: "Início" },
            { icon: <Mail size={14} />, label: "FAQ" },
            { icon: <MessageSquare size={14} />, label: "Mensagens" },
            { icon: <Bell size={14} />, label: "Notificações" },
            { icon: <FileText size={14} />, label: "Documentos Úteis" },
          ].map(({ icon, label }) => (
            <a key={label} href="#" className="text-white text-sm hover:underline flex items-center gap-1">
              {icon} {label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-xs text-gray-300">Nome do Usuário:</div>
            <div className="text-blue-300 text-sm font-semibold">MELANI JUNICE MUCAVELE</div>
          </div>
          <button
            onClick={() => setLoggedIn(false)}
            className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1.5 rounded flex items-center gap-1 transition"
          >
            <LogOut size={13} /> Sair
          </button>
        </div>
      </nav>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="bg-white border-r border-gray-200 w-64 min-w-52 p-4 flex-shrink-0">
          <div className="text-xs font-bold text-gray-500 mb-3 uppercase tracking-wide">Menu do Sistema</div>
          <div className="mb-1">
            <div className="font-bold text-blue-700 text-sm mb-2 flex items-center gap-1">
              <GraduationCap size={14} /> Portal do Estudante
            </div>
            <div className="ml-2 space-y-0.5">
              {[
                { key: "notas", icon: <ClipboardList size={13} />, label: "Notas de Frequência" },
                { key: "inscricoes", icon: <BookOpen size={13} />, label: "Inscrições" },
                { key: "dados", icon: <UserCheck size={13} />, label: "Visualizar Dados do Estudante" },
              ].map(({ key, icon, label }) => (
                <button
                  key={key}
                  onClick={() => setActivePage(key)}
                  className={`text-sm w-full text-left px-2 py-1.5 rounded flex items-center gap-2 transition ${
                    activePage === key
                      ? "bg-blue-50 text-blue-800 font-semibold"
                      : "text-blue-600 hover:bg-gray-50"
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

        {/* Content */}
        <main className="flex-1 p-6 overflow-x-auto">
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
      <h2 className="text-xl text-gray-600 mb-4">Notas de Frequência</h2>
      <div className="flex items-center gap-3 mb-5">
        <select
          value={ano}
          onChange={(e) => setAno(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1.5 text-sm"
        >
          <option value="2026">Ano Lectivo de 2026</option>
          <option value="2025">Ano Lectivo de 2025</option>
        </select>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 text-sm rounded flex items-center gap-2 transition">
          <Search size={14} /> Buscar
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              {["Disciplina","Nível","Teste 1","Teste 2","Teste 3","Trab 1","Trab 2","Trab 3","Média","Classificação"].map((h) => (
                <th key={h} className={`px-3 py-2 font-semibold text-gray-700 whitespace-nowrap ${h === "Disciplina" ? "text-left" : "text-center"}`}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {disciplines.map((d, i) => (
              <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <td className="px-3 py-2.5 text-gray-800">{d.name}</td>
                <td className="px-3 py-2.5 text-center text-gray-700">1</td>
                {[...Array(8)].map((_, j) => <td key={j} className="px-3 py-2.5" />)}
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
      <h2 className="text-xl text-gray-600 mb-4">Inscrições</h2>
      <div className="mb-5 border border-dashed border-gray-300 rounded p-4 inline-block">
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm rounded flex items-center gap-2 transition">
          <PlusCircle size={15} /> Nova Inscrição
        </button>
      </div>
      <div className="overflow-x-auto">
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
      <h2 className="text-xl text-gray-600 mb-5">Dados pessoais</h2>

      <div className="bg-white border border-gray-200 rounded p-5">
        <div className="flex gap-6 flex-wrap">
          <div className="flex-shrink-0">
            <div className="w-28 h-32 bg-gray-200 rounded flex items-center justify-center border border-gray-300">
              <User size={52} color="#9ca3af" />
            </div>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Nº de Estudante" value="01.0036.2026" />
            <Field label="Ano de Ingresso" value="2026" />
            <Field label="Apelido: *" value="MUCAVELE" />
            <Field label="Outros Nomes: *" value="MELANI JUNICE" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
          <Field label="Nome do Pai:" value="JULIÃO CHAICOMO MUCAVEL" />
          <Field label="Nome da Mãe:" value="NILCE MARIA ISABEL BARRATA HERIQUES" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-4">
          <Field label="Sexo: *" value="FEMININO" />
          <Field label="Data de Nasc.: *" value="22/02/2006" />
          <Field label="Telefone: *" value="" />
          <Field label="Telefone alternativo:" value="" />
          <Field label="Nível:" value="1" />
        </div>

        <div className="mt-4">
          <label className="text-xs text-gray-500 mb-1 block">Email:</label>
          <input readOnly value="" className="w-full sm:w-1/2 border border-gray-300 rounded px-3 py-1.5 text-sm bg-gray-50" />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mt-4">
        {[
          { key: "curso", label: "Dados do Curso" },
          { key: "pessoais", label: "Dados Pessoais" },
          { key: "doc", label: "Documento de Identificação" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 text-sm border-b-2 -mb-px transition-colors ${
              activeTab === tab.key
                ? "border-gray-500 text-gray-800 font-semibold bg-white"
                : "border-transparent text-blue-500 hover:text-blue-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-white border border-gray-200 border-t-0 rounded-b p-5">
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
      <div className="border border-gray-200 rounded p-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <Field label="Extensão: *" value="UNIVERSIDADE PEDAGÓGICA DE MAPUTO" />
          <Field label="Centro: *" value="POUSADA CFM" />
          <Field label="Regime: *" value="LABORAL" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <Field label="Plano Curricular" value="PLANO A" />
          <Field label="Curso Major: *" value="GESTÃO FINANCEIRA E BANCÁRIA" />
        </div>
        <Field label="Curso Minor" value="" />
      </div>
      <div className="border border-gray-200 rounded p-4">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-4">
          <Field label="Habilitações de Ingresso:" value="MEDIO" />
          <Field label="Última Escola:" value="ESCOLA SECUNDÁRIA ES ARMANDO E. GUE" />
          <Field label="Área de Formação:" value="12A" />
          <Field label="Ano Conclusão:" value="2025" />
        </div>
        <Field label="Tem Certificado:" value="SIM" className="w-40" />
      </div>
    </div>
  );
}

function TabPessoais() {
  return (
    <div className="border border-gray-200 rounded p-4">
      <p className="text-xs font-semibold underline text-gray-700 mb-4">Naturalidade:</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <Field label="País:" value="MOÇAMBIQUE" />
        <Field label="Provincia:" value="CIDADE DE MAPUTO" />
        <Field label="Distrito:" value="KALHAMANCULO" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 mb-4">
        <Field label="Bairro:" value="CHAMANCULO.C" className="col-span-2" />
        <Field label="Quart.:" value="14" />
        <Field label="Cs nº:" value="50" />
        <Field label="Rua/Avenida:" value="" className="col-span-2" />
      </div>
      <Field label="Nacionalidade:" value="MOÇAMBICANA" className="w-48" />
    </div>
  );
}

function TabDocumento() {
  return (
    <div className="border border-gray-200 rounded p-4">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-4">
        <Field label="Tipo Doc. Ident.:" value="BILHETE DE IDENTIDADE" />
        <Field label="N.º do Documento:" value="1102088666604I" />
        <Field label="Local de Emissão:" value="CIDADE DE MAPUTO" />
        <Field label="Validade:" value="10/09/2030" />
      </div>
      <Field label="NUIT:" value="133622209" className="w-48" />
    </div>
  );
}
