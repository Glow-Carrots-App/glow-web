export default function chunkArray(snapshot, count) {
  let batches = [];
  for (let i = 0; i < snapshot.length; i += count) {
    const chunk = snapshot.slice(i, i + count);
    batches.push(chunk);
  }
  return batches;
}
