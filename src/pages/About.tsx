export default function About() {
    return <div className="flex flex-col md:flex-row gap-6 p-4">
        <section
            className="relative group h-64 md:h-96 flex-1 rounded-2x1 overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105">
            <img src="https://img.ccnull.de/1080000/preview/1084732_e3dfe65d44da9847d23765d4c73c4f67.jpg"
                 className="absolute insert-0 w-full object-cover opacity-100 group-hover:opacity-100 transition-opacity duration-300"
                 alt="recycling"/>

            <div className="relative z-10 p-6 text-fuchsia-600">
                <p className="text-lg indent-5 ">
                    In Germany, trash separation is legally mandated and divided into several categories to conserve resources
                    and optimize disposal. Trash sorting helps protect the environment and allows for the efficient recycling
                    and reuse of various materials. For this purpose, separate containers are used for paper, plastic, glass,
                    organic rubbish, and residual trash.
                </p>

            </div>
        </section>

        <section
            className="relative group h-64 md:h-96 flex-1 rounded-2x1 overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105">
            <img src="https://images.pexels.com/photos/10368942/pexels-photo-10368942.jpeg"
                 className="absolute insert-0 w-full object-cover opacity-100 group-hover:opacity-100 transition-opacity duration-300"
                 alt="recycling"/>

            <div className="relative z-10 p-6 text-white">
                <p className="text-lg indent-5">
                    This application can help you determine which container is intended for which type of trash. Containers for
                    a specific type of trash are color-coded. You can create containers, view existing containers, and find a
                    container for a specific type of trash.
                </p>

            </div>
        </section>


    </div>;
}


