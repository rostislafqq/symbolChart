import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { createEmotionSsrAdvancedApproach } from "tss-react/next/pagesDir";

import { store } from "../features/store";
import { themeMain } from "../utils/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeMain}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

const { augmentDocumentWithEmotionCache, withAppEmotionCache } =
  createEmotionSsrAdvancedApproach({ key: "css" });

export { augmentDocumentWithEmotionCache };

export default withAppEmotionCache(App);
