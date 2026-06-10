import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import "./Projects.css";

const ASSETS = [
  {
    id: 1,
    num: "01",
    tag: "SKILL",
    type: "skill",
    glowColor: "#bfdbfe",
    orbColor: "#93c5fd",
    gradient:
      "linear-gradient(160deg,#dbeafe 0%,#eff6ff 30%,#f7f8ff 60%,#ffffff 100%)",
    accentColor: "#3b82f6",
    iconBg: "#eff6ff",
    title: "项目沉淀 Skill",
    desc: "Demo 设计及上线过程中，基于繁琐流程和卡点沉淀的自动化 Skill",
    innerEyebrow: "01 · Skill · 自动化工具",
    innerTitle: "项目沉淀 Skill",
    innerDesc:
      "Demo 设计及上线过程中，基于繁琐流程和卡点沉淀的 4 个自动化 Skill，可直接复用到下一个项目。",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="26"
        height="26"
      >
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    skills: [
      {
        num: "Skill 01",
        name: "ui-production",
        when: "做一个页面 / 界面时",
        desc:
          "确保生成的 UI 是分层、每个元素独立可编辑的代码，而不是一张不可改的「背景板」，方便丢进 Cursor / Claude Code / Codex 继续开发",
        file: "/skills/ui-production.md",
      },
      {
        num: "Skill 02",
        name: "feishu-doc-writer",
        when: "AI 工具通过飞书 API 自动写入文档时",
        desc:
          "包含认证、block 格式陷阱与排错表，确保标题、列表、链接等内容正确写进飞书文档",
        file: "/skills/feishu-doc-writer.md",
      },
      {
        num: "Skill 03",
        name: "online-api-cloudflare-deploy",
        when: "本地 Node API 要上线或遇到 POST 405 时",
        desc:
          "核心是必须 esbuild 打包 _worker.js；解决 API 返回 index.html、405 等 Cloudflare Pages 线上问题",
        file: "/skills/online-api-cloudflare-deploy.md",
      },
      {
        num: "Skill 04",
        name: "project-iteration",
        when: "已上线项目要大版本迭代且老版本须保留时",
        desc:
          "走「复制文件夹 → 新仓库 → 新 Pages 项目 → 迁移环境变量 → curl 验证」完整流程；依赖 Skill 03 做部署排错",
        file: "/skills/project-iteration.md",
      },
    ],
  },
  {
    id: 2,
    num: "02",
    tag: "AGENT",
    type: "agent",
    glowColor: "#fde68a",
    orbColor: "#fcd34d",
    gradient:
      "linear-gradient(160deg,#fef3c7 0%,#fffbeb 30%,#fffff8 60%,#ffffff 100%)",
    accentColor: "#d97706",
    iconBg: "#fffbeb",
    title: "AI 周报 Agent",
    desc:
      "自动追踪国内外 AI 新闻与行业动态，同步更新至飞书文档，降低信息搜集与学习成本",
    innerEyebrow: "02 · Agent · 自动周报",
    innerTitle: "AI 周报 Agent",
    innerDesc:
      "自动追踪国内外 AI 新闻与行业动态，并同步更新至飞书文档，降低信息搜集与学习成本。",
    feishuLink: "https://guanghe.feishu.cn/docx/MNyCdUNQ1oqKxXxdLe7csuXGnlh",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#d97706"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="26"
        height="26"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    id: 3,
    num: "03",
    tag: "AIGC",
    type: "aigc",
    glowColor: "#ddd6fe",
    orbColor: "#c4b5fd",
    gradient:
      "linear-gradient(160deg,#ede9fe 0%,#f5f3ff 30%,#faf8ff 60%,#ffffff 100%)",
    accentColor: "#7c3aed",
    iconBg: "#f5f3ff",
    title: "AIGC 创作 Agent",
    desc: "基于音频波纹生成动漫场景视觉，可用于后续暖暖音频 / 视频创作",
    innerEyebrow: "03 · AIGC · 视觉创作",
    innerTitle: "AIGC 创作 Agent",
    innerDesc:
      "基于音频波纹生成动漫场景视觉，可用于后续暖暖音频 / 视频创作，也可迁移到其他情绪类产品。",
    workLink: "https://music-rose.pages.dev/",
    tags: ["音频波纹", "动漫场景", "可迁移"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7c3aed"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="26"
        height="26"
      >
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    id: 4,
    num: "04",
    tag: "方法论",
    type: "method",
    glowColor: "#a7f3d0",
    orbColor: "#6ee7b7",
    gradient:
      "linear-gradient(160deg,#d1fae5 0%,#ecfdf5 30%,#f7fff9 60%,#ffffff 100%)",
    accentColor: "#059669",
    iconBg: "#ecfdf5",
    title: "可复用方法论",
    desc: "沉淀 AI Build、数据驱动与产品统筹方法，形成可迁移的项目推进能力",
    tags: "AI Build · 数据驱动 · 产品统筹",
    innerEyebrow: "04 · 方法论 · 可迁移能力",
    innerTitle: "可复用方法论",
    innerDesc:
      "沉淀 AI Build、数据驱动与产品统筹三项能力，形成可直接迁移到下一个项目的推进框架。",
    methods: [
      {
        name: "数据驱动能力",
        subtitle: "用数据定位真实问题，用反馈验证迭代方向",
        points: [
          "用数据定义问题，而非凭感觉判断需求",
          "设计测评指标，将体验问题量化",
          "通过 Bad case 归因定位模型与产品问题",
          "用用户反馈持续修正产品方向",
        ],
        icon: (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#059669"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="22"
            height="22"
          >
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        ),
      },
      {
        name: "AI Build 能力",
        subtitle: "把 AI 工具、开源项目和模型能力转化为可落地 Demo",
        points: [
          "创作可复用 Skill 模板",
          "爬取 GitHub 优秀作品并拆解复用",
          "基于模型评分进行 Bad case 归因",
          "分析不同模型在具体场景下的适配度",
        ],
        icon: (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#059669"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="22"
            height="22"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
          </svg>
        ),
      },
      {
        name: "产品统筹能力",
        subtitle: "从背景、目标、需求到协作推进，保证项目持续落地",
        points: [
          "梳理项目背景与核心目标",
          "拆解用户场景与真实需求",
          "协调设计、开发与内容迭代节奏",
          "把控产品版本迭代与交付节奏",
        ],
        icon: (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#059669"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="22"
            height="22"
          >
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 00-3-3.87" />
            <path d="M16 3.13a4 4 0 010 7.75" />
          </svg>
        ),
      },
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#059669"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="26"
        height="26"
      >
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
  },
];

/* ── 内页内容渲染 ── */
function SkillInner({ asset }) {
  return (
    <div className="ii-skill-body">
      <div className="ii-hero">
        <div className="ii-eyebrow" style={{ color: asset.accentColor }}>
          {asset.innerEyebrow}
        </div>
        <h2 className="ii-title">{asset.innerTitle}</h2>
        <p className="ii-desc">{asset.innerDesc}</p>
      </div>
      <div className="ii-skill-grid">
        {asset.skills.map((sk) => (
          <div key={sk.num} className="ii-skill-card">
            <div
              className="ii-sk-num"
              style={{ color: asset.accentColor, opacity: 0.4 }}
            >
              {sk.num}
            </div>
            <h3 className="ii-sk-name">{sk.name}</h3>
            <div
              className="ii-sk-when"
              style={{ color: asset.accentColor, borderColor: asset.glowColor }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="11"
                height="11"
              >
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
              {sk.when}
            </div>
            <p className="ii-sk-desc">{sk.desc}</p>
            <a
              href={sk.file}
              className="ii-sk-btn"
              style={{ color: asset.accentColor, background: asset.iconBg }}
              target="_blank"
              rel="noreferrer"
            >
              查看文档 →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

function AgentInner({ asset }) {
  return (
    <div className="ii-agent-body">
      <div className="ii-agent-left">
        <div className="ii-eyebrow" style={{ color: asset.accentColor }}>
          {asset.innerEyebrow}
        </div>
        <h2 className="ii-title">{asset.innerTitle}</h2>
        <p className="ii-desc">{asset.innerDesc}</p>
        <a
          href={asset.feishuLink}
          className="ii-link-btn"
          style={{ background: asset.accentColor }}
          target="_blank"
          rel="noreferrer"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="15"
            height="15"
          >
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          在飞书查看 Agent
        </a>
      </div>
      <div className="ii-agent-right">
        <img
          src="/AI-agent.png"
          alt="AI 周报 Agent 示例"
          className="ii-agent-img"
        />
      </div>
    </div>
  );
}

function AigcInner({ asset }) {
  return (
    <div className="ii-aigc-body">
      <div className="ii-eyebrow" style={{ color: asset.accentColor }}>
        {asset.innerEyebrow}
      </div>
      <h2 className="ii-title">{asset.innerTitle}</h2>
      <p className="ii-desc">{asset.innerDesc}</p>
      <div className="ii-aigc-showcase">
        <video
          className="ii-aigc-video"
          src="/Music.mp4"
          controls
          playsInline
        />
      </div>
      <div className="ii-aigc-meta">
        <a
          href={asset.workLink}
          className="ii-link-btn"
          style={{ background: asset.accentColor }}
          target="_blank"
          rel="noreferrer"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="15"
            height="15"
          >
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          查看作品
        </a>
        <div className="ii-tag-row">
          {asset.tags.map((t) => (
            <span
              key={t}
              className="ii-tag"
              style={{
                color: asset.accentColor,
                borderColor: "#ddd6fe",
                background: "#f5f3ff",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function MethodInner({ asset }) {
  return (
    <div className="ii-method-body">
      <div className="ii-eyebrow" style={{ color: asset.accentColor }}>
        {asset.innerEyebrow}
      </div>
      <h2 className="ii-title">{asset.innerTitle}</h2>
      <p className="ii-desc">{asset.innerDesc}</p>
      <div className="ii-method-cols">
        {asset.methods.map((m) => (
          <div key={m.name} className="ii-method-col">
            <div
              className="ii-method-icon"
              style={{ background: asset.iconBg }}
            >
              {m.icon}
            </div>
            <h3 className="ii-method-name">{m.name}</h3>
            <p className="ii-method-subtitle">{m.subtitle}</p>
            <ul className="ii-method-list">
              {m.points.map((p) => (
                <li key={p} style={{ "--dot": asset.accentColor }}>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function InnerContent({ asset }) {
  if (!asset) return null;
  switch (asset.type) {
    case "skill":
      return <SkillInner asset={asset} />;
    case "agent":
      return <AgentInner asset={asset} />;
    case "aigc":
      return <AigcInner asset={asset} />;
    case "method":
      return <MethodInner asset={asset} />;
    default:
      return null;
  }
}

/* ── 主组件 ── */
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { openCard: null };
  }

  openCard(id) {
    this.setState({ openCard: id });
    document.body.style.overflow = "hidden";
  }

  closeCard() {
    this.setState({ openCard: null });
    document.body.style.overflow = "";
  }

  render() {
    const theme = this.props.theme;
    const { openCard } = this.state;
    const activeAsset = ASSETS.find((a) => a.id === openCard);

    return (
      <div className="projects-main">
        <Header theme={theme} />

        {/* 背景光晕 */}
        <div className="assets-blob assets-blob-blue" />
        <div className="assets-blob assets-blob-orange" />
        <div className="assets-blob assets-blob-pink" />

        {/* 四张卡片 */}
        <div className="assets-page">
          <div className="assets-grid">
            {ASSETS.map((asset) => (
              <div
                key={asset.id}
                className="asset-card"
                onClick={() => this.openCard(asset.id)}
              >
                <div
                  className="asset-card-glow"
                  style={{ background: asset.glowColor }}
                />
                <div className="asset-card-num">
                  {asset.num} / {asset.tag}
                </div>
                <div
                  className="asset-card-icon"
                  style={{ background: asset.iconBg }}
                >
                  {asset.icon}
                </div>
                <h3 className="asset-card-title">{asset.title}</h3>
                <p className="asset-card-desc">
                  {asset.desc}
                  {asset.tags && typeof asset.tags === "string" && (
                    <span className="asset-card-tags">{asset.tags}</span>
                  )}
                </p>
                <div className="asset-card-arrow">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="16"
                    height="16"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 全屏遮罩 */}
        <div
          className={"asset-overlay" + (openCard ? " open" : "")}
          onClick={() => this.closeCard()}
        />

        {/* 全屏内页 */}
        <div
          className={"asset-inner-page" + (openCard ? " open" : "")}
          style={{ background: activeAsset ? activeAsset.gradient : "#fff" }}
        >
          {activeAsset && (
            <>
              {/* 背景光晕球 */}
              <div
                className="ii-bg-orb"
                style={{
                  background: `radial-gradient(circle, ${activeAsset.orbColor} 0%, transparent 70%)`,
                }}
              />

              {/* 顶部导航 */}
              <div className="asset-inner-header">
                <button
                  className="asset-inner-back"
                  onClick={() => this.closeCard()}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="16"
                    height="16"
                    style={{ transform: "rotate(180deg)" }}
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  返回可复用资产
                </button>
                <span className="asset-inner-tag">
                  {activeAsset.num} / {activeAsset.tag}
                </span>
              </div>

              {/* 各类型内容 */}
              <InnerContent asset={activeAsset} />
            </>
          )}
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
