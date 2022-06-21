

const emailValidation = async(email : string): Promise<boolean> => {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex)){
        return true;
      } else {
        return false;
      }
}

export default emailValidation