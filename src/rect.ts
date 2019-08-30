export default function rect(node: Element) {
  if (node instanceof Element) {
    const nodeRect = node.getBoundingClientRect();

    return {
      top: nodeRect.top,
      bottom: nodeRect.bottom,
      left: nodeRect.left,
      right: nodeRect.right,
      width: nodeRect.width,
      height: nodeRect.height
    };
  } else {
    throw new Error(`${node} is not an element`);
  }
}
