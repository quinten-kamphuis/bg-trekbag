export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <small>&copy; {year}. Copyright by Quinten.</small>;
      <p>
        Version <b>1.5</b>
      </p>
    </footer>
  );
}
