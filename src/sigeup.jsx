import { useState, useEffect } from "react";
import {
  Home, Mail, MessageSquare, Bell, FileText, LogOut,
  User, Lock, Search, PlusCircle, Printer, ChevronRight,
  BookOpen, ClipboardList, UserCheck, GraduationCap, Menu, X
} from "lucide-react";

// ── USERS ─────────────────────────────────────────────────────────────────────
const USERS = {
  "01.0036.2026": {
    senha: "01003626",
    nome: "MELANI JUNICE MUCAVELE",
    apelido: "MUCAVELE",
    outrosNomes: "MELANI JUNICE",
    numeroEstudante: "01.0036.2026",
    anoIngresso: "2026",
    sexo: "FEMININO",
    dataNasc: "22/02/2006",
    telefone: "", telAlt: "", nivel: "1", email: "",
    nomePai: "JULIÃO CHAICOMO MUCAVEL",
    nomeMae: "NILCE MARIA ISABEL BARRATA HERIQUES",
    extensao: "UNIVERSIDADE PEDAGÓGICA DE MAPUTO",
    centro: "POUSADA CFM", regime: "LABORAL",
    plano: "PLANO A", cursoMajor: "GESTÃO FINANCEIRA E BANCÁRIA", cursoMinor: "",
    habilitacoes: "MEDIO", ultimaEscola: "ESCOLA SECUNDÁRIA ES ARMANDO E. GUE",
    areaFormacao: "12A", anoConclusao: "2025", temCertificado: "SIM",
    pais: "MOÇAMBIQUE", provincia: "CIDADE DE MAPUTO", distrito: "KALHAMANCULO",
    bairro: "CHAMANCULO.C", quart: "14", cs: "50", rua: "", nacionalidade: "MOÇAMBICANA",
    tipoDoc: "BILHETE DE IDENTIDADE", numDoc: "1102088666604I",
    localEmissao: "CIDADE DE MAPUTO", validade: "10/09/2030", nuit: "133622209",
    inscricoes: [{ ano: 2026, semestre: 1, data: "06/03/2026", entidade: "---", referencia: "---", valor: "---", confirmada: "SIM" }],
    disciplinas: ["Métodos de Estudos Universitários","Tecnologia de Informação e Comunicação","Introdução a Gestão","Introdução a Economia","Contabilidade Financeira I","Matemática I"],
  },
  "01.2136.2026": {
    senha: "15012008",
    nome: "LAICIVO JORGE MACHAIEIE",
    apelido: "MACHAIEIE",
    outrosNomes: "LAICIVO JORGE",
    numeroEstudante: "01.2136.2026",
    anoIngresso: "2026",
    sexo: "MASCULINO",
    dataNasc: "15/01/2008",
    telefone: "851544410", telAlt: "", nivel: "1", email: "",
    nomePai: "JORGE SALVADOR MACHAEIEI",
    nomeMae: "VERONIA ZIMA",
    extensao: "UNIVERSIDADE PEDAGÓGICA DE MAPUTO",
    centro: "UP-SEDE", regime: "LABORAL", plano: "PLANO A", cursoMajor: "ENSINO DO INGLÊS", cursoMinor: "",
    habilitacoes: "MEDIO", ultimaEscola: "", areaFormacao: "12A", anoConclusao: "2025", temCertificado: "NÃO",
    pais: "MOÇAMBIQUE", provincia: "GAZA", distrito: "CHÓKWE",
    bairro: "HOKWE", quart: "", cs: "", rua: "", nacionalidade: "MOÇAMBICANA",
    tipoDoc: "BILHETE DE IDENTIDADE", numDoc: "090607253193I",
    localEmissao: "CIDADE DE XAI-XAI", validade: "23/10/2028", nuit: "",
    inscricoes: [{ ano: 2026, semestre: 1, data: "06/03/2026", entidade: "---", referencia: "---", valor: "---", confirmada: "SIM" }],
    disciplinas: ["TICs","Métodos de Estudo Universitários (MEU)","Linguística Geral","Língua Inglesa I","Introdução à Literatura (Int. a Literatura)","Pedagogia Geral (PG)"],
  },
};

