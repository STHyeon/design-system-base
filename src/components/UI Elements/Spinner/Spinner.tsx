import React from 'react';
import * as S from './StyledSpinner';

export const Spinner = ({ ...props }) => <S.SpinnerWrapper aria-label="Content is loading..." {...props} />;
