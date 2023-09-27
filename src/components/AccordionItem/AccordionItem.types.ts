export interface AccordionItem {
    question: string,
    answer: string,
}

export interface AccordionItemProps {
    number: number,
    question: string,
    open: boolean,
    onClick: () => void,
    children: React.ReactNode
}
