module.exports = (targetOptions, indexHtml) => {
    const i = indexHtml.indexOf('</body>');
    console.log(targetOptions);
    const config = `<!--<span>env: ${targetOptions.configuration}</span>`;
    return `${indexHtml.slice(0, i)}
              ${config}
              ${indexHtml.slice(i)}`;
  };