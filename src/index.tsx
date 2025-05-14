import React from "react"
import ReactDOM from "react-dom/client"
import { HashRouter } from "react-router-dom"
import App from "./App"
import "./index.css"
import { ThemeProvider } from "./components/theme-provider"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider defaultTheme="light" storageKey="astromasterji-theme">
        <App />
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>,
)
