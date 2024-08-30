import { useLiveQuery } from 'dexie-react-hooks'
import { useEffect, useState } from 'preact/hooks'
import { Card } from '../../../models/Card'
import { db } from '../../../models/db'
import { List } from '../../../models/List'

type Props = {
  list: List
}

export function CardsView({ list }: Props) {
  const [allCards, setAllCards] = useState<Card[]>([])

  const cards = useLiveQuery(
    () =>
      list.id !== 0
        ? db.cards.toArray()
        : db.cards.where({ listId: list.id }).toArray(),
    [list.id],
  )

  useEffect(() => {
    if (cards) {
      setAllCards(cards)
    }
  }, [cards])

  return (
    <div class="container mx-auto w-full p-4">
      <div class="grid w-full grid-cols-3">
        <div class="font-bold">ID</div>
        <div class="font-bold">Question</div>
        <div class="font-bold">Réponse</div>
        {allCards.map((card) => (
          <>
            <div class="truncate  border-2 border-blue-200 bg-blue-100 p-2">
              {card.id}
            </div>
            <div class="truncate  border-2 border-blue-200 bg-blue-100 p-2">
              {card.question}
            </div>
            <div class="truncate  border-2 border-blue-200 bg-blue-100 p-2">
              {card.answer}
            </div>
          </>
        ))}
      </div>
    </div>
  )
}
