import { List } from '../models/List'

export function ChoiceList({
  onSelect,
  lists,
}: {
  onSelect: (selectedList: List) => void
  lists: List[]
}) {
  console.log(onSelect)
  console.log(lists)
  return (
    <div>
      <select
        class="rounded-3xl border-none bg-blue-100 px-5 py-0.5 transition-all duration-200 hover:bg-blue-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 active:rounded-b-none active:rounded-t-2xl"
        onChange={(e) =>
          onSelect(
            lists.find(
              (list) => list.title === (e.target as HTMLSelectElement).value,
            ) as List,
          )
        }
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
