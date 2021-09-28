import React from 'react'

const ConfigurationContext = React.createContext({
  theme: false,
  onToggleTheme: () => {},
})

export default ConfigurationContext
