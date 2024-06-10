export default function validateInput(data) {
  const { category, amount, content } = data;
  const error = {};

  if (!category.length) {
    error.category = true;
  }

  if (amount.length === 0 || amount <= 0 || amount % 1 !== 0 || amount > 1e10) {
    error.amount = true;
  }

  if (!content.length) {
    error.content = true;
  }

  return error;
}
