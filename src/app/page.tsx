import Image from "next/image";
import prfum from "../../public/asset/image/image-product-desktop.jpg"

export default function Home() {
  return (
    <main>
      <div className="w-100 h-[100vh] flex justify-center items-center bg-gray-300">
        <div className="w-96  md:max-lg:w-[70%] lg:max-2xl:w-[61%] grid place-items-center grid-cols-1 md:max-2xl:grid-cols-2 gap-0 mx-3 rounded-xl overflow-hidden shadow-xl shadow-gray-500">

          <div className="w-full overflow-hidden">
            <div className="transition-all  hover:scale-110">
              <Image
                alt="perfum"
                src={prfum}
              />
            </div>
          </div>

          <div className="md:max-2xl:ms-4 h-[100%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta velit autem consequatur optio error vel recusandae ullam nam, eum voluptatem ab, dolorum doloribus doloremque repudiandae distinctio ut, reiciendis explicabo tenetur.
          </div>
        </div>
      </div>
    </main>
  );
}
