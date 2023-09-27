import Accordion from '../Accordion'
import items from '../../data/items-demo-data'
import styles from './App.module.scss'

const App: React.FC = () => {
  return (
    <div className={styles['c-app']}>
      <h1 className={styles.title}>Accordion Component</h1>
      <p className={styles.description}>React & TypeScript</p>
      <Accordion items={items} />
    </div>
  )
}

export default App
