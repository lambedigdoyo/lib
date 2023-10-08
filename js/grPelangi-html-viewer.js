//<![CDATA[
(function () {
  function htmlEscape(s) {
    return s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  // this page's own source code
  var grHtml = htmlEscape(
    '<!DOCTYPE html>\n<html>\n' +
    document.documentElement.innerHTML.split('</body>')[0] +
    '\n\n</body>\n<\/html>\n');

  // Highlight the operative parts:
  grHtml = grHtml.replace(
    /&lt;script src[\s\S]*?&gt;&lt;\/script&gt;|&lt;!--\?[\s\S]*?--&gt;|&lt;pre\b[\s\S]*?&lt;\/pre&gt;/g,
    '<span class="operative">$&<\/span>');

  // insert into PRE
  document.getElementById("gr").innerHTML = grHtml;
})();
//]]>