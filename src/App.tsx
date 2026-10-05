import { type FC, useState } from "react";

export const App: FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "2rem",
        textAlign: "center",
        gap: "1.5rem",
      }}
    >
      <header>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.025em" }}>
          WebDev Template
        </h1>
        <p style={{ color: "#94a3b8", marginTop: "0.5rem" }}>
          Bun &bull; React &bull; Biome &bull; Strictest TypeScript
        </p>
      </header>

      <section
        style={{
          background: "#1e293b",
          border: "1px solid #334155",
          borderRadius: "12px",
          padding: "1.5rem 2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "420px",
          width: "100%",
        }}
      >
        <p style={{ fontSize: "1rem" }}>
          Strictness active: <strong>Zero any</strong>, <strong>No JS</strong>
        </p>
        <button
          type="button"
          onClick={() => setCount((prev: number) => prev + 1)}
          style={{
            background: "#3b82f6",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            padding: "0.75rem 1.25rem",
            fontSize: "1rem",
            fontWeight: 600,
            cursor: "pointer",
            transition: "background 0.2s ease",
          }}
        >
          Count: {count}
        </button>
      </section>
    </main>
  );
};
