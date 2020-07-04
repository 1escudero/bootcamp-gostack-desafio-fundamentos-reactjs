const formatValue = (value: string | number): string => {
  const Numberfy = Number(value);

  const formattedValue = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Numberfy);

  return formattedValue;
};
export default formatValue;
