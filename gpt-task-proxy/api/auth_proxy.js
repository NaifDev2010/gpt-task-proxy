export default async function handler(req, res) {
  const apiUrl = "https://numanadmin.com/gpt_task/api/auth_user.php";

  try {
    const apiRes = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer GPT_TASK_SECRET',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const data = await apiRes.json();
    res.status(apiRes.status).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Proxy Error', detail: error.toString() });
  }
}
