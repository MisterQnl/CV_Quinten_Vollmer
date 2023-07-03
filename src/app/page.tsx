import NavHeader from "../app/components/navigation/NavHeader";
import Image from "next/image";
import profilePicture from "../../public/profile.png";

export default function Home() {
    return (
        <div className="bg-gradient-to-r from-gray-500 to-slate-200">
            <div
                className="flex items-center flex-col space-y-40 h-screen mb-12 bg-fixed bg-center bg-cover bg-[url(../../public/background2.jpg)]"
            >
                <NavHeader></NavHeader>

                <div className="w-full flex justify-center items-center space-x-6 bg-black/40 px-0 py-5">
                    <Image src={ profilePicture } alt={"Profile Picture"} width={250} height={250}></Image>
                    <h2 className="text-5xl font-bold text-white">Quinten Vollmer </h2>
                </div>
                <div className="w-full flex flex-col px-40 justify-center bg-black/40  py-5">
                    <h2 className="text-3xl font-bold text-white"> Welcome! </h2>
                    <p className="mt-10 text-white">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolorem eum pariatur
                        tempora,
                        aliquid
                        facilis quidem culpa, enim, natus vitae qui ad voluptas distinctio? Necessitatibus laudantium
                        repudiandae
                        facere quidem perferendis.
                    </p>
                </div>
            </div>
            <div className="max-w-lg m-auto">
                <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat a
                    magna non varius. Proin leo felis, euismod non porta eget, varius sit amet
                    sapien. Maecenas in nulla at leo convallis consectetur id a sapien. Nulla
                    nec pulvinar nisi. Vivamus non facilisis lacus, et volutpat libero. Nulla ac
                    odio aliquam, accumsan arcu ut, lacinia est. Nulla eu sem elit. Fusce nec
                    laoreet sem, semper molestie libero.
                </p>
                <p className="mb-4">
                    Ut sagittis lacus consequat accumsan venenatis. Sed sollicitudin, lectus et
                    fringilla ultrices, dolor nisi scelerisque tortor, vel finibus magna massa
                    non nunc. Phasellus massa quam, egestas a nisl sed, porta volutpat metus.
                    Nunc sed elit ac tellus tempor cursus. Suspendisse potenti. Vestibulum
                    varius rutrum nisl nec consequat. Suspendisse semper dignissim sem viverra
                    semper. Nulla porttitor, purus nec accumsan pharetra, nisi dolor condimentum
                    ipsum, id consequat nulla nunc in ligula.
                </p>
                <p className="mb-12">
                    Nulla pharetra lacinia nisi, vitae mollis tellus euismod id. Mauris porta
                    dignissim hendrerit. Cras id velit varius, fermentum lectus vitae, ultricies
                    dolor. In bibendum rhoncus purus vel rutrum. Nam vulputate imperdiet
                    fringilla. Donec blandit libero massa. Suspendisse dictum diam mauris, vitae
                    fermentum dolor tincidunt in. Pellentesque sollicitudin venenatis dolor,
                    vitae scelerisque elit ultrices eu. Donec eget sodales risus, quis dignissim
                    neque.
                </p>
            </div>
            <section
                className=" flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover bg-[url(../../public/background.jpg)]"
            >
                <div className="px-20 py-20  text-white bg-black/50 w-full ">
                    <h2 className="text-2xl"> Another Section will go here </h2>
                    <p className="mt-10">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aliquam voluptates placeat
                        soluta sint
                        vero
                        molestias? Nesciunt quidem perferendis voluptatum doloremque explicabo repellat reprehenderit
                        molestias
                        ipsa,
                        hic est magnam quae!
                    </p>
                </div>
            </section>
            <div className="max-w-lg m-auto">
                <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat a
                    magna non varius. Proin leo felis, euismod non porta eget, varius sit amet
                    sapien. Maecenas in nulla at leo convallis consectetur id a sapien. Nulla
                    nec pulvinar nisi. Vivamus non facilisis lacus, et volutpat libero. Nulla ac
                    odio aliquam, accumsan arcu ut, lacinia est. Nulla eu sem elit. Fusce nec
                    laoreet sem, semper molestie libero.
                </p>
                <p className="mb-4">
                    Ut sagittis lacus consequat accumsan venenatis. Sed sollicitudin, lectus et
                    fringilla ultrices, dolor nisi scelerisque tortor, vel finibus magna massa
                    non nunc. Phasellus massa quam, egestas a nisl sed, porta volutpat metus.
                    Nunc sed elit ac tellus tempor cursus. Suspendisse potenti. Vestibulum
                    varius rutrum nisl nec consequat. Suspendisse semper dignissim sem viverra
                    semper. Nulla porttitor, purus nec accumsan pharetra, nisi dolor condimentum
                    ipsum, id consequat nulla nunc in ligula.
                </p>
                <p className="mb-4">
                    Nulla pharetra lacinia nisi, vitae mollis tellus euismod id. Mauris porta
                    dignissim hendrerit. Cras id velit varius, fermentum lectus vitae, ultricies
                    dolor. In bibendum rhoncus purus vel rutrum. Nam vulputate imperdiet
                    fringilla. Donec blandit libero massa. Suspendisse dictum diam mauris, vitae
                    fermentum dolor tincidunt in. Pellentesque sollicitudin venenatis dolor,
                    vitae scelerisque elit ultrices eu. Donec eget sodales risus, quis dignissim
                    neque.
                </p>
            </div>
        </div>
    )
}
