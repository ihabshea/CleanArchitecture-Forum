const isValidName = (name: string): boolean => {
    /*
        Validating names with a regular expression that accepts English names including names with colons like O'Hare,
        and names with commas like George Bush, Jr
    */
    const pattern = new RegExp(/^[a-z ,.'-]+$/i);
    return pattern.test(name);
}
export  {isValidName};