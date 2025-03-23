const routes = {
    apiSession: "session",
    username: "users",
    apiUsers: "users",
};


export const UserSession = () => {

    return {
        PostCreateSession: (data) => cy.request({
            method: "POST",
            url: `${routes.apiSession}`,
            ...data
        }),

        GetUserByUsername: (userId) => cy.request({
            method: "POST",
            url: `${routes.username}/${userId}`,
            failOnStatusCode: false
        }),
        GetUserById: (apiUser) =>
            cy.request({
                method: "get",
                url: `${routes.apiUsers}/${apiUser}`,
                failOnStatusCode: false,
            }),
    }

}

export const UserService = () => {
    return {

    };
};