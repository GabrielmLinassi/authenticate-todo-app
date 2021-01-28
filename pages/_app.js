import "styles/global.css";
import { TodosProvider } from "contexts/TodosContext";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <TodosProvider>
        <Component {...pageProps} />
      </TodosProvider>
    </ThemeProvider>
  );
}

export default MyApp;
