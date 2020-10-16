# Typescript Flashcards

A template project to demonstrate building a web application using:

-   React
-   React Router
-   Typescript
-   React Hook Form
-   Yup
-   React Table
-   Axios
-   Material UI
-   Styled Components
-   Prettier
-   Husky
-   React Testing Library
-   Cypress

## Concept

The concept is Flash Cards for foreign language learners. A deck of cards is created with a word in English on one side and the foreign language on the others. The cards can be added, edited, deleted and listed.

The cards are then used by showing the cards to the user in random order, either in the foreign language or English. The user tries to remember the translation, and then flips the card to see if they were correct. The user confirms the outcome. Successful cards are repeated less often, unsuccessful cards are repeated more often, in order to help learn the difficult words.

## Development approach

Functional TDD, using Cypress to express and confirm the user behaviour, and visual elements. Then Jest TDD for the code function behaviour.

## To be decided

Persistence might be handled with a local server, a cloud storage solution such as Firebase, or just in local storage.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
