// components/LearningSelector.tsx
import { FunctionComponent } from 'preact'
import { useLearningContext } from '../../../Page/Learning/LearningContext'

const LearningSelector: FunctionComponent = () => {
  // récuperer la liste des listes, et setSelectedList
  const { setSelectedList, lists } = useLearningContext()

  // Fonction appelée lors d'une selection de liste
  const handleChange = (e: Event) => {
    const target = e.target as HTMLSelectElement
    const selectedTitle = target.value
    const selectedList = lists.find((l) => l.title === selectedTitle)

    // mettre a jour la liste selectionnée
    if (selectedList) {
      setSelectedList(selectedList)
    }
  }

  return (
    <div>
      <select
        class="rounded-3xl border-none bg-blue-100 px-5 py-0.5 transition-all duration-200 hover:bg-blue-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 active:rounded-b-none active:rounded-t-2xl"
        onChange={handleChange}
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
