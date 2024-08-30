import CollectionIcon from '../../assets/collection.svg'
import LearnIcon from '../../assets/learn.svg'
import ProgressIcon from '../../assets/progress.svg'
import { Page } from '../../main'

type Props = {
  setCurrentPage: (page: Page) => void
}

export function BottomBar({ setCurrentPage }: Props) {
  const handleClick = (page: Page) => () => {
    setCurrentPage(page)
  }

  const NavItem = ({
    icon,
    label,
    page,
  }: {
    icon: string
    label: string
    page: Page
  }) => (
    <div
      className="group flex cursor-pointer flex-col items-center"
      onClick={handleClick(page)}
    >
      <div className="mb-1 size-10 rounded-full p-2 transition-all duration-200 group-hover:bg-blue-200 group-hover:shadow-md group-active:bg-blue-400 group-active:shadow-inner">
        <img
          src={icon}
          alt={label}
          className="size-full transition-all duration-200 group-hover:scale-110"
        />
      </div>
      <span className="text-xs font-light transition-all duration-200 group-hover:font-normal group-hover:text-blue-900">
        {label}
      </span>
    </div>
  )

  return (
    <div className="fixed inset-x-0 bottom-0 flex h-20 w-full items-center justify-center bg-blue-300 shadow-lg transition-colors">
      <div className="flex space-x-16">
        <NavItem icon={LearnIcon} label="Learning" page="learning" />
        <NavItem icon={CollectionIcon} label="Collection" page="collection" />
        <NavItem icon={ProgressIcon} label="Progress" page="progress" />
      </div>
    </div>
  )
}
