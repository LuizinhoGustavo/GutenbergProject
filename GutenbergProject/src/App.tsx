import './index.css'
import { Book } from './Components/Book/Book'

export function App() {
  return (
    <div className='w-full flex flex-col justify-center mt-5 gap-5'>
      {/*Sessão do Header*/}
      <div className='justify-center'>
        <h1 className='text-4xl font-semibold text-center'>Random Gutenberg Book</h1>
      </div>

      {/*Sessão do Livro*/}
      <Book />

      {/*Sessão da Explicação do Projeto*/}
      <div className='mx-40 flex flex-col gap-5'>
        <p className='font-medium justify-center text-justify text-2xl'>
          Gutenberg Project is voluntary effort to archive and share digital copies of cultural artworks (generally books). This initiative started in 1971 and contain collections of complete books that are in public domain, the goal is to distribute this books the most as possible.
        </p>

        <p className='font-medium justify-center text-justify text-2xl'>
          Random Gutenberg Book is the possibility to found one of this books and read it. The web-site is going to get a random book from the Gutenberg Collections and recommend it to you !!!
        </p>

        <p className='font-medium justify-center text-justify text-2xl'>Hope you enjoy it ;)</p>
      </div>

    </div>
  )
}