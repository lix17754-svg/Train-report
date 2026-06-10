import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import "./Opensource.css";

const PROGRESS = [
  {
    num: "01",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="22"
        height="22"
      >
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Skill 沉淀能力",
    desc: "在做暖暖项目中，多次沉淀流程固定且复杂的 Skill，形成可复用的工具库",
  },
  {
    num: "02",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="22"
        height="22"
      >
        <circle cx="12" cy="12" r="3" />
        <circle cx="3" cy="6" r="2" />
        <line x1="5" y1="6" x2="9" y2="11" />
        <circle cx="21" cy="6" r="2" />
        <line x1="19" y1="6" x2="15" y2="11" />
        <circle cx="3" cy="18" r="2" />
        <line x1="5" y1="18" x2="9" y2="13" />
        <circle cx="21" cy="18" r="2" />
        <line x1="19" y1="18" x2="15" y2="13" />
      </svg>
    ),
    title: "AI 知识体系化",
    desc:
      "系统整理了 LLM、RAG、Agent、Prompt 等 8 个技术模块的知识脑图，AI 技术认知更加体系化",
  },
  {
    num: "03",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="22"
        height="22"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "测评方法拓展",
    desc: "在原有模型微调测评的能力基础上，进一步掌握了 Agent 测评的方法与路径",
  },
  {
    num: "04",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="22"
        height="22"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "AI 工具熟练度",
    desc:
      "对 Claude Code、Codex、Cursor 的使用更加深入与熟练，AI 辅助开发效率显著提升",
  },
];

const GAPS = [
  {
    num: "01",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="22"
        height="22"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "代码基础待补强",
    desc:
      "多次负责 Demo 线上部署时，意识到自身代码能力仍有短板，需系统补强基础知识，而非完全依赖 AI 工具补位",
  },
  {
    num: "02",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="22"
        height="22"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: "技术工具认知深度",
    desc:
      "对 GitHub 之外的技术工具（如数据库管理、API 调试等）理解仍较浅，需深入了解各工具的适用场景与边界",
  },
  {
    num: "03",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
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
    title: "全链路独立交付",
    desc:
      "产品思维与 AI Build 能力需要在真实项目中持续打磨，目标是下一个项目能独立完成从设计到上线的全链路",
  },
];

class Opensource extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="review-main">
        <Header theme={theme} />

        {/* 背景光晕 */}
        <div className="review-blob review-blob-green" />
        <div className="review-blob review-blob-amber" />

        <div className="review-page">
          {/* 页头 */}
          <div className="review-hero">
            <div className="review-eyebrow">自我复盘 · 培训总结</div>
            <h1 className="review-title">复盘与成长</h1>
            <p className="review-subtitle">
              3 周培训的诚实回顾——记录真实的进步，也正视需要突破的短板
            </p>
          </div>

          {/* 两栏布局 */}
          <div className="review-cols">
            {/* 左：成长亮点 */}
            <div className="review-col">
              <div className="review-col-header review-col-header--green">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="18"
                  height="18"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>成长亮点</span>
                <span className="review-col-sub">复盘及沉淀能力提升明显</span>
              </div>
              <div className="review-cards">
                {PROGRESS.map((item) => (
                  <div
                    key={item.num}
                    className="review-card review-card--green"
                  >
                    <div className="review-card-icon review-card-icon--green">
                      {item.icon}
                    </div>
                    <div className="review-card-body">
                      <div className="review-card-num review-card-num--green">
                        {item.num}
                      </div>
                      <h3 className="review-card-title">{item.title}</h3>
                      <p className="review-card-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 右：待突破 */}
            <div className="review-col">
              <div className="review-col-header review-col-header--amber">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="18"
                  height="18"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span>待突破</span>
                <span className="review-col-sub">明确短板，制定行动方向</span>
              </div>
              <div className="review-cards">
                {GAPS.map((item) => (
                  <div
                    key={item.num}
                    className="review-card review-card--amber"
                  >
                    <div className="review-card-icon review-card-icon--amber">
                      {item.icon}
                    </div>
                    <div className="review-card-body">
                      <div className="review-card-num review-card-num--amber">
                        {item.num}
                      </div>
                      <h3 className="review-card-title">{item.title}</h3>
                      <p className="review-card-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Opensource;
