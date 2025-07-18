import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./store"
import App from "./App"
import "./index.css"
import { ThemeProvider } from "./components/theme-provider"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider defaultTheme="light" storageKey="astromasterji-theme">
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
