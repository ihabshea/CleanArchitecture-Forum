async function encryptToken(token: string, bcrypt: any, saltRounds: number): Promise<string>{
    return await bcrypt.hash(token, saltRounds);
}

export default encryptToken;