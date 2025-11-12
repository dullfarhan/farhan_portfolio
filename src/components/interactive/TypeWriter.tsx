import React, { useState, useEffect, useRef } from 'react';

interface TypeWriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export default function TypeWriter({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  className = '',
}: TypeWriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (texts.length === 0) return;
    
    const currentText = texts[currentIndex];
    if (!currentText) return;

    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentText) {
      // Text is complete, pause before deleting
      setIsComplete(true);
      timeout = setTimeout(() => {
        setIsDeleting(true);
        setIsComplete(false);
      }, pauseDuration);
    } else if (isDeleting && displayText === '') {
      // Finished deleting, move to next text
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    } else {
      // Type or delete character
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timeout = setTimeout(() => {
        setDisplayText((prev) => {
          if (isDeleting) {
            const newText = prev.length > 0 ? prev.substring(0, prev.length - 1) : '';
            return newText;
          } else {
            // Ensure we don't exceed the current text length
            const nextLength = Math.min(prev.length + 1, currentText.length);
            return currentText.substring(0, nextLength);
          }
        });
      }, speed);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [displayText, currentIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span 
      ref={containerRef}
      className={className}
      style={{
        display: 'inline-block',
        minWidth: 'fit-content',
        whiteSpace: 'nowrap',
        overflow: 'visible',
      }}
    >
      {displayText}
      <span className="animate-pulse" aria-hidden="true">|</span>
    </span>
  );
}


