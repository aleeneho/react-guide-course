// import { useAccordionContext } from "./accordion"
import { createContext, useContext } from "react"

const AccordionItemContext = createContext();

export function useAccordionItemContext() {
  const ctx = useContext(AccordionItemContext);

  if (!ctx) {
    throw new Error('Accordion.Item should be used inside Accordion');
  }

  return ctx;
}

export default function AccordionItem({ id, children, className }) {
  // const { openItemId, toggleItem } = useAccordionContext();

  // const isOpen = openItemId === id;

  // function handleClick() {
  //   toggleItem(id);
  // }

  return (
    <AccordionItemContext.Provider value={{ id }}>
      <li className={className}>
        {children}
      </li>
    </AccordionItemContext.Provider>
  )
}
