type Listener = () => void;
const listeners = new Set<Listener>();
let queued = false;
function flush() { queued = false; listeners.forEach(listener => listener()); }
function queue() { if (!queued) { queued = true; requestAnimationFrame(flush); } }
export function observeScrollFrame(listener: Listener) {
  if (!listeners.size) { window.addEventListener("scroll", queue, { passive: true }); window.addEventListener("resize", queue); }
  listeners.add(listener);
  listener();
  return () => { listeners.delete(listener); if (!listeners.size) { window.removeEventListener("scroll", queue); window.removeEventListener("resize", queue); } };
}
