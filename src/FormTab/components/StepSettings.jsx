const VISIBILITY = [
    { id: "public", label: "Public" },
    { id: "friends", label: "Friends only" },
    { id: "private", label: "Private" },
];
const StepSettings = ({ value, errors, onChange }) => {
    return (
        <div className="step">
            <fieldset className="fieldset">
                <legend>Profile visibility</legend>
                <div className="grid radios">
                    {VISIBILITY.map((v) => (
                        <label key={v.id} className="radio">
                            <input
                                type="radio"
                                name="visibility"
                                value={v.id}
                                checked={value.visibility === v.id}
                                onChange={(e) => onChange({ visibility: e.target.value })}
                            />
                            <span>{v.label}</span>
                        </label>
                    ))}
                </div>
                {errors.visibility && <p className="error">{errors.visibility}</p>}
            </fieldset>
        </div>
    );
}

export default StepSettings;