const isValidPassword = (password: string): boolean => {
    const re = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/);
    let validPassword = false;
    if(password.length < 8){
        validPassword = false;
    }else if(!re.test(password)){
        validPassword = false;
    }else{
        validPassword = true;
    }

    return validPassword;
}
export  {isValidPassword};