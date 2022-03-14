function copyds()
{
    navigator.clipboard.writeText('dispersion#7886')
  .then(() => {
    alert("Copied to clipboard!")
  })
  .catch(err => {
    console.log('Something went wrong', err);
  });
}
