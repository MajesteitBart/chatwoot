import Cookies from 'js-cookie';

import { SDK_CSS } from '../widget/assets/scss/sdk';
/* eslint-disable no-param-reassign */
const bubbleImg =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iODAwIgogICBoZWlnaHQ9IjgwMCIKICAgdmlld0JveD0iMCAwIDIxMS42NjY2NiAyMTEuNjY2NjciCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzE4NTUiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMyAoMjQwNTU0NiwgMjAxOC0wMy0xMSkiCiAgIHNvZGlwb2RpOmRvY25hbWU9ImJ1YmJsZSBjb250ZW50LnN2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczE4NDkiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjAuMzUiCiAgICAgaW5rc2NhcGU6Y3g9IjI5Mi44NTcxNCIKICAgICBpbmtzY2FwZTpjeT0iNTYwIgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIHVuaXRzPSJweCIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAxNyIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMTkxMiIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgLz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGExODUyIj4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYWFnIDEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIgogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTg1LjMzMzMxNykiPgogICAgPHBhdGgKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZTptZWRpdW07bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O29wYWNpdHk6MTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjIuNTYwNjQwODE7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmUiCiAgICAgICBkPSJtIDMwLjg3MDY4NSw5Ni4xMzI2NzMgYyAtMTYuNzY4ODI0LDAgLTMwLjI2NjQ1MjUsMTMuNTAwMzM3IC0zMC4yNjY0NTI1LDMwLjI2OTA5NyB2IDk0LjA2MDUxIGMgMCwxNi43Njg3MiAxMy40OTc2Mjg1LDMwLjI2OTExIDMwLjI2NjQ1MjUsMzAuMjY5MTEgaCA0OC45ODY0MjcgbCAxMi4xODMwNywyNS42ODQzOCBjIDIuOTY0MjI4LDYuNTIxMiA3LjUyMTIzLDkuNzg0ODYgMTMuNjQ2OTA4LDkuNzg0ODYgMy4zNTkzLDAgNi4xMTQxOCwtMC42OTM3MiA4LjI4Nzk0LC0yLjA3NjYyIDIuMTczNDUsLTEuNTgxMDIgNC4xNjE1OCwtNC4xNTM5NSA1LjkzOTk4LC03LjcxMDkgbCAxMi4xODQ0LC0yNS42ODE3MiBoIDQ4LjY5Mzk2IGMgMTYuNzY4NzksMCAzMC4yNjkwNiwtMTMuNTAwMzkgMzAuMjY5MDYsLTMwLjI2OTExIHYgLTk0LjA2MDUxIGMgMCwtMTYuNzY4NzYgLTEzLjUwMDI3LC0zMC4yNjkwOTcgLTMwLjI2OTA2LC0zMC4yNjkwOTcgeiBNIDY2LjU1NTY2MSwxMzYuNTQwMDEgQSAxMy45MTgyNzMsMTYuOTk4NjQgMCAwIDEgODAuNDczODgsMTUzLjUzODA0IDEzLjkxODI3MywxNi45OTg2NCAwIDAgMSA2Ni41NTU2NjEsMTcwLjUzNzQ3IDEzLjkxODI3MywxNi45OTg2NCAwIDAgMSA1Mi42Mzc0MjIsMTUzLjUzODA0IDEzLjkxODI3MywxNi45OTg2NCAwIDAgMSA2Ni41NTU2NjEsMTM2LjU0MDAxIFogbSA3OC41NTUzNDksMCBhIDEzLjkxODI3MywxNi45OTg2NCAwIDAgMSAxMy45MTgyMiwxNi45OTgwMyAxMy45MTgyNzMsMTYuOTk4NjQgMCAwIDEgLTEzLjkxODIyLDE2Ljk5OTQzIDEzLjkxODI3MywxNi45OTg2NCAwIDAgMSAtMTMuOTE4MiwtMTYuOTk5NDMgMTMuOTE4MjczLDE2Ljk5ODY0IDAgMCAxIDEzLjkxODIsLTE2Ljk5ODAzIHogTSA2NS4wMDk3NzIsMTk1LjcwOTY0IEggMTQ2LjY1NjkgYyAxMy45NTc4LDAgMTQuMjYxMDMsMC4zMzMzMSAxNC4yNjEwMyw4LjIzNTAxIDAsNy45MDE3MSAtOC4wNDk1NSwxMS42OTA0OSAtMTQuMjYxMDMsMTQuMjYzNjMgLTI1LjE0MzU0LDEwLjQxNjEgLTU2LjUwMzEzOCwxMC40MTUwMyAtODEuNjQ3MTI4LDAgLTYuMjEyMTM4LC0yLjU3MzEyIC0xNC4yNjM2NjQsLTYuMzYxOTIgLTE0LjI2MzY2NCwtMTQuMjYzNjMgMCwtNy45MDE3IDAuMTc2NjQzLC03Ljk0MzQ4IDE0LjI2MzY2NCwtOC4yMzUwMSB6IgogICAgICAgaWQ9InBhdGg5NTEtOC0zLTQiIC8+CiAgPC9nPgo8L3N2Zz4K';

