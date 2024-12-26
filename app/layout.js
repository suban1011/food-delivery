import { Poppins } from "next/font/google";
import "./globals.css";
  import { ToastContainer, toast } from "react-toastify";
// Configure Poppins font
const poppins = Poppins({
  subsets: ["latin"], // Supports Latin characters
  weight: ["400", "500", "600", "700"], // Specify font weights
  variable: "--font-poppins", // Define a CSS variable for font
});

export const metadata = {
  title: "My Next.js App",
  description: "Adding Poppins Font Example",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
