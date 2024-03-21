import Image from "next/image";
import prfum from "../../public/asset/image/image-product-desktop.jpg"

export default function Home() {
  return (
    <main>
      <div className="w-100 h-[100vh] flex justify-center items-center">
        <div className="w-96  md:max-lg:w-[70%]  lg:max-2xl:w-[54%] grid  grid-cols-1 md:max-2xl:grid-cols-2 gap-0 mx-3 rounded-xl overflow-hidden shadow-xl shadow-gray-500">

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

          <div className="md:max-2xl:ms-4 h-[100%] flex  items-center py-6 px-4">
            <div className="flex flex-col space-y-5 md:max-xl:space-y-10 xl:max-2xl:space-y-16">
              <p className="tracking-[.5em]">PREFUME</p>
              <h2>Gabrielle Essence Eau De Parfum</h2>
              <p>A floral, solar and voluptuous interpretation composed by
                Olivier Polge, Perfumer-Creator for the House of CHANEL.
              </p>
              <p>$149.99 <span><del>169.98</del></span></p>
              <button className="bg-green-700">Add  to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
