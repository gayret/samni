import { useState } from 'react'

export default function Home() {
  const [query, setQuery] = useState('')
  const [answers, setAnswers] = useState([])
  const [loading, setLoading] = useState(false)

  const onSubmit = (e) => {
    setLoading(true)
    e.preventDefault()
    fetch('/api/generate-comment', {
      method: 'post',
      body: query,
    })
      .then((res) => res.json())
      .then((data) => {
        setAnswers([...answers, data.content])
      })
      .catch((error) => {
        console.log(`%cerror`, 'color: red; font-size: 4em', error)
      })
      .finally(() => {
        setLoading(false)
        setQuery('')
      })
  }
  return (
    <div
      id='wrapper'
      className='flex min-h-screen flex-col items-center gap-5 justify-between p-24'
    >
      <header className='flex justify-center items-center'>
        <div className='text'>
          <h1 className='text-3xl font-bold'>Samni&apos;ye hoş geldin</h1>
          <p className='font-light text-center'>Rüyanı yorumlamak için sabırsızlanıyorum</p>
        </div>
      </header>
      <main>
        {loading && (
          <div className='loading'>
            <div className='loading__dot'></div>
            <div className='loading__dot'></div>
            <div className='loading__dot'></div>
          </div>
        )}

        {!loading && (
          <div id='chat-answers'>
            {answers &&
              answers.map((answer) => (
                <div id='chat-answer' className='flex flex-col items-center w-[30vw]' key={answer}>
                  <div id='chats' className='w-full'>
                    <p className='text-sm font-thin mb-3 bg-black p-5 font-mono'>{answer}</p>
                  </div>
                </div>
              ))}
          </div>
        )}
        {!loading && (
          <div id='chat-question-input' className='grid grid-flow-col gap-1'>
            <form onSubmit={onSubmit} className='flex gap-x-4'>
              <textarea
                onChange={(e) => setQuery(e.target.value)}
                id='question'
                name='question'
                rows='2'
                cols='50'
                placeholder='Rahatça anlatabilirsin'
                className='w-full p-2 border border-gray-300 rounded-md text-gray-900 resize-none'
                maxLength={350}
              ></textarea>
              <button
                disabled={query.length < 1}
                type='submit'
                id='submit-question'
                className='p-1 text-white bg-gray-700 rounded-md'
              >
                Gönder
              </button>
            </form>
          </div>
        )}
      </main>
      <footer className='text-xs pt-10 font-thin'>
        <p className='text-gray-400'>
          Yanıtlar Chat GPT tarafından üretilir ve gizliliği garanti edilir.
        </p>
        <p className='mt-2 text-gray-500 text-center'>
          Developed by
          <a href='https://safagayret.com' target='_blank' rel='noopener noreferrer'>
            {' '}
            <span className='text-gray-200'>Safa Gayret</span>
          </a>
        </p>
      </footer>
    </div>
  )
}
