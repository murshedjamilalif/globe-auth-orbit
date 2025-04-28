"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

interface TerminalProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Terminal({
  children,
  className,
  ...props
}: TerminalProps) {
  return (
    <div
      className={cn(
        "font-mono text-sm rounded-lg border border-gray-700 bg-black p-4 max-w-full overflow-x-auto",
        className
      )}
      {...props}
    >
      <div className="flex gap-1 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>

      <div className="space-y-2 text-white">{children}</div>
    </div>
  );
}

interface AnimatedSpanProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
  className?: string;
  children: React.ReactNode;
}

export function AnimatedSpan({
  delay = 0,
  className,
  children,
  ...props
}: AnimatedSpanProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setMounted(true);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div
      className={cn("transition-opacity", mounted ? "opacity-100" : "opacity-0", className)}
      {...props}
    >
      {children}
    </div>
  );
}

interface TypingAnimationProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
  className?: string;
  children: string;
  typingSpeed?: number;
}

export function TypingAnimation({
  delay = 0,
  className,
  children,
  typingSpeed = 50,
  ...props
}: TypingAnimationProps) {
  const [visibleChars, setVisibleChars] = useState(0);
  const [startTyping, setStartTyping] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setStartTyping(true);
    }, delay);

    return () => clearTimeout(delayTimeout);
  }, [delay]);

  useEffect(() => {
    if (startTyping) {
      intervalRef.current = setInterval(() => {
        setVisibleChars((prev) => {
          if (prev < children.length) {
            return prev + 1;
          } else {
            if (intervalRef.current) clearInterval(intervalRef.current);
            return prev;
          }
        });
      }, typingSpeed);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startTyping, children.length, typingSpeed]);

  return (
    <div className={cn("", className)} {...props}>
      {startTyping ? children.substring(0, visibleChars) : ""}
      {startTyping && visibleChars < children.length && (
        <span className="animate-blink">|</span>
      )}
    </div>
  );
}
