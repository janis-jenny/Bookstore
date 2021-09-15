import progress from '../assets/progress.png';
import * as bookStyles from '../style/Book.module.css';

const {
  displayFlex, progressDiv, completionPercentage, alignCenter, completed,
} = bookStyles;

export default function Progress() {
  return (
    <div className={`${displayFlex} ${alignCenter} ${progressDiv}`}>
      <div>
        <img alt="book reading progress" src={progress} />
      </div>
      <ul>
        <li className={completionPercentage}>
          {Math.floor(Math.random() * 100)}
          %
        </li>
        <li className={completed}>Completed</li>
      </ul>
    </div>
  );
}
