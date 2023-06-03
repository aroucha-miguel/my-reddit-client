import React, {PropsWithChildren} from 'react';
import {Text} from 'react-native';
import calcRelativeDateTime from '../../utils/relativeDateTime';

type RelativeDateTimeProps = PropsWithChildren<{
  created: number;
}>;

function RelativeDateTime({
  created,
}: RelativeDateTimeProps): JSX.Element | null {
  if (created) {
    const relativeCreated = calcRelativeDateTime(created);
    return <Text>{relativeCreated}</Text>;
  }
  return null;
}

export default RelativeDateTime;
