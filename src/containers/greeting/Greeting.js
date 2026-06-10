import React from "react";
import "./Greeting.css";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";

const stats = [
  { value: "3", unit: "周", label: "培训周期", icon: "calendar" },
  { value: "1", unit: "个", label: "MVP 项目", icon: "box" },
  { value: "5", unit: "个", label: "汇报模块", icon: "layers" },
  { value: "6", unit: "个", label: "可复用资产", icon: "file" },
];

const steps = [
  { title: "项目实践", desc: "从 0 到 1 搭建项目，验证可行性" },
  { title: "项目成果", desc: "产出 MVP 并验证业务价值" },
  { title: "可复用资产", desc: "沉淀部门可执行 Skill、Agent 及方法论" },
  { title: "自我复盘", desc: "优势与不足" },
  { title: "后续规划", desc: "明确下一步目标与行动计划" },
];

function StatIcon({ name, color }) {
  const common = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  if (name === "calendar")
    return (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    );
  if (name === "box")
    return (
      <svg {...common}>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12" />
      </svg>
    );
  if (name === "layers")
    return (
      <svg {...common}>
        <path d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
  );
}

export default function Greeting(props) {
  const theme = props.theme;
  const accent = "#2f54eb";
  return (
    <Fade bottom duration={1200} distance="30px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          {/* LEFT */}
          <div className="greeting-text-div">
            <h1 className="greeting-text" style={{ color: theme.text }}>
              {greeting.title}
            </h1>
            {greeting.nickname && (
              <h2 className="greeting-nickname" style={{ color: theme.text }}>
                ( {greeting.nickname} )
              </h2>
            )}
            <div
              className="greeting-divider"
              style={{ backgroundColor: accent }}
            />
            <p className="greeting-period" style={{ color: theme.text }}>
              培训时间 2026.05.22 – 06.10
            </p>
            <p
              className="greeting-text-p"
              style={{ color: theme.secondaryText }}
            >
              三周里，我用 AI 从 0 到 1 做出了可落地的项目
              <br />
              并沉淀出能复用的方法
              <br />
              这份汇报会从「项目实践 → 项目成果 → 可复用资产 → 自我复盘 →
              后续规划」五个部分展开
            </p>
            <div className="button-greeting-div">
              <Button text="↓ 查看项目" href="/education" theme={theme} />
            </div>
          </div>

          {/* RIGHT — overview card */}
          <div className="greeting-card-div">
            <div className="overview-card">
              <h3 className="overview-title" style={{ color: theme.text }}>
                培训成果总览
              </h3>
              <div className="stat-grid">
                {stats.map((s) => (
                  <div className="stat-tile" key={s.label}>
                    <div className="stat-icon">
                      <StatIcon name={s.icon} color={accent} />
                    </div>
                    <div className="stat-num" style={{ color: theme.text }}>
                      {s.value}
                      {s.unit && <span className="stat-unit">{s.unit}</span>}
                    </div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="overview-line" />

              <h3 className="overview-title" style={{ color: theme.text }}>
                汇报结构概览
              </h3>
              <div className="struct-steps">
                {steps.map((st, i) => (
                  <div className="struct-step" key={st.title}>
                    <div
                      className="step-num"
                      style={{ backgroundColor: accent }}
                    >
                      {i + 1}
                    </div>
                    <div className="step-title" style={{ color: theme.text }}>
                      {st.title}
                    </div>
                    <div className="step-desc">{st.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
