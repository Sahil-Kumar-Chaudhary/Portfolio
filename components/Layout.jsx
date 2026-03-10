import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative overflow-x-hidden`}
    >
      {/* metadata */}
      <Head>
        <title>Sahil Kumar Chaudhary | Portfolio</title>
        <meta
          name="description"
          content="Sahil Kumar Chaudhary - Cybersecurity Enthusiast and Computer Science Student."
        />
        <meta
          name="keywords"
          content="cybersecurity, networking, ethical hacking, web development, portfolio, computer science, react, nextjs"
        />
        <meta name="author" content="Sahil Kumar Chaudhary" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
