export const validateProfile = (p) => {
    const errors = {};
    if (!p.name.trim()) errors.name = "Name is required";
    else if (p.name.trim().length < 2) errors.name = "Name must be at least 2 characters";


    const mobile = p.mobile.replace(/\s+/g, "");
    if (!mobile) errors.mobile = "Mobile is required";
    else if (!/^\d{10}$/.test(mobile)) errors.mobile = "Mobile must be 10 digits";


    if (!p.email.trim()) errors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(p.email.trim())) errors.email = "Invalid email format";
    return errors;
};


export const validateInterests = (i) => {
    const errors = {};
    if (!i.interests || i.interests.length === 0) errors.interests = "Select at least one interest";
    return errors;
};


export const validateSettings = (s) => {
    const errors = {};
    if (!s.visibility) errors.visibility = "Please choose a visibility";
    return errors;
};


export const isEmpty = (obj) => Object.keys(obj).length === 0;