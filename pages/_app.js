import "../styles/globals.css";
import Header from "../components/Header";
import "../public/fonts/911porscha/911porschav3.ttf";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
