export const Letter = ({
  title,
  content,
  author,
}: {
  title: string;
  content: string;
  author: string;
}) => {
  return (
    <div className="border p-8 rounded">
      <h3>{title}</h3>
      <div>{author}</div>
      <p>{content}</p>
    </div>
  );
};
