import { useState } from 'preact/hooks'

export function Edition() {
  const [question, setQuestion] = useState<string>('')
  const [answer, setAnswer] = useState<string>('')
  return (
    <div
      id="card"
      class="relative mx-auto flex max-h-full min-h-[70vh] w-full max-w-4xl items-center justify-center rounded-3xl bg-blue-100 p-16 text-3xl font-bold text-blue-50 shadow-md transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 active:scale-95 active:bg-blue-200"
    >
      <div class="flex max-h-full flex-col items-center  gap-16">
        <input
          class="rounded-md border-2 border-blue-500 bg-blue-100 px-5 py-0.5 text-blue-900 shadow-md transition-all duration-200 hover:bg-blue-50 hover:shadow-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          type="text"
          value={question}
          onInput={(e) => setQuestion(e.currentTarget.value)}
        />
        <input
          id="input"
          class="rounded-md border-2 border-blue-500 bg-blue-100 px-5 py-0.5 text-blue-900 shadow-md transition-all duration-200 hover:bg-blue-50 hover:shadow-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          type="text"
          value={answer}
          onInput={(e) => setAnswer(e.currentTarget.value)}
        />
      </div>
    </div>
  )
}
