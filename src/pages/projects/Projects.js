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
    glowColor: "#bfdbfe",
    iconBg: "#eff6ff",
    title: "项目沉淀 Skill",
    desc: "Demo 设计及上线过程中，基于繁琐流程和卡点沉淀的自动化 Skill",
    innerTitle: "项目沉淀 Skill",
    innerDesc:
      "Demo 设计及上线过程中，基于繁琐流程和卡点沉淀的自动化 Skill。包含 4 个可独立复用的 Skill，每个附有使用文档。",
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
  },
  {
    id: 2,
    num: "02",
    tag: "AGENT",
    glowColor: "#fde68a",
    iconBg: "#fffbeb",
    title: "AI 周报 Agent",
    desc:
      "自动追踪国内外 AI 新闻与行业动态，同步更新至飞书文档，降低信息搜集与学习成本",
    innerTitle: "AI 周报 Agent",
    innerDesc:
      "自动追踪国内外 AI 新闻与行业动态，并同步更新至飞书文档，降低信息搜集与学习成本。",
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
    glowColor: "#ddd6fe",
    iconBg: "#f5f3ff",
    title: "AIGC 创作 Agent",
    desc: "基于音频波纹生成动漫场景视觉，可用于后续暖暖音频 / 视频创作",
    innerTitle: "AIGC 创作 Agent",
    innerDesc: "基于音频波纹生成动漫场景视觉，如有需求可用于后续暖暖音频创作。",
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
    glowColor: "#a7f3d0",
    iconBg: "#ecfdf5",
    title: "可复用方法论",
    desc: "沉淀 AI Build、数据驱动与产品统筹方法，形成可迁移的项目推进能力",
    tags: "AI Build · 数据驱动 · 产品统筹",
    innerTitle: "可复用方法论",
    innerDesc:
      "沉淀 AI Build、数据驱动与产品统筹方法，形成可迁移的项目推进能力框架。",
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

        {/* 背景光晕（提升到 projects-main 层，覆盖整个页面含 Header） */}
        <div className="assets-blob assets-blob-blue" />
        <div className="assets-blob assets-blob-orange" />
        <div className="assets-blob assets-blob-pink" />

        {/* ── 主内容区 ── */}
        <div className="assets-page">
          {/* 四张卡片 */}
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
                  {asset.tags && (
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

        {/* ── 全屏遮罩 ── */}
        <div
          className={"asset-overlay" + (openCard ? " open" : "")}
          onClick={() => this.closeCard()}
        />

        {/* ── 全屏内页 ── */}
        <div className={"asset-inner-page" + (openCard ? " open" : "")}>
          {activeAsset && (
            <>
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

              <div className="asset-inner-body">
                <div
                  className="asset-inner-blob asset-inner-blob-1"
                  style={{ background: activeAsset.glowColor }}
                />
                <div
                  className="asset-inner-blob asset-inner-blob-2"
                  style={{ background: activeAsset.glowColor }}
                />
                <div className="asset-inner-eyebrow">
                  {activeAsset.num} · {activeAsset.tag}
                </div>
                <h2 className="asset-inner-title">{activeAsset.innerTitle}</h2>
                <p className="asset-inner-desc">{activeAsset.innerDesc}</p>
                <div className="asset-inner-placeholder">详细内容即将填充</div>
              </div>
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
