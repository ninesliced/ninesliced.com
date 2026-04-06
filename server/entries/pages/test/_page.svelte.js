import "clsx";
import { C as Carousel } from "../../../chunks/Carousel.js";
function _page($$renderer) {
  const mySlides = [
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      alt: "Landscape"
    },
    {
      type: "video",
      src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  ];
  Carousel($$renderer, { slides: mySlides });
}
export {
  _page as default
};
