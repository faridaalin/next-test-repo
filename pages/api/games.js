export default async function (req, res) {
  const game = [
    {
      slug: 'fuzion-frenzy',
      name: 'Fuzion Frenzy',
      released: '2001-09-23',
      image:
        'https://media.rawg.io/media/games/074/07414ac9f277c0960a61a8389232dd90.jpg',
      rating: 4.67,
      screenshots: [
        {
          image:
            'https://media.rawg.io/media/games/074/07414ac9f277c0960a61a8389232dd90.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/ac5/ac5643f31d945bd0fa7e10d111067ff8.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/622/622ccf80adf6806ab8579f9fe030eab0.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/26f/26fbe1f0d4370f9cf2da21c0de18c248.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/644/6443a863caf53e8db6aabf43870c2d9d.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/178/178a8f1b6d8a8ac9b66f2b32638747d8.jpg',
        },
        {
          image:
            'https://media.rawg.io/media/screenshots/b13/b13d78e2090d6e60826902e562388510.jpg',
        },
      ],
    },
  ];

  if (req.method === 'GET') res.status(200).send(game);
}