const body = document.getElementsByTagName('body')[0];
const holder = document.createElement('div');

const bubbleHolder = document.createElement('div');
const chatBubble = document.createElement('div');
const closeBubble = document.createElement('div');

const notification_bubble = document.createElement('span');
const bodyOverFlowStyle = document.body.style.overflow;

function loadCSS() {
  const css = document.createElement('style');
  css.type = 'text/css';
  css.innerHTML = `${SDK_CSS}`;
  document.body.appendChild(css);
}

function wootOn(elm, event, fn) {
  if (document.addEventListener) {
    elm.addEventListener(event, fn, false);
  } else if (document.attachEvent) {
    // <= IE 8 loses scope so need to apply, we add this to object so we
    // can detach later (can't detach anonymous functions)
    // eslint-disable-next-line
    elm[event + fn] = function() {
      // eslint-disable-next-line
      return fn.apply(elm, arguments);
    };
    elm.attachEvent(`on${event}`, elm[event + fn]);
  }
}

function classHelper(classes, action, elm) {
  let search;
  let replace;
  let i;
  let has = false;
  if (classes) {
    // Trim any whitespace
    const classarray = classes.split(/\s+/);
    for (i = 0; i < classarray.length; i += 1) {
      search = new RegExp(`\\b${classarray[i]}\\b`, 'g');
      replace = new RegExp(` *${classarray[i]}\\b`, 'g');
      if (action === 'remove') {
        // eslint-disable-next-line
        elm.className = elm.className.replace(replace, '');
      } else if (action === 'toggle') {
        // eslint-disable-next-line
        elm.className = elm.className.match(search)
          ? elm.className.replace(replace, '')
          : `${elm.className} ${classarray[i]}`;
      } else if (action === 'has') {
        if (elm.className.match(search)) {
          has = true;
          break;
        }
      }
    }
  }
  return has;
}

function addClass(elm, classes) {
  if (classes) {
    elm.className += ` ${classes}`;
  }
}

// Toggle class
function toggleClass(elm, classes) {
  classHelper(classes, 'toggle', elm);
}

const createBubbleIcon = ({ className, src, target }) => {
  target.className = className;
  const bubbleIcon = document.createElement('img');
  bubbleIcon.src = src;
  target.appendChild(bubbleIcon);
  return target;
};

function createBubbleHolder() {
  addClass(bubbleHolder, 'woot--bubble-holder');
  body.appendChild(bubbleHolder);
}

function createNotificationBubble() {
  addClass(notification_bubble, 'woot--notification');
  return notification_bubble;
}

function bubbleClickCallback() {
  toggleClass(chatBubble, 'woot--hide');
  toggleClass(closeBubble, 'woot--hide');
  toggleClass(holder, 'woot--hide');
}

function onClickChatBubble() {
  wootOn(bubbleHolder, 'click', bubbleClickCallback);
}

function disableScroll() {
  document.body.style.overflow = 'hidden';
}

