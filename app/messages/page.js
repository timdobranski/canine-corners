import Inbox from '../components/Inbox/Inbox';
import styles from './messages.module.css';

export default function Messages() {

  return (
    <>
      <div className={styles.messagesWrapper}>
        <Inbox />
      </div>
    </>
  )

}