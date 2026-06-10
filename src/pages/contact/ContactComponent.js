import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import "./ContactComponent.css";

const GOALS = [
  {
    num: "01",
    accent: "#3b82f6",
    bg: "#eff6ff",
    border: "#bfdbfe",
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
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "暖暖星语持续迭代",
    desc:
      "基于 V1 用户反馈推进 V2 版本，重点优化对话流畅度与记忆日历功能完整度",
    tags: ["产品迭代", "用户反馈", "V2"],
  },
  {
    num: "02",
    accent: "#7c3aed",
    bg: "#f5f3ff",
    border: "#ddd6fe",
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
    title: "补强 AI Builder 技术底座",
    desc: "系统学习前端基础与 API 调试，具备独立完成从设计到上线全链路的能力",
    tags: ["前端基础", "API 调试", "全链路"],
  },
  {
    num: "03",
    accent: "#059669",
    bg: "#ecfdf5",
    border: "#a7f3d0",
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
    title: "AI 能力迁移到日常工作",
    desc:
      "将培训中沉淀的 Skill 与方法论迁移到客服场景，探索 AI 在真实业务中的更多应用",
    tags: ["Skill 迁移", "客服场景", "业务落地"],
  },
];

const TIMELINE = [
  {
    period: "近期",
    range: "1 个月内",
    accent: "#3b82f6",
    dotBg: "#dbeafe",
    items: [
      "将培训 Skill 整理成团队可直接使用的文档",
      "在组内分享 AI Builder 培训成果与方法论",
    ],
  },
  {
    period: "中期",
    range: "3 个月内",
    accent: "#7c3aed",
    dotBg: "#ede9fe",
    items: [
      "完成暖暖星语 V2 核心功能迭代",
      "系统补强 JavaScript 基础与数据库基本操作",
    ],
  },
  {
    period: "长期",
    range: "6 个月内",
    accent: "#059669",
    dotBg: "#d1fae5",
    items: [
      "独立主导一个新的 AI 产品或工具从 0 到 1",
      "实现全链路自主交付，形成可复用的项目经验",
    ],
  },
];

class ContactComponent extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="plan-main">
        <Header theme={theme} />

        <div className="plan-blob plan-blob-blue" />
        <div className="plan-blob plan-blob-purple" />

        <div className="plan-page">
          {/* 页头 */}
          <div className="plan-hero">
            <div className="plan-eyebrow">后续规划 · 持续成长</div>
            <h1 className="plan-title">下一阶段目标</h1>
            <p className="plan-subtitle">
              培训结束不是终点，而是新一轮成长的起点——明确方向，持续迭代
            </p>
          </div>

          {/* 三个目标卡片 */}
          <div className="plan-goals">
            {GOALS.map((g) => (
              <div
                key={g.num}
                className="plan-goal-card"
                style={{ borderTop: `3px solid ${g.accent}` }}
              >
                <div className="plan-goal-top">
                  <div
                    className="plan-goal-icon"
                    style={{ background: g.bg, color: g.accent }}
                  >
                    {g.icon}
                  </div>
                  <span className="plan-goal-num" style={{ color: g.accent }}>
                    {g.num}
                  </span>
                </div>
                <h3 className="plan-goal-title">{g.title}</h3>
                <p className="plan-goal-desc">{g.desc}</p>
                <div className="plan-goal-tags">
                  {g.tags.map((t) => (
                    <span
                      key={t}
                      className="plan-goal-tag"
                      style={{
                        color: g.accent,
                        background: g.bg,
                        borderColor: g.border,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 时间线 */}
          <div className="plan-section">
            <div className="plan-section-eyebrow">行动计划</div>
            <h2 className="plan-section-title">分阶段推进路径</h2>
          </div>

          <div className="plan-timeline">
            {TIMELINE.map((step, idx) => (
              <div key={step.period} className="plan-tl-item">
                <div className="plan-tl-left">
                  <div
                    className="plan-tl-dot"
                    style={{ background: step.dotBg, borderColor: step.accent }}
                  >
                    <div
                      className="plan-tl-dot-inner"
                      style={{ background: step.accent }}
                    />
                  </div>
                  {idx < TIMELINE.length - 1 && (
                    <div className="plan-tl-line" />
                  )}
                </div>
                <div className="plan-tl-body">
                  <div className="plan-tl-header">
                    <span
                      className="plan-tl-period"
                      style={{ color: step.accent }}
                    >
                      {step.period}
                    </span>
                    <span className="plan-tl-range">{step.range}</span>
                  </div>
                  <ul className="plan-tl-list">
                    {step.items.map((item) => (
                      <li key={item} style={{ "--dot": step.accent }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default ContactComponent;
