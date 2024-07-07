export const pandaConfigPre = `<pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="0"><code><span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> { defineConfig } </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;@pandacss/dev&#39;</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> { createPreset } </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;@park-ui/panda-preset&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">default</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">defineConfig</span><span style="color: var(--shiki-color-text)">({</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  preflight</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">true</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  presets</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-string-expression)">&#39;@pandacss/preset-base&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-function)">createPreset</span><span style="color: var(--shiki-color-text)">({</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      accentColor</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;__ACCENT_COLOR__&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      grayColor</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;__GRAY_COLOR__&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      borderRadius</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;__BORDER_RADIUS__&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    })</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  ]</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  include</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> [</span><span style="color: var(--shiki-token-string-expression)">&#39;./src/**/*.{js,jsx,ts,tsx,astro,vue}&#39;</span><span style="color: var(--shiki-color-text)">]</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  jsxFramework</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;__JS_FRAMEWORK__&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  outdir</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;styled-system&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">})</span></span></code></pre>`

export const pandaConfig = `import { defineConfig } from '@pandacss/dev'
import { createPreset } from '@park-ui/panda-preset'

export default defineConfig({
  preflight: true,
  presets: [
    '@pandacss/preset-base',
    createPreset({
      accentColor: '__ACCENT_COLOR__',
      grayColor: '__GRAY_COLOR__',
      borderRadius: '__BORDER_RADIUS__',
    }),
  ],
  include: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  jsxFramework: '__JS_FRAMEWORK__',
  outdir: 'styled-system',
})
`
