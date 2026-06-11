import "./globals.css";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-display",
});

const body = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Pathweights — the AI engineer roadmap",
  description:
    "A self-paced curriculum from Python to production LLM systems, with checkpoint quizzes that earn you XP as you learn.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('pathweights-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}})();",
          }}
        />
        {children}
      </body>
    </html>
  );
}
