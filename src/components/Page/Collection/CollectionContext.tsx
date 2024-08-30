import { createContext, FunctionComponent } from 'preact'
import { useContext, useState } from 'preact/hooks'
import { List } from '../../../models/List'

interface CollectionContextType {
  selectedList: List
  setSelectedList: (value: List | ((prevState: List) => List)) => void
  lists: List[]
  setLists: (value: List[]) => void
}

export const CollectionContext = createContext<
  CollectionContextType | undefined
>(undefined)

export const CollectionProvider: FunctionComponent = ({ children }) => {
  const [selectedList, setSelectedList] = useState<List>({} as List)
  const [lists, setLists] = useState<List[]>([])

  return (
    <CollectionContext.Provider
      value={{ selectedList, setSelectedList, lists, setLists }}
    >
      {children}
    </CollectionContext.Provider>
  )
}

export const useCollectionContext = () => {
  const context = useContext(CollectionContext)
  if (context === undefined) {
    throw new Error(
      'useCollectionContext must be used within a CollectionProvider',
    )
  }
  return context
}
