import { createContext, useState, useContext } from "react"

import AccordionItem from "./accordionItem"

const AccordionContext = createContext()

export function useAccordionContext() {
  const ctx = useContext(AccordionContext)

  if (!ctx) {
    throw new Error('AccordionItem must be wrapped within an Accordion')
  }

  return ctx;
}

export default function Accordion({ children, className }) {
  const [openItemId, setOpenItemId] = useState(null)

  const toggleItem = (id) => {
    setOpenItemId(prevId => prevId === id ? null : id)
  }

  function openItem(id) {
    setOpenItemId(id);
  }

  function closeItem() {
    setOpenItemId(null);
  }

  const contextValue = {
    openItemId: openItemId,
    toggleItem: toggleItem,
   }

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>
        {children}
      </ul>
    </AccordionContext.Provider>
  )
}

Accordion.Item = AccordionItem;
