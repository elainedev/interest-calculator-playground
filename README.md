# TypeScript + Vite

## Instructions
1. cd into project directory
2. run `npm run dev`

## Implementation Notes
- This project is set up using vite and TypeScript.

- React Router v6.16.0 is used to render the different page contents while keeping the top and side navigation menus the same, for a more SPA experience.

- prettier and stylelint were installed for formatting.

- React Hook Form is used to create the deposit form.

- The formula to calculate the compounded interest takes into account that the annual interest rate is 5% for the first 36 months and 2% thereafter. It calculates the total compounded interest based on the frequency of the deposits (1 or 2 times a month), the number of days since enrollment (i.e. when user filled out the enrollment form), and the deposit amount. My process to generate the equation via ChatGPT can be seen [here](https://chat.openai.com/c/ffc3906e-cc5a-47e8-910a-c6b14d530ff3)

![compound interest formula](src/assets/compound-interest-formula.png)

### Reason for Using React Hook Form and Not Formik 
React Hook Form has several built-in functionalities and benefits. One benefit is its ability NOT to re-render the form every single time the input changes (e.g. when the user enters just one character), thus reducing loading speed and overhead. 

Unlike Formik, React Hook Form can isolate a component and re-render that component alone, without also rendering other child components along with the form component.

React Hook Form also offers ways to validate the form inputs according to both provided and custom properties. It collects the entire form state into a centralized object that can be passed to other pages.


### Reason for Not Using Material UI to Build the Form
In my opinion, Material UI's major disadvantage is its deeply nested and complicated form structure for form components. Because of this, it can be cumbersome to add even simple custom styling to MUI forms, as the target field can be buried deep inside the form and difficult to locate. Material UI also adds its own lengthy CSS class names to the components, which makes the CSS harder to read and dissect.


### Things I would do if I had more time
- Make the page even more responsive by hiding the gray side menu when the viewport shrinks.
- Implement React Router with the top and side menu.
- Add more user instructions on the deposit form.
- Add a way to navigate back from the Calculator (3rd page) to the Enrollment Form (2nd page).
- Instead of only displaying the calendar, also display an input field so users can type in the desired date, for easier usability.



<!-- This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list -->
