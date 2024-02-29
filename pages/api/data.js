const data = Array.from({ length: 100000 }, (_, i) => ({
  id: i,
  name: `Item ${i}`,
}));

export default function handler(_, res) {
  res.json({
    totalItems: data.length,
    data,
  });
}
