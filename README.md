# Workflow repo for the CA  

A structured development workflow for frontend projects using **TailwindCSS, Playwright, Vitest, ESLint, and Prettier**.  
This setup ensures efficient development, testing, and debugging of applications while maintaining high code quality.  

---

## 🔥 Features  

- **Live Development Server** – Preview changes in real-time with `live-server`.  
- **TailwindCSS Integration** – Quickly style applications with utility-based CSS.  
- **Automated Testing** – Unit tests with **Vitest** and end-to-end tests with **Playwright**.  
- **Code Quality & Formatting** – Enforces coding standards using **ESLint** and **Prettier**.  
- **Pre-commit Hooks** – Uses **Husky** and **Lint-Staged** to format and lint staged files before committing.  

---

## 🚀 Getting Started  

### 📌 Prerequisites  

Ensure you have the following installed:  

- **[Node.js](https://nodejs.org/)** (latest stable version)  
- **[npm](https://www.npmjs.com/)**  

### 💾 Installation  

Clone this repository and install the necessary dependencies:  

```sh
git clone https://github.com/Veronicabrun/workflow-repo-ca.git
cd workflow-repo-ca
npm install

## Scripts
### Development

Start Live Server: Runs a development server to preview your app.
```
npm start
```

Watch TailwindCSS: Compiles your TailwindCSS styles in real-time.
```
npm run dev
```

### Testing

Run Unit Tests: Execute all Vitest unit tests.
```
npm test
```

Run E2E Tests: Use Playwright for end-to-end testing.
```
npm run e2e
```

Interactive E2E UI: Launch the Playwright test runner UI for easier debugging.
```
npm run e2e:ui
```

Headed Mode: Run Playwright tests with a visible browser window.
```
npm run e2e:headed
```

Debug Mode: Run Playwright tests in debug mode.
```
npm run e2e:debug
```

### Pre-commit Hooks
This project uses Husky and Lint-Staged to ensure code quality:
Automatically formats and lints JavaScript and HTML files before committing.

## Environment Variables
The project uses environment variables to store sensitive information like test credentials. Create a .env file in the root directory and add the required keys:

```env
TEST_USER_EMAIL=your-email@example.com
TEST_USER_PASSWORD=your-password
```


