/**
 * Removes HTML Entities from HTML
 * @param {String} input Raw HTML
 * @return {String} Sanitized HTML
 */
export default function decodeHTMLEntities(input){
   // Wrap the require in check for window
   if (typeof window !== `undefined`) {
      var e = document.createElement('div');
      e.innerHTML = input;
      // handle case of empty input
      return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
   }
}
