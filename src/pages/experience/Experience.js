import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import "./Experience.css";

const accent = "#2f54eb";

function SectionBadge({ num }) {
  return <span className="po-section-badge">{num}</span>;
}

function StatCard({ icon, value, label }) {
  return (
    <div className="po-stat-card">
      <div className="po-stat-icon">{icon}</div>
      <div className="po-stat-value">{value}</div>
      <div className="po-stat-label">{label}</div>
    </div>
  );
}

const demoVersions = [
  {
    label: "Demo V1",
    sub: "GitHub 原型版本",
    type: "github",
    url: "https://github.com/lix17754-svg/nuannuan-V1",
  },
  {
    label: "Demo V2",
    sub: "Pages 初版上线",
    type: "online",
    url: "https://nuannuan-v2.pages.dev/",
  },
  {
    label: "Demo V3",
    sub: "Pages 功能迭代",
    type: "online",
    url: "https://nuannuanv3.pages.dev/",
  },
  {
    label: "Demo V4",
    sub: "Pages 当前优化版",
    type: "online",
    url: "https://nuannuanv4.pages.dev/",
  },
];

const modelResults = [
  { name: "GPT", selected: true },
  { name: "Gemini", selected: false },
  { name: "豆包", selected: false },
  { name: "Deepseek", selected: false },
  { name: "Minimax", selected: false },
];

const testScenes = [
  "极端情绪",
  "身体伤害",
  "威胁控制",
  "社交压力",
  "青春期敏感问题",
];

const selectionCriteria = [
  { icon: "❤️", text: "共情表达" },
  { icon: "🛡️", text: "安全兜底" },
  { icon: "👤", text: "未成年人友好" },
  { icon: "💬", text: "中文自然度" },
  { icon: "⚠️", text: "风险处理能力" },
];

function MonitorIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke={accent}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function DatabaseIcon({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={accent}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </svg>
  );
}

