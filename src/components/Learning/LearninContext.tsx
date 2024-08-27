// contexts/LearningContext.tsx
import { createContext, FunctionComponent } from 'preact'
import { useContext, useState } from 'preact/hooks'

interface LearningContextType {
  selectedDeck: string
  setSelectedDeck: (value: string | ((prevState: string) => string)) => void
  // Ajoutez d'autres états et fonctions si nécessaire
}

export const LearningContext = createContext<LearningContextType | undefined>(
  undefined,
)

export const LearningProvider: FunctionComponent = ({ children }) => {
  const [selectedDeck, setSelectedDeck] = useState<string>('')

  return (
    <LearningContext.Provider value={{ selectedDeck, setSelectedDeck }}>
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
