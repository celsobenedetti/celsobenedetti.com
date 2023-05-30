/**
 * Sets the anchor of the current URL.
 * @param {string} anchor - The anchor to set, no need to include '#'.
 * @returns {void} void
 * @example
 * setAnchor('about-section');
 */
function setAnchor(anchor: string): void {
  window.history.replaceState({}, "", `#${anchor}`);
}

export default setAnchor;
