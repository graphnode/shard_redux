import React, { useEffect, useRef, useState } from 'react';

import * as S from './Feed.styles';

export interface FeedProps extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'style'> {
  /** Messages to show on the feed. */
  messages?: string[];
  /** Automatically scroll to the bottom. */
  autoScroll?: boolean;
}

const Feed : React.FC<FeedProps> = ({ messages, autoScroll, className, style }) => {
  const feedRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const [atBottom, setAtBottom] = useState(false);

  const scrollToBottom = (behavior : 'smooth' | 'auto' = 'auto') => {
    bottomRef.current?.scrollIntoView({ behavior });
  };

  useEffect(() => {
    if (autoScroll) {
      document.fonts.ready.then(() => scrollToBottom());
      setAtBottom(true);
    }
  }, []);

  useEffect(() => {
    if (autoScroll && atBottom)
      scrollToBottom('smooth');
  }, [messages]);

  const handleScroll = (e : React.UIEvent<HTMLDivElement>) => {
    const el = e.target as HTMLDivElement;
    setAtBottom(el.scrollTop + el.clientHeight >= el.scrollHeight);
  };

  return (
    <S.Container ref={feedRef} onScroll={handleScroll} className={className} style={style}>
      { messages?.map((message, i) => <S.Message key={i} >{message}</S.Message>)}
      <S.BottomAnchor ref={bottomRef} />
    </S.Container>
  );
};

Feed.defaultProps = {
  messages: [],
  autoScroll: true,
};

export default Feed;
