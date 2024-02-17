
export function NewUser(UserName , EMail, Password) {

    return {
        name: UserName,
        email: EMail,
        password: Password,
        profile_picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2wqLv2VOrfZeEAO3jSHxvmEL7eZA-VeJ_L8-L3q7gdcLzV6YeRGHpWoCr06dsriPxvYY&usqp=CAU",
        language: "en_us",
        daily_streak : 0
    };
  
}