// ── FIELD ─────────────────────────────────────────────────────────────────────
function Field({ label, value, style = {} }) {
  return (
    <div style={style}>
      <label style={{ fontSize: 11, color: "#6b7280", display: "block", marginBottom: 3 }}>{label}</label>
      <input readOnly value={value} style={{ width: "100%", boxSizing: "border-box", border: "1px solid #d1d5db", borderRadius: 4, padding: "6px 10px", fontSize: 13, backgroundColor: "#f9fafb", color: "#1f2937", outline: "none" }} />
    </div>
  );
}

// ── LOGIN ─────────────────────────────────────────────────────────────────────
function LoginPage({ onLogin }) {
  const [userId, setUserId] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const u = userId.trim();
    const p = pass.trim();
    if (!u || !p) { setError("Por favor, preencha todos os campos."); return; }
    const account = USERS[u];
    if (!account || account.senha !== p) { setError("Usuário ou senha incorrectos."); return; }
    onLogin(account);
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
            <img src="https://www.sigeup.up.ac.mz/sigeup/public/dist/img/up.png" style={{ width: "100%", maxWidth: 220, height: "auto", display: "block", margin: "0 auto 12px" }} alt="UP" />
            {error && <span style={{ color: "red", fontSize: 12, marginBottom: 6, display: "block", width: "100%" }}>{error}</span>}
            <div style={{ width: "100%", marginBottom: 8, position: "relative" }}>
              <User size={14} color="#bbb" style={{ position: "absolute", left: 9, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
              <input type="text" placeholder="Usuário" autoFocus value={userId}
                onChange={(e) => { setUserId(e.target.value); setError(""); }}
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
            <div style={{ width: "100%", borderTop: "1px solid #eee", paddingTop: 10, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 6 }}>
              <span style={{ fontSize: 11, color: "#555" }}>© 2026 | <a href="#" style={{ color: "#3355bb", textDecoration: "none" }}>Universidade Pedagógica de Maputo</a></span>
              <div style={{ display: "flex", gap: 3 }}>
                {["https://sigeul.unilicungo.ac.mz/sigeup/public/dist/img/favicon.png","https://sig.unisave.ac.mz/sigeup/public/dist/img/favicon.png","https://epungue.unipungue.ac.mz/sigeup/public/dist/img/favicon.png","https://sigeur.up.ac.mz/sigeup/public/dist/img/favicon.png"].map((src, i) => (
                  <img key={i} src={src} width={26} height={26} alt="" style={{ borderRadius: 2 }} onError={(e) => { e.target.style.opacity = 0; }} />
                ))}
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
  const [currentUser, setCurrentUser] = useState(null);
  const [activePage, setActivePage] = useState("notas");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  if (!currentUser) {
    return <LoginPage onLogin={(account) => { setCurrentUser(account); setActivePage("notas"); }} />;
  }

  const u = currentUser;

  const navItems = [
    { key: "notas",      icon: <ClipboardList size={14} />, label: "Notas de Frequência" },
    { key: "inscricoes", icon: <BookOpen size={14} />,      label: "Inscrições" },
    { key: "dados",      icon: <UserCheck size={14} />,     label: "Visualizar Dados do Estudante" },
  ];

  const handleNav = (key) => {
    setActivePage(key);
    if (isMobile) setSidebarOpen(false);
  };

  // ── SIDEBAR STYLES ──
  const sidebarStyle = isMobile
    ? {
        position: "fixed", top: 0, left: 0,
        width: 260, height: "100vh",
        backgroundColor: "white",
        borderRight: "1px solid #e5e7eb",
        padding: "56px 16px 16px",
        zIndex: 50,
        transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.2s ease-in-out",
        boxShadow: sidebarOpen ? "4px 0 12px rgba(0,0,0,0.15)" : "none",
        overflowY: "auto",
      }
    : {
        width: 240,
        minWidth: 240,
        flexShrink: 0,
        backgroundColor: "white",
        borderRight: "1px solid #e5e7eb",
        padding: "16px",
        overflowY: "auto",
      };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f3f4f6", display: "flex", flexDirection: "column", fontFamily: "Arial, sans-serif" }}>

      {/* ── NAVBAR ── */}
      <nav style={{ backgroundColor: "#1e40af", color: "white", padding: "8px 12px", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          {/* Left */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            {isMobile && (
              <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{ background: "none", border: "none", color: "white", cursor: "pointer", padding: 2, display: "flex" }}>
                {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            )}
            <span style={{ fontWeight: "bold", fontSize: 14 }}>SIGEUP<sub style={{ fontSize: 10, fontWeight: "normal" }}>v4.7</sub></span>
            {!isMobile && (
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                {[
                  { icon: <Home size={13} />, label: "Início" },
                  { icon: <Mail size={13} />, label: "FAQ" },
                  { icon: <MessageSquare size={13} />, label: "Mensagens" },
                  { icon: <Bell size={13} />, label: "Notificações" },
                  { icon: <FileText size={13} />, label: "Documentos Úteis" },
                ].map(({ icon, label }) => (
                  <a key={label} href="#" style={{ color: "white", fontSize: 12, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                    {icon}{label}
                  </a>
                ))}
              </div>
            )}
          </div>
          {/* Right */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 10, color: "#93c5fd", lineHeight: 1.3 }}>Nome do Usuário:</div>
              <div style={{ fontSize: 12, color: "#bfdbfe", fontWeight: "600", lineHeight: 1.3 }}>{u.nome}</div>
            </div>
            <button onClick={() => setCurrentUser(null)} style={{ backgroundColor: "#ef4444", color: "white", border: "none", borderRadius: 4, padding: "6px 10px", fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
              <LogOut size={13} /> {!isMobile && "Sair"}
            </button>
          </div>
        </div>

        {/* Mobile nav links */}
        {isMobile && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 12px", marginTop: 8 }}>
            {[
              { icon: <Home size={12} />, label: "Início" },
              { icon: <Mail size={12} />, label: "FAQ" },
              { icon: <MessageSquare size={12} />, label: "Mensagens" },
              { icon: <Bell size={12} />, label: "Notificações" },
              { icon: <FileText size={12} />, label: "Documentos" },
            ].map(({ icon, label }) => (
              <a key={label} href="#" style={{ color: "white", fontSize: 11, textDecoration: "none", display: "flex", alignItems: "center", gap: 3 }}>
                {icon}{label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ── BODY ── */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden", position: "relative" }}>

        {/* Mobile overlay */}
        {isMobile && sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.4)", zIndex: 40 }}
          />
        )}

        {/* ── SIDEBAR ── */}
        <aside style={sidebarStyle}>
          <div style={{ fontSize: 11, fontWeight: "700", color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>
            Menu do Sistema
          </div>

          {/* Portal do Estudante */}
          <div style={{ marginBottom: 8 }}>
            <div style={{ fontWeight: "700", color: "#1d4ed8", fontSize: 13, marginBottom: 8, display: "flex", alignItems: "center", gap: 6 }}>
              <GraduationCap size={14} /> Portal do Estudante
            </div>
            <div style={{ marginLeft: 8, display: "flex", flexDirection: "column", gap: 2 }}>
              {navItems.map(({ key, icon, label }) => (
                <button
                  key={key}
                  onClick={() => handleNav(key)}
                  style={{
                    width: "100%", textAlign: "left",
                    padding: "8px 10px",
                    borderRadius: 4,
                    border: "none",
                    cursor: "pointer",
                    fontSize: 13,
                    display: "flex", alignItems: "center", gap: 8,
                    backgroundColor: activePage === key ? "#eff6ff" : "transparent",
                    color: activePage === key ? "#1e40af" : "#2563eb",
                    fontWeight: activePage === key ? "600" : "normal",
                    transition: "background-color 0.15s",
                  }}
                  onMouseEnter={(e) => { if (activePage !== key) e.currentTarget.style.backgroundColor = "#f9fafb"; }}
                  onMouseLeave={(e) => { if (activePage !== key) e.currentTarget.style.backgroundColor = "transparent"; }}
                >
                  {icon} {label}
                </button>
              ))}
            </div>
          </div>

          {/* Personalizações */}
          <div style={{ marginTop: 12 }}>
            <div style={{ fontWeight: "700", color: "#1d4ed8", fontSize: 13, display: "flex", alignItems: "center", gap: 4 }}>
              <ChevronRight size={14} /> Personalizações
            </div>
          </div>
        </aside>

        {/* ── MAIN CONTENT ── */}
        <main style={{ flex: 1, padding: isMobile ? 16 : 24, overflowY: "auto", overflowX: "hidden" }}>
          {activePage === "notas"      && <NotasPage user={u} isMobile={isMobile} />}
          {activePage === "inscricoes" && <InscricoesPage user={u} isMobile={isMobile} />}
          {activePage === "dados"      && <DadosPage user={u} isMobile={isMobile} />}
        </main>
      </div>
    </div>
  );
}

// ── NOTAS ─────────────────────────────────────────────────────────────────────
function NotasPage({ user, isMobile }) {
  const [ano, setAno] = useState("2026");
  const cols = ["Disciplina","Nível","Teste 1","Teste 2","Teste 3","Trab 1","Trab 2","Trab 3","Média","Classificação"];
  return (
    <div>
      <h2 style={{ fontSize: isMobile ? 17 : 20, color: "#4b5563", marginBottom: 16 }}>Notas de Frequência</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
        <select value={ano} onChange={(e) => setAno(e.target.value)}
          style={{ border: "1px solid #d1d5db", borderRadius: 4, padding: "6px 10px", fontSize: 13, flex: 1, maxWidth: 260 }}>
          <option value="2026">Ano Lectivo de 2026</option>
          <option value="2025">Ano Lectivo de 2025</option>
        </select>
        <button style={{ backgroundColor: "#16a34a", color: "white", border: "none", borderRadius: 4, padding: "6px 16px", fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
          <Search size={14} /> Buscar
        </button>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 580, fontSize: isMobile ? 11 : 13 }}>
          <thead>
            <tr style={{ backgroundColor: "#f9fafb", borderBottom: "2px solid #e5e7eb" }}>
              {cols.map((h) => (
                <th key={h} style={{ padding: "8px 10px", fontWeight: "600", color: "#374151", whiteSpace: "nowrap", textAlign: h === "Disciplina" ? "left" : "center" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {user.disciplinas.map((name, i) => (
              <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "white" : "#f9fafb", borderBottom: "1px solid #f3f4f6" }}>
                <td style={{ padding: "9px 10px", color: "#1f2937" }}>{name}</td>
                <td style={{ padding: "9px 10px", textAlign: "center", color: "#374151" }}>{user.nivel}</td>
                {[...Array(8)].map((_, j) => <td key={j} style={{ padding: "9px 10px" }} />)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── INSCRIÇÕES ────────────────────────────────────────────────────────────────
function InscricoesPage({ user, isMobile }) {
  return (
    <div>
      <h2 style={{ fontSize: isMobile ? 17 : 20, color: "#4b5563", marginBottom: 16 }}>Inscrições</h2>
      <div style={{ border: "1px dashed #d1d5db", borderRadius: 6, padding: 12, display: "inline-block", marginBottom: 20 }}>
        <button style={{ backgroundColor: "#16a34a", color: "white", border: "none", borderRadius: 4, padding: "8px 16px", fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
          <PlusCircle size={15} /> Nova Inscrição
        </button>
      </div>

      {isMobile ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {user.inscricoes.map((ins, i) => (
            <div key={i} style={{ backgroundColor: "white", border: "1px solid #e5e7eb", borderRadius: 6, padding: 12, fontSize: 13 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontWeight: "600", color: "#374151" }}>{ins.ano} — Sem. {ins.semestre}</span>
                <span style={{ backgroundColor: "#dcfce7", color: "#166534", padding: "2px 8px", borderRadius: 4, fontSize: 11, fontWeight: "600" }}>{ins.confirmada}</span>
              </div>
              <div style={{ color: "#6b7280", fontSize: 12, marginBottom: 8 }}>Data: {ins.data}</div>
              <button style={{ backgroundColor: "#16a34a", color: "white", border: "none", borderRadius: 4, padding: "5px 12px", fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
                <Printer size={12} /> Abrir
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ backgroundColor: "#f9fafb", borderBottom: "2px solid #e5e7eb" }}>
                {["Ano Lectivo","Semestre","Data","Entidade","Referencia","Valor","Confirmada",""].map((h) => (
                  <th key={h} style={{ padding: "8px 16px", fontWeight: "600", color: "#374151", textAlign: "left" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {user.inscricoes.map((ins, i) => (
                <tr key={i} style={{ backgroundColor: "white", borderBottom: "1px solid #f3f4f6" }}>
                  <td style={{ padding: "12px 16px", color: "#374151" }}>{ins.ano}</td>
                  <td style={{ padding: "12px 16px", color: "#374151" }}>{ins.semestre}</td>
                  <td style={{ padding: "12px 16px", color: "#374151" }}>{ins.data}</td>
                  <td style={{ padding: "12px 16px", color: "#374151" }}>{ins.entidade}</td>
                  <td style={{ padding: "12px 16px", color: "#374151" }}>{ins.referencia}</td>
                  <td style={{ padding: "12px 16px", color: "#374151" }}>{ins.valor}</td>
                  <td style={{ padding: "12px 16px" }}>
                    <span style={{ backgroundColor: "#dcfce7", color: "#166534", padding: "3px 10px", borderRadius: 4, fontSize: 12, fontWeight: "600" }}>{ins.confirmada}</span>
                  </td>
                  <td style={{ padding: "12px 16px" }}>
                    <button style={{ backgroundColor: "#16a34a", color: "white", border: "none", borderRadius: 4, padding: "5px 12px", fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
                      <Printer size={12} /> Abrir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// ── DADOS ─────────────────────────────────────────────────────────────────────
function DadosPage({ user, isMobile }) {
  const [activeTab, setActiveTab] = useState("curso");

  const gridTwo = { display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 12 };
  const gridThree = { display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: 12 };
  const gridFour = { display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr 1fr 1fr 1fr", gap: 12 };
  const gridFive = { display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr 1fr 1fr 1fr 1fr", gap: 12 };

  const card = { backgroundColor: "white", border: "1px solid #e5e7eb", borderRadius: 6, padding: isMobile ? 12 : 16 };

  return (
    <div>
      <h2 style={{ fontSize: isMobile ? 17 : 20, color: "#4b5563", marginBottom: 16 }}>Dados pessoais</h2>

      {/* Top card */}
      <div style={card}>
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 16, alignItems: isMobile ? "center" : "flex-start" }}>
          {/* Photo */}
          <div style={{ flexShrink: 0, width: isMobile ? 96 : 112, height: isMobile ? 112 : 128, backgroundColor: "#e5e7eb", borderRadius: 6, border: "1px solid #d1d5db", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <User size={isMobile ? 40 : 50} color="#9ca3af" />
          </div>
          {/* Basic fields */}
          <div style={{ flex: 1, width: "100%", ...gridTwo }}>
            <Field label="Nº de Estudante" value={user.numeroEstudante} />
            <Field label="Ano de Ingresso" value={user.anoIngresso} />
            <Field label="Apelido: *" value={user.apelido} />
            <Field label="Outros Nomes: *" value={user.outrosNomes} />
          </div>
        </div>

        <div style={{ ...gridTwo, marginTop: 14 }}>
          <Field label="Nome do Pai:" value={user.nomePai} />
          <Field label="Nome da Mãe:" value={user.nomeMae} />
        </div>

        <div style={{ ...gridFive, marginTop: 12 }}>
          <Field label="Sexo: *" value={user.sexo} />
          <Field label="Data de Nasc.: *" value={user.dataNasc} />
          <Field label="Telefone: *" value={user.telefone} />
          <Field label="Telefone alternativo:" value={user.telAlt} />
          <Field label="Nível:" value={user.nivel} />
        </div>

        <div style={{ marginTop: 12, maxWidth: 360 }}>
          <Field label="Email:" value={user.email} />
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", borderBottom: "2px solid #e5e7eb", marginTop: 16, overflowX: "auto" }}>
        {[
          { key: "curso",    label: "Dados do Curso" },
          { key: "pessoais", label: "Dados Pessoais" },
          { key: "doc",      label: "Documento de Identificação" },
        ].map((tab) => (
          <button key={tab.key} onClick={() => setActiveTab(tab.key)}
            style={{
              padding: isMobile ? "8px 12px" : "9px 16px",
              fontSize: isMobile ? 12 : 13,
              border: "none", borderBottom: activeTab === tab.key ? "2px solid #6b7280" : "2px solid transparent",
              marginBottom: -2,
              backgroundColor: activeTab === tab.key ? "white" : "transparent",
              color: activeTab === tab.key ? "#1f2937" : "#3b82f6",
              fontWeight: activeTab === tab.key ? "600" : "normal",
              cursor: "pointer", whiteSpace: "nowrap",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div style={{ backgroundColor: "white", border: "1px solid #e5e7eb", borderTop: "none", borderRadius: "0 0 6px 6px", padding: isMobile ? 12 : 16 }}>
        {activeTab === "curso" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ border: "1px solid #e5e7eb", borderRadius: 6, padding: isMobile ? 10 : 14 }}>
              <div style={{ ...gridThree, marginBottom: 12 }}>
                <Field label="Extensão: *" value={user.extensao} />
                <Field label="Centro: *" value={user.centro} />
                <Field label="Regime: *" value={user.regime} />
              </div>
              <div style={{ ...gridTwo, marginBottom: 12 }}>
                <Field label="Plano Curricular" value={user.plano} />
                <Field label="Curso Major: *" value={user.cursoMajor} />
              </div>
              <Field label="Curso Minor" value={user.cursoMinor} />
            </div>
            <div style={{ border: "1px solid #e5e7eb", borderRadius: 6, padding: isMobile ? 10 : 14 }}>
              <div style={{ ...gridFour, marginBottom: 12 }}>
                <Field label="Habilitações de Ingresso:" value={user.habilitacoes} />
                <Field label="Última Escola:" value={user.ultimaEscola} />
                <Field label="Área de Formação:" value={user.areaFormacao} />
                <Field label="Ano Conclusão:" value={user.anoConclusao} />
              </div>
              <div style={{ maxWidth: 160 }}>
                <Field label="Tem Certificado:" value={user.temCertificado} />
              </div>
            </div>
          </div>
        )}

        {activeTab === "pessoais" && (
          <div style={{ border: "1px solid #e5e7eb", borderRadius: 6, padding: isMobile ? 10 : 14 }}>
            <p style={{ fontSize: 12, fontWeight: "600", textDecoration: "underline", color: "#374151", marginBottom: 12 }}>Naturalidade:</p>
            <div style={{ ...gridThree, marginBottom: 12 }}>
              <Field label="País:" value={user.pais} />
              <Field label="Provincia:" value={user.provincia} />
              <Field label="Distrito:" value={user.distrito} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "2fr 1fr 1fr 2fr", gap: 12, marginBottom: 12 }}>
              <Field label="Bairro:" value={user.bairro} />
              <Field label="Quart.:" value={user.quart} />
              <Field label="Cs nº:" value={user.cs} />
              <Field label="Rua/Avenida:" value={user.rua} />
            </div>
            <div style={{ maxWidth: 200 }}>
              <Field label="Nacionalidade:" value={user.nacionalidade} />
            </div>
          </div>
        )}

        {activeTab === "doc" && (
          <div style={{ border: "1px solid #e5e7eb", borderRadius: 6, padding: isMobile ? 10 : 14 }}>
            <div style={{ ...gridFour, marginBottom: 12 }}>
              <Field label="Tipo Doc. Ident.:" value={user.tipoDoc} />
              <Field label="N.º do Documento:" value={user.numDoc} />
              <Field label="Local de Emissão:" value={user.localEmissao} />
              <Field label="Validade:" value={user.validade} />
            </div>
            <div style={{ maxWidth: 200 }}>
              <Field label="NUIT:" value={user.nuit} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
