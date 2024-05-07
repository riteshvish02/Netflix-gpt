
export const CheckValidateemailData = (email)=>{
    const isemail  = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)

    if(!isemail ) return "Email is not Valid";
    
    return null;
}
export const CheckValidatepasswordData = (password)=>{
    const ispassword = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d).*$/.test(password)
    if(!ispassword) return "Password is not Valid";
    return null;
}

