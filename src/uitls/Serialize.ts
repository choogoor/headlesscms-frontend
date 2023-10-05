import escapeHTML from 'escape-html';
import React from 'react';
import { Text } from 'slate';

interface Node {
  text: string;
  bold?: boolean;
  code?: boolean;
  italic?: boolean;
  type?: string;
  children: Node[];
  url?: string;
}

const serialize = (children: Node[]): React.ReactNode => {
  return children.map((node, i) => {
    if (Text.isText(node)) {
      const text = escapeHTML(node.text);
      const formattedText: React.ReactNode[] = [];
    
      if (node.bold) {
        formattedText.push(React.createElement('strong', { key: `${i}-bold` }, text));
      }
    
      if (node.code) {
        formattedText.push(React.createElement('code', { key: `${i}-code` }, text));
      }
    
      if (node.italic) {
        formattedText.push(React.createElement('em', { key: `${i}-italic` }, text));
      }
    
      if (formattedText.length === 0) {
        return React.createElement(React.Fragment, { key: i }, text);
      }
    
      return React.createElement(React.Fragment, { key: i }, formattedText);
    }

    if (!node) {
      return null;
    }

    switch ((node as Node).type) {
      case 'h1':
        return React.createElement('h1', { key: i }, serialize((node as Node).children));
      case 'blockquote':
        return React.createElement('blockquote', { key: i }, serialize((node as Node).children));
      case 'ul':
        return React.createElement('ul', { key: i }, serialize((node as Node).children));
      case 'ol':
        return React.createElement('ol', { key: i }, serialize((node as Node).children));
      case 'li':
        return React.createElement('li', { key: i }, serialize((node as Node).children));
      case 'link':
        return React.createElement('a', { href: escapeHTML((node as Node).url), key: i }, serialize((node as Node).children));

      default:
        return React.createElement('p', { key: i }, serialize((node as Node).children));
    }
  });
};

export default serialize;
