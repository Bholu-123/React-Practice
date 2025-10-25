const StepProfile = ({ value, errors, onChange }) => {
    return (
        <div className="step">
            <div className="field">
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    value={value.name}
                    onChange={(e) => onChange({ name: e.target.value })}
                    placeholder="Enter your full name"
                />
                {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="field">
                <label htmlFor="mobile">Mobile</label>
                <input
                    id="mobile"
                    type="tel"
                    value={value.mobile}
                    onChange={(e) => onChange({ mobile: e.target.value.replace(/[^\d]/g, "") })}
                    placeholder="10-digit mobile number"
                    inputMode="numeric"
                    maxLength={10}
                />
                {errors.mobile && <p className="error">{errors.mobile}</p>}
            </div>
            <div className="field">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    value={value.email}
                    onChange={(e) => onChange({ email: e.target.value })}
                    placeholder="name@example.com"
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>
        </div>
    );
}

export default StepProfile;
