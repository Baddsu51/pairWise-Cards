import Dexie, { type EntityTable } from 'dexie'
import { Card } from './Card'
import { List } from './List'
import { populate } from './populate'

export const db = new Dexie('FlashcardsDataBase') as Dexie & {
  lists: EntityTable<List, 'id'>
  cards: EntityTable<Card, 'id'>
}

// schema declaration
db.version(1).stores({
  lists: '++id',
  cards: '++id,listId',
})

// évite de réimporter les données à chaque rafraîchissement
db.on('populate', populate)
