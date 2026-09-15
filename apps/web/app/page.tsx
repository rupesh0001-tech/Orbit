"use client";

import React, { useState, useEffect } from "react";
import { 
  Terminal, 
  Cpu, 
  FolderKanban, 
  Globe, 
  ShieldCheck, 
  Sparkles, 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  CheckCircle2, 
  X,
  Play
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  
  // Interactive Agent Simulator state
  const [promptInput, setPromptInput] = useState("");
  const [logs, setLogs] = useState<string[]>([
    "Orbit OS Engine initialized.",
    "System permission scope verified.",
    'Type a natural language instruction above to test Orbit OS Agent execution...',
  ]);
  const [isExecuting, setIsExecuting] = useState(false);

  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSimulateExecution = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promptInput.trim() || isExecuting) return;

    const command = promptInput;
    setPromptInput("");
    setIsExecuting(true);

    setLogs((prev) => [
      ...prev,
      `> User Command: "${command}"`,
      `[Orbit Planner] Analyzing OS intent and tool routing...`,
    ]);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        `[Orbit Executor] Subprocess launched in isolated sandbox.`,
        `[Orbit Action] Executed task with 100% precision. Result delivered to system context.`,
      ]);
      setIsExecuting(false);
    }, 1200);
  };

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Demo Auth: ${authMode === "signin" ? "Signed in" : "Account created"} successfully for ${email}`);
    setAuthModalOpen(false);
  };

  return (
    <main className={`page relative z-10 flex flex-col justify-between items-center w-full min-h-screen p-4 md:p-6 overflow-x-hidden ${mobileMenuOpen ? "menu-open" : ""}`}>
      {/* 1. Header Navigation */}
      <header className="header w-full max-width-[720px] flex items-center justify-between md:justify-center gap-4 flex-shrink-0 animate-slide-down">
        {/* Logo Button */}
        <button
          className="logo-btn"
          aria-label="Orbit AI Home"
          onClick={() => {
            setAuthMode("signin");
            setAuthModalOpen(true);
          }}
        >
          <img src="/assets/logo.webp" alt="Orbit Logo" width={52} height={52} className="logo-img" />
        </button>

        {/* Desktop Nav Pill */}
        <nav className="nav-pill hidden md:flex" aria-label="Main Navigation">
          <ul className="nav-list flex items-center justify-around w-full">
            <li>
              <a href="#home" className="nav-link active">
                Home
              </a>
            </li>
            <li>
              <a href="#engine" className="nav-link">
                OS Engine
              </a>
            </li>
            <li>
              <a href="#capabilities" className="nav-link">
                Capabilities
              </a>
            </li>
            <li>
              <a href="#specs" className="nav-link">
                Agent Specs
              </a>
            </li>
          </ul>
        </nav>

        {/* Desktop Sign In / CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => {
              setAuthMode("signin");
              setAuthModalOpen(true);
            }}
            className="btn-signin"
          >
            Sign in
          </button>
        </div>

        {/* Mobile Burger Button */}
        <button
          className="burger-btn md:hidden"
          id="burgerBtn"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="burger-bar bar-1"></span>
          <span className="burger-bar bar-2"></span>
          <span className="burger-bar bar-3"></span>
        </button>
      </header>

      {/* 2. Main Hero Section */}
      <section className="hero flex-1 flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto py-6">
        {/* Trust Badge */}
        <div className="trust-row anim" style={{ "--d": "0.05s" } as React.CSSProperties}>
          <div className="avatars-group">
            <div className="avatar-ring avatar-1">
              <div className="avatar-inner">
                <i className="fa-brands fa-microsoft"></i>
              </div>
            </div>
            <div className="avatar-ring avatar-2">
              <div className="avatar-inner">
                <i className="fa-brands fa-amazon"></i>
              </div>
            </div>
            <div className="avatar-ring avatar-3">
              <div className="avatar-inner">
                <i className="fa-brands fa-google"></i>
              </div>
            </div>
          </div>
          <div className="trust-pill">
            <span>Trusted by 2,000+ Enterprises & Developers</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="headline anim">
          <span className="line-1">Intelligence</span>
          <span className="line-2">Designed To Evolve</span>
        </h1>

        {/* Subhead */}
        <p className="subhead anim max-w-xl text-neutral-300 opacity-90 text-sm md:text-base leading-relaxed mb-6" style={{ "--d": "0.28s" } as React.CSSProperties}>
          The autonomous OS AI agent. Execute local workflows, control desktop applications, run code test suites, and synthesize web actions through natural language.
        </p>

        {/* CTA Buttons */}
        <div className="cta-wrapper anim flex flex-wrap items-center justify-center gap-4" style={{ "--d": "0.4s" } as React.CSSProperties}>
          <button
            onClick={() => {
              setAuthMode("signup");
              setAuthModalOpen(true);
            }}
            className="cta-btn cursor-pointer"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 ml-2 inline-block" />
          </button>
          
          <a
            href="#capabilities"
            className="px-6 py-3 rounded-full text-xs md:text-sm font-medium text-neutral-300 bg-neutral-900/80 border border-white/10 hover:bg-neutral-800 hover:text-white transition-all duration-200 backdrop-blur-md"
          >
            Explore OS Agent
          </a>
        </div>
      </section>

      {/* 3. OS Agent Interactive Execution Sandbox */}
      <section id="engine" className="w-full max-w-3xl my-6 anim" style={{ "--d": "0.45s" } as React.CSSProperties}>
        <div className="glass-card rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
          {/* Terminal Window Header */}
          <div className="bg-neutral-900/90 px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-xs font-mono text-neutral-400 ml-2">orbit-os-agent ~ bash</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>OS Sandbox Ready</span>
            </div>
          </div>

          {/* Console Output */}
          <div className="p-4 font-mono text-xs text-neutral-300 space-y-2 h-44 overflow-y-auto bg-black/60">
            {logs.map((log, idx) => (
              <div key={idx} className={log.startsWith(">") ? "text-white font-semibold" : log.includes("Planner") ? "text-cyan-400" : log.includes("Executor") ? "text-amber-400" : "text-neutral-400"}>
                {log}
              </div>
            ))}
          </div>

          {/* Terminal Input Bar */}
          <form onSubmit={handleSimulateExecution} className="bg-neutral-900/90 p-2 flex items-center gap-2 border-t border-white/10">
            <div className="pl-3 text-neutral-400">
              <Terminal className="w-4 h-4 text-emerald-400" />
            </div>
            <input
              type="text"
              value={promptInput}
              onChange={(e) => setPromptInput(e.target.value)}
              placeholder="e.g. Analyze OS metrics, organize workspace, or run code tests..."
              className="flex-1 bg-transparent border-none text-xs text-white placeholder-neutral-500 focus:outline-none py-2 font-mono"
            />
            <button
              type="submit"
              disabled={isExecuting}
              className="bg-white text-black hover:bg-neutral-200 px-4 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              {isExecuting ? "Executing..." : "Execute"}
              <Play className="w-3 h-3 fill-current" />
            </button>
          </form>
        </div>
      </section>

      {/* 4. OS Capabilities Grid */}
      <section id="capabilities" className="w-full max-w-4xl my-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
        <div className="glass-card p-6 rounded-2xl hover:border-white/30 transition-all duration-300">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-base font-semibold text-white mb-2">OS & Process Control</h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Launch applications, manage background subprocesses, monitor system diagnostics, and execute local OS operations via chat.
          </p>
        </div>

        <div className="glass-card p-6 rounded-2xl hover:border-white/30 transition-all duration-300">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
            <FolderKanban className="w-5 h-5" />
          </div>
          <h3 className="text-base font-semibold text-white mb-2">Workspace & File Automation</h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Clean up clutter, batch organize files by category, format directories, and transform media assets with zero manual effort.
          </p>
        </div>

        <div className="glass-card p-6 rounded-2xl hover:border-white/30 transition-all duration-300">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
            <Terminal className="w-5 h-5" />
          </div>
          <h3 className="text-base font-semibold text-white mb-2">Developer Test & Build Engine</h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Automatically execute unit test suites, compile projects, parse terminal trace logs, and resolve build errors in real time.
          </p>
        </div>

        <div className="glass-card p-6 rounded-2xl hover:border-white/30 transition-all duration-300">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
            <Globe className="w-5 h-5" />
          </div>
          <h3 className="text-base font-semibold text-white mb-2">Multimodal Web Agent</h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Seamlessly bridge browser workflows with your local machine. Fetch web data, generate AI imagery, and auto-save to target folders.
          </p>
        </div>
      </section>

      {/* 5. Stats Footer */}
      <footer id="specs" className="stats-footer w-full max-w-[920px] grid grid-cols-2 md:grid-cols-4 gap-4 flex-shrink-0 mt-auto pt-4">
        <div className="stat-card anim" style={{ "--d": "0.5s" } as React.CSSProperties}>
          <span className="stat-icon">&lt;</span>
          <div className="stat-body">
            <span className="stat-value">120ms</span>
            <span className="stat-label">Inference Time</span>
          </div>
        </div>

        <div className="stat-card anim" style={{ "--d": "0.58s" } as React.CSSProperties}>
          <span className="stat-icon">%</span>
          <div className="stat-body">
            <span className="stat-value">99.99%</span>
            <span className="stat-label">Platform Uptime</span>
          </div>
        </div>

        <div className="stat-card anim" style={{ "--d": "0.66s" } as React.CSSProperties}>
          <span className="stat-icon">*</span>
          <div className="stat-body">
            <span className="stat-value">24/7</span>
            <span className="stat-label">Autonomous Runtime</span>
          </div>
        </div>

        <div className="stat-card anim" style={{ "--d": "0.74s" } as React.CSSProperties}>
          <span className="stat-icon">#</span>
          <div className="stat-body">
            <span className="stat-value">2.4M</span>
            <span className="stat-label">Context Windows</span>
          </div>
        </div>
      </footer>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <>
          <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)} />
          <div className="mobile-sheet">
            <nav className="mobile-nav">
              <a href="#home" className="mobile-link active" onClick={() => setMobileMenuOpen(false)}>
                Home
              </a>
              <a href="#engine" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
                OS Engine
              </a>
              <a href="#capabilities" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
                Capabilities
              </a>
              <a href="#specs" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
                Agent Specs
              </a>
              <button
                className="mobile-signin"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setAuthMode("signin");
                  setAuthModalOpen(true);
                }}
              >
                Sign in
              </button>
            </nav>
          </div>
        </>
      )}

      {/* 6. Interactive Auth Modal (Sign In / Sign Up) */}
      {authModalOpen && (
        <div className="fixed inset-0 z-[2000] bg-black/80 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setAuthModalOpen(false)}>
          <div
            className="w-full max-w-md bg-neutral-900 border border-white/15 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setAuthModalOpen(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Auth Mode Toggle Tabs */}
            <div className="flex bg-neutral-800/80 p-1 rounded-full mb-6">
              <button
                onClick={() => setAuthMode("signin")}
                className={`flex-1 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
                  authMode === "signin" ? "bg-white text-black shadow-md" : "text-neutral-400 hover:text-white"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setAuthMode("signup")}
                className={`flex-1 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
                  authMode === "signup" ? "bg-white text-black shadow-md" : "text-neutral-400 hover:text-white"
                }`}
              >
                Create Account
              </button>
            </div>

            {/* Header Title */}
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-white mb-1">
                {authMode === "signin" ? "Welcome Back to Orbit" : "Join the Orbit OS Intelligence"}
              </h2>
              <p className="text-xs text-neutral-400">
                {authMode === "signin"
                  ? "Enter your credentials to access your OS Agent node"
                  : "Create your account to unlock desktop AI automation"}
              </p>
            </div>

            {/* OAuth Buttons */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                type="button"
                onClick={() => alert("GitHub OAuth Clicked")}
                className="flex items-center justify-center gap-2 py-2.5 px-4 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-xs font-medium border border-white/10 transition-colors"
              >
                <i className="fa-brands fa-github text-sm"></i>
                <span>GitHub</span>
              </button>
              <button
                type="button"
                onClick={() => alert("Google OAuth Clicked")}
                className="flex items-center justify-center gap-2 py-2.5 px-4 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-xs font-medium border border-white/10 transition-colors"
              >
                <i className="fa-brands fa-google text-sm"></i>
                <span>Google</span>
              </button>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="h-px bg-white/10 flex-1" />
              <span className="text-[11px] text-neutral-500 uppercase tracking-wider">or with email</span>
              <div className="h-px bg-white/10 flex-1" />
            </div>

            {/* Form */}
            <form onSubmit={handleAuthSubmit} className="space-y-4 text-left">
              {authMode === "signup" && (
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alan Turing"
                      className="w-full bg-neutral-800/90 border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white/40"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-neutral-800/90 border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white/40"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full bg-neutral-800/90 border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white/40"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black hover:bg-neutral-200 font-semibold py-3 rounded-xl text-xs transition-colors mt-2"
              >
                {authMode === "signin" ? "Sign In to Orbit" : "Create Free Account"}
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
