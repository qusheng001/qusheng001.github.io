const wechat = document.querySelector('.wechat');
const toggle = wechat.querySelector('.wechat-toggle');
const panel = wechat.querySelector('.wechat-panel');
let pinned = false;

function setOpen(open) {
  toggle.setAttribute('aria-expanded', String(open));
  panel.hidden = !open;
}

wechat.addEventListener('pointerenter', (event) => {
  if (event.pointerType === 'mouse') setOpen(true);
});

wechat.addEventListener('pointerleave', (event) => {
  if (event.pointerType === 'mouse' && !pinned) setOpen(false);
});

toggle.addEventListener('click', () => {
  pinned = !pinned;
  setOpen(pinned);
});

document.addEventListener('click', (event) => {
  if (panel.hidden || wechat.contains(event.target)) return;
  pinned = false;
  setOpen(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape' || panel.hidden) return;
  pinned = false;
  setOpen(false);
});
