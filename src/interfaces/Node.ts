interface TextNode {
  text: string;
  bold?: boolean;
  code?: boolean;
  italic?: boolean;
}

interface HeadingNode {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: Node[];
}

interface BlockquoteNode {
  type: 'blockquote';
  children: Node[];
}

interface ListNode {
  type: 'ul' | 'ol';
  children: Node[];
}

interface ListItemNode {
  type: 'li';
  children: Node[];
}

interface LinkNode {
  type: 'link';
  url: string;
  children: Node[];
}

export type Node = TextNode | HeadingNode | BlockquoteNode | ListNode | ListItemNode | LinkNode;