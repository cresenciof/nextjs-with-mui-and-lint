import { useMemo, useState } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
      emotionCache?: EmotionCache;
}

// atomic design for react components
// folder structure
//   components
//   atoms
//   molecules
//   organisms
//   templates
//   pages
const sl = 1;
export default function MyApp(props: MyAppProps) {
  const [state, setState] = useState(true);
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  
  useMemo(() => {
    console.log(state);
  }, []); 
  
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
