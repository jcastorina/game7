import { FC, PropsWithChildren } from "react"
import { makeStyles } from '@material-ui/core/styles';

import { IMoods } from '../types';
import Colors from './Colors';

type BackgroundTypes = {
  [key in IMoods]: string;
}

const Backgrounds: BackgroundTypes = {
  "default": `radial-gradient(${Colors.skyTeal},${Colors.superPink},${Colors.black})`,
  "fun": `linear-gradient(${Colors.skyTeal},${Colors.skyTeal},${Colors.skyPink})`,
  "sad": `linear-gradient(${Colors.skyTeal},${Colors.purple},${Colors.skyPink})`,
  "moody": `radial-gradient(${Colors.skyTeal},${Colors.skyPink},${Colors.superPink})`,
  "happy": `linear-gradient(${Colors.skyTeal},${Colors.skyPink},${Colors.skyPink})`,
}

type Props = {
  background: IMoods;
};
const Background: FC<PropsWithChildren<Props>> = ({ children, background }) => {
  const styles = useStyles();
  return (
    <div className={styles.background} style={{flex: 1, backgroundImage: `${Backgrounds[background]}`}}>
      {children}
    </div>
  );
}

const useStyles = makeStyles({
  background: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Background;