export default async function get(url = '') {
    const response = await fetch(url, {
      cache: 'no-cache',
      headers: { },
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }