import { ThemeProvider } from "./components/theme-provider";
import { Dashboard } from "./views/Dashboard";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Dashboard/>
    </ThemeProvider>
  );
}
