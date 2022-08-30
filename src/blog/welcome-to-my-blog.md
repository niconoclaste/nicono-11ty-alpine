---
layout: layout.njk
title: Welcome to my blog
titleJa: 僕のブログへようこそう！
tags: blog
---


# Welcome to my blog !






  <strong x-text="$store.language.selected"></strong>

  <template x-if="$store.language.selected === 'en'">
    <p>GREAT !</p>
  </template>
  <template x-if="$store.language.selected === 'ja'">
    <p>素晴らしい！！！</p>
  </template>
