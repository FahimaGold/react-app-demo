# 🌙 React dark theme demo 🌙

This is a demo React application that showcases the implementation of dark mode with Styled Components and localStorage for theme persistence. The app provides a clean and responsive design with a modern UI, using Flexbox for layout management

---

## 🚀 Features
- **Styled Components**: Uses styled-components for modular, scoped CSS-in-JS styling.
- **Dark Mode Support**: Implements light and dark themes using the  [`ThemeProvider`](https://styled-components.com/docs/advanced#theming) wrapper component.
- **Theme Persistence**: The selected theme is saved in the browser's `localStorage`, making it persistent across page reloads.
- **Custom Hook**: A custom hook `useDarkMode` manages dark mode state and theme switching.
- **Modern CSS**: Utilizes Flexbox layout for a clean and flexible UI structure.
- **Responsive Design**: Adapts to different screen sizes using Flexbox and media queries.
- 
---

## 🛠️ **Tech Stack**

| Technology           | Purpose                             |
|----------------------|-------------------------------------|
| **React**            | Frontend framework                  |
| **Styled Components**| CSS-in-JS styling library           |
| **localStorage**     | For theme persistence               |
| **Flexbox**          | Layout design                       |


## Demo
![react_dark_theme](https://github.com/FahimaGold/react-app-demo/assets/13876176/8758c808-3df6-42c9-841e-0c8e04aa72eb)

---
## 📐 **App Structure**

### **Dark Mode**
- **ThemeProvider**: A wrapper component that provides theme values to the app.
- **useDarkMode**: Custom hook for handling dark mode toggling and saving the state to `localStorage`.

### **Responsive Design**
- Uses **Flexbox** layout to create a flexible and adaptable design that works on mobile and desktop devices.

---
## ⚙️ **Setup Instructions**

### 1. Clone the repository

```bash
git clone https://github.com/your-username/react-app-demo.git
cd react-app-demo
```

### 2. Install dependencies

`npm install`

### 3. Run the app

`npm start`

---
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).



