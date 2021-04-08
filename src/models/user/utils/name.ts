const isValidName = (name: string): boolean => {
    const pattern = new RegExp(/^[a-z ,.'-]+$/i);
    return pattern.test(name);
}
export  {isValidName};