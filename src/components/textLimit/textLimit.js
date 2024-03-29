function textLimit(text, limit) {
  if (text.length > limit) {
    const lastSpaceBeforeLimit = text.lastIndexOf(" ", limit);
    return text.slice(0, lastSpaceBeforeLimit) + "...";
  } else {
    return text;
  }
}

export default textLimit;
