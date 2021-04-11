enum RevocationReason{
    loggedOutFromDevice = "Logged out from a single device",
    changedPasswordExplict = "Logged out from all devices upon password change",
    changedPasswordImplicit = "Logged out from last session on device upon password change",
    suspiciousActivity = "User-reported suspicious activity",
    tokenExpired = "Token expired",
}

export default RevocationReason;