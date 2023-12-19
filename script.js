function runCode() {
    const htmlCode = document.getElementById('htmlCode').value;
    const cssCode = document.getElementById('cssCode').value;
    const jsCode = document.getElementById('jsCode').value;
  
    const output = document.getElementById('output').contentWindow.document;
  
    output.open();
    output.write(`
      <html>
      <head>
        <style>${cssCode}</style>
      </head>
      <body>${htmlCode}</body>
      <script>${jsCode}</script>
      </html>
    `);
    output.close();
  }
  
  function copyCode() {
    const outputContent = document.getElementById('output').contentWindow.document.documentElement.innerHTML;
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = outputContent;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    alert('Code copied!👍');
  }
  