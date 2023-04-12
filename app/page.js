import Image from 'next/image'

export default function Home() {
  return (
    <div
      id='wrapper'
      className='flex min-h-screen flex-col items-center gap-5 justify-between p-24'
    >
      <header>
        <h1 className='text-3xl font-bold'>Samni'ye hoş geldin</h1>
        <p className='font-light text-center'>Rüyanı yorumlamak için sabırsızlanıyorum</p>
      </header>
      <main>
        <div className='loading'>
          <div className='loading__dot'></div>
          <div className='loading__dot'></div>
          <div className='loading__dot'></div>
        </div>
        <div id='chat-answers'>
          <div id='chat-answer' className='flex flex-col items-center h-[50vh] w-[30vw]'>
            <div id='chats' className='w-full'>
              <p className='text-sm font-thin mb-3 bg-black p-5 font-mono'>
                Rüyanda odandaki bozuk ışığı tamir etmek zorundaydın mı? Bu gerçek hayatta oldukça
                sinir bozucu olabilir. Ama rüyanda, sorunların üstesinden gelmek için güçlü bir arzu
                duyduğunu gösteriyor olabilirsin. Belki de hayatındaki bir problemle ilgili olarak,
                kendine güvenle mücadele etmek istiyorsun. İyi haber, rüyan sadece bir rüya olduğu
                için, gerçek hayatta ışığın çalışmasını garanti edemezsin ama sorunları çözmek için
                doğru adımları atmaya karar verebilirsin.
              </p>
              <p className='text-sm font-thin mb-3 bg-black p-5 font-mono'>
                Belki de hayatındaki bir problemle ilgili olarak, kendine güvenle mücadele etmek
                istiyorsun. İyi haber, rüyan sadece bir rüya olduğu için, gerçek hayatta ışığın
                çalışmasını garanti edemezsin ama sorunları çözmek için doğru adımları atmaya karar
                verebilirsin.
              </p>
              <p className='text-sm font-thin mb-3 bg-black p-5 font-mono'>
                İyi haber, rüyan sadece bir rüya olduğu için, gerçek hayatta ışığın çalışmasını
                garanti edemezsin ama sorunları çözmek için doğru adımları atmaya karar
                verebilirsin.
              </p>
              <p className='text-sm font-thin mb-3 bg-black p-5 font-mono'>
                Rüyanda odandaki bozuk ışığı tamir etmek zorundaydın mı? Bu gerçek hayatta oldukça
                sinir bozucu olabilir. Ama rüyanda, sorunların üstesinden gelmek için güçlü bir arzu
                duyduğunu gösteriyor olabilirsin. Belki de hayatındaki bir problemle ilgili olarak,
                kendine güvenle mücadele etmek istiyorsun. İyi haber, rüyan sadece bir rüya olduğu
                için, gerçek hayatta ışığın çalışmasını garanti edemezsin ama sorunları çözmek için
                doğru adımları atmaya karar verebilirsin.
              </p>
              <p className='text-sm font-thin mb-3 bg-black p-5 font-mono'>
                Rüyanda odandaki bozuk ışığı tamir etmek zorundaydın mı? Bu gerçek hayatta oldukça
                sinir bozucu olabilir. Ama rüyanda, sorunların üstesinden gelmek için güçlü bir arzu
                duyduğunu gösteriyor olabilirsin.
              </p>
            </div>
          </div>
        </div>
        <div id='chat-question-input' className='grid grid-flow-col gap-1 items-center'>
          <textarea
            id='question'
            name='question'
            rows='2'
            cols='50'
            placeholder='Gördüğün rüyayı yaz'
            className='w-full p-2 border border-gray-300 rounded-md text-gray-900 resize-none'
          ></textarea>
          <button id='submit-question' className='h-full py-1 text-white bg-gray-700 rounded-md'>
            Gönder
          </button>
        </div>
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
