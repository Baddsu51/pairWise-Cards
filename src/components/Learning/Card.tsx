import { JSX } from 'preact'
import { useState } from 'preact/hooks'
import { Card as CardType } from '../../models/Card'
import { ActionBar } from './ActionBar'

interface Props {
  card: CardType
  onAnswer: (card: CardType, isCorrect: boolean) => void
}

export function Card({ card, onAnswer }: Props) {
  const [input, setInput] = useState<string>('') // champs de saisie de la réponse
  const [isAnswered, setIsAnswered] = useState<boolean>(false) // indique si la réponse a été donnée
  const [isCorrect, setIsCorrect] = useState<boolean>(false) // indique si la réponse est correcte

  const { id, question, answer } = card
  console.log(id)

  const handleKeyDown = (
    event: JSX.TargetedKeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === 'Enter') {
      const correct = input.toLowerCase() === answer.toLowerCase()
      setIsAnswered(true)
      setIsCorrect(correct)
    }
  }

  const changeCard = () => {
    setIsAnswered(false)
    setInput('')

    // Appelle la fonction onAnswer
    onAnswer(card, isCorrect)
  }

  return (
    <>
      {isAnswered ? (
        <div
          onClick={changeCard}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              console.log('Enter')
              changeCard()
            }
            // je pense que ça ne marche pas car l'element n'est pas en focus.
          }}
          class="relative mx-auto flex min-h-[60vh] w-full items-center justify-center rounded-3xl bg-blue-100 p-8 font-bold text-blue-50 shadow-md transition-all duration-200  hover:shadow-lg active:scale-95 active:bg-blue-200"
        >
          {isCorrect ? (
            <h4 class="text-3xl text-green-700">{input}</h4>
          ) : (
            <div class="flex flex-col items-center space-y-6">
              <h3 class="text-blue-900">{answer}</h3>
              <h4 class="text-red-700">{input}</h4>{' '}
            </div>
          )}
        </div>
      ) : (
        <div class="relative mx-auto flex min-h-[60vh] w-full items-center justify-center rounded-3xl bg-blue-100 p-8 font-bold text-blue-50 shadow-md transition-all duration-200  hover:shadow-lg">
          <div class="flex flex-col items-center space-y-6">
            <h3 class="text-blue-900">{question}</h3>
            <input
              class="rounded-md border-2 border-blue-500 bg-blue-100 px-5 py-0.5 text-blue-900 shadow-md transition-all duration-200 hover:bg-blue-50 hover:shadow-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              type="text"
              value={input}
              onInput={(e) => setInput(e.currentTarget.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
      )}
      <ActionBar />
    </>
  )
}
