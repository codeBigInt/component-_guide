'use client'
import React, { useEffect, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { componentUse } from '../data'
import { CheckCheck, Copy, CopyCheck } from 'lucide-react'


const copyToClipboard = (text: string) => {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text).catch(() => {
      fallbackCopyTextToClipboard(text);
    });
  } else {
    fallbackCopyTextToClipboard(text);
  }
};

const fallbackCopyTextToClipboard = (text: string) => {
  const textArea = document.createElement('textarea');
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = '0';
  textArea.style.left = '0';
  textArea.style.position = 'fixed';

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand('copy');
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
};

const Usage = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const [fontSize, setFontSize] = useState<string>('14px');

  useEffect(() => {
    const handleResize = () => {
      setFontSize(window.innerWidth >= 760 ? '14px' : '12px');
    };

    handleResize(); // Set initial font size
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCopy = (content: string, index: number) => {
    setCopiedIndex(index)
    copyToClipboard(content)
    setTimeout(() => setCopiedIndex(null), 1000)
  }

  return (
    <div className='flex  flex-col gap-8 items-center flex-wrap'>
      {
        componentUse.map((item, index) => (
          <div className='w-full' key={index}>
            <header className='flex items-center justify-between p-4'>
              <p>{item.title}</p>
              <button
                onClick={() => handleCopy(item.content, index)}
                className='border border-[#a9a9a9] rounded-lg py-2 px-3 flex items-center justify-center'>
                {copiedIndex === index ? <CheckCheck color='#a9a9a9' size={'16px'} /> : <Copy color='#a9a9a9' size={'16px'} />}
              </button>
            </header>
            <main>
              <SyntaxHighlighter
                lineProps={{ style: { wordBreak: 'break-word', textAlign: 'left' } }}
                wrapLines={true}
                showLineNumbers={true}
                lineNumberStyle={{ textAlign: 'left' }}
                wrapLongLines
                language="jsx"
                customStyle={{
                  width: '100%',
                  height: '100%',
                  padding: '1em',
                  scrollbarWidth: 'none',
                  borderRadius: '10px',
                  overflow: 'auto',
                  fontSize,
                }}
                style={a11yDark}>
                {item.content}
              </SyntaxHighlighter>
            </main>
          </div>
        ))
      }
    </div>
  )
}

export default Usage
