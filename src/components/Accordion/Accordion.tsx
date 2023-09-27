import styles from './Accordion.module.scss'
import AccordionItem from '../AccordionItem'
import { AccordionProps } from './Accordion.types'
import { useState } from 'react'

const Accordion: React.FC<AccordionProps> = ({items}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className={styles['c-accordion']}>
        { items.map((item, index) => (
            <AccordionItem
                key={item.question}
                number={index + 1}
                question={item.question}
                open={activeIndex === index}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              {item.answer}
            </AccordionItem>
        )) }
    </div>
  )
}

export default Accordion
