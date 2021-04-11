/* has only the devices supported by this API
This doesn't look like it's going to be a very serious projects.. 
sooo unless you are going to support that device, do not add it
Ihab.  
This list is inspired by Microsoft's deviceType enum type from Microsoft Graph https://docs.microsoft.com/en-us/graph/api/resources/intune-shared-devicetype?view=graph-rest-beta
*/
enum DeviceType{
    IPHONE = "iPhone",
    IPAD = "iPad",
    IPOD = "iPod",
    MAC = "Mac",
    MACMDM = "MacMDM", //Mac OS X client using built in MDM agent. 
    UNIX = "Unix",
    WP = "WindowsPhone",
    ANDROID = "Android",
    ANDROIDNGMS="AndroidNGMS", //Android non Google managed device.
    ANDROIDFORWORK = "androidForWork", 
    ANDROIDENTERPRISE = "androidEnterprise",
}

export default DeviceType;