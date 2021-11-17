module.exports = {
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Link',
            value: '<https://next-netlify.karanjthakkar.com/_next/static/css/fe06b478a6c36e0e.css>; rel=preload; as=style, <https://next-netlify.karanjthakkar.com/_next/static/css/c8da7e85168b947f.css>; rel=preload; as=style, <https://next-netlify.karanjthakkar.com/_next/static/chunks/webpack-514908bffb652963.js>; rel=preload; as=script, <https://next-netlify.karanjthakkar.com/_next/static/chunks/framework-91d7f78b5b4003c8.js>; rel=preload; as=script, <https://next-netlify.karanjthakkar.com/_next/static/chunks/main-be90e00a3c0a73d4.js>; rel=preload; as=script, <https://next-netlify.karanjthakkar.com/_next/static/chunks/pages/_app-fb7ecd67e368caea.js>; rel=preload; as=script, <https://next-netlify.karanjthakkar.com/_next/static/chunks/pages/index-f8e60cc504276baa.js>; rel=preload; as=script',
          },
        ],
      },
    ]
  },
}