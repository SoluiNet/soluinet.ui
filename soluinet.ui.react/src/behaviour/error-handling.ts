/**
 * The error handling.
 */
class ErrorHandling
{
  /**
   * Handle an error.
   * @param {Event | string} event The error event or message.
   * @param {string} source The source (URL).
   * @param {number} lineNo The line number.
   * @param {number} columnNo The column number.
   * @param {Error} error The error object.
   * @returns {boolean} A value indicating whether the error alert should be suppressed.
   */
  handleError(
    event: Event | string,
    source?: string,
    lineNo?: number,
    columnNo?: number,
    error?: Error,
  ): boolean
  {
    let additionalInfo = !columnNo ? "" : `\ncolumn: ${columnNo}`;
    additionalInfo += !error ? "" : `\nerror: ${columnNo}`;

    const errorInfo = `🛑 Error: ${event}\nurl: ${source}\nline: ${lineNo}${additionalInfo}`;

    console.debug(errorInfo);

    return true;
  }

  /**
   * Register the error handling.
   */
  registerErrorHandling()
  {
    window.removeEventListener("error", this.handleError);

    window.addEventListener("error", this.handleError);
  }
}

export default ErrorHandling;