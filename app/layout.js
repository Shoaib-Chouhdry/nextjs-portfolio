import { JetBrains_Mono} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800"]
});



export const metadata = {
  title: "Muhammad Shoaib",
  description: "Next.js portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={jetbrainsMono.variable}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
