import { useLiveQuery } from 'dexie-react-hooks'
import { useState } from 'preact/hooks'
import { Card as CardType } from '../../../models/Card'
import { db } from '../../../models/db'
import { List } from '../../../models/List'
import { Card } from './Card/Card'

export function ListView({ list }: { list: List }) {
  console.log('list:', list, 'list.id:', list.id)

  const [allCards, setAllCards] = useState<CardType[]>([])
  const [pendingCards, setPendingCards] = useState<CardType[]>([])
  const [correctCards, setCorrectCards] = useState<CardType[]>([])

  useLiveQuery(async () => {
    const cardsQuery = await db.cards.where({ listId: list.id }).toArray()
    setAllCards(cardsQuery)
    console.log('allCards useLiveQuery :', allCards)

    const pendingCardsQuery = cardsQuery.filter(
      (card) => card.delay === undefined || card.delay === 0,
    )
    setPendingCards(pendingCardsQuery)
    console.log('pendingCards useLiveQuery :', pendingCards)

    const correctCardsQuery = cardsQuery.filter(
      (card) => card.delay !== undefined && card.delay !== 0,
    )
    setCorrectCards(correctCardsQuery)
    console.log('allCards useLiveQuery :', correctCards)
  }, [list.id])

  function onAnswer(card: CardType, isCorrect: boolean) {
    /* Todo: a tester */
    if (isCorrect) {
      // on retire la question de la liste des questions à poser
      {
        if (card.count) {
          card.count++
        } else {
          card.count = 1
        }
      }
      card.delay = Math.pow(2, card.count)
    } else {
      // on remet la question à la fin de la liste car elle n'est pas correcte
      card.delay = 0
      if (card.count !== undefined) {
        card.count -= 3
        if (card.count < 0) {
          card.count = 0
        }
      } else {
        card.count = 0
      }
    }

    if (card.id) {
      db.cards.update(card.id, card)
    }
  }

  return (
    <>
      {pendingCards.length > 0 ? (
        <Card card={pendingCards[0]} onAnswer={onAnswer} />
      ) : (
        <div class="flex h-full items-center justify-center text-blue-50">
          <h2 class="text-2xl">No more cards to review</h2>
        </div>
      )}
    </>
  )
}
