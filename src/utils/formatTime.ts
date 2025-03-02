export function formatTime(timestamp: number): string {
  const now = Math.floor(Date.now() / 1000);
  const diff = now - timestamp;

  if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hr ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)} d ago`;
  if (diff < 2629746) return `${Math.floor(diff / 604800)} wk ago`;
  if (diff < 31556952) return `${Math.floor(diff / 2629746)} mo ago`;
  return `${Math.floor(diff / 31556952)} yr ago`;
}

