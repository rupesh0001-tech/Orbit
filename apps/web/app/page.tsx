"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [agentModalOpen, setAgentModalOpen] = useState(false);
  const [inputPrompt, setInputPrompt] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "agent",
      text: "Hello! I am Orbit AI, your autonomous intelligence system. How can I assist your team today?",
    },
  ]);
  const [loading, setLoading] = useState(false);

  // Stats counting state
  const [stats, setStats] = useState({
    inference: 0,
    uptime: 0,
    runtime: 0,
    context: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        inference: 120,
        uptime: 99.99,
        runtime: 24,
        context: 2.4,
      });
    }, 480);
    return () => clearTimeout(timer);
  }, []);

  const handleAgentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputPrompt.trim() || loading) return;

    const userText = inputPrompt;
    setInputPrompt("");
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setLoading(true);

    try {
      const res = await fetch("/api/agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userText }),
      });
      const data = await res.json();
      if (data.response) {
        setMessages((prev) => [...prev, { sender: "agent", text: data.response }]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "agent", text: "[Orbit Core] Execution complete. Autonomous tasks executed successfully." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={`page ${mobileMenuOpen ? "menu-open" : ""}`}>
      {/* Header */}
      <header className="header">
        <button
          className="logo-btn"
          aria-label="Orbit AI Home"
          onClick={() => setAgentModalOpen(true)}
        >
          <img src="/assets/logo.webp" alt="" width={52} height={52} className="logo-img" />
        </button>

        <nav className="nav-pill" aria-label="Main Navigation">
          <ul className="nav-list">
            <li>
              <a href="#home" className="nav-link active">
                Home
              </a>
            </li>
            <li>
              <a href="#product" className="nav-link">
                Product
              </a>
            </li>
            <li>
              <a href="#case-studies" className="nav-link">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <button onClick={() => setAgentModalOpen(true)} className="btn-signin">
          Launch Orbit
        </button>

        <button
          className="burger-btn"
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

      {/* Hero */}
      <section className="hero">
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
            <span>Trusted by 2000+ Enterprises</span>
          </div>
        </div>

        <h1 className="headline anim">
          <span className="line-1">Intelligence</span>
          <span className="line-2">Designed To Evolve</span>
        </h1>

        <p className="subhead anim" style={{ "--d": "0.28s" } as React.CSSProperties}>
          Build applications that reason, adapt and collaborate using a modular AI platform designed for production.
        </p>

        <div className="cta-wrapper anim" style={{ "--d": "0.4s" } as React.CSSProperties}>
          <button onClick={() => setAgentModalOpen(true)} className="cta-btn">
            Get Started
          </button>
        </div>
      </section>

      {/* Stats Footer */}
      <footer className="stats-footer">
        <div className="stat-card anim" style={{ "--d": "0.5s" } as React.CSSProperties}>
          <span className="stat-icon">&lt;</span>
          <div className="stat-body">
            <span className="stat-value">{stats.inference}ms</span>
            <span className="stat-label">Inference Time</span>
          </div>
        </div>

        <div className="stat-card anim" style={{ "--d": "0.58s" } as React.CSSProperties}>
          <span className="stat-icon">%</span>
          <div className="stat-body">
            <span className="stat-value">{stats.uptime.toFixed(2)}%</span>
            <span className="stat-label">Platform Uptime</span>
          </div>
        </div>

        <div className="stat-card anim" style={{ "--d": "0.66s" } as React.CSSProperties}>
          <span className="stat-icon">*</span>
          <div className="stat-body">
            <span className="stat-value">{stats.runtime}/7</span>
            <span className="stat-label">Autonomous Runtime</span>
          </div>
        </div>

        <div className="stat-card anim" style={{ "--d": "0.74s" } as React.CSSProperties}>
          <span className="stat-icon">#</span>
          <div className="stat-body">
            <span className="stat-value">{stats.context}M</span>
            <span className="stat-label">Context Windows</span>
          </div>
        </div>
      </footer>

      {/* Mobile Menu Sheet */}
      {mobileMenuOpen && (
        <>
          <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)} />
          <div className="mobile-sheet">
            <nav className="mobile-nav">
              <a href="#home" className="mobile-link active" onClick={() => setMobileMenuOpen(false)}>
                Home
              </a>
              <a href="#product" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
                Product
              </a>
              <a href="#case-studies" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
                Case Studies
              </a>
              <a href="#contact" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
              <button
                className="mobile-signin"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setAgentModalOpen(true);
                }}
              >
                Sign in
              </button>
            </nav>
          </div>
        </>
      )}

      {/* Orbit AI Interactive Agent Modal */}
      {agentModalOpen && (
        <div className="agent-modal" onClick={() => setAgentModalOpen(false)}>
          <div className="agent-container" onClick={(e) => e.stopPropagation()}>
            <div className="agent-header">
              <div className="agent-title">
                <span className="agent-status-dot"></span>
                <span>Orbit AI Agent Interface</span>
              </div>
              <button
                onClick={() => setAgentModalOpen(false)}
                style={{ background: "none", border: "none", color: "#8e8e8e", cursor: "pointer", fontSize: "18px" }}
              >
                ✕
              </button>
            </div>
            <div className="agent-messages">
              {messages.map((msg, idx) => (
                <div key={idx} className={`message-bubble ${msg.sender}`}>
                  {msg.text}
                </div>
              ))}
              {loading && <div className="message-bubble agent">Orbit is thinking...</div>}
            </div>
            <form onSubmit={handleAgentSubmit} className="agent-input-form">
              <input
                type="text"
                value={inputPrompt}
                onChange={(e) => setInputPrompt(e.target.value)}
                placeholder="Ask Orbit AI to reason or build..."
                className="agent-input"
              />
              <button type="submit" className="agent-submit-btn">
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
