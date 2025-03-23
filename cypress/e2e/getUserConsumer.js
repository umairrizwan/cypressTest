const routes = {
  allusers: '/api/users?page=2',
};

export const UserService = () => {
  return {
    GetUser: () => cy.request({ method: 'get', url: routes.allusers })

  }
}


export const QuotesService = () => {
  return {
    GetQuoteById: (quoteId) =>
      cy.request({
        method: "get",
        url: `${routes.apiQuotes}/${quoteId}`,
        failOnStatusCode: false,
      }),

    GetQuotes: () => cy.request({ method: "get", url: routes.allusers }),
    GetQuotesByFilter: (filter, type) =>
      cy.request({
        method: "get",
        url: `${routes.apiQuotes}?filter=${filter}&type=${type}`,
        failOnStatusCode: false,
      }),
    PutQuotesFav: (data) =>
      cy.request({
        method: "put",
        url: `${routes.apiQuotes}/${data.body.id}/fav`,
        ...data,
      }),
  };
};