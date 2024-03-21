"use client"
// Import necessary modules and components
import Image from "next/image";
import { Truculenta, Sen, Belanosima } from "next/font/google"
import prfum from "../../public/asset/image/image-product-desktop.jpg"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import toast, { Toaster } from 'react-hot-toast';


// Define the font styles for Truculenta, Sen, and Belanosima
const font = Truculenta({ subsets: ["latin"] });
const sen = Sen({ subsets: ["latin"] });
const belanosima = Belanosima({
  subsets: ["latin"],
  weight: "700",
});

// Define the Home component
export default function Home() {
  // Define a function called 'notify' that displays a success toast message
  const notify = () => toast.success("Youre order added. Thank you!");

  // Return the JSX code for the Home component
  return (
    <main>
      {/* Center the content horizontally and vertically */}
      <div className="w-100 h-[100vh] flex justify-center items-center">
        <div className="w-96  md:max-lg:w-[70%]  lg:max-2xl:w-[54%] grid  grid-cols-1 md:max-2xl:grid-cols-2 gap-0 mx-3 rounded-xl overflow-hidden shadow-xl shadow-gray-500">

          {/* Display the product image */}
          <div className="w-full overflow-hidden">
            <div className="transition-all  hover:scale-110">
              <Image
                alt="perfum"
                src={prfum}
                priority={true}
                blurDataURL=""
              />
            </div>
          </div>

          {/* Display the product information */}
          <div className="md:max-2xl:ms-4 h-[100%] flex  items-center py-6 px-4">
            <div className="flex flex-col space-y-5 md:max-xl:space-y-5 xl:max-2xl:space-y-14">
              {/* Display the product name in a large font size */}
              <p className={`${font.className} tracking-[.5em] text-xl`}>PREFUME</p>

              {/* Display the product title in a bold font weight */}
              <h2 className={`${sen.className} text-2xl font-extrabold`}>Gabrielle Essence Eau De Parfum</h2>

              {/* Display the product description */}
              <p>A floral, solar and voluptuous interpretation composed by
                Olivier Polge, Perfumer-Creator for the House of CHANEL.
              </p>

              {/* Display the product price in a large font size and a green color */}
              <div className="flex flex-row items-center space-x-6"><p className={`${belanosima.className} text-xl text-olive`}>$149.99</p> <span className="text-sm"><del>$169.98</del></span></div>

              {/* Display the 'Add to Cart' button */}
              <button onClick={notify} className="bg-olive rounded-md py-1 transition hover:bg-green-950"><div className="flex flex-row space-x-3 justify-center text-gray-300"><AddShoppingCartIcon /> <p>Add to Cart</p></div></button>

              {/* Display the toast notifications */}
              <Toaster
                position="top-left"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}