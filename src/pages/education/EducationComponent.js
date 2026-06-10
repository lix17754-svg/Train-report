import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import "./EducationComponent.css";

const accent = "#2f54eb";

function Icon({ name, size = 24, color = accent, sw = 1.8 }) {
  const c = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: sw,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (name) {
    case "target":
      return (
        <svg {...c}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.4" fill={color} stroke="none" />
        </svg>
      );
    case "chat":
      return (
        <svg {...c}>
          <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 0 1 4 11.5 8.5 8.5 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5z" />
        </svg>
      );
    case "robot":
      return (
        <svg {...c}>
          <rect x="4" y="8" width="16" height="11" rx="3" />
          <path d="M12 8V4M9 13h.01M15 13h.01M9 16h6" />
        </svg>
      );
    case "code":
      return (
        <svg {...c}>
          <path d="M16 18l4-6-4-6M8 6l-4 6 4 6" />
        </svg>
      );
    case "doc":
      return (
        <svg {...c}>
          <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
          <path d="M14 3v6h6M9 13h6M9 17h6" />
        </svg>
      );
    case "flag":
      return (
        <svg {...c}>
          <path d="M4 22V4M4 4h13l-2 4 2 4H4" />
        </svg>
      );
    case "users":
      return (
        <svg {...c}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11" />
        </svg>
      );
    case "layout":
      return (
        <svg {...c}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      );
    case "api":
      return (
        <svg {...c}>
          <path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" />
          <path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" />
        </svg>
      );
    case "database":
      return (
        <svg {...c}>
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
        </svg>
      );
    case "chevron":
      return (
        <svg {...c}>
          <path d="M9 18l6-6-6-6" />
        </svg>
      );
    default:
      return null;
  }
}

const stages = [
  {
    no: "01",
    icon: "target",
    title: "定义阶段",
    note: "想清楚做什么",
    detailSub: "在项目启动前，先明确背景、目标和目标人群",
    items: [
      {
        icon: "doc",
        title: "项目背景梳理",
        desc: "梳理行业趋势、竞品情况与现有资源，明确项目发起的背景与必要性。",
      },
      {
        icon: "flag",
        title: "项目目标确认",
        desc: "明确产品定位与核心目标，聚焦关键指标与阶段性里程碑。",
      },
      {
        icon: "users",
        title: "目标人群拆解",
        desc: "细分用户画像，理解用户需求、使用场景与核心痛点。",
      },
    ],
    keywords: ["项目背景", "目标确认", "用户拆解", "需求理解", "范围界定"],
  },
  {
    no: "02",
    icon: "chat",
    title: "功能与体验设计",
    note: "聊天功能与页面优化",
    detailSub: "围绕核心体验，设计关键功能并打磨整体页面",
    items: [
      {
        icon: "chat",
        title: "聊天功能及记忆日历功能设计",
        desc: "设计核心聊天交互与记忆日历功能，串联用户的情感记忆与陪伴体验。",
      },
      {
        icon: "layout",
        title: "整个 App 的页面设计优化",
        desc: "优化全 App 的页面布局与视觉，提升使用流畅度与体验一致性。",
      },
    ],
    keywords: ["功能设计", "记忆日历", "聊天交互", "体验优化", "视觉一致"],
  },
  {
    no: "03",
    icon: "robot",
    title: "V1 版模型测评与对话选型",
    note: "国内外模型测评及选取",
    detailSub: "为产品的对话能力选出最合适的大模型",
    items: [
      {
        icon: "robot",
        title: "国内外模型对话测评及选取",
        desc: "横向测评国内外主流大模型的对话表现，选出最契合暖暖星语的模型。",
      },
    ],
    keywords: ["模型测评", "对话质量", "模型选型", "国内外对比", "Benchmark"],
  },
  {
    no: "04",
    icon: "code",
    title: "开发与上线",
    note: "API 接入与数据库搭建",
    detailSub: "把设计推进为真实可用、可上线的产品",
    items: [
      {
        icon: "api",
        title: "暖暖 App 线上大模型 API 接入",
        desc: "完成线上大模型 API 的接入与联调，让产品具备真实对话能力。",
      },
      {
        icon: "database",
        title: "暖暖 App 线上数据库搭建",
        desc: "搭建线上数据库，支撑用户数据与记忆内容的存储与读取。",
      },
    ],
    keywords: ["API 接入", "数据库", "线上联调", "工程化", "上线"],
  },
];

export default function Education(props) {
  const theme = props.theme;
  const [active, setActive] = useState(0);
  const cur = stages[active];

  return (
    <div className="education-main">
      <Header theme={theme} />
      <div className="pp-wrap">
        {/* LEFT */}
        <aside className="pp-side">
          <p className="pp-overline">Project Practice</p>
          <h1 className="pp-title" style={{ color: theme.text }}>
            项目实践
          </h1>
          <p className="pp-sub">这一部分主要展示我在暖暖项目中做了什么</p>
          <div className="pp-stage-list">
            {stages.map((s, i) => (
              <button
                key={s.no}
                className={"pp-stage" + (i === active ? " active" : "")}
                onClick={() => setActive(i)}
              >
                <span className="pp-stage-icon">
                  <Icon
                    name={s.icon}
                    size={22}
                    color={i === active ? "#fff" : accent}
                  />
                </span>
                <span className="pp-stage-text">
                  <span
                    className="pp-stage-title"
                    style={{ color: theme.text }}
                  >
                    <b>{s.no}</b> {s.title}
                  </span>
                  <span className="pp-stage-note">{s.note}</span>
                </span>
                <span className="pp-stage-arrow">
                  <Icon
                    name="chevron"
                    size={16}
                    color={i === active ? "#fff" : "#9aa7c4"}
                    sw={2.2}
                  />
                </span>
              </button>
            ))}
          </div>
        </aside>

        {/* RIGHT */}
        <section className="pp-detail" key={active}>
          <span className="pp-stage-pill">Stage {cur.no}</span>
          <h2 className="pp-detail-title" style={{ color: theme.text }}>
            {cur.title}（{cur.note}）
          </h2>
          <p className="pp-detail-sub">{cur.detailSub}</p>
          <div className="pp-detail-divider" />
          <div className="pp-detail-items">
            {cur.items.map((it) => (
              <div className="pp-item" key={it.title}>
                <span className="pp-item-icon">
                  <Icon name={it.icon} size={24} />
                </span>
                <div className="pp-item-body">
                  <h3 style={{ color: theme.text }}>{it.title}</h3>
                  <p>{it.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="pp-keywords">
            <span className="pp-kw-label">关键词：</span>
            {cur.keywords.map((k) => (
              <span className="pp-kw" key={k}>
                {k}
              </span>
            ))}
          </div>
        </section>
      </div>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}
