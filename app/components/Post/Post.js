import { formatDistanceToNow } from 'date-fns';
import styles from './Post.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faThumbsUp, faComment, faShare, faFlag } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

export default function Post({ data }) {
  const router = useRouter();

  const timeFormatter = (data) => {
    const dateTimeString = `${data.date} ${data.time}`;

    // Adjust the AM/PM time to 24-hour format
    const dateTime = new Date(dateTimeString.replace(/(\d+):(\d+)([ap]m)/i, (match, hour, minute, period) => {
      hour = parseInt(hour, 10);
      if (period.toLowerCase() === 'pm' && hour !== 12) {
        hour += 12;
      } else if (period.toLowerCase() === 'am' && hour === 12) {
        hour = 0;
      }
      return `${hour}:${minute}`;
    }));

    // Check if the date is valid
    if (isNaN(dateTime)) {
      return "Invalid date";
    }

    const timeAgo = formatDistanceToNow(dateTime, { addSuffix: true });
    return timeAgo;
  };
  const timeAgo = timeFormatter(data);


  return (
    <div className={styles.post}>


        <h3 className={styles.author}>{data.author}</h3>
        <h3 className={styles.ago}>{timeAgo}</h3>
        <h3 className={data.type === 'pet News/Event' ? styles.newsAndEvents : styles[data.type]}>{data.type === 'pet News/Event' ? 'Pet News & Events' : data.type}</h3>

        {(data.type === 'pet News/Event' ?
       <>
        <p className={styles.content}>{data.content}</p>
        <div className={styles.linkContainer}>
          <p className={styles.link} onClick={() => {router.push(data.link)}}>{data.link}</p>
          {data.image ? <img className={styles.postImage} src={data.image} alt={data.imageAlt} onClick={() => {router.push(data.link)}}/> : null}
          </div>
        </>


        : <p className={styles.content}>{data.content}</p>)}


        {data.img ? <img className={styles.postImage} src={data.img} alt={data.imageAlt} /> : null}

      <div className={styles.postFooter}>
        <div className={styles.postReactContainer}>
          <FontAwesomeIcon icon={faThumbsUp} className={styles.icon}/>

        </div>
        <div className={styles.postReactContainer}>
          <FontAwesomeIcon icon={faComment} className={styles.icon}/>

        </div>
        <div className={styles.postReactContainer}>
          <FontAwesomeIcon icon={faShare} className={styles.icon}/>

        </div>
        <div className={styles.postReactContainer}>
          <FontAwesomeIcon icon={faFlag} className={styles.icon}/>

        </div>
      </div>

    </div>
  )
}

// {
//   type: 'story',
//   content: 'Today I learned that if I keep waiting at the back door long enough, I can keep going outside for potty then back for treats over and over again!',
//   date: '2021-05-02',
//   time: '6:00pm',
//   author: 'Bark Wahlberg',
//   id: 1
// },