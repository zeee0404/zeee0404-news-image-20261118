# zeee0404-news-image-20261118

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/zeee0404/zeee0404-news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/zeee0404/zeee0404-news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

One image that sums up the world's news of **Wednesday, 18 November 2026** — a newspaper front page drawn in code. The lead story is the widening Gulf war: Iranian drones hit a US radar base in Bahrain, American jets struck a missile site on Qeshm Island, and Kuwait's defences fired at dawn. Four more stories follow: APEC opening in Shenzhen, the Quad meeting in Manila, the Kerch Bridge in ruins, and North Korea's missile launch — plus a round-up of the day's other news (Spain's general strike, Cyclone Akvan, the Siberia plane crash, Estonia's border closure, Voyager 1).

## How it is made

`entry.png` (1024×1024, 222 KB) was drawn programmatically from the day's reporting (Reuters, Al Jazeera, AFP, AP) with a canvas renderer — flat vector art and typeset headlines, no photographs, so the image is fully self-contained and reproducible. `main.ts` is a standard-library-only Node program that copies `entry.png` to `/output/entry.png`, exactly as the competition's starter does. The image names its day, covers six stories across regions and fields, and reads on its own.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entry for [make.fun](https://make.fun/bounty/news-image-20261118) · news-image-20261118</sub>
