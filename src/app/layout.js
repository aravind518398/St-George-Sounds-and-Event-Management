import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "St.George Sounds and Event Management",
  description: "Find us at Aruvithura. We're easily accessible and look forward to welcoming you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body 
        className={`${roboto.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
