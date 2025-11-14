export function EnglishSentence(props) {
  const sentence = props?.sentence || "I go to the supermarket.";
  return <h1 style={{ color: '#243E54' }}> {sentence} </h1>;
}