import { a2 as fallback, a8 as ensure_array_like, a as attr, a6 as attr_class, a4 as bind_props, a5 as stringify } from "./renderer.js";
function Carousel($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let slides = fallback($$props["slides"], () => [], true);
    let currentIndex = 0;
    function formatYoutubeUrl(url) {
      if (url.includes("embed")) return url;
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      const videoId = match && match[2].length === 11 ? match[2] : null;
      return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    }
    $$renderer2.push(`<div class="carousel-container svelte-1fw9ipw"><div class="viewport svelte-1fw9ipw"><!--[-->`);
    const each_array = ensure_array_like(slides);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let slide = each_array[i];
      if (i === currentIndex) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="slide svelte-1fw9ipw">`);
        if (slide.type === "video") {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<iframe${attr("src", formatYoutubeUrl(slide.src))}${attr("title", slide.alt || "YouTube video")} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" class="svelte-1fw9ipw"></iframe>`);
        } else {
          $$renderer2.push("<!--[-1-->");
          $$renderer2.push(`<img${attr("src", slide.src)}${attr("alt", slide.alt ?? "Carousel image")} class="svelte-1fw9ipw"/>`);
        }
        $$renderer2.push(`<!--]--></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div> `);
    if (slides.length > 1) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<button class="nav-btn prev svelte-1fw9ipw" aria-label="Previous slide">&lt;</button> <button class="nav-btn next svelte-1fw9ipw" aria-label="Next slide">></button>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (slides.length > 1) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="indicators svelte-1fw9ipw"><!--[-->`);
      const each_array_1 = ensure_array_like(slides);
      for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
        each_array_1[i];
        $$renderer2.push(`<button${attr_class("dot svelte-1fw9ipw", void 0, { "active": i === currentIndex })}${attr("aria-label", `Go to slide ${stringify(i + 1)}`)}></button>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { slides });
  });
}
export {
  Carousel as C
};
