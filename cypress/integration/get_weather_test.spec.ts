/// <reference types="cypress"/>

describe("Get weather test", () => {
  const getWeatherInSearchedCity = (city: string) => {
    cy.get("form").then((form) => {
      cy.wrap(form).find("input").type(city);
      cy.wrap(form).submit();
    });
  };

  const checkCorrectSearchedCity = (city: string) => {
    getWeatherInSearchedCity(city);
    cy.get('p[data-testid="city"]').should("contain", city);
  };

  beforeEach(() => {
    cy.visit("/");
  });

  it("checks correct placeholder in input", () => {
    cy.get("form")
      .find("input")
      .should("have.attr", "placeholder", "Enter Your City...");
  });

  it("checks correct results for searched weather by the city name", () => {
    checkCorrectSearchedCity("Warsaw");
    checkCorrectSearchedCity("Toronto");
    checkCorrectSearchedCity("Sydney");
  });
});
