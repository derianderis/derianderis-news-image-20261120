# derianderis-news-image-20261120

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/derianderis/derianderis-news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/derianderis/derianderis-news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

One image that sums up the world's news of Friday 20 November 2026, drawn as a newspaper front page. The date is printed on the image itself, so the picture stands alone: a reader can tell which day it sums up without any caption.

## The day in the image

- **Kyiv:** Russia launches a massive overnight missile and drone attack on Ukraine, hours after Putin met Trump and Xi in Shenzhen. At least five people are killed; three bridges over the Dnipro are hit and power is cut.
- **Shenzhen:** Trump, Xi and Putin sign a four-point peace declaration, but agree no ceasefire for Ukraine.
- **Berlin:** Europe rejects a new Yalta-style carve-up. Allies reaffirm 70bn euros in military aid for 2026 and a 90bn euro EU loan for Ukraine.
- **The Gulf:** Houthi forces strike four targets in Saudi Arabia and warn investors to leave, deepening energy fears.
- **Odisha:** Cyclone Akvan makes landfall near Gopalpur on India's east coast, after more than 300,000 people were evacuated.
- **Tokyo:** Markets tumble on AI doubts — the Nikkei falls 4.8% and the S&P 500 2% as Anthropic's debut fails to lift tech shares.
- **Kerch:** Free ferries start across the Kerch Strait after Ukrainian strikes shut the Crimea bridge.

## How it works

`main.ts` (Node 22) copies `entry.png` to the output directory as `entry.png`:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`entry.png` (1024×1024, PNG) was drawn with Python and Pillow from the script `../draw.py`; every story on it was checked against news reports published on 20 November 2026.

## Entry

Built for the make.fun bounty [Sum up 20 November's world news in one image](https://make.fun/bounty/news-image-20261120) — $250 in prizes.

Made with [make.fun](https://make.fun/?ref=ztgpgx6c).
