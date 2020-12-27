import { makeStyles } from '@material-ui/core/styles';
import { FC } from 'react';

type Props = {
  character: string;
}
const Avatar: FC<Props> = ({ character }) => {
  const styles = useStyles();
  return <img className={styles.avatar} src={character} alt="char" />;
}

const useStyles = makeStyles({
  avatar: {
    height: '40vh',
    // -moz-user-select: none;
    // -webkit-user-select: none;
  },
});

export default Avatar;