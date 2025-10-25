const TABS = ["Profile", "Interests", "Settings"];

const TabNav = ({ active, onJump, validity }) => {
    return (
        <div className="tabnav" role="tablist" aria-label="Form steps">
            {TABS.map((t, i) => {
                const isActive = i === active;
                const canJump = i <= active || validity.slice(0, i).every(Boolean);
                const completed = validity[i] && i < active;
                return (
                    <button
                        key={t}
                        role="tab"
                        aria-selected={isActive}
                        className={`tab ${isActive ? "active" : ""}`}
                        onClick={() => canJump && onJump(i)}
                        disabled={!canJump}
                        title={canJump ? `Go to ${t}` : "Complete previous steps first"}
                    >
                        <span className="badge">{i + 1}</span>
                        {t}
                        {completed && <span className="tick" aria-hidden>✓</span>}
                    </button>
                );
            })}
        </div>
    );
}

export default TabNav;