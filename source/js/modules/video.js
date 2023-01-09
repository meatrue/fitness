const IFRAME_URL = 'https://www.youtube.com/embed/';
const VIDEO_QUERY = '?rel=0&showinfo=0&autoplay=1';
const NOJS_CLASS_ENDING = '--nojs';

const videoIdItems = ['9TZXsZItgdw'];


const generateURL = (id) => `${IFRAME_URL}${id}${VIDEO_QUERY}`;

const createIframe = (id, mediaClassName) => {
  const iframeElement = document.createElement('iframe');

  iframeElement.setAttribute('allowfullscreen', '');
  iframeElement.setAttribute('allow', 'autoplay');
  iframeElement.setAttribute('src', generateURL(id));
  iframeElement.classList.add(mediaClassName);

  return iframeElement;
};

const enableButton = (video) => {
  const mainClass = video.classList[0];
  video.classList.remove(`${mainClass}${NOJS_CLASS_ENDING}`);
};

const setupVideo = (video, id) => {
  const linkElement = video.querySelector('[data-video-link]');
  const buttonElement = video.querySelector('[data-video-button]');
  const mediaElement = video.querySelector('[data-media]');
  const mediaClassName = mediaElement.classList[0];

  video.addEventListener('click', () => {
    const iframeElement = createIframe(id, mediaClassName);

    linkElement.remove();
    buttonElement.remove();
    video.appendChild(iframeElement);
  });

  linkElement.removeAttribute('href');
  enableButton(video);
};

const initVideos = () => {
  const videos = document.querySelectorAll('[data-video]');

  if (!videos || !videos.length) {
    return;
  }

  videos.forEach((video, index) => setupVideo(video, videoIdItems[index]));
};

export {initVideos};
