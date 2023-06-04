import {useEffect} from 'react';
import Toast from 'react-native-root-toast';

function useErrorFeedback(errorMessage: string, cb: () => void) {
  useEffect(() => {
    if (errorMessage) {
      const errorToast = Toast.show(errorMessage, {
        onHidden: () => {
          if (cb && typeof cb === 'function') {
            cb();
          }
        },
      });
      setTimeout(function () {
        Toast.hide(errorToast);
      }, 2000);
    }
  }, [errorMessage, cb]);
}

export default useErrorFeedback;
