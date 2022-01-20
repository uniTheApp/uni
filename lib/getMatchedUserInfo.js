const getMatchedUserInfo = (users, userLoggedIn) => {
    const newUsers = {...users};
    delete newUsers[userLoggedIn];

    const [id, user] = Object.entries(newUsers).flat();

    console.log("in the helper!!!!!")
    console.log(users)
    return{ id, ...user};
}

export default getMatchedUserInfo