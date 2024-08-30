import { useLiveQuery } from 'dexie-react-hooks'
import { useEffect } from 'preact/hooks'
import { db } from '../../../models/db'
import { isEmpty } from '../../../utils/is'
import { useLearningContext } from './LearningContext'
import { ListView } from './ListView'

export function LearningPage() {
  // récupérer la liste des listes depuis la base de données
  const lists = useLiveQuery(() => db.lists.toArray())

  // récupérer la liste selectionnée et la fonction setLists
  const { selectedList, setLists } = useLearningContext()

  // si la liste des listes change
  useEffect(() => {
    console.log('lists 16:', lists)
    if (lists && lists.length > 0) {
      setLists(lists)
    }
  }, [lists])

  if (!lists) return null

  return (
    <div>
      {selectedList && !isEmpty(selectedList) ? (
        <div>
          {console.log('path selectedList', selectedList)}
          <ListView list={selectedList} />
        </div>
      ) : (
        lists.length > 0 && (
          <div>
            {console.log('path lists[0]', lists[0])}
            <ListView list={lists[0]} />
          </div>
        )
      )}
    </div>
  )
}
