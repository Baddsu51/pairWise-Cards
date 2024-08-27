import { useLiveQuery } from 'dexie-react-hooks'
import { render } from 'preact'
import { useState } from 'preact/hooks'
import { db } from '../models/db'
import { List } from '../models/List'
import { ChoiceList } from './ChoiceList'
import { ListView } from './ListView'

export function Lists() {
  const lists = useLiveQuery(() => db.lists.toArray()) // au chargement de la page

  if (!lists) return null

  const [list, setList] = useState<List>()

  function onSelect(selectedList: List) {
    setList(selectedList)
  }

  const container = document.getElementById('navbar')
  if (container) {
    render(<ChoiceList onSelect={onSelect} lists={lists} />, container)
  }

  return (
    <div>{list ? <ListView list={list} /> : <ListView list={lists[0]} />}</div>
  )
}
