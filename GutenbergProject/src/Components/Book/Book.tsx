import img from './image1.png'

export function Book() {


    return (
        <div className="mx-40">
            <div className="w-full h-1/2 bg-MarromEscuro rounded-md p-5">
                <div className="w-full h-1/2 bg-Cinza2 p-3">
                    <div className="w-full h-1/2 bg-Branco1  border flex flex-row">
                        <div className="w-1/2 h-full flex flex-col justify-center text-center border-r-4 py-3 border-r-MarromEscuro">
                            <h2>Frankenstein; Or, The Modern Prometheus</h2>

                            <img src={img} alt="Book Image" className="mx-auto max-w-60 my-2" />

                            <p>Authors: Shelley, Mary Wollstonecraft </p>
                            <p>1797 - 1851</p>
                        </div>

                        <div className="w-1/2 h-full flex flex-col justify-center text-center border-l-4 border-l-MarromEscuro">

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}