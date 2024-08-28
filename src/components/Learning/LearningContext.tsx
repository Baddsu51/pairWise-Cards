import { createContext, FunctionComponent } from 'preact'
import { useContext, useState } from 'preact/hooks'
import { List } from '../../models/List'

interface LearningContextType {
  selectedList: List
  setSelectedList: (value: List | ((prevState: List) => List)) => void
  lists: List[]
  setLists: (value: List[]) => void
}

export const LearningContext = createContext<LearningContextType | undefined>(
  undefined,
)

export const LearningProvider: FunctionComponent = ({ children }) => {
  const [selectedList, setSelectedList] = useState<List>({} as List)
  const [lists, setLists] = useState<List[]>([])

  return (
    <LearningContext.Provider
      value={{ selectedList, setSelectedList, lists, setLists }}
    >
      {children}
    </LearningContext.Provider>
  )
}

export const useLearningContext = () => {
  const context = useContext(LearningContext)
  if (context === undefined) {
    throw new Error('useLearningContext must be used within a LearningProvider')
  }
  return context
}
