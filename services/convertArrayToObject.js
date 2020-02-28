export default function convertArrayToObject(
  arrayOfObjects = [],
  indexName = 'name',
  indexValue = 'value',
) {
  return arrayOfObjects.reduce(
    (acc, { [indexName]: name, [indexValue]: value }) => ({
      ...acc,
      [name]: value,
    }),
    {},
  );
}
