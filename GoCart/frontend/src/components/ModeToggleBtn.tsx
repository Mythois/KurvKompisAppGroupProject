// Modify ModeToggleBtn.tsx
import { Moon, Sun } from 'lucide-react'
import { useState } from 'react'

function ModeToggleBtn() {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.theme === 'dark')

  if (isDarkMode || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  function toggleTheme() {
    if (isDarkMode) {
      localStorage.theme = 'light'
      document.documentElement.classList.remove('dark')
      setIsDarkMode(false)
    } else {
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark')
      setIsDarkMode(true)
    }
  }

  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? <Sun size={35} className="hover:fill-white" /> : <Moon size={35} className="hover:fill-white" />}
    </button>
  )
}

export default ModeToggleBtn
