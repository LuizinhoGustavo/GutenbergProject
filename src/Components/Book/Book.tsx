import { useEffect, useState } from 'react'
import axios from 'axios' /* Importamos a biblioteca baixada para lidar com requisições http */
import { SyncLoader } from 'react-spinners';
import { ChevronRight } from 'lucide-react';

/* Criamos uma interface que vai ser responsável por armazenar o resultado da requisição */
interface Author {
    birth_year: number | null;
    death_year: number | null;
    name: string;
}

interface Formats {
    "image/jpeg": string;
    "text/html": string;
}


interface Book {
    id: number;
    title: string;
    authors: Author[];
    languages: string[];
    formats: Formats;
    download_count: number;
    image: string;
    subjects: string[];
}

export function Book() {
    const [book, setBook] = useState<Book | null>(null); /* Armazena o livro que vai ser retornado, setBooks vai atualizar o valor da variável quando a api for chamada */
    const [loading, setLoading] = useState<boolean>(true); /* Essa variável armazena se o fetch está carregando ou não, inicialmente é true. */
    const [error, setError] = useState<string | null>(null); /* Essa variável armazena se o fetch der alguma mensagem de erro */

    const fetchBook = async (bookId: number) => {
        try {
            const response = await axios.get(`https://gutendex.com/books/${bookId}`);
            setBook(response.data);
        } catch (err) {
            setError('Erro ao buscar o livro');
        } finally {
            setLoading(false);
        }
    };

    const getRandomBookId = (): number => {
        return Math.floor(Math.random() * 70000) + 1; // Gera um número aleatório entre 1 e 70000
    };

    const handleRandomBook = () => {
        setLoading(true); // Define o estado de carregamento como verdadeiro
        setError(null); // Limpa qualquer erro anterior
        const randomId = getRandomBookId();
        fetchBook(randomId); // Busca o livro com o ID aleatório
    };

    useEffect(() => {
        fetchBook(getRandomBookId()); // Carrega o livro com ID 1 inicialmente
    }, []);

    if (loading) return <div className='mx-auto'><SyncLoader color="#705C53" /></div>;
    if (error) return <div className='mx-auto'>{error}</div>;

    if (!book) return <div>Livro não encontrado.</div>;

    return (
        <div className="mx-5 lg:mx-40">
            <div className="w-full h-1/2 lg:bg-MarromEscuro rounded-md p-5">
                <div className="w-full h-1/2 lg:bg-Cinza2 p-3">
                    <div className="w-full h-1/2 bg-Branco1 border flex flex-col lg:flex-row">
                        <div className="lg:w-1/2 w-full h-full flex flex-col justify-center mx-auto text-center lg:border-r-4 py-3 lg:border-r-MarromEscuro">
                            <h2>{book.title}</h2>

                            <img src={book.formats["image/jpeg"]} alt="Book Image" className="mx-auto max-h-60 my-2" />

                            {book.authors.map((author, index) => (

                                <p key={index}>
                                    <p>Authors: {author.name}</p>
                                    {author.birth_year && (
                                        <span> {author.birth_year}</span>
                                    )}
                                    -
                                    {author.death_year && (
                                        <span> {author.death_year}</span>
                                    )}
                                </p>
                            ))}
                        </div>

                        <div className="w-1/2 h-full flex flex-col justify-between mx-auto text-left p-3">
                            <h2>Subjects:</h2>
                            {book.subjects.map((item) => (
                                <li>{item}</li>
                            ))}

                            <div className='h-full flex flex-col justify-end'>
                                {book.languages.map((item, index) => (
                                    <span key={index}>
                                        languages: {item}{index < book.languages.length - 1 && ', '}
                                    </span>
                                ))}

                                <a href={book.formats['text/html']} target='_blank' className='text-Azul text-center'>acess the text here</a>

                                <div className='flex mx-auto'>
                                    <button onClick={handleRandomBook} className='flex flex-row-reverse'><ChevronRight /> Next Book</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}