function enableScroll() {
  document.body.style.overflow = bodyOverFlowStyle;
}

const IFrameHelper = {
  createFrame: ({ baseUrl, websiteToken }) => {
    const iframe = document.createElement('iframe');
    const cwCookie = Cookies.get('cw_conversation');
    let widgetUrl = `${baseUrl}/widget?website_token=${websiteToken}`;
    if (cwCookie) {
      widgetUrl = `${widgetUrl}&cw_conversation=${cwCookie}`;
    }
    iframe.src = widgetUrl;

    iframe.id = 'chatwoot_live_chat_widget';
    iframe.style.visibility = 'hidden';
    holder.className = 'woot-widget-holder woot--hide';
    holder.appendChild(iframe);
    body.appendChild(holder);
    IFrameHelper.initPostMessageCommunication();
    IFrameHelper.initLocationListener();
    IFrameHelper.initWindowSizeListener();
  },
  getAppFrame: () => document.getElementById('chatwoot_live_chat_widget'),
  sendMessage: (key, value) => {
    const element = IFrameHelper.getAppFrame();
    element.contentWindow.postMessage(
      `chatwoot-widget:${JSON.stringify({ event: key, ...value })}`,
      '*'
    );
  },
  events: {
    loaded: message => {
      Cookies.set('cw_conversation', message.config.authToken);
      IFrameHelper.sendMessage('config-set', {});
      IFrameHelper.onLoad(message.config.channelConfig);
      IFrameHelper.setCurrentUrl();
      IFrameHelper.toggleCloseButton();
    },
    set_auth_token: message => {
      Cookies.set('cw_conversation', message.authToken);
    },
    toggleBubble: () => {
      bubbleClickCallback();
    },
  },
  initPostMessageCommunication: () => {
    window.onmessage = e => {
      if (
        typeof e.data !== 'string' ||
        e.data.indexOf('chatwoot-widget:') !== 0
      ) {
        return;
      }
      const message = JSON.parse(e.data.replace('chatwoot-widget:', ''));
      if (typeof IFrameHelper.events[message.event] === 'function') {
        IFrameHelper.events[message.event](message);
      }
    };
  },
  initLocationListener: () => {
    window.onhashchange = () => {
      IFrameHelper.setCurrentUrl();
    };
  },
  initWindowSizeListener: () => {
    wootOn(window, 'resize', () => {
      IFrameHelper.toggleCloseButton();
    });
  },
  onLoad: ({ widget_color: widgetColor }) => {
    const iframe = IFrameHelper.getAppFrame();
    iframe.style.visibility = '';
    iframe.setAttribute('id', `chatwoot_live_chat_widget`);
    iframe.onmouseenter = disableScroll;
    iframe.onmouseleave = enableScroll;

    loadCSS();
    createBubbleHolder();

    const chatIcon = createBubbleIcon({
      className: 'woot-widget-bubble',
      src: bubbleImg,
      target: chatBubble,
    });

    const closeIcon = closeBubble;
    closeIcon.className = 'woot-widget-bubble woot--close woot--hide';

    chatIcon.style.background = widgetColor;
    closeIcon.style.background = widgetColor;

    bubbleHolder.appendChild(chatIcon);
    bubbleHolder.appendChild(closeIcon);
    bubbleHolder.appendChild(createNotificationBubble());
    onClickChatBubble();
  },
  setCurrentUrl: () => {
    IFrameHelper.sendMessage('set-current-url', {
      refererURL: window.location.href,
    });
  },
  toggleCloseButton: () => {
    console.log(window.matchMedia('(max-width: 668px)'));
    if (window.matchMedia('(max-width: 668px)').matches) {
      IFrameHelper.sendMessage('toggle-close-button', { showClose: true });
    } else {
      IFrameHelper.sendMessage('toggle-close-button', { showClose: false });
    }
  },
};

function loadIframe({ baseUrl, websiteToken }) {
  IFrameHelper.createFrame({
    baseUrl,
    websiteToken,
  });
}

window.chatwootSDK = {
  run: loadIframe,
};
