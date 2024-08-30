import { useLiveQuery } from 'dexie-react-hooks'
import { useEffect } from 'preact/hooks'
import { db } from '../../../models/db'
import { CardsView } from './CardsView'
import { useCollectionContext } from './CollectionContext'

export function CollectionPage() {
  const lists = useLiveQuery(() => db.lists.toArray())

  const { selectedList, setLists, setSelectedList } = useCollectionContext()

  useEffect(() => {
    if (lists) {
      setLists(lists)
      if (!selectedList && lists.length > 0) {
        setSelectedList(lists[0])
      }
    }
  }, [lists, setLists, setSelectedList, selectedList])

  if (!lists) return null

  return (
    <div>
      {selectedList ? (
        <CardsView list={selectedList} />
      ) : (
        lists.length > 0 && <CardsView list={{ id: 0, title: 'all' }} />
      )}
    </div>
  )
}
