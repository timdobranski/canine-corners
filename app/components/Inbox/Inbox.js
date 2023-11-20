import messages from '../../../fakeMessages';
import styles from './Inbox.module.css';
import { formatDistanceToNow, parseISO } from 'date-fns';

export default function Inbox() {
  // Function to format the message date
  const timeFormatter = (dateString) => {
    const date = parseISO(dateString); // Convert string to Date object
    return formatDistanceToNow(date, { addSuffix: true }); // '4 days ago', 'about 1 month ago', etc.
  };

  return (
    <>
      <div className='inboxWrapper'>
        <h1>Inbox</h1>
        {messages.map(message => {
          return (
            <div key={message.id} className={styles.messageContainer}>
              <p className={styles.messageFrom}>{message.from}</p>
              <p className={styles.messageDate}>{timeFormatter(message.date)}</p>
              <p className={styles.messageSubject}>{message.subject}</p>
              <p className={styles.messageText}>{message.message}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}