import { JSX } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import { Card as CardType } from '../../../../models/Card'
import { ActionBar } from './ActionBar'

interface Props {
  card: CardType
  onAnswer: (card: CardType, isCorrect: boolean) => void
}

export function Card({ card, onAnswer }: Props) {
  // enregistrer la carte dans un useState
  const [cardState, setCardState] = useState<CardType>(card)
  console.log('cardState:', setCardState)

  const [input, setInput] = useState<string>('')
  const [isAnswered, setIsAnswered] = useState<boolean>(false)
  const [isCorrect, setIsCorrect] = useState<boolean>(false)

  useEffect(() => {
    if (isAnswered) {
      const element = document.getElementById('card')
      // Programmez l'appel de l'événement focus intentionnellement
      if (element) element.focus()
    } else {
      const element = document.getElementById('input')
      if (element) element.focus()
    }
  }, [isAnswered])

  const handleKeyDown = (
    event: JSX.TargetedKeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === 'Enter') {
      const correct = input.toLowerCase() === cardState.answer.toLowerCase()
      setIsAnswered(true)
      setIsCorrect(correct)
    }
  }

  const changeCard = () => {
    setIsAnswered(false)
    setInput('')
    onAnswer(card, isCorrect)
  }

  const onKeyDownCard = (event: JSX.TargetedKeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      console.log('Enter')
      changeCard()
    }
  }

  return (
    <>
      <div
        id="card"
        onClick={isAnswered ? changeCard : undefined}
        onKeyDown={isAnswered ? onKeyDownCard : undefined}
        tabIndex={0}
        class="relative mx-auto flex max-h-full min-h-[70vh] w-full max-w-4xl items-center justify-center rounded-3xl bg-blue-100 p-16 text-3xl font-bold text-blue-50 shadow-md transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 active:scale-95 active:bg-blue-200"
      >
        <ActionBar />
        {isAnswered ? (
          isCorrect ? (
            <h4 class="text-3xl text-green-700">{input}</h4>
          ) : (
            <div class="flex flex-col items-center space-y-6">
              <h3 class="text-blue-900">{cardState.answer}</h3>
              <h4 class="text-red-700">{input}</h4>
            </div>
          )
        ) : (
          <div class="flex max-h-full flex-col items-center  gap-16">
            <h3 class="text-center text-blue-900">{cardState.question}</h3>
            <input
              id="input"
              class="rounded-md border-2 border-blue-500 bg-blue-100 px-5 py-0.5 text-blue-900 shadow-md transition-all duration-200 hover:bg-blue-50 hover:shadow-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              type="text"
              value={input}
              onInput={(e) => setInput(e.currentTarget.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
        )}
      </div>
    </>
  )
}
