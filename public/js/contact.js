document.getElementById('send-mail').addEventListener('click', async (e) => {
  e.preventDefault();
  const spinnerDiv = document.getElementById('spinner');
  const responseDiv = document.getElementById('response');
  spinnerDiv.style.display = 'block';
  responseDiv.innerText = '';
  const body = {
    email: document.getElementById('email').value,
    content: document.getElementById('content').value,
  };
  const response = await fetch('/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  spinnerDiv.style.display = 'none';
  if (response.status === 200) window.location.href = '/';
  else {
    responseDiv.innerText = 'Server error';
  }
});
