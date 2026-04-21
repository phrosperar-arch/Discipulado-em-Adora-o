import React from 'react';
import { VerseQuote } from '../components/ui/VerseQuote';
import { HighlightBox } from '../components/ui/HighlightBox';
import { ActionBox } from '../components/ui/ActionBox';
import { bookData as part1Data } from './bookDataPart1';
import { bookData as part2Data } from './bookDataPart2';

export interface Chapter {
  id: number;
  title: string;
  content: React.ReactNode;
}

export const bookData: Chapter[] = [...part1Data, ...part2Data];
