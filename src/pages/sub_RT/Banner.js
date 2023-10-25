const TokenImage = './img/Token.png';

const Banner = () => {
    return (
        <div>
            <div className="grid md:grid-cols-2 m-16 my-1">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                            Explora, Adquiere y Comercializa NFTs Excepcionales
                        </p>
                        <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                            Sé siempre un pionero, desafía tus límites y crea colecciones asombrosas que dejarán a todos maravillados.
                        </p>
                        <button
                            type="button"
                            className="mt-8 mx-1 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-500 bg-white hover:text-white hover:bg-indigo-500 hover:border-indigo-500"
                        >
                            Crea tus NFTs
                        </button>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <img src={TokenImage} alt="" className="h-full w-full rounded-xl transform transition-transform hover:scale-105 hover:filter hover:grayscale" />

                </div>
            </div>
        </div>
    );
}

export default Banner;
