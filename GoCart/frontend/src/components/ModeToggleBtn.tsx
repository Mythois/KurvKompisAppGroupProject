import { Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider.tsx'

function ModeToggleBtn() {
  const { isDarkMode, toggleTheme } = useTheme()
  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? <Sun size={30} className="hover:fill-white" /> : <Moon size={30} className="hover:fill-white" />}
    </button>
  )
}
export default ModeToggleBtn
