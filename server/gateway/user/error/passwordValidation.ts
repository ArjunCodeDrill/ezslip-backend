

 const passwordValidation = async(password : string) => {
    const validRegex =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,45}$/;
    if (password.match(validRegex)){
        return true;
    } else {
        return false;
    }
 }

export default passwordValidation