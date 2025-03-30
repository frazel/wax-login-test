module.exports = {
    async headers() {
      return [
        {
          source: "/(.*)",
          headers: [
            {
              key: "Content-Security-Policy",
              value: "default-src * 'self' 'unsafe-eval' 'unsafe-inline' data: blob:;"
            }
          ],
        },
      ];
    },
  };
  