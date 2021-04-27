import React, { useRef } from 'react';

import * as S from './Feed.styles';

export interface FeedProps extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'style'> {
  /** Messages to show on the feed. */
  messages?: string[];
  /** The maximum number of messages to show. */
  messageLimit?: number;
}

const Feed : React.FC<FeedProps> = ({ messages, messageLimit, className, style }) => {
  const feedRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const reversedMessages = messages ? [...messages].slice(-messageLimit!).reverse() : [];

  return (
    <S.Container ref={feedRef} className={className} style={style}>
      { reversedMessages.map((message, i) => <S.Message key={i} >{message}</S.Message>)}
      <S.BottomAnchor ref={bottomRef} />
    </S.Container>
  );
};

Feed.defaultProps = {
  messages: [],
  messageLimit: 40,
};

export default Feed;
