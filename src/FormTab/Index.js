import { useMemo, useState } from "react";
import StepInterests from "./components/StepInterests";
import StepProfile from "./components/StepProfile";
import StepSettings from "./components/StepSettings";
import TabNav from "./components/TabNav";
import "./index.css"
import { isEmpty, validateInterests, validateProfile, validateSettings } from "./utils/validation";

const MultiStepForm = () => {
    const [form, setForm] = useState({
        profile: { name: "", mobile: "", email: "" },
        interests: { interests: [] },
        settings: { visibility: "" },
    });

    const [active, setActive] = useState(0);

    const profileErrors = useMemo(() => validateProfile(form.profile), [form.profile]);
    const interestsErrors = useMemo(() => validateInterests(form.interests), [form.interests]);
    const settingsErrors = useMemo(() => validateSettings(form.settings), [form.settings]);


    const stepValid = [isEmpty(profileErrors), isEmpty(interestsErrors), isEmpty(settingsErrors)];
    const canNext = stepValid[active];

    const updateStepData = (stepName) => {
        return (fieldValue) => {
            setForm((prevForm) => {
                const updatedSection = { ...prevForm[stepName], ...fieldValue };
                return { ...prevForm, [stepName]: updatedSection };
            });
        };
    }


    const goNext = () => canNext && setActive((i) => Math.min(i + 1, 2));
    const goPrev = () => setActive((i) => Math.max(i - 1, 0));
    const jump = (idx) => setActive(idx);


    const onSubmit = (e) => {
        e.preventDefault();
        const allValid = stepValid.every(Boolean);
        if (!allValid) return;
        console.log("Submitting payload", form);
        alert("✅ Submitted! Check console for payload.\n\n" + JSON.stringify(form, null, 2));
    };
    return (
        <div className="page">
            <TabNav active={active} onJump={jump} validity={stepValid} />

            {/* <form className="card" onSubmit={onSubmit} noValidate> */}
            {active === 0 && (
                <StepProfile value={form.profile} errors={profileErrors} onChange={updateStepData("profile")} />
            )}
            {active === 1 && (
                <StepInterests value={form.interests} errors={interestsErrors} onChange={updateStepData("interests")} />
            )}
            {active === 2 && (
                <StepSettings value={form.settings} errors={settingsErrors} onChange={updateStepData("settings")} />
            )}


            <div className="actions">
                <button type="button" className="btn ghost" onClick={goPrev} disabled={active === 0}>
                    ← Previous
                </button>
                {active < 2 ? (
                    <button type="button" className="btn" onClick={goNext} disabled={!canNext}>
                        Next →
                    </button>
                ) : (
                    <button type="submit" className="btn primary" disabled={!stepValid.every(Boolean)} onClick={onSubmit}>
                        Submit
                    </button>
                )}
            </div>
            {/* </form> */}
        </div>
    );
}

export default MultiStepForm;