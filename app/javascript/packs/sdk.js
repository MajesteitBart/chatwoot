import Cookies from 'js-cookie';

import { SDK_CSS } from '../widget/assets/scss/sdk';
/* eslint-disable no-param-reassign */
const bubbleImg =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iNTAiCiAgIGhlaWdodD0iNTAiCiAgIHZpZXdCb3g9IjAgMCAxMy4yMjkxNjcgMTMuMjI5MTY3IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmcyNTk1IgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjMgKDI0MDU1NDYsIDIwMTgtMDMtMTEpIgogICBzb2RpcG9kaTpkb2NuYW1lPSJjb252ZXJ0Y2hhdC5zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMyNTg5IiAvPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSIwLjM1IgogICAgIGlua3NjYXBlOmN4PSItNDc4LjExNDM0IgogICAgIGlua3NjYXBlOmN5PSI4OS44MDQ5NjQiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgZml0LW1hcmdpbi10b3A9IjAiCiAgICAgZml0LW1hcmdpbi1sZWZ0PSIwIgogICAgIGZpdC1tYXJnaW4tcmlnaHQ9IjAiCiAgICAgZml0LW1hcmdpbi1ib3R0b209IjAiCiAgICAgdW5pdHM9InB4IgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICAgIGlua3NjYXBlOndpbmRvdy14PSIxOTEyIgogICAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTI1OTIiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxhYWcgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyLjU1NzYzMywtMTU5LjM2NTA2KSI+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjEuNzQ2NzM2NzYiCiAgICAgICBkPSJtIDI0LjQ2MDE2NiwxNjAuMDA1OTEgYyAtMS4wNTQwNzQsMCAtMS45MDI1MzMsMC44NDg2MSAtMS45MDI1MzMsMS45MDI2OCB2IDUuOTEyNTEgYyAwLDEuMDU0MDcgMC44NDg0NTksMS45MDI2OCAxLjkwMjUzMywxLjkwMjY4IGggMy4wNzkxNzEgbCAwLjc2NTg5OSwxLjYxNDU2IGMgMC4xODYzMzEsMC40MDk5MSAwLjQ3Mjc2NCwwLjYxNTA0IDAuODU3ODE5LDAuNjE1MDQgMC4yMTExNjMsMCAwLjM4NDM0NSwtMC4wNDM2IDAuNTIwOTgyLC0wLjEzMDU1IDAuMTM2NjIyLC0wLjA5OTQgMC4yNjE1NDEsLTAuMjYxMDYgMC4zNzMzMywtMC40ODQ2NCBsIDAuNzY1OSwtMS42MTQ0MSBoIDMuMDYwODQ3IGMgMS4wNTQwNzQsMCAxLjkwMjY4NiwtMC44NDg2MSAxLjkwMjY4NiwtMS45MDI2OCB2IC01LjkxMjUxIGMgMCwtMS4wNTQwNyAtMC44NDg2MTIsLTEuOTAyNjggLTEuOTAyNjg2LC0xLjkwMjY4IHogbSAwLjk5OTA1OSwyLjYzOTQyIGggNy40MjU5ODQgYyAwLjQ5NjY5NSwwIDAuODk2NjAyLDAuMzk5OSAwLjg5NjYwMiwwLjg5NjYgMCwwLjQ5NjY5IC0wLjM5OTkwNywwLjg5NjYgLTAuODk2NjAyLDAuODk2NiBoIC03LjQyNTk4NCBjIC0wLjQ5NjY5NiwwIC0wLjg5NjYwMywtMC4zOTk5MSAtMC44OTY2MDMsLTAuODk2NiAwLC0wLjQ5NjcgMC4zOTk5MDcsLTAuODk2NiAwLjg5NjYwMywtMC44OTY2IHogbSAxLjE0Njg2MywzLjI0MDg3IGggNS4xMzIyNTcgYyAwLjQ5NjY5NSwwIDAuODk2NDUsMC4zOTk5IDAuODk2NDUsMC44OTY2IDAsMC40OTY2OSAtMC4zOTk3NTUsMC44OTY2IC0wLjg5NjQ1LDAuODk2NiBoIC01LjEzMjI1NyBjIC0wLjQ5NjY5NiwwIC0wLjg5NjYwMywtMC4zOTk5MSAtMC44OTY2MDMsLTAuODk2NiAwLC0wLjQ5NjcgMC4zOTk5MDcsLTAuODk2NiAwLjg5NjYwMywtMC44OTY2IHoiCiAgICAgICBpZD0icGF0aDk1MS04IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICA8L2c+Cjwvc3ZnPgo=';

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
