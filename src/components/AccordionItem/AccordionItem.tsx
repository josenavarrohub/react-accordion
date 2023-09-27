import styles from './AccordionItem.module.scss'
import { AccordionItemProps } from './AccordionItem.types'

const AccordionItem: React.FC<AccordionItemProps> = ({number, question, open, onClick, children}) => {    
    return (
        <div
            className={`${styles['c-item']} ${open ? styles['open'] : ''}`}
            onClick={onClick}
        >
            <p className={styles.number}>{String(number).padStart(2, '0')}</p>
            <p className={styles.question}>{question}</p>
            <p className={styles.icon}>{open ? '-' : '+'}</p>
            {open && <div className={styles.answer}>{children}</div>}
        </div>
    )
}

export default AccordionItem
