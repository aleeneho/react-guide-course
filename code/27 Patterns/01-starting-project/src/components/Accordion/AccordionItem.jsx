// import { useAccordionContext } from "./accordion"

export default function AccordionItem({ children, className }) {
  // const { openItemId, toggleItem } = useAccordionContext();

  // const isOpen = openItemId === id;

  // function handleClick() {
  //   toggleItem(id);
  // }

  return (
    <li className={className}>
      {children}
    </li>
  )
}
