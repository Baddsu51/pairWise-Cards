import { FunctionComponent, useEffect } from 'preact/compat'
import { useCollectionContext } from '../../../Page/Collection/CollectionContext'

const CollectionSelector: FunctionComponent = () => {
  const { selectedList, setSelectedList, lists } = useCollectionContext()

  useEffect(() => {
    if (!selectedList) {
      setSelectedList({ id: 0, title: 'all cards' })
    }
  }, [selectedList, setSelectedList])

  const handleChange = (e: Event) => {
    const target = e.target as HTMLSelectElement
    const selectedTitle = target.value
    if (selectedTitle === 'all cards') {
      setSelectedList({ id: 0, title: 'all cards' })
    } else {
      const selectedList = lists.find((l) => l.title === selectedTitle)
      if (selectedList) {
        setSelectedList(selectedList)
      }
    }
  }

  return (
    <div>
      <select
        class="rounded-3xl border-none bg-blue-100 px-5 py-0.5 transition-all duration-200 hover:bg-blue-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 active:rounded-b-none active:rounded-t-2xl"
        onChange={handleChange}
        value={selectedList?.title || 'all cards'}
      >
        <option value="all cards">All Cards</option>
        {lists.map((list) => (
          <option key={list.id} value={list.title}>
            {list.title}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CollectionSelector
