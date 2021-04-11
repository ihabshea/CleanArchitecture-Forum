async function compareTokens(candidateToken: string, encryptedToken: string,  bcrypt: any): Promise<string>{
    return await bcrypt.compare(candidateToken, encryptedToken);
}

export default compareTokens;