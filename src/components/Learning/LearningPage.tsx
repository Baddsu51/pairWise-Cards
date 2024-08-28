import { useLiveQuery } from 'dexie-react-hooks'
import { useEffect } from 'preact/hooks'
import { db } from '../../models/db'
import { useLearningContext } from './LearningContext'
import { ListView } from './ListView'

export function LearningPage() {
  const lists = useLiveQuery(() => db.lists.toArray())
  const { selectedList, setLists, setSelectedList } = useLearningContext()

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
        <ListView list={selectedList} />
      ) : (
        lists.length > 0 && <ListView list={lists[0]} />
      )}
    </div>
  )
}
