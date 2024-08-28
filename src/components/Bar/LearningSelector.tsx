// components/LearningSelector.tsx
import { FunctionComponent } from 'preact'
import { useEffect } from 'preact/hooks'
import { useLearningContext } from '../Learning/LearningContext'

const LearningSelector: FunctionComponent = () => {
  const { selectedList, setSelectedList, lists } = useLearningContext()

  useEffect(() => {
    if (lists.length > 0 && !selectedList) {
      setSelectedList(lists[0])
    }
  }, [selectedList, setSelectedList])

  const handleChange = (e: Event) => {
    const target = e.target as HTMLSelectElement
    const selectedTitle = target.value
    const selectedList = lists.find((l) => l.title === selectedTitle)
    if (selectedList) {
      setSelectedList(selectedList)
    }
  }

  return (
    <div>
      <select
        class="rounded-3xl border-none bg-blue-100 px-5 py-0.5 transition-all duration-200 hover:bg-blue-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 active:rounded-b-none active:rounded-t-2xl"
        onChange={handleChange}
        value={selectedList?.title || ''}
      >
        {lists.map((list) => (
          <option key={list.id} value={list.title}>
            {list.title}
          </option>
        ))}
      </select>
    </div>
  )
}

export default LearningSelector
