const ALL_INTERESTS = ["Music", "Sports", "Reading", "Coding", "Travel", "Cooking"];

const StepInterests = ({ value, errors, onChange }) => {
    const toggle = (item) => {
        const set = new Set(value.interests);
        set.has(item) ? set.delete(item) : set.add(item);
        onChange({ interests: Array.from(set) });
    };
    return (
        <div className="step">
            <fieldset className="fieldset">
                <legend>Select your interests</legend>
                <div className="grid">
                    {ALL_INTERESTS.map((it) => (
                        <label key={it} className="check">
                            <input
                                type="checkbox"
                                checked={value.interests.includes(it)}
                                onChange={() => toggle(it)}
                            />
                            <span>{it}</span>
                        </label>
                    ))}
                </div>
                {errors.interests && <p className="error">{errors.interests}</p>}
            </fieldset>
        </div>
    );
}

export default StepInterests;