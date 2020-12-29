import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Colors from '../components/Colors';
import cx from 'classnames';

type Props = {
  title: string;
  onClick: () => void;
  className?: string;
};
const Button: FC<Props> = ({ title, onClick, className }) => {
  const styles = useStyles();
  return <button className={cx([styles.button, className])} onClick={onClick}>{title}</button>
}

const useStyles = makeStyles({
  button: {
    fontSize: 24,
    backgroundColor: Colors.superPink,
    border: 0,
  }
});

export default Button;