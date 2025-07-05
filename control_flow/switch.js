let userType = "subscriber";
let userCategory;

switch(userType) {
    case "admin":
        userCtegory = "Administrator";
        break;
    case "Manager":
        userCategory = "manager";
    break;
    case "subscriber":
        userCategory="Subscriber";
        break;
        default:
            userCategory = "Unknown";
}

console.log("User Category:", userCategory);