export default function Experience(props) {
  const theme = props.theme;

  return (
    <div className="experience-main">
      <Header theme={theme} />
      <div className="po-wrap">
        {/* ── 页面标题 ── */}
        <div className="po-page-header">
          <div className="po-page-title-block">
            <p className="po-overline">Project Outcomes</p>
            <h1 className="po-title" style={{ color: theme.text }}>
              项目成果
            </h1>
            <p className="po-desc">
              本页呈现「暖暖星语」项目从问题洞察、模型测评、版本上线到数据库部署的阶段性成果。
            </p>
          </div>
          <div className="po-stats-row">
            <StatCard
              icon={
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={accent}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
              }
              value="4 个"
              label="Demo 版本"
            />
            <StatCard
              icon={
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={accent}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="8" width="16" height="11" rx="3" />
                  <path d="M12 8V4M9 13h.01M15 13h.01M9 16h6" />
                </svg>
              }
              value="1 次"
              label="模型测评"
            />
            <StatCard icon={<DatabaseIcon />} value="1 个" label="数据库后台" />
            <StatCard
              icon={
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={accent}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                  <path d="M14 3v6h6M9 13h6M9 17h6" />
                </svg>
              }
              value="1 份"
              label="项目背景洞察"
            />
          </div>
        </div>

        {/* ── Section 1：项目背景 / 问题洞察 ── */}
        <div className="po-section">
          <div className="po-section-header">
            <SectionBadge num="1" />
            <h2 className="po-section-title" style={{ color: theme.text }}>
              项目背景 / 问题洞察
            </h2>
          </div>
          <div className="po-bg-grid">
            {/* 左侧 */}
            <div className="po-bg-left">
              <div className="po-data-source-card">
                <div className="po-data-source-label">数据来源</div>
                <div className="po-data-source-tag">洋葱客服 · 2022—2024</div>
                <div className="po-big-number">≈10%</div>
                <div className="po-big-number-sub">
                  学生问题集中在
                  <br />
                  「主动倾诉焦虑」类别
                </div>
              </div>
              <div className="po-finding-card">
                <div className="po-finding-label">核心发现</div>
                <p className="po-finding-text">
                  这些学生有情绪需要倾诉，但<strong>缺少一个安全的出口</strong>
                  去表达和宣泄。
                </p>
              </div>
            </div>
            {/* 右侧 */}
            <div className="po-bg-right">
              <div className="po-scenes-label">典型场景</div>
              {[
                {
                  letter: "A",
                  title: "被老师当众批评",
                  desc: "委屈无处发泄，怕跟家长说引发新冲突",
                },
                {
                  letter: "B",
                  title: "跟同学闹矛盾",
                  desc: "不想跟别人说，怕传出去、怕被评判",
                },
                {
                  letter: "C",
                  title: "作业压力崩溃",
                  desc: "没到打热线的门槛，但情绪已经很卡",
                },
                {
                  letter: "D",
                  title: "最终行为",
                  desc: '把情绪吞回去，或发一条"好烦"的朋友圈自言自语',
                },
              ].map((s) => (
                <div className="po-scene-row" key={s.letter}>
                  <span className="po-scene-letter">{s.letter}</span>
                  <div className="po-scene-body">
                    <div className="po-scene-title">{s.title}</div>
                    <div className="po-scene-desc">{s.desc}</div>
                  </div>
                </div>
              ))}
              <div className="po-painpoint">
                💡 痛点核心：想说，但没地方去说
              </div>
            </div>
          </div>
        </div>

        {/* ── Section 2：项目版本上线记录 ── */}
        <div className="po-section">
          <div className="po-section-header">
            <SectionBadge num="2" />
            <h2 className="po-section-title" style={{ color: theme.text }}>
              项目版本上线记录
            </h2>
          </div>
          <div className="po-versions-grid">
            {demoVersions.map((v) => (
              <div className="po-version-card" key={v.label}>
                <div className="po-version-icon">
                  <MonitorIcon />
                </div>
                <div className="po-version-label" style={{ color: theme.text }}>
                  {v.label}
                </div>
                <div className="po-version-sub">{v.sub}</div>
                <a
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`po-version-btn po-version-btn--${v.type}`}
                >
                  {v.type === "github" ? (
                    <>
                      <GithubIcon /> GitHub
                    </>
                  ) : (
                    <>
                      <ExternalLinkIcon /> Online
                    </>
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* ── Section 3：V1 模型测评与选型 ── */}
        <div className="po-section">
          <div className="po-section-header">
            <SectionBadge num="3" />
            <h2 className="po-section-title" style={{ color: theme.text }}>
              V1 模型测评与选型
            </h2>
          </div>
          <div className="po-model-grid">
            {/* 测试模型 */}
            <div className="po-model-block">
              <div className="po-model-block-label">测试模型</div>
              <div className="po-model-chips">
                {modelResults.map((m) => (
                  <span
                    key={m.name}
                    className={
                      "po-model-chip" +
                      (m.selected ? " po-model-chip--selected" : "")
                    }
                  >
                    {m.name}
                    {m.selected && (
                      <span className="po-model-check">✓ 已选用</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
            {/* 测评场景 */}
            <div className="po-model-block">
              <div className="po-model-block-label">测评场景</div>
              <div className="po-scene-checks">
                {testScenes.map((s) => (
                  <div className="po-scene-check-row" key={s}>
                    <span className="po-check-dot" />
                    {s}
                  </div>
                ))}
              </div>
            </div>
            {/* 选型关注点 */}
            <div className="po-model-block">
              <div className="po-model-block-label">选型关注点</div>
              <div className="po-criteria-list">
                {selectionCriteria.map((c) => (
                  <div className="po-criteria-row" key={c.text}>
                    <span className="po-criteria-icon">{c.icon}</span>
                    {c.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="po-model-note">
            ℹ️ 基于高风险与敏感对话场景，对国内外模型进行横向测试，为 V1
            对话能力选型提供依据。
          </p>
        </div>

        {/* ── Section 4：线上数据库部署 ── */}
        <div className="po-section">
          <div className="po-section-header">
            <SectionBadge num="4" />
            <h2 className="po-section-title" style={{ color: theme.text }}>
              线上数据库部署
            </h2>
          </div>
          <div className="po-db-card">
            <div className="po-db-left">
              <div className="po-db-illus">
                <DatabaseIcon size={48} />
              </div>
            </div>
            <div className="po-db-right">
              <p className="po-db-desc">
                暖暖 App 线上数据库已搭建，
                <br />
                支持消息存储、后台查看与后续迭代分析。
              </p>
              <a
                href="https://nuannuanv3.pages.dev/admin/messages"
                target="_blank"
                rel="noopener noreferrer"
                className="po-db-link"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <ellipse cx="12" cy="5" rx="8" ry="3" />
                  <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
                  <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
                </svg>
                /admin/messages
              </a>
              <div className="po-db-tags">
                <span className="po-db-tag">消息存储</span>
                <span className="po-db-tag">后台查看</span>
                <span className="po-db-tag">后续迭代</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}
