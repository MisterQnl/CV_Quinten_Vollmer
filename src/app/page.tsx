import Image from 'next/image'
import Link from 'favicon.ico'
export default function Home() {
    return (
        <div className="bg-gradient-to-r from-gray-500 via-orange-400 via-60% to-white">
            <div
                className="flex items-center flex-col space-y-40  h-screen mb-12 bg-fixed bg-center bg-cover bg-[url(../../public/background.jpg)]"
            >
                <header className="bg-white w-full">
                    <div className="mx-auto max-w-screen-xl p-4">
                        <div className="flex items-center justify-between gap-4 lg:gap-10">
                            <div className="flex lg:w-0 lg:flex-1">
                                <img src={'favicon.ico'} alt={'Logo'} width={50} height={50}></img>
                            </div>

                            <nav className="hidden gap-8 text-sm font-medium md:flex">
                                <a className="text-gray-500" href="">About</a>
                                <a className="text-gray-500" href="">Blog</a>
                                <a className="text-gray-500" href="">Projects</a>
                                <a className="text-gray-500" href="">Contact</a>
                            </nav>

                            <div className="lg:hidden">
                                <button className="rounded-lg bg-gray-100 p-2 text-gray-600" type="button">
                                    <span className="sr-only">Open menu</span>
                                    <svg
                                        aria-hidden="true"
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4 6h16M4 12h16M4 18h16"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="w-full flex justify-center bg-white/40  px-0 py-20">
                    <h2 className="text-3xl font-bold">Hero Section of Website </h2>
                </div>
                <div className="w-full flex flex-col px-40 justify-center bg-white/50  py-20">
                    <h2 className="text-3xl font-bold"> About Us </h2>
                    <p className="mt-10">
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
